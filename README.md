This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Running the project
1. You must have `node` and `npm` installed. From `create-react-app`:
"You’ll need to have Node >= 4 on your machine.
We strongly recommend to use Node >= 6 and npm >= 3 for faster installation speed and better disk usage. You can use nvm to easily switch Node versions between different projects.""
1. `npm install`
1. supply the base URL for the API as an environment variable named `REACT_APP_BASE_URL` when starting the app

..*To start in dev mode: `REACT_APP_BASE_URL=<base url goes here> npm start`
The app should appear in your browser at `http://localhost:3000/` in development mode.

..*To build 'production mode': `npm run build`

then: `npm install -g serve` and `serve -s build`
The console should provide some output telling you where the app is running.

## Structure
`Index.js` is the entry point for the app. It defines the routes, initializes the redux data store, and makes the first calls to initialize an empty shopping cart via the API.

`/utils` contains files with helper methods reused in many files.

`/components` contains my react components, each in their own directory. A few components that need additional data, (`Catalog` and `ArticleDetail`) also have container components in their directory. In these cases, the container component fetches data and passes it to the presentation component.

`/actions` and `/reducers` contain files that define actions and reducers for the `react-redux` store

## Improvements

1. change quantity isn't yet implemented
1. figure out testing components with redux; there isn't much other interesting logic to test besides component
1. numerous styling improvements can be made :)
1. error handling: when discount/special items are added to the cart, on subsequent calls the backend doesn't know their SKU. this stops any more actions being taken on this cart (remove, add, etc)
1. I currently only use redux to store the state of the shopping cart. I make calls to the API for every ArticleDetails component and every time the catalog component is rendered; this, clearly, could be improved.
1. Error handling. with more time with redux, perhaps I could implement a "global error" reducer or some other solution
1. "Not Found" page flashes before article detail page loads
1. bug: sumcarttotal doesn't always sum multiple items correctly


## A bit about my process

Given the specs for this assignment and my time constraints, I decided to prioritize features according to the below list:

*Feature completion. (Including figuring out react-router and react-redux, both new for me)

*error handling/good output to user

*documentation

*testing

*responsiveness

*making things pretty (bootstrap + css)



## Sources
In addition to official documentation for react-router and redux, I got help from these tutorials:

https://onsen.io/blog/react-state-management-redux-store/

https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d#.l6lh5i8y4

http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/
