export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const FETCH_TODOS = "FETCH_TODOS";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const FETCH_USERS = "FETCH_USERS";

export const fetchUsersTodos = () => {
  return dispatch => {
    let users_data = [];
    let todos_data = [];
    try {
      if (typeof localStorage.getItem("users") != "undefined") {
        users_data = JSON.parse(localStorage.getItem("users"));
      }
      if (typeof localStorage.getItem("todos") != "undefined") {
        todos_data = JSON.parse(localStorage.getItem("todos"));
      }
      console.log("usersdata from localstorage", JSON.stringify(users_data));
      console.log("todosdata from localstorage", JSON.stringify(todos_data));
    } catch (error) {
      localStorage.clear();
    }

    dispatch({
      type: FETCH_TODOS,
      todos: todos_data || []
    });
    dispatch({
      type: FETCH_USERS,
      users: users_data || []
    });
  };
};

export const addTodo = params => {
  return dispatch => {
    return dispatch({
      type: ADD_TODO,
      params: params
    });
  };
};

export const editTodo = (key, params) => {
  return dispatch => {
    return dispatch({
      type: EDIT_TODO,
      key: key,
      params: params
    });
  };
};

export const deleteTodo = key => {
  return dispatch => {
    return dispatch({
      type: DELETE_TODO,
      key: key
    });
  };
};

export const addUser = params => {
  return dispatch => {
    return dispatch({
      type: ADD_USER,
      params: params
    });
  };
};

export const editUser = (key, params) => {
  return dispatch => {
    return dispatch({
      type: EDIT_USER,
      key: key,
      params: params
    });
  };
};

export const deleteUser = key => {
  return dispatch => {
    return dispatch({
      type: DELETE_USER,
      key: key
    });
  };
};
