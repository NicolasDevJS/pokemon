# Pokémon Search App

Este projeto consiste em um **backend NestJS** e um **frontend Expo React Native**, permitindo pesquisar informações sobre Pokémon através da integração com a [PokeAPI](https://pokeapi.co).

## Tecnologias Utilizadas

- **Backend:** [NestJS](https://nestjs.com/)
- **Frontend:** [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/)
- **Estilização:** Styled Components
- **API Externa:** [PokeAPI](https://pokeapi.co)

## Funcionalidades

- Busca de Pokémon pelo nome.
- Exibição dos dados principais:
  - Nome
  - Foto
  - Cor predominante
  - Tipo(s)
  - Habilidades (em grid)
  - Stats principais (HP, ATK, DEF, APE)
- Tratamento de erro ao pesquisar Pokémon inexistente.


## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (opcional)

## Como Executar

### 1️⃣ Rodando o Backend (NestJS)

cd backend
npm install
npm run start:dev

### 2️⃣ Rodando o Frontend (React Native Expo)

cd frontend
npm install
expo start
