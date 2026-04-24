{
  description = "ERP para fábricas de costura";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";

    treefmt-nix.url = "github:numtide/treefmt-nix";
    treefmt-nix.inputs.nixpkgs.follows = "nixpkgs";

    lefthook-nix.url = "github:sudosubin/lefthook.nix";
    lefthook-nix.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = ["x86_64-linux"];

      imports = [
        inputs.treefmt-nix.flakeModule
      ];

      perSystem = {
        config,
        pkgs,
        lib,
        system,
        ...
      }: let
        lefthook = inputs.lefthook-nix.lib.${system}.run {
          src = inputs.self;
          config = {
            pre-commit.commands = {
              trivy.run = "${pkgs.trivy}/bin/trivy fs --skip-db-update .";
              treefmt.run = "${config.treefmt.build.wrapper}/bin/treefmt --fail-on-change --no-cache {staged_files}";
            };
          };
        };
      in {
        treefmt = {
          projectRootFile = "flake.nix";

          programs.alejandra.enable = true;

          programs.sqlfluff = {
            enable = true;
            dialect = "postgres";
          };

          programs.sqlfluff-lint.enable = true;

          programs.biome = {
            enable = true;
            package = pkgs.biome;
            validate = {
              enable = true;
              schema = pkgs.fetchurl {
                url = "https://biomejs.dev/schemas/2.4.11/schema.json";
                hash = "sha256-BitcVQlHZSxze2YNjWJWWEwS/XYUiB0tKxmxN2GCo2Y=";
              };
            };
            settings = lib.importJSON ./biome.json;
          };

          programs.yamlfmt = {
            enable = true;
            settings = {
              formatter = {
                type = "basic";
                line_ending = "lf";
                retain_line_breaks_single = true;
                drop_merge_tag = true;
              };
            };
          };
        };

        formatter = config.treefmt.build.wrapper;

        checks = {
          formatting = config.treefmt.build.check inputs.self;
          hooks = lefthook;
        };

        devShells.default = pkgs.mkShell {
          packages = [
            # Inclui o npm, que pode ser empacotado
            # separadamente em algumas distribuições
            pkgs.nodejs_22

            # Deploy e configuração do servidor
            pkgs.dotenvx
            pkgs.ansible
            pkgs.rsync

            # Containers para teste local
            pkgs.podman
            pkgs.podman-compose

            # Ferramentas de análise estática de código (SAST),
            # incluindo verificação de vulnerabilidades e _secret scanning_.
            pkgs.trivy

            # Gerenciamento de migrações no banco de dados
            pkgs.sqldef

            # LSPs, linters e formatters
            pkgs.ansible-lint
            pkgs.ansible-language-server
            pkgs.biome
            pkgs.nixd
            pkgs.sqlfluff
            config.treefmt.build.wrapper
          ];

          shellHook = ''
            cd $(git rev-parse --show-toplevel)

            ansible-galaxy install -r ansible/requirements.yml &

            {
              npm install
              npm install --prefix backend
            } &

            podman compose build &

            trivy fs --download-db-only &

            wait

            ${lefthook.shellHook}
          '';
        };
      };
    };
}
