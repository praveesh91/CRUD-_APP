import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_USERS } from "../actions";

const initState = {
  users: []
};

// Operations for local storage
// setter
// localStorage.setItem('myData', data);
// getter
// localStorage.getItem('myData');
// remove
// localStorage.removeItem('myData');
// remove all
// localStorage.clear();

function storeUsersLocally(data) {
  localStorage.setItem("users", JSON.stringify(data));
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: state.users.concat(action.users)
      };

    case ADD_USER:
      storeUsersLocally([
        ...state.users,
        { ...action.params, key: state.users.length }
      ]);
      return {
        ...state,
        users: [...state.users, { ...action.params, key: state.users.length }]
      };

    case DELETE_USER:
      storeUsersLocally(state.users.filter(user => user.key !== action.key));
      return {
        ...state,
        users: state.users.filter(user => user.key !== action.key)
      };

    case EDIT_USER:
      let temp_users = state.users.map(user => {
        if (user.key === action.key) {
          return {
            ...user,
            name: action.params.name,
            email: action.params.email
          };
        } else return user;
      });
      storeUsersLocally(temp_users);
      return {
        ...state,
        users: temp_users
      };

    default:
      return state;
  }
}
