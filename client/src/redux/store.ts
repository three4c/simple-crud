import { createStore, combineReducers, applyMiddleware } from "redux";
import { formReducer, FormState } from "./reducers/formReducer";
import {
  characterReducer,
  CharactersState,
} from "./reducers/charactersReducer";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export type AppState = {
  form: FormState;
  character: CharactersState;
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
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);
export default store;
