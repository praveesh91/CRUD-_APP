import { combineReducers } from "redux";
import users from "./users";
import todos from "./todos";

const userTodo = combineReducers({
  users,
  todos
});

export default userTodo;
