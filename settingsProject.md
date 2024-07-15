## 🚀 Configuração do projeto

```bash
# Clone o repositório
$ git clone https://github.com/hxmoura/casa-moura.git

# Acesse a pasta do projeto
$ cd casa-moura

# Instale as dependências
$ npm i

# Na raiz do projeto, renomeie o arquivo .env.example para .env
# Acesse o arquivo .env e cole as credenciais geradas pelo Firebase, seguindo o modelo abaixo:
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAnJHOc7pC840Lt2x7PvUGygnyF1qLiTqo
NEXT_PUBLIC_FIREBASE_PROJECT_ID=casamoura-e5191

# Crie dados automaticamente em seu banco de dados seguindo a estrutura de dados do projeto.
$ npm run db

# Inicie o projeto e acesse pela url http://localhost:3000
$ npm run dev
```