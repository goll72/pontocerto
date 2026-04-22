PontoCerto
==========

PontoCerto é um sistema ERP para fábricas de costura que
permite realizar rastreamento de pedidos, guardar e consultar
um repositório de documentos, incluindo documentos relevantes
para certificações como o ABVTEX, além de permitir emissão de
NF-e (eventualmente).

## Desenvolvimento

Para abrir um shell com o ambiente de desenvolvimento configurado
e com todas as dependências instaladas, instale o `nix` e rode:

```sh
nix develop
```

> [!NOTE]
>
> A primeira execução desse comando pode demorar um pouco.

Caso você tenha acabado de instalar o `nix` ou ainda não use flakes,
será necessário habilitar o suporte a flakes:

```sh
echo "experimental-features = nix-command flakes" >> ${XDG_CONFIG_HOME:-"$HOME/.config"}/nix/nix.conf
```

Ao editar o código, certifique-se de que as seguintes
ferramentas de desenvolvimento (servidores LSP e linters,
que são instalados automaticamente) estão configuradas
adequadamente no seu editor de texto:

 - `biome`
 - `typescript`
 - `typescript-plugin-css-modules`[^1]
 - `some-sass-language-server`
 - `nixd`
 - `nixfmt`
 - `ansible-language-server`

Para depurar eventuais bugs na parte reativa da UI,
instale a extensão `Solid Devtools` no seu navegador.

Opcionalmente, configure o seu editor de texto para
usar o `superhtml` e o `vscode-html-languageserver`
como servidores LSP para arquivos HTML.

[^1]: Configure o seu editor para usar o `typescript`
desse projeto/_workspace_ em vez de usar uma versão
_built-in_, para garantir que o plugin irá funcionar.

## Testando localmente

Para testar o projeto localmente, rode:

```sh
npm install
npm run serve
```

Um servidor HTTP local será iniciado, podendo ser
acessado através da URL `http://localhost:3000`.

Para testar o banco de dados e a _backend_
localmente usando _containers_, rode:

```sh
podman compose up --build
```

Serão iniciados dois _containers_:

 - `pontocerto-db`: banco de dados (PostgreSQL, porta 5432)
 - `pontocerto-backend`: servidor _backend_ (Node.js, porta 8080)

Ao alterar o esquema da base de dados, rode o seguinte comando para
que o banco seja recriado na próxima execução do _container_:

```sh
podman image rm pontocerto-db
```

## Compilação e _deploy_

Para compilar e fazer o _deploy_ do projeto, rode:

```sh
npm run build
ansible-playbook ansible/playbooks/all.yml
```
