Um pequeno projeto de blog desenvolvido com React e Firebase, permitindo aos usuários criar, ler, editar, excluir e pesquisar postagens.

Visão Geral

O Miniblog é uma aplicação web front-end que simula uma plataforma de blog. Ele utiliza o React para a construção da interface do usuário, React Router para o gerenciamento de rotas e Firebase (especificamente Firestore para banco de dados e Authentication para gerenciamento de usuários) como backend.
O projeto foi recentemente atualizado para melhorar a responsividade em dispositivos móveis, garantindo uma melhor experiência de usuário em diferentes tamanhos de tela.
Funcionalidades

Autenticação de Usuários: Cadastro e login utilizando Firebase Authentication.
CRUD de Posts: Usuários autenticados podem criar, visualizar, editar e excluir suas próprias postagens.
Visualização Pública: Postagens podem ser visualizadas por qualquer visitante.
Busca: Funcionalidade para buscar postagens por termo.
Dashboard: Painel para usuários autenticados gerenciarem suas postagens.
Design Responsivo: Layout adaptado para funcionar em desktops, tablets e smartphones.

Tecnologias Utilizadas

Front-end:
React (v17+)
React Router DOM (v6+)
CSS Modules

Back-end / Serviços:
Firebase Authentication
Firebase Firestore (implícito para armazenamento de posts)

Ferramentas de Desenvolvimento:
Create React App (react-scripts)
npm

Instalação e Execução
Siga os passos abaixo para configurar e rodar o projeto localmente:

Clone o repositório:
bash
git clone https://github.com/WesleyFreitsz/miniblog.git
cd miniblog
Instale as dependências:
bash
npm install

Configure o Firebase:
Crie um projeto no Firebase Console .
Ative os serviços de Authentication (com o método de Email/Senha) e Firestore.
Obtenha as credenciais de configuração do seu projeto Firebase (apiKey, authDomain, projectId, etc.).
Crie um arquivo de configuração para o Firebase dentro da pasta src/firebase/, por exemplo, config.js, ou utilize variáveis de ambiente. A estrutura esperada no código (src/firebase/config.js - Nota: Este arquivo não existe no commit inicial, precisa ser criado) seria algo como:
javascript
// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore(app);

export { db }; // Exporte o 'db' e outros serviços que precisar
Importante: Certifique-se de que este arquivo de configuração (ou as variáveis de ambiente) seja referenciado corretamente nos hooks e contextos que utilizam o Firebase (ex: src/hooks/useAuthentication.js, src/hooks/useFetchDocuments.js, etc. - Nota: Estes hooks precisam ser verificados ou criados conforme a implementação).
Execute a aplicação:
bash
npm start
A aplicação estará disponível em http://localhost:3000.

Deploy

O projeto pode ser facilmente implantado em plataformas como Vercel, Netlify ou Firebase Hosting.
Vercel/Netlify: Conecte seu repositório GitHub e configure o build command (npm run build) e o diretório de publicação (build).
Firebase Hosting: Utilize o Firebase CLI (firebase deploy).
Uma versão de demonstração pode estar disponível em: miniblog-sooty.vercel.app  (Link encontrado no repositório, verificar se está ativo).
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
