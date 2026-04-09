PontoCerto
==========

PontoCerto é um sistema ERP para fábricas de costura que
permite realizar rastreamento de pedidos, guardar e consultar
um repositório de documentos, incluindo documentos relevantes
para certificações como o ABVTEX, além de permitir emissão de
NF-e (eventualmente).

## Como usar

Instale as dependências:

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

## Compilação e _deploy_

...
