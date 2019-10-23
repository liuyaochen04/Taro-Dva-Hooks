import { View,Button } from '@tarojs/components'



const ComponentTest = ({ onFun, text }) => {
  return (
   <div>
     <p>
       <View onClick={onFun}>``````组件~~~</View>
        <Button onClick={onFun}>组件onFun</Button>
        <div>
            {text}
        </div>
        </p>
   </div>
  );
};


export default ComponentTest;