import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./usersConstant";
import axios from "axios";

// Action Creator Functions

export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

export function fetchUsersFailure(errors) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: errors,
  };
}

export function fetchUsers() {
  return async (dispatch) => {
    dispatch(fetchUsersRequest);
    try {
      const response = await axios({
        method: "get",
        url: "https://reqres.in/api/users?page=1",
        json: true,
      });

      if (!response) {
        new Error("Could not get the users.");
      }

      const users = response.data.data;

      dispatch(fetchUsersSuccess(users));
    } catch (e) {
      const errMsg = e.message;
      dispatch(fetchUsersFailure(errMsg));
    }
  };
}
