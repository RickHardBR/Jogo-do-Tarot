<h1 id="topo">Tarot - Rodada 02 de cases </h1>
  
Endereço surge: **[Jogo do Tarot](http://tarot-case2-joy.surge.sh/)**

  * [Indice](#funciona)
      * [O Desafio](#desafio)
      * [Instruções](#instrucoes)
      * [Pré-requisitos](#pre)
      * [Diferenciais](#diferenciais)
      * [Dúvidas](#duvidas)
      * [Requisitos não funcionais](#naofuncionais)
      * [Extras](#extras)
  * [Imagens](#imagens)
      * [Estrura de Pastas e Arquivos](#estrutura)
      * [Página Desktop Inicial](#inicial)
      * [Página Desktop dos Cards](#cards)
      * [Página Desktop de Cards Embaralhado](#embaralhado)
      * [Página Desktop Popup do Card escolhido](#escolhido)
      * [Página Mobile inicial - Responsive](#inicialresp)
      * [Página Mobile Cards - Responsive](#cardsresp)
      * [Página Mobile de Cards Embaralhado - Responsive](#cardsembaralhado)
      * [Página Mobile Popup do Card escolhido - Responsive](#cardescolhido)
   * [Tecnologias usadas](#tecs)
  * [Como executar na sua máquina](#executar)
      * [Conhecendo o cli do react](#conhecendo)
      * [Instalando o cli do react](#instalando)
         * [Instalando com Yarn](#instyarn)
         * [Instalando com Npm](#instnpm)
      * [Criando a app com o cli do React](#criando)
         * [Criando com create-react-app](#createreact)
         * [criando com Npx](#criandocomnpx)
      * [Subindo App](#subindoapp)
         * [Subindo com Yarn](#subindocomyarn)
         * [Subindo com npm](#subindocomnpm)
  * [Getting Started with Create React App](#create)

***

<h2>Case 02 - front-end-challenge - Jogo de Tarot </h2>
<h4>Desafio para os futuros front-end's do

[@Personare](https://github.com/Personare)</h4>
<h4>Enunciado: 🇧🇷</h4>
<h4>Linguagens/Frameworks: React </h4>
<h4>Dificuldade: 💡</h4>
<h4>Tarefa: Jogo de tarot.</h4>

[Personare/front-end-challenge](https://github.com/Personare/front-end-challenge)

<h4 align="right"><a href="#topo">Topo</a></h4>

***

<h2 id="desafio">O DESAFIO</h2>

***
> Desafio para os futuros front-end's do [@Personare](https://github.com/Personare)

## Introdução

A nossa Product Owner pensou em um produto fantástico para ser desenvolvido, e um dos desafios é criação de um jogo de Tarot.

<br>

**Então, essa é a sua missão!**

Criar um jogo de Tarot, permitindo o sorteio de uma carta.

E as especificações são:

- Tela de apresentação exibindo todas as cartas com seu conteúdo visível, e com um botão para iniciar o jogo.
- Ao clicar no botão, as cartas deverão ser viradas - escondendo o conteúdo - e embaralhadas.
- Permitir que o usuário selecione apenas uma carta, clicando na mesma.
- Apresentar a carta selecionada, o nome da carta e uma descrição. (a descrição pode ser um lorem ipsum)

OBS: As imagens e nomes das cartas estão listadas no arquivo [`tarot.json`](tarot.json), esse arquivo deve ser consumido via _http request_. A propriedade `image` de cada carta deve ser concatenada com a propriedade `imagesUrl`, para obter o endereço final da imagem. Utilize o valor da propriedade `imageBackCard` para obter a imagem do fundo da carta.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="instrucoes">Instruções</h2>

1. Efetue o **fork** deste repositório e crie um branch com o seu nome. (ex: caue-alves).
2. Após finalizar o desafio, crie um **Pull Request**.
3. Aguarde algum contribuidor realizar o code review.


<h2 id="pre">Pré-requisitos</h2>

- Aplicação feita em React
- Possuir testes
- Gerar versão de produção
- Criar micro commits ou commits por features
	- Detalhar nos comentários dos commits as decisões tomadas.


<h2 id="diferenciais">Diferenciais</h2>

- Boa documentação
- Testes de componentes isolados

<h2 id="duvidas">Dúvidas</h2>

Se surgir alguma dúvida, consulte as [perguntas feitas anteriormente](https://github.com/Personare/front-end-challenge/labels/question).

Caso não encontre a sua resposta, sinta-se à vontade para [abrir uma issue](https://github.com/Personare/front-end-challenge/issues/new) =]

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="naofuncionais">Requisitos não Funcionais</h2>

***

 🎥 O app deverá ser criado usando [React](https://reactjs.org/)

 Na raiz do projeto, será necessário incluir um arquivo README.md com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.

 🎥 O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge

 🎥 O app deverá ser responsivo

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="extras">Extras</h2>

***
📒 Documentação: explicação para construir o app localmente, histórico e workflow de git

***

<h2 id="imagens">Imagens</h2>

<h3 align="center" id = "estrutura">Estrutura de Pastas e Arquivos</h3>

![image](https://user-images.githubusercontent.com/89301596/182503895-38379b8b-bc91-4a74-a484-f70e12ad950a.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "inicial">Página Desktop Inicial</h3>

![image](https://user-images.githubusercontent.com/89301596/182503974-10662c18-012a-4c30-bdb1-99ae586ea11b.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "cards">Página Desktop dos Cards</h3>

![image](https://user-images.githubusercontent.com/89301596/182504240-996f3f37-a26a-4a19-b5b4-26591f15d66d.png)

<h4 align="right"><a href="#topo">Topo</a></h4>


<h3 align="center" id="embaralhado">Página Desktop de Cards Embaralhado</h3>

![image](https://user-images.githubusercontent.com/89301596/182504386-7bce348b-730d-41ba-bc3b-bb5caec2ebb0.png)


<h4 align="right"><a href="#topo">Topo</a></h4>


<h3 align="center" id="escolhido">Página Desktop Popup do Card escolhido</h3>

![image](https://user-images.githubusercontent.com/89301596/182506458-55b5732c-77ce-484d-ae58-5afc73f272f6.png)

<h4 align="right"><a href="#topo">Topo</a></h4>


<h3 align="center" id="inicialresp">Página Mobile inicial - Responsive</h3>

<p align="center" float="center"><img src="https://user-images.githubusercontent.com/89301596/182506691-1e61accc-b540-4b31-ba2d-c9d004080811.png"></p>

<h4 align="right"><a href="#topo">Topo</a></h4>


<h3 align="center" id="cardsresp">Página Mobile Cards - Responsive</h3>

<p align="center" float="center"><img src="https://user-images.githubusercontent.com/89301596/182506856-530048b5-07d2-4829-bc90-42da3b823851.png"></p>

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id="cardsembaralhado">Página Mobile de Cards Embaralhado - Responsive</h3>

<p align="center" float="center"><img src="https://user-images.githubusercontent.com/89301596/182507262-28e9651c-1843-40a7-a076-5e0f6596caa2.png"></p>

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id="cardescolhido">Página Mobile Popup do Card escolhido - Responsive</h3>

<p align="center" float="center"><img src="https://user-images.githubusercontent.com/89301596/182507456-3f71b385-ae7f-43fc-bbb0-47955de549cf.png"></p>


<h4 align="right"><a href="#topo">Topo</a></h4>

***

<h2 id="tecs">As seguintes tecnologias/ferramentas foram usadas na construção do projeto:</h2>

📌<a href="https://reactjs.org/" target="_blank">React</a>

📌<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">CSS</a>

📌<a href="https://reactrouter.com/" target="_blank">react-router-dom</a>

📌<a href="https://styled-components.com/" target="_blank">styled-component</a>

📌<a href="https://axios-http.com/docs/intro" target="_blank">Axios</a>


***

<h2 id= "executar">Como executar na sua máquina</h2>
<br>

<h2 id="conhecendo">Conhecendo o cli do react</h2>

***

Como de costume, atualmente está sendo uma boa prática os frameworks possuírem um __cli (client)__ para ajudar na utilização do mesmo, assim como os outros o React também adotou esse padrão e criou seu cli, o famoso create-react-app. Com ele conseguimos criar uma aplicação em React, com boa parte das configurações realizadas (podem ser customizadas), com isso, conseguimos focar mais no aprendizado e desenvolvimento.

<h2 id="instalando">Instalando o cli do React</h2>

***
Para realizarmos a instalação do cli podemos realizar de duas maneiras: com **[yarn](https://blog.matheuscastiglioni.com.br/categoria/arquitetura/)** ou **[npm](https://www.npmjs.com/)**.

Não irei abordar como instalar ambos gerenciadores de pacotes ou dependência, porém, o processo instalação pode facilmente ser encontrado na documentação oficial de ambos.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id="instyarn"> Instalando com Yarn</h3>

***
Para realizar a instalação com Yarn, podemos rodar o comando global add:

```javascript
yarn global add create-react-app
```

<h3 id="instnpm">Instalando com npm</h3>

Para realizar a instalação com npm, podemos rodar o comando install -g ou i -g:
```javascript
npm install -g create-react-app
```
Ou
```javascript
npm i -g create-react-app
```
>Obs: Em ambos os casos estamos instalando o create-react-app como global, para que possa ser rodado em qualquer lugar do nosso terminal e compartilhado a mesma versão em todos os projetos (em alguns casos o pessoal preferem utilizar uma versão para cada projeto).

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="criando">Criando a app com o cli do react</h2>

***
Pronto, agora que já temos nosso cli instalado, podemos finalmente criar a nossa app, o processo pode ser feito de duas maneiras diferentes, sendo elas: com o create-react-app ou npx.

A única diferença é que com o create-react-app precisamos tê-lo instalado em nossa máquina, agora o npx irá executar o create-react-app sem instalá-lo na máquina local.

<h3 id="createreact">Criando com create-react-app</h3>

***
Para criar uma aplicação com o create-react-app podemos fazer de duas maneiras: Em uma pasta já existente ou em uma nova pasta.

#### Criando em uma nova pasta

Para criarmos a aplicação (estou chamando de aplicação para melhor entendimento do post), em uma nova pasta apenas rodamos o create-react-app seguido pelo noma da aplicação:

```javascript
create-react-app minha-primeira-app
```
[![asciicast](https://asciinema.org/a/7LyJl6oJdxUKh9wcQ1aPDf1px.svg)](https://asciinema.org/a/7LyJl6oJdxUKh9wcQ1aPDf1px)

<h4 align="right"><a href="#topo">Topo</a></h4>

### Criando em uma pasta já existente

***
Assim como podemos criar uma nova pasta, também podemos utilizar uma pasta já existente para criar nossa aplicação em React. A diferença é que devemos navegar até a pasta pelo terminal (cd caminho_ate_a_pasta) e em vez de passar um nome para o create-react-app passamos um . (para referenciar a pasta atual):

```javascript
create-react-app .
```

[![asciicast](https://asciinema.org/a/mxaR9nEp8CEjd97GPdBwny945.svg)](https://asciinema.org/a/mxaR9nEp8CEjd97GPdBwny945)
<h3 id="criandocomnpx">Criando com npx</h3>

***
Além de utilizar o create-react-app já instalado na máquina, podemos pedir para o npx executá-lo e criar nossa aplicação, nesse caso a instalação do create-react-app não precisa e nem será feita:

```javascript
npx create-react-app minha-primeira-app
```
[![asciicast](https://asciinema.org/a/xAvouJ8DhoI8ELZc20LRX4nBN.svg)](https://asciinema.org/a/xAvouJ8DhoI8ELZc20LRX4nBN)

>Obs: A opção de utilizar uma pasta já existente, também vale para o npx e deve ser feita da mesma maneira, apenas adicionando o npx na frente do comando, ou seja, precisamos navegar até a pasta (cd) para executar o comando e passar um . em vez de um nome.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="subindoapp">Subindo nossa app</h2>
Com a nossa aplicação criada, podemos subí-la de duas maneiras, através do yarn ou npm, isso vai depender da sua preferência ou gosto por um desses gerenciadores de pacote.

<h3 id="subindocomyarn">Subindo app com yarn</h3>
Para subir a app utilizando o yarn precisamos apenas rodar o comando start:

```javascript
yarn start
```
<h3 id="subindocomnpm">Subindo app com npm</h3>

De forma semelhante ao yarn, com o npm precisamos também rodar o start:
```javascript
npm start
```
ou
```javascript
npm run start
```
Em ambos os casos, assim que nossa app subir, o navegador será automaticamente aberto com uma página principal padrão (default) do React.

![image](https://user-images.githubusercontent.com/89301596/180660775-7ba2d02d-a913-4d4d-a8d6-bf905a4137fa.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id = "create">Getting Started with Create React App</h2>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<h4 align="right"><a href="#topo">Topo</a></h4>