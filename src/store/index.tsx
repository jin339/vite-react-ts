import { legacy_createStore as createStore, combineReducers } from 'redux'

import listReducer from './reducers/listReducer'

const rootReducer = combineReducers({
  listReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer)
export default store
