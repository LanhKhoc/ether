import * as ActionType from './constants';
import { _RequestUserAPI } from 'api/'

export const login = (userInfo) => {
  return (dispatch) => {
    _RequestUserAPI.login(userInfo)
      .fork(
        console.log.bind(console),
        console.log.bind(console)
      )
  }
}