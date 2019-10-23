import * as cartApi from './service';

export default {
  namespace: 'cart',
  state: {
      list:[{desc:"init"}]
  },

  effects: {
    * effectsDemo(payload, { call, put }) {
      const { status, data } = yield call(cartApi.demo, {...payload});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            list: data,
          } 
        });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      console.info("payload",payload);
      return { ...state, ...payload };
    },
  }

};
