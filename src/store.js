import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./Redux/reducer/index";
import RootSaga from "./Redux/sagas/index";

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default Store;
