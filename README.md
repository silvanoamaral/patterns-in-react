This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Pattern

### Pre-commit Hook

`prettier` we will run before commits. [Ref](https://prettier.io/)

* Can run before commits `npx prettier . --write`

* This can re-format your files that are marked as "staged" via git add before you commit.

### Pre-renders

`react-snapshot` pre-renders a web app into static HTML
* `npm run postbuild`


src/
 |--- assets/   # Aqui ficará as imagens
 |--- configs/  # Variáveis de configurações
 |--- pages/    # As nossas páginas
 |--- routes/   # Arquivo contendo as principais rotas do App
 |--- services/ # Configuração de serviços utilizados
 |--- styles/   # Estilos globais
 |--- App.js    # Arquivo que conterá configurações principais do App
 |--- index.js  # Ponto de entrada para execução do nosso App
