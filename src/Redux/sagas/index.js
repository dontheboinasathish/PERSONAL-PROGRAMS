import { all } from "redux-saga/effects";

import AuthSaga from "./saga";

export default function* RootSaga() {
    yield all([AuthSaga()]);
}
