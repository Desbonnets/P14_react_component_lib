export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<any>;
import { useDispatch, useSelector } from 'react-redux';
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export var useAppDispatch = useDispatch.withTypes();
export var useAppSelector = useSelector.withTypes();
import DataTable from "./components/DataTable";
export { DataTable };
import DataTable from "./components/DataTable";
export { DataTable };
import { Store } from '@reduxjs/toolkit';
declare let store: Store;
export declare const generateStore: () => Store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export {};
import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './features/tableSlice';
var store;
export var generateStore = function () {
    store = configureStore({
        reducer: {
            table: tableReducer,
        },
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware({
                serializableCheck: false,
            });
        },
    });
    return store;
};
/*
const store = configureStore({
    reducer: {
        table: tableReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;*/ 
{
  "name": "my-app",
  "version": "0.1.0",
  "author": "Desbonnets Gilles <gillesdesbonnets@gmail.com>",
  "private": false,
  "main": "dist/index.js",
  "module": "dist/index.js",
  "files": [
    "dist",
    "README.md"
  ],
  "devDependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.96",
    "@types/react": "^18.2.79",
    "@types/react-dom": "^18.2.25",
    "@types/react-redux": "^7.1.33",
    "@types/redux": "^3.6.0",
    "@types/redux-thunk": "^2.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "clean": "RMDIR dist /S /Q",
    "build:package": "npm run clean && tsc && copy dist + package.json + README.md"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Desbonnets/p14_react_data_tables"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^2.2.3",
    "react-redux": "^9.1.1",
    "redux": "^5.0.1",
    "redux-thunk": "^3.1.0"
  }
}# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
