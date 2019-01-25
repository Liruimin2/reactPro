import React from 'react'
import {
 Card, Button, notification
} from 'antd'
import './index.less'
export default class notifications extends React.Component{
  openNotification=(type,derection)=>{
    notification[type]({
      message:'上班好辛苦',
      description:'今天终于周四了，马上又要周末了呢'
    })
  }
  render(){
    return(
    < div className = "card-warin" >
      <Card title="通知消息提示框" >
        < Button type = "primary"
        onClick = {
            () => this.openNotification ('success')}> success </Button>
        < Button type = "primary"
        onClick = {
          () => this.openNotification('info')
        } > info </Button>
        < Button type = "primary"
        onClick = {
          () => this.openNotification('warning')
        } > warning </Button>
        < Button type = "primary"
        onClick = {
          () => this.openNotification('error')
        } > err </Button>
        < Button type = "primary"
        onClick = {
          () => this.openNotification('open')
        } > open</Button>
      </Card>
    </div>
    )
  }
}
