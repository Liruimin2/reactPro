import React from 'react'
import {
  Card,
  Button,
  Table,
  Form,
  Input,
  Checkbox,
  Select,
  Radio,
  Icon,
  message,
  Modal,
  DatePicker
} from 'antd'
import axios from '../../axios/index'
import Utils from './../../util/util';
import ETable from '../../component/ETable/index'
import './index.less'
import Moment from 'moment'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
export default class User extends React.Component {
  state={
    list:[]
  }
   params = {
     page: 1
   }
  handleOption=(type)=>{
    console.log(type,'type');
    let item = this.state.selectedItem;
    console.log(!item);
      if (type == "create") {
        this.setState({
          title: "创建员工",
          isvisible: true,
          type
        });
      } else if (type=='edit' || type=='detail'){
        if(!item){
         Modal.info({
           title: '信息',
           content: '请选择一个用户'
         })
         return;
        }else{
          this.setState({
            title: type == 'edit' ? '编辑用户信息' : '查看用户信息',
            isvisible: true,
            userInfo: item,
            type
          })
        }
        
      }else if(type=='delete'){
        if(!item){
          Modal.info({
            title:'信息',
            content:'选择一个用户'
          })
          return
        }
        Utils.ui.confirm({
          text: '确定要删除此用户吗？',
          onOk: () => {
            axios.ajax({
              url: '/user/delete',
              data: {
                params: {
                  id: item.id
                }
              }
            }).then((res) => {
              if (res.code == 0) {
                this.setState({
                  isVisible: false
                })
                this.requestList();
              }
            })
          }
        })
        // Modal.info({
        //   title:'删除信息',
        //   content: '确定要删除该用户么？'
        // }).then(
        //   axios.ajax({
        //     url: '/user/delete',
        //       data: {
        //         params: {
        //           id: item.id
        //         }
        //       }
        //     }).then((res) => {
        //           if (res.code == 0) {
        //             this.setState({
        //               isVisible: false
        //           })
        //       this.requestList();
        //     }
        //   })
        // )
      } 
  }
  handleSubmit=()=>{
    let type = this.state.type; 
    let datas = this.userForm.props.form.getFieldsValue();
    if (type == 'create' || type == 'edit') {
      axios.ajax({
        url: type == 'create' ? '/user/add' : '/user/edit',
        data: {
          params: {
            datas
          }
        }
      }).then((res) => {
        if (res.code == 0) {
          this.setState({
            isvisible: false
          })
          message.success(type == 'create' ? '添加信息成功' : '编辑信息成功')
          setTimeout(() => {
            this.responseList();
          }, 500);
        }
      })
      
    } else {
      this.setState({
        isvisible: false
      })
    }
    
  }
  componentDidMount=()=>{
    this.responseList();
  }
  responseList=()=>{
    let self = this;
     axios.ajax({
       url: '/tablelist',
       data: {
         params: {
           page: this.params.page
         }
       }
     }).then((res) => {
       if (res.code === 0) {
         res.result.list.map((item, index) => {
           item.key = index;
         })
         this.setState({
           list: res.result.list.map((item, index) => {
             item.key = index;  
             return item;
           }),
           pagination: Utils.pagination(res, (current) => {
             self.params.page = current;
             this.responseList();
           })
         })
       }
     })
  }
  render(){
    const columns = [{
      title: 'id',
      dataIndex: 'id'
    }, {
      title: '用户名',
      dataIndex: 'userName'
    }, {
      title: '性别',
      dataIndex: 'sex',
      render(sex) {
        return sex == 1 ? '男' : '女'
      }
    }, {
      title: '状态',
      dataIndex: 'state',
      render(state) {
        let config = {
          '1': '咸鱼一条',
          '2': '风华浪子',
          '3': '北大才子一枚',
          '4': '百度FE',
          '5': '创业者'
        }
        return config[state];
      }
    }, {
      title: '爱好',
      dataIndex: 'interest',
      render(interest) {
        let config = {
          '1': '游泳',
          '2': '打篮球',
          '3': '踢足球',
          '4': '跑步',
          '5': '爬山',
          '6': '骑行',
          '7': '桌球',
          '8': '麦霸'
        }
        return config[interest];
      }
    }, {
      title: '爱好',
      dataIndex: 'isMarried',
      render(isMarried) {
        return isMarried ? '已婚' : '未婚'
      }
    }, {
      title: '生日',
      dataIndex: 'birthday'
    }, {
      title: '联系地址',
      dataIndex: 'adress'
    }, {
      title: '早起时间',
      dataIndex: 'time'
    }];
    return(
      <div>
        <Card>
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            < FormItem >
              <Input type = "password"
            placeholder = "请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primaty">登陆</Button>
            </FormItem>
          </Form>
        </Card>
        <Card style={{margin:"10px 0"}} className="button-pri">
          <Button type="primary"icon ="plus" onClick={()=>this.handleOption('create')}>创建员工</Button>
          < Button 
          icon = "edit"
          onClick = {
            () => this.handleOption('edit')
          } > 编辑员工 </Button>
          < Button type = "primary"
          onClick = {
            () => this.handleOption('detail')
          } > 员工详情 </Button>
          < Button 
          icon = "delete"
          onClick = {
            () => this.handleOption('delete')
          } > 删除员工 </Button>
        </Card>
        <div class="content-wrap">
          < ETable columns = {
            columns
          }
          updateSelectedItem={Utils.updateSelectedItem.bind(this)}
           selectedRowKeys = {
             this.state.selectedRowKeys
           }
           dataSource = {
             this.state.list
           }
           pagination = {
             this.state.pagination
           }
           />

        </div>
        <Modal
          title={this.state.title}
          visible={this.state.isvisible}
          onOk={this.handleSubmit}
          width={800}
          onCancel={()=>{
            this.userForm.props.form.resetFields();
            this.setState({
              isvisible:false,
              userInfo:''
            })
          }}>
            < UserForm userInfo = {
              this.state.userInfo
            }
            type = {
              this.state.type
            }
            wrappedComponentRef = {
              (inst) => {
                this.userForm = inst
              }
            }
            />
          </Modal>
      </div>
    )
  }
}
class UserForm extends React.Component{
  getState = (state) => {
    return {
      '1': '咸鱼一条',
      '2': '风华浪子',
      '3': '北大才子一枚',
      '4': '百度FE',
      '5': '创业者'
    } [state]
  }
  render(){
    const {
      getFieldDecorator
    } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 16
      }
    };
    const userInfo = this.props.userInfo || {};
    const type = this.props.type;
    return(
      < Form layout = "horizontal" > 
        < FormItem label = "姓名" {
          ...formItemLayout
        } >
        {
          userInfo && type =='detail'?userInfo.userName:
          getFieldDecorator('user_name',{
            initialValue:userInfo.userName
          })(
            <Input type="text" placeholder="请输入用户名"/>
          )
        }</FormItem>
        <FormItem label="性别" {
          ...formItemLayout
        }>
        {
          userInfo && type == 'detail' ? userInfo.sex :
            getFieldDecorator('sex', {
              initialValue: userInfo.sex
            })( 
              < RadioGroup > 
                < Radio value = {
                    1
                  } > 男 </Radio>
                <Radio value={2}>女 </Radio>
              </RadioGroup >
            
            )
        }
        </FormItem>
        <FormItem label="状态" {...formItemLayout}>
          {
            userInfo && type=='detail'?this.getState(userInfo.state):getFieldDecorator('state',{initialValue:userInfo.state})(
              < Select >
                <Option value = {
                  1
                } > 咸鱼一条 </Option> 
                < Option value = {
                  2
                } > 风华浪子 </Option> 
                <Option value = {
                  3
                } > 北大才子一枚 </Option> 
                <Option value = {
                  4
                } > 百度FE </Option>
                 <Option value = {
                  5
                } > 创业者 </Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="生日" {...formItemLayout}>
        {
          userInfo && type == 'detail' ? userInfo.birthday :
            getFieldDecorator('birthday', {
              initialValue: Moment(userInfo.birthday)
            })( <DatePicker />)
        }
        </FormItem>
        <FormItem label="联系地址"{...formItemLayout}>
          {
            userInfo && type == 'detail' ? userInfo.adress:getFieldDecorator('adress',{
              
                  initialValue: userInfo.adress
                }
              )(
                < Input.TextArea row = {
                  3
                }
                placeholder = "请输入联系地址" />
              )
           
          }
        </FormItem>
      </Form>

    )
  }
}
UserForm = Form.create({})(UserForm);