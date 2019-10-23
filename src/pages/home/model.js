import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    title:'HOOKS组件：我是 Redux model传来的标题',
  },
  effects: {
    * load(_, {call, put}) {
      yield call(homeApi.homepage, {
        platform: 'wap',
        rent_mode: 2
      });
      yield put({ type: 'save',payload: {
        title: '大事'
      } });
    },
  },
  reducers: {
    save(state, { payload }) {
      return {...state, ...payload};
    },
  },
};
