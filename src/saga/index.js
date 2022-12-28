import { fork, call, all } from "redux-saga/effects";
import todoSaga from "./featch_todo";
import postSaga from "./featch_post";

export default function* rootSaga() {
  try {
    yield all([
      fork(todoSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
      fork(postSaga),
    ]);
  } catch (e) {
    debugger;
    console.log(e);
  }
}
