export interface ListArrayTpye {
  key: string
  label?: string
  description?: string
  time: any
}

export interface StateType {
  list?: ListArrayTpye[]
}

const initialState: StateType = {
  list: [
    {
      key: '1',
      label: 'Ant Design Title Title Title Title 1',
      description:
        'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      time: '2023/12/13 11:51:19',
    },
    {
      key: '2',
      label: 'Ant Design Title 2',
      description:
        'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      time: '2023/12/14 12:51:19',
    },
  ],
}

type ActionType = { type: 'add' } | { type: 'minus' }

const addReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    // case 'add':
    //   return { ...state, count: state.count + 1 }
    // case 'minus':
    //   return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export default addReducer
