# covid-questionary-giorgi-pantsulaia

<div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >Covid Questionnaire App</h1>
</div>

---

Covid Questionnaire is a multiple page form where you enter your covid related information as well as you preferences about work and all the data will finally be submitted to us.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)

#

### Prerequisites

- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" width="35" style="position: relative; top: 4px" /> _npm@6 and up_

#

### Tech Stack

- <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1-2.svg" height="19" style="position: relative; top: 4px" /> [Tailwind CSS](https://tailwindcss.com/docs/installation) - css framework used in our app

#

### Getting Started

1\. First of all you need to clone Covid-questionnaire repository from github:

```sh
git clone https://github.com/RedberryInternship/covid-questionary-giorgi-pantsulaia.git
```

2\. Next step requires you to run npm install in order to install all the JS dependencies.

```sh
npm install
```

3\.Next, you need to configure ESLint and Prettier in order for the project to be clean

```sh
npm install --save-dev --save-exact prettier
```

```sh
npm install --save-dev eslint eslint-plugin-vue
```

```sh
npm install eslint-config-prettier --save-dev
```

##### Now, You need to use these extensions!

You must create .vscode/settings.json file in project's root directory and paste these rules:

```sh
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

##### Now, you should be good to go!

### Development

You can run Laravel's built-in development server by executing:

4\.Next you can run npm run serve, which compiles and hot-reloads for development

```sh
npm run serve
```
