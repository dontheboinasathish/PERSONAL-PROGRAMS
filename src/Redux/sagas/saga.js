import { put, takeEvery } from "redux-saga/effects";
function* login1() {
    yield put({ type: "First_SUCCESS" });
    console.log("HEllo SAGA1")
}
function* login2() {
    yield put({ type: "Secound_SUCCESS" });
    console.log("HEllo SAGA2")
}
function* login3() {
    yield put({ type: "Third_SUCCESS" });
    console.log("HEllo SAGA3")
}
function* login4() {
    yield put({ type: "Fourth_SUCCESS" });
    console.log("HEllo SAGA4")
}
export default function* AuthSaga() {
    yield takeEvery("FIRST_REQUEST", login1);
    yield takeEvery("SECOND_REQUEST", login2);
    yield takeEvery("THIRD_REQUEST", login3);
    yield takeEvery("FOURTH_REQUEST", login4);
}
