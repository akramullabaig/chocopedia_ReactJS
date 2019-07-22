import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, CHANGE_VALUES } from "../ActionTypes/Login";

export function getLogin(email, password) {
  return { type: GET_LOGIN, email, password }
}
export function getLoginSuccess(user) {
  return { type: GET_LOGIN_SUCCESS, user }
}
export function getLoginFailure(error) {
  return { type: GET_LOGIN_FAILURE, error }
}
export function changeValues(fieldName, fieldValue) {
  return { type: CHANGE_VALUES, fieldName, fieldValue }
}