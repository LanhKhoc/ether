import Request from 'api/RequestTask.js'

const UserAPI = {
  login(userInfo) {
    return Request().post('/users/login', userInfo);
  }
}

export default UserAPI;