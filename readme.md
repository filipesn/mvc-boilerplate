## Sistema

Sistema web para o acompanhamento remoto de pacientes com feridas, em parceria com a USP. Um paciente ira tirar fotos e explicar a condiçao de sua ferida, com o médico fornecendo vídeos explicativos e o que deve ser feito para o tratamento.

### Funcionalidades Principais

* Envio de fotos da ferid
* Questionários sobre a saúde
* Envio de mensagens sobre o estado da saúde
* Acionamento de alerta de emergência
* Vídeos explicativos



### Como Executar


Faça um clone desse repositório
Crie seu .env com os dados corretos para conectar ao seu servidor
Faça a migraçao colocando no terminal:
npm run init-db
Inicie colocando no terminal:
node server.js
O servidor estara em http://localhost:3000
Você pode testar os endpoints usando ferramentas como Postman ou Insomnia.

### Endpoints
| Método | Rota              | Descrição               |
| ------ | ----------------- | ----------------------- |
| POST   | /api/tarefas      | Criar uma nova tarefa   |
| GET    | /api/tarefas      | Listar todas as tarefas |
| PUT    | /api/tarefas/\:id | Atualizar uma tarefa    |
| DELETE | /api/tarefas/\:id | Excluir uma tarefa      |

