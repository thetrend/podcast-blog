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
```

### 2. IDE
If you haven't already, open `./<project-name>` in your IDE, preferably Visual Studio Code. All files referenced from this point forward will be referenced under the assumption that you have this directory open.


### 3. Netlify Installation
```
$ npm i -g netlify-cli (Optional if netlify-cli is already installed)
$ netlify init
$ netlify dev (to run the server)
```

Uncomment the following lines in `netlify.toml`:
```
  [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
```


### 4. Tailwind CSS Installation
Open a new terminal inside your project directory

\*_The following is from [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)_\*

Install Tailwind CSS for basic styling
```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

Open `./tailwind.config.cjs` in your IDE and add the following inside `module.exports > content: []`:
```
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
```

Open `./src/index.css` and delete all the existing entries. Replace with the below:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### 5. Boilerplate cleanup
1. Delete `./src/assets/react.svg`
2. Delete everything inside `./src/App.css`
3. Delete everything inside the `return ()` statement of `./src/App.tsx`
4. Replace the `return ()` statement in `./src/App.tsx` with the following:
```
  return (
    <>
      <h1 className="text-5xl font-bold">Hello World</h1>
    </>
  );
```

### 6. Auth0 Installation
\*_The following is from [this Auth0 guide](https://marketplace.auth0.com/integrations/netlify-role-management)._\*

Go to [Auth0.com](https://auth0.com) and create an account. My personal preference is linking my Auth0 account to my GitHub account, but this is optional.

Once you log in to the Dashboard, `+ Create Application`, name your application with your preferred project name, then select "Regular Web Application" as your application type.

