This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Introduction

The GitHub Repo Finder is a Code Challenge Solution.

The Challenge outlined is: 

<em>Implement a SPA that presents a text input for a Github repository. When the user fills in the input, the application should present the number of stars, watchers and forks for the repository; If the repository doesn’t exist, it must display an error message.

Any technology can be used

Github provides an API (e.g., https://api.github.com/repos/facebook/react) </em>

## Solution Architecture

This solution uses React in a simple component based solution. The user is presented with an input field where 
they can enter the name of a github repository. E.g. facebook/react or google/graphicsfuzz

The user can then click a button to fetch repository data from the Github API. If the repository exists in the GitHub API then I display
the number of Github stars, watchers and forks that the repo has.

For unauthenticated users the github API has a rate limit of 10 requests per minute. So this is why I implemented
a fetch button rather than fetching as the user types directly in the input field.

https://developer.github.com/v3/search/#rate-limit

#### UX
The UX of the application is driven by Bootstrap 4: http://getbootstrap.com/
Bootstrap provides a responsive Grid based layout that allowed me to develop a clean design quickly.
Bootstrap specific CSS classes are added to the markup in the components to
provide a clean responsive design for the challenge.


The React application consists of the following components.

#### App container
```
src/App.js
```
A Class Component that contains all the logic of the application. 
This is where you should start looking at the application. The data is fetched here from the API end points and
sorted and filtered for display. 

#### Search Bar
```
src/components/search_bar.js
```
A functional component that displays a text input and search button to retrieve 
repository data from Github API.

#### Repo Detail
```
src/components/repo_detail.js
```
A functional component that displays a single github repository details including
repository name and number of watchers, stars and forks.


## Installation instructions
Clone the project to your local machine<br>
You will need node and npm installed. https://www.npmjs.com/get-npm <br>
```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Includes Jest and Enzyme basic tests for all app components.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
