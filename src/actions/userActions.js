import axios from 'axios'

export const USER_ACTIONS = {
  SET_USER: 'SET_USER',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER'
}

export const login = (email, password) => {
  const url = 'http://localhost:3001/users/login'
  return async dispatch => {
    const user = await axios.post(url, {
      email,
      password
    })
    dispatch({
      type: USER_ACTIONS.LOGIN,
      payload: {
        user
      }
    })
  }
}

export const setUser = name => ({
  type: USER_ACTIONS.SET_USER,
  payload: {
    name
  }
})
