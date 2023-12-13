import { legacy_createStore as createStore, combineReducers } from 'redux'

import reducers from './reducers/index'

const rootReducer = combineReducers({
  ...reducers,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer)
export default store
