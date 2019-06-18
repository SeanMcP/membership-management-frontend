export const USER_ACTIONS = {
  SET_USER: 'SET_USER'
}

export const setUser = name => ({
  type: USER_ACTIONS.SET_USER,
  payload: {
    name
  }
})
