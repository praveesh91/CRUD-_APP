import { ADD_TODO, DELETE_TODO, EDIT_TODO, FETCH_TODOS } from "../actions";

const initState = {
  todos: []
};

function storeTodosLocally(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}

export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: state.todos.concat(action.todos)
      };

    case ADD_TODO:
      storeTodosLocally([
        ...state.todos,
        { ...action.params, key: state.todos.length }
      ]);
      return {
        ...state,
        todos: [...state.todos, { ...action.params, key: state.todos.length }]
      };

    case DELETE_TODO:
      storeTodosLocally(state.todos.filter(todo => todo.key !== action.key));
      return {
        ...state,
        todos: state.todos.filter(todo => todo.key !== action.key)
      };

    case EDIT_TODO:
      let temp_todos = state.todos.map(todo => {
        if (todo.key === action.key) {
          return {
            ...todo,
            action: action.params.action,
            email: action.params.dateadded
          };
        } else return todo;
      });
      storeTodosLocally(temp_todos);
      return {
        ...state,
        todos: temp_todos
      };

    default:
      return state;
  }
}
