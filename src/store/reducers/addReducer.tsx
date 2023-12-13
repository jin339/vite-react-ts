interface StateType {
  count: number
}

const initialState: StateType = {
  count: 0,
}

export type ActionType = { type: 'add' } | { type: 'minus' }

const rootReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 }
    case 'minus':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export default rootReducer
