import Taro, { useState,useEffect } from '@tarojs/taro';
import { useSelector, useDispatch ,useStore } from '@tarojs/redux';

// https://react-redux.js.org/next/api/hooks

export default  function TtestHook() {



useEffect(() => {
  console.log(this.$router.params) 
}, [])


  return (
    <div>
      <h2>传来的参数</h2>
      <div>{JSON.stringify(this.$router.params)}</div>
    </div>
  );
}

TtestHook.config = {
  navigationBarTitleText: "Test",
};

