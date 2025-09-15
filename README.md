<div align="center">
    <img src="assets/banner.png"/>
</div>

## 📝 Sobre o projeto

Casa Moura é um e-commerce de materiais de construção. Você pode procurar pelo produto desejado e verificar as informações e avaliações de cada produto. Adicione no carrinho os produtos escolhidos e conclua sua compra com segurança.

🔗 [Acesse a demo](https://casamoura.vercel.app/)

#### Principais funcionalidades

- Pesquisa e filtragem de produtos
- Página que exibe informações de um produto específico
- Carrinho de compras que permite adicionar, alterar ou remover produtos
- Cadastro e login de usuários
- Checkout para a realização e finalização do pedido
- Página de confirmação de compra

## 💻 Tecnologias usadas

- ⚡ **Next.js** - Estruturação do código backend + frontend
- 📝 **TypeScript** - Tipagem estática
- 🎨 **TailwindCSS** - Estilização dos componentes
- ☁️ **Firebase** - Armazenamento dos dados (Firestore) + Autenticação (Firebase Auth)
- 💳 **Mercado Pago** - Checkout transparente (sem redirecionar a página)

## 🎨 Layout

Guia de estilo e prototipação das telas estão disponíveis no [Figma](https://www.figma.com/design/VfI83my6VZsLKM4GZJkBhO/Casa-Moura)

#### Telas criadas:

- 🏠 Página inicial
- 🔍 Listagem de produtos por pesquisa
- 📦 Produto específico
- 🔑 Autenticação (Cadastro/login)
- 🛒 Carrinho de compras (Popup + página)
- 💳 Checkout multi-step (Pagamento e dados pessoais)
- ✅ Confirmação de compra
- ❌ Produto não encontrado
- ✨ **Extra:** Skeleton Screen + Modais

## ⚡ Melhorias futuras

- 🔄 Migrar para um banco de dados relacional
- 🔍 Migrar pesquisa, paginação e filtros para o backend
- 👤 Permitir que o usuário visualize o status e o histórico de pedidos
- 🛠️ Criar um painel administrativo simplificado para gerenciar pedidos

## 🔀 Fluxo da Aplicação

O fluxo principal segue a jornada do usuário em um e-commerce:

1. **🔎 Navegação e busca de produtos**

   - O usuário acessa a página inicial e visualiza os produtos.
   - É possível filtrar ou pesquisar por nome.

2. **🛒 Carrinho de compras**

   - O usuário adiciona produtos ao carrinho.
   - O carrinho é persistido (mesmo após recarregar a página).
   - É possível aumentar/diminuir quantidade ou remover itens.

3. **🔑 Autenticação**

   - Para finalizar a compra, o usuário precisa estar autenticado.
   - O login/cadastro é feito via Firebase Authentication (email/senha).
   - Após autenticação, o usuário retorna ao fluxo de checkout.

4. **💳 Checkout e pagamento**

   - No checkout, o sistema calcula o total.
   - Integração com o **Mercado Pago Checkout Transparente** processa o pagamento sem redirecionar o usuário.

5. **✅ Confirmação de pedido**
   - O pedido é registrado no **Firestore**.
   - O usuário recebe feedback visual do status do pagamento (aprovado, pendente ou recusado).

## 📂 Estrutura do projeto

```
casa-moura/
├── src/
│   ├── app/             # Páginas
│   │   └── api/         # Rotas api
│   ├── components/      # Componentes reutilizáveis
│   ├── contexts/        # Estados globais
│   ├── db/              # Banco de dados/mocks
│   ├── hooks/           # Custom hooks
│   ├── types/           # Tipagens
│   └── utils/           # Código reutilizável
├── package.json
└── tailwind.config.js
```

## ⚙️ Configuração do projeto

#### Pré-requisitos

- [Firebase](https://firebase.google.com/products/firestore)

  - Criar conta
  - Habilitar Firestore
  - Ativar autenticação por e-mail/senha

- [Mercado Pago Developers](https://www.mercadopago.com.br/developers/pt)

  - Criar conta
  - Criar aplicação
  - Obter as credenciais `Public key` e `Access Token`

- Código
  - Instalar [git](https://git-scm.com/)
  - Instalar [Node.js](https://nodejs.org/pt) v.22 ou superior

#### Setup

Clone o repositório

```
git clone https://github.com/hxmoura/casa-moura.git
```

Acesse o projeto

```
cd casa-moura
```

Baixe as dependências

```
npm install
```

Crie um arquivo .env e coloque suas informações

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id

NEXT_PUBLIC_MP_CLIENT_KEY=your_mp_public_key
MP_SERVER_KEY=your_mp_access_token

CRYPTO_KEY=your_crypto_key_32_bytes
```

Adicione os dados iniciais no Firebase (opcional)

```
npm run db
```

Execute o projeto

```
npm run dev
```

--
**Projeto idealizado e desenvolvido por @hxmoura. 🚀**
