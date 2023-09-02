#  [Next.js](https://nextjs.org/) on Heroku

Deploy [React](https://facebook.github.io/react/)-based universal web apps on [Heroku](https://www.heroku.com/home).

**Demo deployment** from this repo:  
https://nextjs.herokuapp.com

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

Once you have a [Next app working locally](https://nextjs.org/docs/#setup), you may deploy it for public access.

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
   git push heroku main 
   ```
   ⭐️ *As of July 2020, [Heroku supports `git push heroku main`](https://devcenter.heroku.com/changelog-items/1829) and encourages its use. The support for the branch name of 'master' will remain available for backwards compatibility.*

1. ♻️ Deploy changes: add, commit, & push again.

## Custom Config

Next itself supports build & runtime configuration through the [next.config.js](https://nextjs.org/docs/#exposing-configuration-to-the-server--client-side) file.

Use environment variables ([Heroku config vars](https://devcenter.heroku.com/articles/config-vars)) within your React components, no rebuilds required! Simply set [next.config.js](https://nextjs.org/docs/#exposing-configuration-to-the-server--client-side) values from the server's environment using `process.env` object.
