# Projeto MVC Boilerplate

## Descrição

Este projeto é um boilerplate para aplicações Node.js seguindo a arquitetura MVC, com integração a banco de dados PostgreSQL (compatível com Supabase), views EJS, rotas RESTful e frontend dinâmico via Fetch API.

---

## Como Executar

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Configure o arquivo `.env`**
   - Copie `.env.example` para `.env` e preencha com os dados do seu banco (Supabase ou local):

     ```
     DB_HOST=seu_host
     DB_USER=seu_usuario
     DB_PASSWORD=sua_senha
     DB_NAME=seu_banco
     DB_PORT=5432
     DB_SSL=true
     ```

3. **Instale as dependências**
   ```sh
   npm install
   ```

4. **Execute as migrations**
   - No Supabase, rode o conteúdo de `init.sql` no SQL Editor.
   - Ou, se usar banco local, rode o SQL do arquivo `init.sql` no seu cliente PostgreSQL.

5. **(Opcional) Popule o banco com dados de exemplo**
   - O arquivo `init.sql` já inclui inserts de exemplo.

6. **Inicie o servidor**
   ```sh
   npm start
   ```
   ou
   ```sh
   node server.js
   ```

7. **Acesse a aplicação**
   - O servidor estará em [http://localhost:3000](http://localhost:3000)

---

## Estrutura de Pastas

```
/config
  db.js
/controllers
/models
/routes
/services
/validators
/public
  /css
  /js
/views
  /layout
  /pages
  tarefas.ejs
  formTarefa.ejs
init.sql
.env.example
.env
```

---

## Endpoints

### Tarefas

| Método | Rota              | Descrição               |
| ------ | ----------------- | ----------------------- |
| POST   | /api/tarefas      | Criar uma nova tarefa   |
| GET    | /api/tarefas      | Listar todas as tarefas |
| PUT    | /api/tarefas/:id  | Atualizar uma tarefa    |
| DELETE | /api/tarefas/:id  | Excluir uma tarefa      |

### Usuários

| Método | Rota         | Descrição                |
| ------ | ------------ | ------------------------ |
| GET    | /users       | Listar todos os usuários |
| GET    | /users/:id   | Buscar usuário por ID    |
| POST   | /users       | Criar novo usuário       |
| PUT    | /users/:id   | Atualizar usuário        |
| DELETE | /users/:id   | Excluir usuário          |

---

## Observações Importantes

- **Migrations:** Certifique-se de rodar o SQL de criação das tabelas `users` e `tarefas` do arquivo `init.sql` antes de iniciar a aplicação.
- **Validação:** Os dados enviados para criação/edição de usuários e tarefas são validados com [Joi](https://joi.dev/).
- **Variáveis de ambiente:** Use sempre `DB_NAME` para o nome do banco em `.env` e `config/db.js`.
- **Scripts JS:** Os arquivos JS em `/public/js` são carregados apenas nas páginas necessárias.
- **Estilização:** O CSS principal está em `/public/css/style.css`.

---

## Testando

Você pode testar os endpoints usando ferramentas como Postman, Insomnia ou diretamente pelo frontend da aplicação.

---

## Video

https://drive.google.com/file/d/13eiaLg3mmSEPk7n_5ZYe5L1aUVvPZTih/view?usp=sharing

---

## Licença

MIT

