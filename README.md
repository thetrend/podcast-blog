# podcast-blog
This is a study in building a podcast/text blog using React/TypeScript (via Vite), GraphQL, and Auth0.

## Technologies used
* Vite
* React/TypeScript
* Fauna (GraphQL)
* Auth0 (Authentication)
* Lexical (Content Editor)
* Netlify (Serverless host)

## Part I - Setup
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
Go to [Auth0.com](https://auth0.com) and create an account. My personal preference is linking my Auth0 account to my GitHub account, but this is optional.

Once you log in to the Dashboard, `+ Create Application`, name your application with your preferred project name, then select "Single Page Application" as your application type.

Navigate to "Quick Start" on your newly created application dashboard. The following steps are taken from the Quick Start guide.
While in the Quick Start guide, add `http://localhost:8888` or whatever your local netlify server URL is so you can test the following locally.

In your terminal:
```
$ npm install @auth0/auth0-react
```

Open `./main.tsx` and copy the `Auth0Provider` component snippet from the Quick Start guide, replacing `<App />` with the entire `<Auth0Provider>` code block.

Create the following files and paste the related contents accordingly:

1. `./src/Auth/LoginButton.tsx`
```
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Login</button>;
};

export default LoginButton;
```   
2. `./src/Auth/LogoutButton.tsx`
```
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>;
};

export default LogoutButton;
```
3. `./src/Auth/Profile.tsx`
```
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (    
      <div className="d-block">
        {user!.name}
      </div>
  );
};

export default Profile;
```

### 7. Fauna Installation
Follow [this Auth0 guide](https://manage.auth0.com/dashboard/us/graced-is/marketplace/fauna-database)

## Part II
Create `./src/schema.gql` and paste the following:
```
type User {
  id: ID!
  name: String!
  email: String!
}

type Post {
  id: ID!
  title: String!
  body: String!
  user: User!
  createdAt: Time!
}

type Comment {
  id: ID!
  body: String!
  post: Post!
  createdAt: Time!
}

type Query {
  allUsers: [User!]!
  allPosts: [Post!]!
}
```

Upload `schema.gql` to the Fauna Dashboard.