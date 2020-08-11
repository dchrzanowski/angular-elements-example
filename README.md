## Getting started
Follow the **how this works** section [here](https://indepth.dev/angular-web-components-a-complete-guide/#how-this-works-).
When running `ng generate application FirstWebComponent  --skipInstall=true` I ran `UIButtonWebComponent`. Additionally, I've deleted the `app.component.*` files since we don't need them (also cause bootstrapping errors). Made a button with some simple background changing logic as the `ui-button` ui selector.

## Setup explanation
The `server` folder contains a simple Node Express server for serving static content over http://localhost:3000 . On this static content we will serve our Angular Element.

The `angular-project` folder contains the angular project in which we have a pre-made `ui-button` component. The component is located in the app folder under `projects/UIButtonWebComponent/src/app` that looks just like a normal angular app folder.

`app.module.ts` contains the necessary bootstrapping logic to make the Angular Element work once built.

## Setup
`cd` into the `server` folder and run `npm i`.
Do the same with the `angular-project` folder.

Now we have installed packages for the server and the angular project.

## Prep
`cd` into the `angular-project` folder and run `ng build UIButtonWebComponent`. `UIButtonWebComponent` name was chosen when running `ng generate application UIButtonWebComponent  --skipInstall=true`, so make sure to run `ng build` with the same application name as it was when generated.

Now copy all the `*.js` files from the dist folder to the Node Express scripts folder to serve it there statically. The public scripts folder is in `server/public/scripts` (overwrite files if needed).

## Running the Node Express server
`cd` into the `server` folder and run `node index.js`. Open your web browser at http://localhost:3000 and you should see the Angular Element served there thanks to importing the necessary Angular Runtime files and the component declaration files in the main `public/index.html` file:


```html
<script src="scripts/polyfills.js"></script>
<script src="scripts/vendor.js"></script>
<script src="scripts/runtime.js"></script>
<script src="scripts/styles.js"></script>
<script src="scripts/main.js"></script>
```
