
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../Reducers/rootReducer";
import { brandWatcher } from "../sagas/BrandIndex";
import logger from "redux-logger"

const sagaMiddileware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddileware));
sagaMiddileware.run(brandWatcher);


export default store;

