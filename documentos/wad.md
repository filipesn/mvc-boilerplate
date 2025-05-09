## Introdução

O diagrama tem as seguintes entidades:

-   Usuário: Paciente ou profissional de saúde, definido por perfil_id
    
-   Perfil: Tipo de usuário 
    
-   Questionário: Respostas enviadas pelo paciente
    
-   Foto da Ferida: Imagem enviada pelo paciente
    
-   Mensagem: Mensagens entre o paciente e o médico
    
-   Alerta de Emergência: Acionado caso o paciente não envie atualizações no tempo desejado.
    
-   Vídeo Explicativo: Conteúdo que explica a ferida
    
-   Visualização de Vídeo: Registra se o paciente viu o vídeo.
    

As entidades possuem chaves primárias e estrangeiras para garantir a integridade e o acompanhamento contínuo.
```mermaid
erDiagram
    "Usuário" ||--|| "Perfil" : possui
    "Usuário" ||--o{ "Questionário" : responde
    "Usuário" ||--o{ "Foto da Ferida" : envia
    "Usuário" ||--o{ "Mensagem" : envia
    "Usuário" ||--o{ "Alerta de Emergência" : dispara
    "Usuário" ||--o{ "Visualização de Vídeo" : assiste
    "Vídeo Explicativo" ||--o{ "Visualização de Vídeo" : contém

    "Perfil" {
        int id PK
        string tipo
    }

    "Usuário" {
        int id PK
        string nome
        date data_nascimento
        string contato
        int perfil_id FK
    }

    "Questionário" {
        int id PK
        date data_resposta
        text respostas
        int usuario_id FK
    }

    "Foto da Ferida" {
        int id PK
        date data_envio
        string url
        boolean com_regua
        int usuario_id FK
    }

    "Mensagem" {
        int id PK
        date data_envio
        text conteudo
        int usuario_id FK
    }

    "Alerta de Emergência" {
        int id PK
        date data
        string motivo
        int usuario_id FK
    }

    "Vídeo Explicativo" {
        int id PK
        string titulo
        string url
        string tipo_ferida
    }

    "Visualização de Vídeo" {
        int id PK
        int usuario_id FK
        int video_id FK
        date data_visualizacao
    }

```