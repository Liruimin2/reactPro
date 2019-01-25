import React from 'react'
import {
  Card,
  Button,
  message
} from 'antd'
import './index.less'
export default class notifications extends React.Component{
  showMessage=(type)=>{
    message[type]('这是一条消息')
  }
  render(){
    return(
      <div className="message-waring">
        <Card title="全局提示框">
          < Button type = "primary"
          onClick = {
            () => this.showMessage('success')
          } > success </Button>
        </Card>
      </div>
    )
  }
}