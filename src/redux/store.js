import { applyMiddleware, createStore } from "redux";
import Rootreducer from "./reducer";
import RootSaga from "./sagas";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(Rootreducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(RootSaga)
export default store;