# Learning react from freeodecamp.

npm - node package manager [used to install the packages/libraries]
npx - node package executer [used to execute the package]

# Difference between vite and react CRA

1. React CRA - when we execute npx create-react-app "project-name" it installs node modules and some of the packages which are not needed during the initial or later stage

2. Vite - Vite is a bundler which is pre configured react which doesn't installs node modules amd unnecessary packages.

# package.json
   It tells about name, version, dependencies, scripts
   react-dom -> used to communicate with the dom and web applications
   react-native -> used to communicate with the mobile apps
   
   # web-vitals -> to check the performance of the application

   # eject -> to eject the entire react application from the configuration

   # build -> This script is usually set up to use a build tool like webpack or Parcel to bundle your React code and its dependencies into a format optimized for production deployment.

   Here's a general overview of what happens when you run npm run build in a React project:

Dependency Installation (if needed): If you haven't already installed the dependencies required for building your project, npm will automatically install them based on the contents of your package.json and package-lock.json files.
Execution of Build Script: npm will then execute the build script specified in the "scripts" section of your package.json. This script typically invokes a build tool like webpack or Parcel along with any configuration options you've specified.
Bundle Generation: The build tool (e.g., webpack) processes your React code and its dependencies, analyzing the import statements to construct a dependency graph of your application. It then bundles all the necessary files into one or more bundles optimized for production. This process may include transpiling JSX to JavaScript, minification, tree-shaking, and other optimizations to improve performance and reduce file size.
Output Generation: Once the bundling process is complete, the build tool generates the output files (typically JavaScript, CSS, and other assets) in a specified directory (often named build or dist).
Optional Post-Processing: Depending on your build configuration, you may have additional post-processing steps such as running scripts for code splitting, generating source maps, or optimizing assets like images.
Completion: Finally, npm completes the build process, and you should see a message indicating that the build was successful.
After running npm run build, you'll typically find your optimized production-ready files in the designated output directory, ready to be deployed to a web server or hosting service. These files contain the compiled, bundled, and optimized version of your React application, suitable for efficient delivery to users' browsers.

# gitignore -> to ignore some of the files that are not important.

# package-lock-json -> contains specified version of all the packages that we are installing

# robots.txt -> Google Indexing
# manifest.json -> mobile indexing

# index.html -> Everything in react is injected into index.html.


# In a React project, dependencies and devDependencies serve different purposes and are managed differently by npm or yarn.

Dependencies:
Dependencies are packages that are necessary for your application to run in production. They include libraries, frameworks, and utilities that your application relies on to function properly.
Examples of dependencies in a React project might include React itself, React Router for routing, axios for making HTTP requests, etc.
When you install dependencies using npm install or yarn add, they get added to the "dependencies" section of your package.json file by default.
DevDependencies:
DevDependencies are packages that are only needed for development and testing purposes. They are not required for your application to run in production.
Examples of devDependencies in a React project might include testing frameworks like Jest, ESLint for code linting, Babel plugins for transpiling code, etc.
When you install devDependencies using npm install --save-dev or yarn add --dev, they get added to the "devDependencies" section of your package.json file.
DevDependencies are typically used for tasks such as testing, code linting, transpilation, bundling, and other development-related workflows.
Here's a summary of the key differences between dependencies and devDependencies in a React project:

Purpose: Dependencies are required for your application to run in production, while devDependencies are only needed during development and testing.
Examples: Dependencies include libraries and frameworks your application depends on, while devDependencies include tools and utilities for development workflows.
Installation: Dependencies are installed using npm install or yarn add, while devDependencies are installed using npm install --save-dev or yarn add --dev.
Package.json Sections: Dependencies are listed under "dependencies", while devDependencies are listed under "devDependencies" in your package.json file.
Deployment: Dependencies are bundled with your application and deployed to production environments, while devDependencies are typically not included in production builds to keep the bundle size smaller.
It's important to distinguish between dependencies and devDependencies to ensure that your production builds include only the necessary packages for your application to function, keeping the bundle size optimized for performance.

# Single page application
React removes specific nodes from the DOM and injects new node so there is no full page reloading in react.

# index.js -> Entry point of javascript