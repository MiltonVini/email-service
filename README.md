# Email Service

Este repositório contém um serviço de envio de e-mails transacionais. O serviço é utilizado para enviar e-mails automatizados.

## Funcionalidades

- Envio de e-mails usando a plataforma [Resend](https://resend.com).
- Suporte para e-mails HTML e texto.
- Configuração simples via variáveis de ambiente.

## Tecnologias

- **Node.js** - Backend do serviço.
- **Resend API** - Plataforma utilizada para envio dos e-mails.
- **dotenv** - Para carregar as variáveis de ambiente do arquivo `.env`.

## Pré-requisitos

- Node.js (versão 16 ou superior).
- Conta no [Resend](https://resend.com) e chave de API.
- Arquivo `.env` configurado com a chave da API do Resend.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/MiltonVini/email-service.

2. Instale as dependências:
    ```bash
    npm install

3. Copie o arquivo de exemplo .env.example:
    ```bash
     cp.env.example .env

4. Preenche as variáveis de ambiente:
    ```bash
    RESEND_API_KEY=
    

## Como Usar

Este serviço expõe uma rota `POST /emails` para enviar e-mails. Você pode fazer uma requisição para essa rota com os seguintes parâmetros no corpo da requisição:

### Exemplo de uso (com **Postman** ou **cURL**)

#### URL: 
`POST /emails`

#### Corpo da requisição (JSON):
```json
{
  "to": "destinatario@dominio.com",
  "subject": "Rastreamento de Pedido",
  "message": "<h2>Seu pedido foi enviado!</h2><p>O código de rastreio é: xxxxxxxxxx</p>"
}
```

#### Exemplo com cURL:
```bash
curl -X POST http://localhost:3000/emails \
  -H "Content-Type: application/json" \
  -d '{
    "to": "destinatario@dominio.com",
    "subject": "Rastreamento de Pedido",
    "message": "<h2>Seu pedido foi enviado!</h2><p>O código de rastreio é: xxxxxxxxxx</p>"
  }'
```



