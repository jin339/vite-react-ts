import { legacy_createStore as createStore, combineReducers } from 'redux'

const importAllReducers = async () => {
  const context = import.meta.glob('./reducers/*.tsx')
  const modules = {} as Record<string, any>

  // Use Promise.all to await all imports
  await Promise.all(
    Object.entries(context).map(async ([key, value]) => {
      const moduleName = key.replace(/^\.\/reducers\/(.*)\.tsx$/, '$1')
      const module = (await value()) as { default: any }
      modules[moduleName] = module.default
    })
  )

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
