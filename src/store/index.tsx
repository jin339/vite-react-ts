import { legacy_createStore as createStore, combineReducers } from 'redux'

import allReducer from './reducers'

const rootReducer = combineReducers({
  ...allReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer)
export default store
