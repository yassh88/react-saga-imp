import { call, takeEvery, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "../../data/action/todo";
import todoSlice from "../../data/reducer/todo";
import { todo } from "../../data/reducer/todo";

console.log("todo", todo);

export const { setData } = todoSlice.actions;
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
  console.log("todoSlice.actions", setData());

  debugger;
  try {
    let result = yield call(() =>
      callAPI({ url: "https://jsonplaceholder.typicode.com/todos/" })
    );
    yield put(setData(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* todoSaga() {
  yield takeEvery(todoSlice.actions.fetchData().type, fetchTodoDataSaga);
}
