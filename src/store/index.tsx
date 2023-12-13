import { legacy_createStore as createStore, combineReducers } from 'redux'

import addReducer, { ActionType as AddActionType } from './reducers/addReducer'

export interface RootState {
  addReducer: ReturnType<typeof addReducer>
}
export type ActionType = AddActionType

const rootReducer = combineReducers({
  addReducer,
})
const store = createStore(rootReducer)
export default store
