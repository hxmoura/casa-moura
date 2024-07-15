## 🔥 Configuração do Firebase

### Criação do projeto

- Acesse o site do [Firebase](https://firebase.google.com/products/firestore) e clique em "Começar".
![Firebase image](imgs/firebaseproject1.png)

- Adicione um novo projeto e escolha um nome para ele.
![Firebase image](imgs/firebaseproject2.png)

- Desative o Google Analytics (não será necessário aqui), e crie o projeto.
![Firebase image](imgs/firebaseproject3.png)

### Criação do banco de dados

- Com o projeto criado, no menu lateral selecione "Firestore Database" e crie um banco de dados.
![Firebase image](imgs/firebasedata1.png)

- No poup-up, selecione apenas a localização do banco de dados, recomendamos o datacenter em São Paulo.
![Firebase image](imgs/firebasedata2.png)

- No passo seguinte, marque a opção "Iniciar no modo de produção", e confirme a criação do banco de dados.
![Firebase image](imgs/firebasedata3.png)

- Conceda as permissões de gravação e leitura dos dados. No menu acima, clique em "Regras", troque `false` por `true` e publique as alterações.
**Importante destacar que fazendo isso, você concede permissão de leitura e gravação de dados para qualquer pessoa que tiver acesso ao banco de dados, por isso tenha cuidado!**
![Firebase image](imgs/firebasedata4.png)

### Autenticação

- Agora precisamos configurar o Firebase Authentication, para lidar com o cadastro e login de usuários no projeto. No menu lateral, acesse a opção "Authentication", e clique no botão "Vamos começar".
![Firebase image](imgs/firebaseauth1.png)

- Em "Métodos de login", selecione o provedor "E-mail/Senha".
![Firebase image](imgs/firebaseauth2.png)

- Ative a primeira opção "E-mail/Senha" e clique em salvar.
![Firebase image](imgs/firebaseauth3.png)

### Pegue suas credenciais

- No menu lateral em "Visão geral do projeto", clique no icone `</>` para configurar o Firebase para o projeto.
![Firebase image](imgs/firebaseweb1.png)

- Informe um nome para sua aplicação web e clique em "Registrar app".
![Firebase image](imgs/firebaseweb2.png)

- Você receberá as credenciais para conectar o projeto ao Firebase. Usaremos apenas `apiKey` e `projectId`, salve essas informações em um local seguro, pois usaremos futuramente. Agora seu Firebase está pronto para a [configuração do projeto](settingsProject.md).
![Firebase image](imgs/firebaseweb3.png)