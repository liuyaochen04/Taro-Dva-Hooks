import Taro, {Component} from '@tarojs/taro'
import {View}from '@tarojs/components'
import './DescRichText.scss'
var WxParse = require('./wxParse/wxParse');

export default class DescRichText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      desc: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps::',nextProps)
    var self = this
    self.setState({
      desc:nextProps.desc
    })
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
    var self = this
    var that =  this.$scope
    if (self.state.desc) {
      console.log('有内容',self.state.desc)
      var  article = self.state.desc
      WxParse.wxParse('article', 'html', article, that, 5)
    }
    else {
      console.log('没有获取到资源')
    }
  }
  componentWillMount() {
  }

  componentDidMount() {

  }

  componentWillUnmout() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <import src='./wxParse/wxParse.wxml'/>
        <template is="wxParse" data="{{wxParseData:article.nodes}}"/>
      </View>
    )
  }
}
