import dva from 'dva';
import './index.less';
import key from 'keymaster';

const app = dva();

const model = {
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },

  effects: {
    *add(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },

    *wao(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },

  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({ type: 'add' }); });
    },
  },

  reducers: {
    wao(state) {
      const newCurrent = state.current + 100;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1 };
    },
  },
};


app.model(model);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
