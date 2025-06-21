# LEVE-SAUDE API de Agendamento Médico (Serverless)

API desenvolvida com Node.js, TypeScript e Serverless Framework para gerenciamento de agendamentos médicos.

## Configuração do Ambiente

### Pré-requisitos

- Node.js (v18 ou superior)
- npm (vem junto com o Node.js)
- Serverless Framework CLI

  npm install -g serverless

## Instalação

1. Clone este repositório:

   git clone https://github.com/fabriciosena10/leve-saude.git

2. Acesse a pasta do projeto e instale as dependências:

   cd leve-saude
   npm install

## Rodando o Projeto Localmente (Serverless Offline)

Este modo simula o API Gateway e as funções Lambda localmente.

### Iniciar o servidor offline

```bash
npm start
```

Se tudo estiver certo, você verá algo assim no terminal:

Server ready: http://localhost:3000

Endpoints disponíveis:

GET | http://localhost:3000/dev/agendas
POST | http://localhost:3000/dev/agendamento

## Testando os Endpoints

### GET /agendas

- Descrição: Retorna a lista de médicos e seus horários disponíveis.
- Requisição:

  - Método: GET
  - URL: http://localhost:3000/dev/agendas

- Resposta de exemplo:

```json
{
  "medicos": [
    {
      "id": 1,
      "nome": "Dr. João Silva",
      "especialidade": "Cardiologista",
      "horarios_disponiveis": [
        "2025-06-25 09:00",
        "2025-06-25 10:00",
        "2025-06-25 11:00"
      ]
    },
    {
      "id": 2,
      "nome": "Dra. Maria Souza",
      "especialidade": "Dermatologista",
      "horarios_disponiveis": ["2025-06-26 14:00", "2025-06-26 15:00"]
    }
  ]
}
```

### POST /agendamento

- Descrição: Cria um novo agendamento.
- Requisição:

  - Método: POST
  - URL: http://localhost:3000/dev/agendamento

- Body (exemplo válido):

```json
{
  "agendamento": {
    "medico": "Dr. João Silva",
    "paciente": "Carlos Almeida",
    "data_horario": "2025-06-25 09:00"
  }
}
```

- Resposta de sucesso (201):

```json
{
  "mensagem": "Agendamento realizado com sucesso",
  "agendamento": {
    "medico": "Dr. João Silva",
    "paciente": "Carlos Almeida",
    "data_horario": "2025-06-25 09:00"
  }
}
```

### Validação de Erro

- Body inválido (exemplo):

```json
{
  "agendamento": {
    "paciente": "Ana Paula",
    "data_horario": "2025-06-26 14:00"
  }
}
```

- Resposta de erro (400):

```json
{
  "message": "Erro de validação no payload",
  "errors": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "undefined",
      "path": ["agendamento", "medico"],
      "message": "O campo medico é obrigatório."
    }
  ]
}
```

## Testando com Serverless Invoke (sem API Gateway)

Este modo executa diretamente a função Lambda, sem expor via HTTP.

### Invocando getAgendas

```bash
npx sls invoke local --function getAgendas
```

Resposta esperada: JSON com statusCode 200 e o body contendo os dados dos médicos.

### Invocando createAgendamento

```bash
npx sls invoke local --function createAgendamento --data '{"agendamento": {"medico": "Dra. Maria Souza", "paciente": "Ana Furtado", "data_horario": "2025-06-26 14:00"}}'
```

Resposta esperada: JSON com statusCode 201 e os detalhes do agendamento criado.

## Observações

- Utilize ferramentas como Postman ou Insomnia para testar os endpoints.
- Ao usar invoke local, o teste é feito diretamente na função, sem passar pela camada HTTP (API Gateway).
- Ideal para testar regras de negócio isoladas.

## Tecnologias e Ferramentas

- Node.js
- TypeScript
- Serverless Framework
- AWS Lambda (simulado localmente)
- Jest (testes unitários)

## Deploy na AWS

Para publicar sua API na nuvem da AWS, o Serverless Framework automatiza todo o processo de criação da infraestrutura.

### Pré-requisitos

Antes de fazer o deploy, você precisa ter suas credenciais da AWS configuradas no seu ambiente local. A maneira mais comum e recomendada é através do AWS CLI.

1.  **Instale o AWS CLI:** Siga o [guia oficial de instalação](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
2.  **Configure suas credenciais:** Abra o terminal e rode o comando abaixo, inserindo seu `AWS Access Key ID` e `Secret Access Key` quando solicitado.
    ```bash
    aws configure
    ```

### Comando de Deploy

Com suas credenciais configuradas, basta executar o seguinte comando na raiz do projeto:

```bash
npx sls deploy --stage dev
```
