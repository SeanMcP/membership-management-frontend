import { USER_ACTIONS } from 'actions/userActions'

export const userState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = userState, { type, payload }) {
  switch (type) {
    case USER_ACTIONS.REGISTER: {
      return {
        ...state,
        isAuthenticated: true
      }
    }
    case USER_ACTIONS.LOGIN: {
      return {
        ...state,
        isAuthenticated: true
      }
    }
    case USER_ACTIONS.READ_USER_PROFILE: {
      return {
        ...state,
        user: payload.user,
        isAuthenticated: payload.isAuthenticated
      }
    }
    case USER_ACTIONS.LOGOUT: {
      return {
        ...state,
        user: {},
        isAuthenticated: false
      }
    }
    default: {
      return state
    }
  }
}
