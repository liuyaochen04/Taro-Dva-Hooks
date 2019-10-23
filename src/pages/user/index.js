import Taro, { useState,useEffect } from '@tarojs/taro'
import ComponentTest from '../../components/ComponentTest';
import { useSelector, useDispatch ,useStore } from '@tarojs/redux';
import { AtButton } from 'taro-ui'
import { View,Button } from '@tarojs/components'

// https://react-redux.js.org/next/api/hooks

export default function Products() {

  console.info(`useDispatch: `, useDispatch);
  const dispatch = useDispatch();
  const store = useStore();
  const state=store.getState();
  console.info(`store: `, store.getState());
  let lyc = useSelector(state => state.user.lyc);

  const handle1 = () => {
    dispatch({
      type: 'user/save',
      payload: { lyc:"123123123"},
    });
  };

  const handle2 = () => {
    dispatch({
      type: 'user/save',
      payload: { lyc:"789789797"},
    });
  };

  const onGotUserInfo=(e)=> {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  };

  function gotoNext(e) {
    Taro.navigateTo({
      url: '/pages/test/index?id=2&type=test'
    })
  };

  return (
    <div>
      <h2>welcome to Hooks</h2>
      <h4>{state.user.lyc}</h4>
      <ComponentTest onFun={handle2} text={lyc} />
      <View className='index'>
         <AtButton type='primary' openType="getUserInfo" lang="zh_CN" onGetUserInfo={onGotUserInfo} >获取微信api</AtButton>
         <AtButton type='secondary'onClick={gotoNext}>跳转页面</AtButton>
         <Button type='primary'onClick={handle1}>事件1</Button>
      </View>
    </div>
  );
}