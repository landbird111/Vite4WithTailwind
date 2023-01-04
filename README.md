## Document the development environment

1. vite and vue
   
   - <code>npm init vite</code>
     - project Name: Vite4WithTailwind
     - package Name: vite4withtailwind
     - template: vue-ts
     - use composition API
   - <code>npm i</code>
     - install vite and vue modules
       2- Vue-Router
   - <code>npm install vue-router@4</code>
     - vue router rule
     - use <code><router-view /></code>
   - <code>npm i @rollup/plugin-node-resolve -D</code>
     - resolve rollup path error
   - <code>npm i @vitejs/plugin-vue-jsx -D</code>
     - vue use tsx extension

2. Pinia
   
   - <code>npm install pinia</code>  
     - like lite vuex
       3- Axios
   - npm install axios
     - To get or post from backend service

3. tools
   
   - <code>npm i lodash-es</code> (optional)
     
     - lodash esmodule version
     
     - lite and faster
   
   - [Install Tailwind CSS with Vite - Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue)
     
     - <code>npm install -D tailwindcss@latest postcss@latest autoprefixer@latest</code>
       
       - install tailwind and css modules
     
     - <code>npx tailwindcss init -p</code>
       
       - create tailwind.config.cjs
       
       - create postcss.config.cjs
       
       - edit style.css, follow the document
   
   - [Using with Preprocessors - Tailwind CSS](https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports)
     
     - <code>npm install -D postcss-import</code>
       - edit postcss.config.js, follow the document
       - Use separate files for imports and actual CSS
   
   - Install Eslint and Prettier
     
     - <code>npm install -D eslint prettier eslint-plugin-vue eslint-config-prettier</code>
       
       - use esLint to make code better
   
   - [GitHub - tailwindlabs/tailwindcss-container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries)
     
     - <code>npm install -D @tailwindcss/container-queries</code>
     - A plugin for Tailwind CSS v3.2+ that provides utilities for container queries.
   
   - [GitHub - tailwindlabs/tailwindcss-line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
     
     - <code>npm install -D @tailwindcss/line-clamp</code>
     - A plugin that provides utilities for visually truncating text after a fixed number of lines.
     - set variants (settings) to setup trigger event name
   
   - [GitHub - tailwindlabs/tailwindcss-aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
     
     - <code>npm install -D @tailwindcss/aspect-ratio</code>
     - A plugin that provides a composable API for giving elements a fixed aspect ratio.
   
   - [GitHub - tailwindlabs/tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms)
     
     - <code>npm install -D @tailwindcss/forms</code>
     - A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.
   
   - [Axios Docs](https://axios-http.com/docs/intro)
     
     - <code>npm install axios</code>
     - Axios is a promise-based HTTP Client for node.js and the browser
   
   - [intlify/vue-i18n-next](https://github.com/intlify/vue-i18n-next)
     
     - <code>npm i vue-i18n@latest -S</code>
     
     - front-end multi-language
