import { combineReducers, legacy_createStore } from "redux";
import { adding, editing, removing } from "./actions";
import { addUser } from "./reducers/adduser";

const reducers = combineReducers({
  adding,
  removing,
  addUser,
  editing,
});

export const store = legacy_createStore(reducers);
