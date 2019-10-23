import * as userApi from './service';

export default {
  namespace: 'user',
  state: {
      lyc:"66666"
  },

  effects: {
    * effectsDemo(payload, { select, call, put }) {
      const { status, data } = yield call(userApi.homepage, {
        ...payload
      });
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },


  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
