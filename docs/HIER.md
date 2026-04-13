# Estrutura de diretórios

A seguinte estrutura de diretórios foi adotada:

```
ansible
├── collections
├── files
│   └── foo
├── inventory.ini
├── playbooks
│   ├── foo.yml
│   ├── bar.yml
│   └── baz.yml
├── requirements.yml
└── roles

src
├── assets
│   ├── image.png
│   └── static
│       └── favicon.ico
├── components
│   ├── FooBar.tsx
│   └── styles
│       └── FooBar.module.scss
├── page
│   ├── nested
│   │   ├── index.html
│   │   └── index.tsx
│   ├── index.html
│   └── index.tsx
├── globals.d.ts
├── index.html
├── index.tsx
├── prelude.scss
└── styles.scss
```

O diretório `ansible` contém os arquivos relacionados ao _deploy_ do projeto:

 - `files`: arquivos estáticos/templates
 - `collections`: coleções de _roles_ e _playbooks_ sendo usados
 - `playbooks`: todos os _playbooks_ usados, separados por tipo/escopo.
   - `all.yml`: importa todos os demais _playbooks_ na ordem correta
     para atingir o estado desejado.

Já `src` corresponde ao código fonte do _website_ propriamente dito, com os seguintes
subdiretórios:

 - `components`: onde se localizam os componentes TSX sendo usados
   - `styles`: arquivos do tipo "CSS module"/"SCSS module" usados para estilizar os componentes
 - `globals.d.ts`: declarações de tipos globais para Typescript
 - `index.html` e `index.tsx`: podem estar aninhados; cada instância representa um
   _endpoint_ HTTP que pode ser acessado pelo usuário (MPA).

       src/index.html -> /
       src/page/index.html -> /page/
       ...
        
 - `prelude.scss`: agrupa variáveis e _overrides_ SCSS, deve ser importado em um arquivo `.module.scss`
   para que seja possível acessar essas variáveis
 - `styles.scss`: definições de estilo globais, incluindo _import_ do Bootstrap
