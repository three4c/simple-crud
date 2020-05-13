import { createStore, combineReducers, applyMiddleware } from "redux";
import { formReducer, characterReducer, State } from "./reducers";
import { createLogger } from "redux-logger";

export type AppState = {
  form: State["form"];
  character: State["characters"];
};

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(
  combineReducers<AppState>({
    form: formReducer,
    character: characterReducer,
  }),
  {},
  applyMiddleware(logger)
);

export default store;
