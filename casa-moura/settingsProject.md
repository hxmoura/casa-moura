# 🚀 Configuração do projeto

### Requisitos
Possuir o [Git](https://git-scm.com), [VSCode](https://code.visualstudio.com) e [NodeJS](https://nodejs.org). Todos em sua última versão instalados em sua maquina.

### Passo a passo

```bash
# Clone o repositório
$ git clone https://github.com/hxmoura/casa-moura.git

# Acesse a pasta do projeto
$ cd casa-moura

# Instale as dependências
$ npm i

# Na raiz do projeto, renomeie o arquivo .env.example para .env
# Acesse o arquivo .env e cole as credenciais do Firebase e do MercadoPago, seguindo o modelo:
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAnJHOc7pC840Lt2x7PvUGygnyF1qLiTqo
NEXT_PUBLIC_FIREBASE_PROJECT_ID=casamoura-e5191

NEXT_PUBLIC_MP_CLIENT_KEY=TEST-32cd1fb6-45c7-4b63-9a5a-9b7835a863cf
MP_SERVER_KEY=TEST-6157572211822851-010814-e8053ebc99ee81ae754a1aad687d7aa5-161640604

# Para que o projeto possa criptografar dados sensíveis como CPF, é necessário gerar uma key única com 32 bytes.
# Essa key deve ser setada no arquivo .env seguindo o formato:
CRYPTO_KEY=58d570860cbf07cd8081a25182277033854974c5f00eb72464a76373d25c557b

# Crie dados automaticamente em seu banco de dados seguindo a estrutura de dados do projeto.
$ npm run db

# Inicie o projeto e acesse pela url http://localhost:3000
$ npm run dev
```