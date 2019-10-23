import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtCard ,AtList, AtListItem } from "taro-ui"
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({home}) => ({
  ...home,
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentDidMount = () => {
    // this.props.dispatch({
    //   type: 'home/load',
    // });
  };

  render() {
    return (
      <View className="home-page">
       <AtCard
          note='详见Taro-Hooks'
          title={this.props.title}
        >
          <AtList>
            <AtListItem title='useState' />
            <AtListItem title='useEffect' />
            <AtListItem title='useCallback' />
            <AtListItem title='useMemo' />
            <AtListItem title='useRef' />
            <AtListItem title='useMemo' />
            <AtListItem title='useContext' />

            <AtListItem thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' title='useDispatch' extraText='dva' />
            <AtListItem thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' title='useStore'  extraText='dva'/>
            <AtListItem thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' title='useSelector'  extraText='dva'/>
          </AtList>
        </AtCard>
        
      </View>
    )
  }
}

