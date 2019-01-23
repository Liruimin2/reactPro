import React from 'react';
import './index.less';
import {
  Button,
  Card,
  Modal
} from 'antd';
export default class Buttons extends React.Component {
  state={
    showModal1:false,
    showModal2:false,
    showModal3:false
  }
  // [type]是一个变量，handleOpen里面如果需要传参要加()绑定
  handleOpen=(type)=>{
    this.setState({
      [type]:true
    })
  }
  handleCrim=(type)=>{
    Modal[type]({
      title:'确认',
      content:'react好难学',
      onOk(){
        // 调接口
      },
      onCancel(){

      }
    })
  }
  render(){
    return(
      <div className="base-modal">
        <Card title="基础模态框" className="card-basic">
          <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>open</Button>
          <Button type = "primary"
          onClick = {
            () => this.handleOpen('showModal2')
          } > 自定义页脚 </Button>
          < Button type = "primary"
          onClick = {
            () => this.handleOpen('showModal3')
          } > 居中模态框</Button>
        </Card>
        <Card title="二次确认模态框" className="">
          < Button onClick = {
            ()=>this.handleCrim('info')
            } > Info 
          </Button> 
          < Button onClick = {
              () =>this.handleCrim('success')
            } > Success 
          </Button> 
          < Button onClick = {
              () =>this.handleCrim('error')
            } > Error </Button> 
          <Button onClick = {
              () =>this.handleCrim('warning')
            } > Warning
          </Button>
        </Card>
        < Modal title = "React"
        visible = {
          this.state.showModal1
        }
        onCancel = {
          () => {
            this.setState({
              showModal1: false
            })
          }
        }
        onOk = {
          () => {
            this.setState({
              showModal1: false
            })
          }
        } > 模态框 </Modal>
        < Modal title = "React自定义页眉"
          okText="确定"
          cancelText="取消"
          style={{top:30}}
          visible = {
            this.state.showModal2
          }
          onCancel = {
            () => {
              this.setState({
                showModal2: false
              })
            }
          }
          onOk = {
            () => {
              this.setState({
                showModal2: false
              })
            }
          } > 模态框自定义居中 </Modal>
          < Modal title = "居中react弹框"
          wrapClassName = "vertical-center-modal"
          visible = {
            this.state.showModal3
          }
          onCancel = {
            () => {
              this.setState({
                showModal3: false
              })
            }
          }
          onOk = {
            () => {
              this.setState({
                showModal3: false
              })
            }
          } > 模态框自定义页脚 </Modal>
      </div>
    )
  }
}