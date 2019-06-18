import { USER_ACTIONS } from 'actions/userActions'

export const userState = {
  name: 'Neil Amin'
}

export default function(state = userState, { type, payload }) {
  switch (type) {
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
