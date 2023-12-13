import { legacy_createStore as createStore, combineReducers } from 'redux'

// import addReducer from './reducers/addReducer'
// const rootReducer = combineReducers({
//   addReducer,
// })

// 动态引入
const importAllReducers = async () => {
  const context = import.meta.glob('./reducers/*.tsx')
  const modules = {} as Record<string, any>

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
