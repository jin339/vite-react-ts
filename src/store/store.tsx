import { legacy_createStore as createStore, combineReducers } from 'redux'

import addReducer from './reducers/addReducer'

export interface RootState {
  addReducer: ReturnType<typeof addReducer>
}

const rootReducer = combineReducers({
  addReducer,
})

const store = createStore(rootReducer)

export default store
