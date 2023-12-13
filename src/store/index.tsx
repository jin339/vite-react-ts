import { legacy_createStore as createStore, combineReducers } from 'redux'
const importAllReducers = async () => {
  const context = import.meta.glob('./reducers/*.tsx')
  const modules = {} as Record<string, any>

  for (const key in context) {
    const moduleName = key.replace(/^\.\/reducers\/(.*)\.tsx$/, '$1')
    const module = (await context[key]()) as { default: any }
    modules[moduleName] = module.default
  }

  return modules
}

const reducers = await importAllReducers()

const rootReducer = combineReducers({
  ...reducers,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer)
export default store
