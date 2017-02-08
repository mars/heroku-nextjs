#  [Next.js](https://zeit.co/blog/next) on Heroku

Deploy [React](https://facebook.github.io/react/)-based universal web apps on [Heroku](https://www.heroku.com/home).

**Demo deployment** from this repo:  
https://nextjs.herokuapp.com

[Download this repo](https://github.com/mars/heroku-nextjs/archive/master.zip) as a Heroku-ready app template, or follow [Production Deployment](#production-deployment) to push an existing app to Heroku.

**A custom Node/Express server** is supported. Use it to:

* combine a Node API with a Next/React UI
* implement custom URL routes

▶️ **[Next with custom Express server](https://github.com/mars/heroku-nextjs-custom-server-express)**

## Requires

* Heroku
  * [command-line tools (CLI)](https://devcenter.heroku.com/articles/heroku-command-line)
  * [a free account](https://signup.heroku.com)
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js](https://nodejs.org)
* [Next.js](https://github.com/zeit/next.js)

## Production deployment

Once you have a [Next app working locally](https://github.com/zeit/next.js#how-to-use), you may deploy it for public access.

✏️ *In the following instructions, replace `$APP_NAME` with your own unique app name.*

1. Install the [Heroku build adapter](https://github.com/mars/heroku-nextjs-build/blob/master/bin/heroku-nextjs-build):

  ```bash
  npm install @mars/heroku-nextjs-build --save
  ```
1. Merge the following entries into `package.json`:

  ```json
  {
    "scripts": {
      "start": "next start -p $PORT",
      "heroku-postbuild": "heroku-nextjs-build"
    },
    "engines": {
      "node": "6.9.x"
    },
    "cacheDirectories": [
      "nextjs/node_modules"
    ]
  }
  ```
1. Ensure the app is a git repo, ignoring local-only directories:

  ```bash
  git init
  (echo node_modules/ && echo .next/) >> .gitignore
  ```
1. Create the Heroku app:

  ```bash
  heroku create $APP_NAME
  ```
1. 🚀 Deploy:

  ```bash
  git add .
  git commit -m 'Next.js app on Heroku'
  git push heroku master
  ```
1. ♻️ Deploy changes: add, commit, & push again.
