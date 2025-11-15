# Portfólio - Jéssica Ferreira Teixeira

Este projeto é o portfólio pessoal de **Jéssica Ferreira Teixeira**, desenvolvido em **React + TypeScript** com **Vite** e **TailwindCSS**, incluindo integração com a **API do GitHub** para listar projetos dinamicamente.

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite
- TailwindCSS
- shadcn/ui (componentes de UI)
- GitHub REST API

## 📁 Estrutura principal

- `client/`
  - `src/pages/Home.tsx` — página principal do portfólio
  - `src/services/github.ts` — serviço de integração com a API do GitHub
  - `src/contexts/ThemeContext.tsx` — contexto de tema (light/dark)
  - `src/types/github.d.ts` — tipos TypeScript para respostas do GitHub
- `server/`
  - `index.ts` — servidor/proxy (quando necessário para lidar com CORS)
- `tsconfig.json` — configuração do TypeScript
- `vite.config.ts` — configuração do Vite

## 🧩 Integração com a API do GitHub

A listagem de projetos na página inicial é carregada dinamicamente a partir dos repositórios públicos do GitHub da usuária:

- Usuária GitHub: **`JessyTeixeira-QA`**
- Serviço responsável: `client/src/services/github.ts`
- O componente `Home.tsx` chama esse serviço dentro de um `useEffect`, trata estados de **carregando**, **erro** e possui um **fallback** de projetos estáticos caso a chamada à API falhe.

Em caso de erro:

- É exibida uma mensagem informando que os projetos estáticos estão sendo usados.
- A interface continua funcionando normalmente.

## 🛠️ Pré-requisitos

- Node.js (versão recomendada: LTS atual)
- pnpm instalado globalmente

Para instalar o pnpm:

```bash
npm install -g pnpm
```

## 📦 Instalação

Na pasta raiz do projeto (`portfolio_melhorado`):

```bash
pnpm install
```

Isso irá instalar todas as dependências e preparar o ambiente.

## ▶️ Rodando em desenvolvimento

Ainda na raiz do projeto:

```bash
pnpm dev
```

O Vite exibirá uma URL semelhante a:

```text
http://localhost:5173/
```

Abra essa URL no navegador para visualizar o portfólio.

## ✅ Checagem de tipos

Para rodar a checagem de tipos do TypeScript:

```bash
pnpm check
```

Isso executa `tsc --noEmit`, garantindo que não haja erros de tipagem no projeto.

## 🌓 Tema (claro/escuro)

O tema é controlado pelo contexto em `client/src/contexts/ThemeContext.tsx`:

- Alternância de tema via botão no header
- Preferência persistida em `localStorage`
- Classe `dark` aplicada ao `document.documentElement` quando o tema escuro está ativo

## 📬 Contato

As informações de contato atualizadas no portfólio são:

- **E-mail:** `jessicaferreirateixeira@gmail.com`
- **LinkedIn:** `https://www.linkedin.com/in/jéssica-ferreira-teixeira-a5225120b`
- **GitHub:** `https://github.com/JessyTeixeira-QA`

## 📄 Licença

Este projeto é de uso pessoal da autora. Caso queira reutilizar parte do código ou do design, recomenda-se entrar em contato antes.
