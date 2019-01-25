import React from 'react';
import './index.less';
import {
  Card,
  Spin,
  Icon,
  Alert
}from 'antd'
export default class Loading extends React.Component{
  render(){
    const icon = < Icon type = "loading"
    style = {
      {
        fontSize: 24
      }
    }
    />
    return(
      <div className="card-loading">
      <Card title="spin用法" className="card-spin">
        <Spin size = "small"/ >
        <Spin/>
        <Spin size = "large"/ >
        < Spin indicator = {
          icon
        }
        spinning = {
          true
        } > 
        </Spin>
      </Card>
      <Card title="内容遮罩">
        < Spin indicator = {
          icon
        }
        spinning = {
          true
        } >
          < Alert message = "欢迎━(*｀∀´*)ノ亻!"
          description = "欢迎来到react高级实践课程"
          type = "loading"
          style = {
            {
              marginBotton: 10
            }
          } >
          </Alert>
        </Spin>
        <Spin tip="加载中...">
          <Alert message="react" description="欢迎来到react实战课程" type="warning"></Alert>
        </Spin>
      </Card>
      </div>
    )
  }
}