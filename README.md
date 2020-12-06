# Deploy a NextJS application easily using Firebase Hosting & Functions

This repository holds a template to create a web application using [NextJS](https://nextjs.org/) very quickly
and deploy it seamlessly on [Firebase](https://firebase.google.com/).

## Install

Requirements:

- Node version 12: you can switch versions using [nvm](https://github.com/nvm-sh/nvm) or [Nix](https://nixos.org/)
  - Note: a Nix Shell is provided for this project, run `nix-shell` in the root folder to activate the Nix Shell to get node & yarn
- [yarn](https://yarnpkg.com/), a better version of [npm](https://www.npmjs.com/)

Install dependencies:

```bash
yarn install
yarn --cwd my-app install
```

### Setup Firebase

Go to [Firebase](https://firebase.google.com/).

1. Login
2. Create a project
3. Create an app (Web)
4. Change billing to "Pay as you go"

At the root folder of this project, run

```bash
firebase use {project-name}
```

## Deploy

```bash
yarn deploy
```

## Project structure

### Root `.` folder

This folder holds:

- Project configurations, including Firebase's configurations
- Firebase `./public` folder for Hosting
- `src` Firebase Functions sources folder
- `my-app` NextJS application folder

Once you build and/or deploy, a folder `lib` will appear, which holds the actual JS code that Firebase Functions can run.

### NextJS `./my-app` folder

It works like any kind of NextJS project.
Go inside it and develop like you would without this template.
