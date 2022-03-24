
# REVEAL

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Screenshots](#screenshots)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Description

Consumers are increasingly concerned about the environmental, social, and political impacts of their purchases. They want to support companies which align with their values and penalize companies which don’t. However, the status quo of inaccessible information, misleading claims, and corporate virtue signaling largely prevents consumers from easily using their purchasing power to make change. 

Reveal, a nonprofit startup, hopes to change that. At its core, the platform will enable consumers to make a difference with what they buy. The website, browser extension, and phone app will provide users with the information they need to determine whether a company actually deserves their money. More importantly, it will amplify their impact through incentivising direct engagement with companies, legislators, and communities of conscious consumers.

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

# Getting Started
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Screenshots

<img src="src/photos/reveal_1.png" alt="reveal screenshot 1" height="700px" width="700px"/>
<img src="src/photos/reveal_2.png" alt="reveal screenshot 2" height="700px" width="700px"/>
<img src="src/photos/reveal_3.png" alt="reveal screenshot 3" height="700px" width="700px"/>
<img src="src/photos/reveal_4.png" alt="reveal screenshot 4" height="700px" width="700px"/>

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Installation

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run database`
- Run `npm run demoRules`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Heroku Deployment

To download the source code onto your computer to make changes to the website:

Required dependencies to run the website locally:
- NodeJS
- PostgreSQL
- Recommended to use VSCode to edit code, with built in terminal / powershell

  - Log into the provided Github account or your own personal code.
  - If using your own github account, Fork the repository to your own profile. 
  - Click the green Code button, and then Clone HTTPS.
  - Run >>> git clone https://github.com/Reveal-nonprofit/reveal-group-project.git <<< in your desired directory to clone the code from the website to your local computer
  - Run npm install in the terminal to set up required libraries / dependencies.
  - Run npm run database in terminal to setup database.
  - Run npm run demoRules (to populate the application with example rules for demonstration purposes)

## Usage

Register as a new user. If you want admin access, you will have to edit your database and set 'auth_level' for the admin user to 1. This will add new functionality to the application, including viewing messages, viewing user information, and most importantly, adding new rules to the database so that the scores have more functionality. The more rules that are added, the more accuracy that the scores will have.

## API

  - Third party API
    - WikiRate
    - WikiPedia




