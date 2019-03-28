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

1. Revise the `npm start` script to set the [web listener `$PORT`](https://devcenter.heroku.com/articles/dynos#local-environment-variables):

   Merge this entry into **package.json**:

   ```json
   {
     "scripts": {
       "dev": "next",
       "build": "next build",
       "start": "next start -p $PORT"
     }
   }
   ```

   ⭐️ *In March 2019, [Heroku began running `npm run build` automatically](https://devcenter.heroku.com/changelog-items/1573), so the old `heroku-postbuild` script entry is no longer required.*

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
