<div align="center">
  <h1>Nuxt2 with 100 Lighthouse score</h1>
</div>

## What

A starting point and reusable Nuxt2 application, based on the one generated by Nuxt-CLI with all settings already setup up, with performance in mind, to achieve a 100% Lighthouse score.

---

## Why

Generating a fresh setup of a Nuxt2 application is always a tedious process and by default, it won't achieve a good Lighthouse score.
This project aims to speed up the process of starting up an application and trying to get a perfect Lighthouse score, with all the main features a medium/large application should have.

---

## How

By setting up some Nuxt configs, removing all the clutter and still having a viable boilerplate.
The goal is to have with every update a perfect 100 Lighthouse score.

---

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Commands](#commands)
- [Features](#features)
- [Roadmap](#roadmap)
- [Google Lighthouse score](#google-lighthouse-score)
- [Licenses](#licenses)
- [Inspiration](#inspiration)
- [Want to contribute?](#want-to-contribute)

---

## Requirements

The only tools you will need installed on your machine are:

- Node.js - [Download and Install Node.js](https://nodejs.org/en/download/)
- a package manager (Yarn or NPM) - [Download and Install Yarn](https://yarnpkg.com/getting-started/install)
  (NPM already comes bundle with Node.js)

---

## Installation

Clone repository and run project locally:

```bash
$ git clone https://github.com/alexandrecanijo/nuxt2-lighthouse-boilerplate.git # Clone project using HTTPS
$ cd nuxt2-lighthouse-boilerplate # Change directory
$ npm install # Install required dependencies
```

---

## Commands

Launch development server at localhost:3000

```
$ npm run dev
```

Build for production

```
$ npm run build
```

Start the production server (after running the build command)

```
$ npm run start
```

Generate a static project

```
$ npm run generate
```

---

## Features

- Disabled core Nuxt features, that should only be enabled when needed
- Enabled HTTP2 (if possible) and added a bunch of webpack optimizations to speed up first page impression
- All code resides on `src/` directory

---

## Roadmap

- Add Lighthouse-CI under Github Actions
- Add Cypress integration and example e2e tests
- Improve documentation
- Add common features, i18n, light/dark theme, accessibility analysis, etc.

---

## Google Lighthouse score

- Performance - 100
- Accessibility - 100
- Best practices - 100
- SEO - 100

---

## Licenses

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

---

## Inspiration

Several articles and repositories inspired me to create this one, but the main goal was to have a starting point, for all my Nuxt apps.
Here are some links that this project is based on:

- https://github.com/larsdouweschuitema-nuxt/nuxt-boilerplate
- https://dev.to/jacobandrewsky/performance-checklist-for-vue-and-nuxt-cog
- https://github.com/harlan-zw/nuxt-webpack-optimisations

---

## Want to Contribute?

Please check out [CONTRIBUTING.md](CONTRIBUTING.md).
