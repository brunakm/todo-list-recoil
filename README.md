# To-Do List 📝

Aplicação de gerenciamento de tarefas desenvolvida como projeto acadêmico com o objetivo de praticar o desenvolvimento de interfaces em React e o gerenciamento de estado global utilizando Recoil.

## 📋 Sobre o Projeto

O To-Do List é uma aplicação de gerenciamento de tarefas que permite adicionar, visualizar, concluir, remover e filtrar tarefas.

O projeto foi desenvolvido com foco na organização dos componentes, gerenciamento de estado global, componentização e criação de uma interface responsiva.

## 🚀 Tecnologias Utilizadas

* React
* JavaScript
* Recoil
* Vite
* CSS3

## ✨ Funcionalidades

* Adicionar novas tarefas
* Listar tarefas
* Marcar tarefas como concluídas
* Desmarcar tarefas concluídas
* Remover tarefas
* Filtrar tarefas por:
  * Todas
  * Pendentes
  * Concluídas
* Layout responsivo
* Design adaptado para dispositivos móveis

## 🧠 Gerenciamento de Estado

O projeto utiliza o Recoil para gerenciamento do estado global da aplicação.

* `RecoilRoot` para disponibilizar o Recoil para a aplicação
* `tarefasAtom` para armazenar a lista de tarefas
* `filtroAtom` para armazenar o filtro selecionado
* `tarefasFiltradasSelector` para filtrar as tarefas de acordo com o filtro escolhido

## 📂 Estrutura do Projeto

```text
todo-list-recoil/
├── src/
│   ├── atoms/
│   │   ├── tarefasAtom.js
│   │   └── filtroAtom.js
│   ├── components/
│   │   ├── FormularioTarefa.jsx
│   │   ├── Filtros.jsx
│   │   ├── ListaTarefas.jsx
│   │   └── Tarefa.jsx
│   ├── selectors/
│   │   └── tarefasFiltradasSelector.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 💻 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/brunakm/todo-list-recoil.git
```

### 2. Acesse a pasta do projeto

```bash
cd todo-list-recoil
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Depois, acesse o endereço disponibilizado pelo Vite no terminal.

## 📦 Build

Para gerar a versão de produção do projeto:

```bash
npm run build
```

## 👩‍💻 Desenvolvido por

**Bruna Machado**

Estudante de Engenharia Front-End e formada em Análise e Desenvolvimento de Sistemas.

[GitHub](https://github.com/brunakm)
