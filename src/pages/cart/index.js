import Taro, { useState,useEffect, usePullDownRefresh, useReachBottom} from '@tarojs/taro'
import ComponentTest from '../../components/ComponentTest';
import { useSelector, useDispatch ,useStore } from '@tarojs/redux';
import { AtButton,AtList,AtListItem,AtActivityIndicator,AtDivider} from 'taro-ui'
import { View,Button } from '@tarojs/components'
import DescRichText from '../../components/taroWxParse/DescRichText'
import './index.scss';

// https://react-redux.js.org/next/api/hooks

export default function Cart() {

  const [more, setMore] = useState("没有更多了");
  const [showpull, setShowpull] = useState(false);

  const dispatch = useDispatch();
  const store = useStore();
  const state=store.getState();
  let list = useSelector(state => state.cart.list);
  useEffect(() => {
    dispatch({
      type: 'cart/effectsDemo',
      payload: { lyc:"123123123"},
    });
  }, [])



  usePullDownRefresh(() => {
    setShowpull(true);
    setTimeout(function(){
      Taro.stopPullDownRefresh(); 
      setShowpull(false);
    },1500)
   
  })

  useReachBottom(() => {
    console.info("111111111");
    setMore("正在加载");
    setTimeout(function(){
      setMore("没有更多了");
    },1000)
  })



  return (
    <div>
      {showpull?
      <AtActivityIndicator  className="playCenter" mode='normal'  content='加载中...' color="#00000"></AtActivityIndicator>
        :""}
      

      <h1 style="color:blue">异步获取接口数据Demo 长列表展示Demo  集成wxparse Beta</h1>
      <AtList>
        {
          list.map((item,index)=>{
            return (
                <DescRichText key={item.id} desc={item.desc}/>  
            )
          })
        }
        </AtList>

         <AtList>
        {
          list.map((item,index)=>{
            return (
              <AtListItem  key={item.id} title={item.desc}></AtListItem>
            )
          })
        }
        </AtList>   

        <AtDivider content={more} fontColor='#2d8cf0' lineColor='#2d8cf0' />   
    </div>
  )
}
  
  Cart.config = {
    navigationBarTitleText: "Card",
    enablePullDownRefresh: true, 
    onReachBottomDistance:100
  }

