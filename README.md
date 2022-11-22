# podcast-blog
This is a study in building a podcast/text blog using React/TypeScript (via Vite), GraphQL, and Auth0.

## Technologies used
* Vite
* React/TypeScript
* Fauna (GraphQL)
* Auth0 (Authentication)
* Lexical (Content Editor)
* Netlify (Serverless host)

## Reproduction Guide
### 1. Initial React installation
\*_The following is from [Vite JS](https://vitejs.dev/guide)_\*
1. Install React/TypeScript-flavored Vite
```
$ npm create vite@latest <project-name>
> Select a framework: React
> Select a variant: TypeScript

$ cd <project-name>
$ npm install
$ npm run dev
```

### 2. Tailwind CSS Installation

Open a new terminal inside your project directory

\*_The following is from [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)_\*

Install Tailwind CSS for basic styling
```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

Open `./<project_directory>/tailwind.config.cjs` in your IDE and add the following inside `module.exports > content: []`:
```
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
```

Open `./<project_directory>/src/index.css` and delete all the existing entries. Replace with the below:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Boilerplate cleanup
1. If you haven't already, open `./<project_directory>` in your IDE, preferably Visual Studio Code.
2. Delete `./src/assets/react.svg`
3. Delete everything inside `./src/App.css`
4. Delete everything inside the `return ()` statement of `./src/App.tsx`

### 4. Auth0 Installation