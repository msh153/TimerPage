import {createStore, applyMiddleware} from "redux";

import {rootReducer} from "../reducers";

//Logger middleware

import {createLogger} from "redux-logger";

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(logger));