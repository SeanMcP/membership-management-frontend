import { USER_ACTIONS } from 'actions/userActions'

export const userState = {
  isAuthenticated: false,
  email: '',
  name: '',
  id: ''
}

export default function(state = userState, { type, payload }) {
  switch (type) {
    case USER_ACTIONS.REGISTER: {
      return {
        ...state,
        email: payload.user.email,
        name: payload.user.name,
        id: payload.user._id,
        isAuthenticated: true
      }
    }
    case USER_ACTIONS.LOGIN: {
      return {
        ...state,
        email: payload.email,
        name: payload.name,
        id: payload._id,
        isAuthenticated: true
      }
    }
    case USER_ACTIONS.READ_USER_PROFILE: {
      return {
        ...state,
        email: payload.user.email,
        name: payload.user.name,
        id: payload.user._id,
        isAuthenticated: payload.isAuthenticated
      }
    }
    case USER_ACTIONS.LOGOUT: {
      return {
        ...userState
      }
    }
    default: {
      return state
    }
  }
}
