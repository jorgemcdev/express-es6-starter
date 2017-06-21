# Express Development Server
This is a Express starter kit to start development, config, Lint, Test and build ES6 express App.

- Express4
- Eslint
- Tests: mocha, chai, chai-http
- App configuration: config
- Logging: morgan, winston

## Install
Clone the Repo and then run:
```
$ npm install
```

## Configure eslint
Configure the eslint to use a diferent style:
```
$ ./node_modules/.bin/eslint --init
```
This is intended for setting up and configuring ESLint on a per-project basis and will perform a local installation of ESLint and its plugins in the directory in which it is run.

## Configure
This app uses the package config to configure Port, you can edit the file /config/default.json to change this settings.

Files:
 production.json and test.json will override the default configuration depending if your app is on Test or Production mode.

## Run the app: Development
```
$ npm run dev
```

## Test
```
$ npm run test
```

## Run the app: Production
```
$ npm build
$ npm start
```