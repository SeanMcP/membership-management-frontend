import THEME from 'styles/theme'

export const initState = {
  ...THEME.colors
}

export function reducer(state = initState, { type, payload }) {
  switch (type) {
    case 'UPDATE_BRAND': {
      const { key, value } = payload
      return {
        ...state,
        [key]: value
      }
    }
    default: {
      return state
    }
  }
}
