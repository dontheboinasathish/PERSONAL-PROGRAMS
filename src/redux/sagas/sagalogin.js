import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";



function* login({ payload, callback }) {

    try {
        const url = ('https://jsonplaceholder.typicode.com/users')
        const res = yield axios.get(url, payload);
        console.log(res)
        console.log("response", res.data)
        yield put({ type: "DATA_REQUEST_SUCCESS", data: res.data });
        callback(false);
    } catch (e) {
        callback(true);
    }

}
export default function* AddAdminSaga() {

    yield takeEvery("DATA_REQUEST", login);
}