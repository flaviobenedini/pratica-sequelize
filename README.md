# pratica-sequelize

Prática de Sequelize (migrations, seeders, associations, etc), Express e Node.js

## Iniciando o projeto

```sh
express server --view=ejs
```

```sh
cd server && npm install --save sequelize mysql2 && npm install -D nodemon sequelize-cli
```

**package.json**

```json
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },

``

Instalar todas as dependências com `npm install` .

Rodar o servidor com `npm run dev` .

Com o mysql rodando, no Workbank, executar o seguinte comando:

```sql
CREATE DATABASE pratica_sequelize;
```

Criar o arquivo .sequelizerc com o seguinte conteudo:

```json
const path = require('path')

module.exports = {
  config: path.resolve('./database/config', 'config.json'),
  'models-path': path.resolve('./database/models'),
  'seeders-path': path.resolve('./database/seeders'),
  'migrations-path': path.resolve('./database/migrations'),
}
```

