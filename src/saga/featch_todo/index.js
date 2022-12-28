import { call, takeEvery, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "../../data/action/todo";
import todoSlice from "../../data/reducer/todo";
import { todo } from "../../data/reducer/todo";

console.log("todo", todo);

export const { fetchData } = todoSlice.actions;
let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchTodoDataSaga() {
  console.log("todo", todo().type);
  console.log("todoSlice.actions", todoSlice.actions);
  console.log("todoSlice.actions", fetchData());

  debugger;
  try {
    let result = yield call(() =>
      callAPI({ url: "https://jsonplaceholder.typicode.com/todos/" })
    );
    yield put(fetchData(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* todoSaga() {
  yield takeEvery(sagaActions.FETCH__TODO_DATA_SAGA, fetchTodoDataSaga);
}
