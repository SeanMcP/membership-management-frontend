import axios from 'axios'

export const USER_ACTIONS = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  SET_USER: 'SET_USER',
  READ_USER_PROFILE: 'READ_USER_PROFILE'
}

const url = 'https://membership-management-api.herokuapp.com'

export const register = ({ name, email, password }) => {
  const endpoint = `${url}/users/`
  return async dispatch => {
    try {
      const user = await axios.post(endpoint, {
        name,
        email,
        password
      })
      axios.defaults.headers.common = `Bearer ${user.data.token}`
      dispatch({
        type: USER_ACTIONS.REGISTER,
        payload: {
          user: user.data.user
        }
      })
    } catch (err) {
      alert(err)
    }
  }
}

export const login = ({ email, password }) => {
  const endpoint = `${url}/users/login`
  return async dispatch => {
    try {
      const user = await axios.post(endpoint, {
        email,
        password
      })
      axios.defaults.headers.common = {'Authorization': `Bearer ${user.data.token}`}
      dispatch({
        type: USER_ACTIONS.LOGIN,
        payload: {
          user: user.data.user
        }
      })
    } catch (err) {
      alert(err)
    }
  }
}

export const readUserProfile = () => {
  const endpoint = `${url}/users/me`
  return async dispatch => {
    try {
      const user = await axios.get(endpoint)
      console.log(user)
      dispatch({
        type: USER_ACTIONS.READ_USER_PROFILE,
        payload: {
          user: user.data.user
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
