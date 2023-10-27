# Week 1

## React. Components

## How to start project:
1. git clone https://github.com/BrBrov/REACT2023Q4.git
2. npm install
3. npm run prepare
> if you use linux (Ubuntu, Deian or etc):
> do it for setup husk:
> - chmod ug+x .husky/*
> - chmod ug+x .git/hooks/*

4. npm run dev
5. page will start *localhost:8080*

### What should be done:

1. - [x]  Create a separate branch for this task.
2. - [x]   Language Requirement
    - Use **TypeScript** for the project.
3. - [x]   Project Setup
    - Initialize the project using Vite with the *react-ts* template.
4. - [x]   Code Quality Tools
    1. - [x]   ESLint
        - Set up ESLint to throw errors if TypeScript's *any* type is used.
        - Follow the [configuration guide](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md).
    2. - [x]   Prettier
        - Integrate Prettier for code formatting.
    3. - [x]   Husky
        - Add Husky and configure it to run linting on pre-commit.
    4. - [x]   package.json commands
        - Add the following npm scripts:
            - - [x]   `lint`: For running the lint command.
            - - [x]  `format:fix`: For running Prettier's --write command.
5. - [x]   Pick a RESTfull api which supports search and pagination (pagination might be reffered as *offset* and *limit* params). 
6. - [x]   Implement the following requirements:
    -  - [x]  Create a page comprised of 2 horizontal section (a smaller top one, and a bigger bottom one);
    -  - [x]  On the top section put *Search* input and the "Search" button. *Search* component should look for a previously saved search term in the local storage, if there isn't any - leave the input empty;
    -  - [x]  Bottom section should show be used for displaying search results (name and a small description);
    -  - [x]  By default application makes a call to the selected api to get the list of the items with the search term from the input (only first page). If the input is empty make a call to get all the items;
    -  - [x]  When user modifies the *Search* input and clicks on "Search" button, application makes a call to an api with the newly provided search term (search term should not have any trailing spaces, process the input) to get the results (only first page);
    -  - [x]  The provided search term should be saved to the local storage, if the value exists overwrite it;
7. - [x]   Wrap application to an error boundary to catch errors. Report an error to a console and show fallback UI (use respective methods for this). Create a button which will throw an error on click to test the functionality.

**Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**

All logical parts should be set into separate components.

### Score
The task will be checked during cross-check and cross-code-review.

#### Cross-code-review process
1. - [x]   Clone the repository you are going to review
2. - [x]   Install all the required dependencies
3. - [x]   Run linting using special command in package.json file, output should not produce any errors or warnings
4. - [x]   Run prettier using special command in package.json file, make sure that fix commands fixes issues
5. - [x]   Review the code. Pay attention at the following "code smells":
    - props drilling;
    - large, complex components aka "god" components;
    - direct DOM manipulation - methods like `appendChild`, `setAttribute`, `innerHTML`, and other - anything that makes React to lose track of the DOM changes. Argument of `createRoot` is an exception;
    - etc.

#### Cross-check process
Run app and check that the functionality is working (cross-check)

#### Points
##### Student can get 100 points:
-  - [x]  Eslint is set up, when *lint* command is run it doesn't produce any errors (if there are warnings score might be less) - **15 points**
-  - [x]  Prettier is set up, *format:fix* command fixes issues - **15 points**
-  - [x]  Husky is set up, linting is run on pre-commit - **10 points**
-  - [x]  Page is split into 2 sections, top one has *Search* input and "Search" button, main section displays the list of results from the selected api when page is opened for the first time (loader should be shown while app makes a call to the api) - **20 points**
-  - [x]  When user types something to the *Search* input and clicks "Search" button, a loader is displayed and the list is changed according to the response results for a provided search term - **15 points**
-  - [x]  The search term typed into the *Search* input is saved in the local storage when user clicks on "Search" button (check it by closing the tab and open the app in the new one - the initial call should contain previously entered search term) - **15 points**
-  - [x]  Application is wrapped with ErrorBoundary, which logs error to a console and shows a fallback UI. There should be a button to throw an error - **10 points**

##### Penalties:
-  - [ ] TypeScript isn't used: **-95 points**
-  - [ ] Usage of *any*: **-20 points per each**
-  - [ ] Usage of *ts-ignore*: **-20 points per each**
-  - [ ] Direct DOM manipulations inside the React components: **-50 points per each**
-  - [ ] React hooks are used to get access to either state, or to the component lifecycle: **-70 points**
-  - [ ] Presence of *code-smells* (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
-  - [ ] Usage of Redux or other state management libraries: **-100 points**
-  - [ ] Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**