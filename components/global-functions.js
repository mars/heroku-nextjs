import Router from 'next/router'

// Fix for "Error: Invalid Build File Hash" thrown server-side.
// Import to each of /pages.
// https://github.com/zeit/next.js/wiki/Handle-BUILD_ID-Mismatch-Error
//
Router.onAppUpdated = function(nextRoute) {
  console.log('Reloading page, because server build changed.')
  location.href = nextRoute
}
