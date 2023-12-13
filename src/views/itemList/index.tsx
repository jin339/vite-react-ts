import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, ActionType } from 'src/store'

const Index: FC = () => {
  const count = useSelector((state: RootState) => state.addReducer.count)
  const dispatch = useDispatch()
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'add' } as ActionType)}>+</button>
      <button onClick={() => dispatch({ type: 'minus' } as ActionType)}>-</button>
    </div>
  )
}

export default Index
