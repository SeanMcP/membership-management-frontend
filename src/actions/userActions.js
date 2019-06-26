import axios from 'axios'

export const USER_ACTIONS = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  READ_USER_PROFILE: 'READ_USER_PROFILE',
  LOGOUT: 'LOGOUT',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
}

const url = 'https://membership-management-api.herokuapp.com'

// Regiser New User
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
        type: USER_ACTIONS.REGISTER
      })
      dispatch(readUserProfile())
    } catch (err) {
      alert(err)
    }
  }
}

// Login User
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
        type: USER_ACTIONS.LOGIN
      })
      dispatch(readUserProfile())
    } catch (err) {
      alert(err)
    }
  }
}

// Read User Profile
export const readUserProfile = () => {
  const endpoint = `${url}/users/me`
  return async dispatch => {
    try {
      const user = await axios.get(endpoint)
      console.log(user)
      dispatch({
        type: USER_ACTIONS.READ_USER_PROFILE,
        payload: {
          user: user.data,
          isAuthenticated: true
        }
      })
    } catch (err) {
      dispatch({
        type: USER_ACTIONS.READ_USER_PROFILE,
        payload: {
          user: {},
          isAuthenticated: false
        }
      })
      alert(err)
    }
  }
}

// Logout User
export const logout = () => {
  const endpoint = `${url}/users/logout`
  return async dispatch => {
    try {
      const user = await axios.post(endpoint)
      alert(`${user.data.user.name} has been logged out`)
      dispatch({
        type: USER_ACTIONS.LOGOUT
      })
    } catch (err) {
      alert(err)
    }
  }
}

// Logout All User Sessions
export const logoutAll = () => {
  const endpoint = `${url}/users/logoutAll`
  return async dispatch => {
    try {
      const user = await axios.post(endpoint)
      alert(`${user.data.user.name} has been logged out of all sessions`)
      dispatch({
        type: USER_ACTIONS.LOGOUT
      })
    } catch (err) {
      alert(err)
    }
  }
}

// Update User


// Delete User

