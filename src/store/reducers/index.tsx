const importAllReducers = async () => {
  const context = import.meta.glob('./*.tsx')
  const modules = {} as Record<string, any>

  for (const key in context) {
    const moduleName = key.replace(/^\.\/(.*)\.tsx$/, '$1')
    const module = (await context[key]()) as { default: any }
    modules[moduleName] = module.default
  }

  return modules
}

const reducers = await importAllReducers()
export default reducers
