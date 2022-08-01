import { all } from "redux-saga/effects";
import AddAdminSaga from "./sagalogin";


export default function* RootSaga() {
    yield all([AddAdminSaga()]);

}
