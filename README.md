<p align='center'> 
	<h1 align='center'>NLW Spacetime</h1>
	<img src="https://i.imgur.com/AlaXUk0.png" alt="Imagem do layout do site de memórias na versão para computador" />
</p>

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

Front-End:
- [React]
- [Next]
- [TailwindCSS]
- [Typescript]
- [DayJS]
- [JsCookie]
- [Axios]
- [JWT-decode]
- [classnames]
- [Lucide-react]

Back-End:
- [Fastify]
- [@Fastify/cors]
- [@Fastify/jwt]
- [@Fastify/multipart]
- [@Fastify/static]
- [axios]
- [zod]

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo

Front-End:
```bash
$ git clone https://github.com/Kauacnok/nlw-spacetime.git

$ cd web
$ npm i (para instalar as dependências)
$ npm run dev

```

Nas váriaveis ambiente, você vai precisar criar um token e obter o valor do GITHUB_CLIENT_ID e dentro do .env.local você botará como NEXT_PUBLIC_GITHUB_CLIENT_ID e o valor do GITHUB_CLIENT_ID

Back-End:
```bash
$ git clone https://github.com/Kauacnok/nlw-spacetime.git

$ cd server
$ npm i (para instalar as dependências)
$ npm run dev

```

Para criar o banco de dados no seu computador, rode o comando:
```bash
$ npx prisma migrate dev
```

Nas váriaveis ambiente, você vai precisar criar um token e obter o valor do GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET e colocar os respectivos valores dentro do .env


## 💻 Projeto

Projeto de um site que armazena e compartilha memórias de um usuário desenvolvido no evento NLW Spacetime da Rocketseat 

Feedbacks sempre são bem vindos :)

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo (é necessário ter uma conta do Figma):

- [Acessar o layout no Figma](https://www.figma.com/community/file/1240070456276424762/C%C3%A1psula-do-tempo-%E2%80%A2-Trilha-Ignite)

## 📖 O que eu aprendi

Acredito que a grande novidade que aprendi nessa NLW para mim, foi ter aprendido sobre o JWT (JSON Web Token), aprendi como transmitir/armazenar de forma segura esses dados para acessa-los no Front-End e Back-End foi muito massa usar o JWT para integrar uma conta do Github ao nosso projeto usando a ideia do OAuth. 

E algo mais simples, porém não menos importante, eu não fazia ideia que dava pra fazer um blur apenas com CSS e ficasse tão bom quanto usar uma imagem.

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/Kauacnok/nlw-spacetime/blob/main/license) para mais detalhes.
