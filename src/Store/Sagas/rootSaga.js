import { call, all } from "redux-saga/effects";
import searchSaga from "./searchSaga";

export const rootSagas = [...searchSaga];

export default function* rootSaga() {
  yield all(rootSagas.map(saga => call(saga)));
}
