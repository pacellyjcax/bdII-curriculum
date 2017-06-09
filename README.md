# bdII-curriculum

Aplicação para Disciplina de BD II.
Professor Adriano Santos

[TOC]


## Pré-requisitos
gru
- [Git](https://git-scm.com/)
- [Node.js and NPM](nodejs.org) >= v0.12.0
- [Grunt](http://gruntjs.com/) (`npm i -g grunt-cli`)
- [Mysql](https://www.mysql.com/)

## Dependências

1. Rode `npm i`.

2. Rode `npm i mysql`.

## Configurando o Banco

1. Altere a variável 'MYSQL_URI' do arquivo `/server/config/local.env.js` para
sua url de conexão com o banco de dados.

## Iniciando o Serviço

1. Rode `grunt serve`.

## Acessando o serviço
Todos os tipos de requisição dos endpoints estão habilitados e funcionando, no caminho padrão

    http://localhost:9000/

Pessoas
-------
get: /api/pessoas/
get: /api/pessoas/:id
post: /api/pessoas/
put: /api/pessoas/:id
patch: /api/pessoas/:id
delete: /api/pessoas/:id

Curriculos
----------
get: /api/curriculos/
get: /api/curriculos/:id
post: /api/curriculos/
put: /api/curriculos/:id
patch: /api/curriculos/:id
delete: /api/curriculos/:id

Experiências
------------
get: /api/experiencias/
get: /api/experiencias/:id
post: /api/experiencias/
put: /api/experiencias/:id
patch: /api/experiencias/:id
delete: /api/experiencias/:id

Tipos de Experiências
---------------------
get: /api/tipos_experiencias/
get: /api/tipos_experiencias/:id
post: /api/tipos_experiencias/
put: /api/tipos_experiencias/:id
patch: /api/tipos_experiencias/:id
delete: /api/tipos_experiencias/:id
