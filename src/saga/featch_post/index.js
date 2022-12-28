import { call, takeEvery, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "../../data/action/post";
import postSlice from "../../data/reducer/post";

export const { fetchData, setData } = postSlice.actions;

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchDataSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://jsonplaceholder.typicode.com/posts" })
    );
    yield put(setData(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* postSaga() {
  yield takeLatest(fetchData().type, fetchDataSaga);
}
