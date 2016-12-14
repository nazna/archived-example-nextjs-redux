import { createReducer } from "redux-act";
import { increment, decrement } from "../actions";

export default createReducer({
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
}, 0);
