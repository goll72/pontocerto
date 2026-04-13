PontoCerto
==========

PontoCerto é um sistema ERP para fábricas de costura que
permite realizar rastreamento de pedidos, guardar e consultar
um repositório de documentos, incluindo documentos relevantes
para certificações como o ABVTEX, além de permitir emissão de
NF-e (eventualmente).

## Desenvolvimento

Instale as dependências:

 - `git-lfs`
 - `uv`
 - `node`
 - `npm`

Para configurar o ambiente de desenvolvimento, rode:

```sh
uv sync --locked
. ./.venv/bin/activate
ansible-galaxy install -r ansible/requirements.yml

npm ci
```

Ao editar o código, certifique-se de que as seguintes
ferramentas de desenvolvimento (servidores LSP e linters,
que são instalados automaticamente ao rodar `npm ci`)
estão configuradas adequadamente no seu editor de texto:

 - `biome`
 - `typescript`
 - `typescript-plugin-css-modules`[^1]
 - `some-sass-language-server`

Para depurar eventuais bugs na parte reativa da UI,
instale a extensão `Solid Devtools` no seu navegador.

Opcionalmente, configure o seu editor de texto para
usar o `superhtml` e o `vscode-html-languageserver`
como servidores LSP para arquivos HTML.

[^1]: Configure o seu editor para usar o `typescript`
desse projeto/_workspace_ em vez de usar uma versão
_built-in_, para garantir que o _plugin_ irá funcionar.

## Compilação e _deploy_

Para compilar e fazer o _deploy_ do projeto, rode:

```sh
npm run build
ansible-playbook ansible/playbooks/all.yml
```
