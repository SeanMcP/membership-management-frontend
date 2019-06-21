import axios from 'axios'

export const USER_ACTIONS = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  SET_USER: 'SET_USER'
}

export const login = ({ email, password }) => {
  const url = 'http://localhost:3001/users/login'
  return async dispatch => {
    try {
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
    } catch (err) {
      alert(err)
    }
  }
}

export const register = ({ name, email, password }) => {
  const url = 'http://localhost:3001/users/register'
  return async dispatch => {
    try {
      const user = await axios.post(url, {
        name,
        email,
        password
      })
      dispatch({
        type: USER_ACTIONS.REGISTER,
        payload: {
          user
        }
      })
    } catch (err) {
      alert(err)
    }
  }
}

export const setUser = name => ({
  type: USER_ACTIONS.SET_USER,
  payload: {
    name
  }
})
