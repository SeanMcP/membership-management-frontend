import { USER_ACTIONS } from 'actions/userActions'

export const userState = {
  name: 'Neil Amin',
  user: {}
}

export default function(state = userState, { type, payload }) {
  switch (type) {
    case USER_ACTIONS.LOGIN: {
      return {
        ...state,
        user: payload.user
      }
    }
    case USER_ACTIONS.SET_USER: {
      return {
        ...state,
        name: payload.name
      }
    }
    default: {
      return state
    }
  }
}
