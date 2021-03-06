import React from 'react';
import axios from '../../axios/index';
import {
  Card,
  Button,
  Table,
  Form,
  Select,
  Modal,
  message
} from 'antd';
import Utils from '../../util/util';
const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component {
  state={
    list:[],
    isShowCIty:false,
    reCord:{}
  }
  params={
    page:1
  }
  componentDidMount(){
    this.requestList();
  }
  requestList = ()=>{
    let self = this;
    axios.ajax({
      url: '/open_city',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      let list = res.result.item_list.map((item, index) => {
        item.key = index;
        return item;
      });
      this.setState({
        list: list,
        pagination: Utils.pagination(res, (current) => {
          self.params.page = current;
          self.requestList();
        })
      })
    })
  }
  handleOpenCity=()=>{
    this.setState({
      isShowCIty:true
    })
  }
  // 跳转到详细信息
  openOrderDetail=()=>{
    let item = this.state.selectedItem;
    console.log(item,'item22');
    
    if(!item){
      Modal.info(
        {
          title:'信息',
          content:'请先选择一条订单'
        }
      )
      return;
    }
    // 跳转到详情页面
    window.open(`/#/common/order/detail/${item.id}`,)
  }
  onRowClick=(record,index)=>{
    let selectKey = [index];
    this.setState({
      selectedRowKeys:selectKey,
      selectedItem: record
    })
    console.log(record,'record');
    
  }
 handleSubmit=()=>{
   let cityInfo = this.cityForm.props.form.getFieldsValue();
   console.log(cityInfo);
   axios.ajax({
     url: "/city/open",
     data:{params:cityInfo},
   }).then((res)=>{
     console.log(res,'res');
     
     if(res.code ===0){ 
      message.success('开通成功');
      this.setState({
        isShowCIty:false
      })
       this.requestList();
     }
   })
   
 }
  render(){
    const columns =[
      {
        title:'城市Id',
        dataIndex:'id',
      },{
        title:'城市名称',
        dataIndex:'name'
      },{
        title:'用车模式',
        dataIndex:'mode',
        render(mode){
          return mode ===1?'停车点':'禁停区'
        }
      },{
        title:'运营模式',
        dataIndex: 'op_mode',
        render(op_mode) {
          return op_mode ===1?'自营':'加盟'
        }
      },{
        title:'授权加盟',
        dataIndex: 'franchinese_name'
      },{
        title:'城市管理员',
        dataIndex: 'city_admins',
        render(arr){
          return arr.map((item)=>{
            return item.user_name
          }).join(',');
        }
      },{
        title:'城市开通时间',
        dataIndex: 'openTime'
      },{
        title:'操作时间',
        dataIndex: 'updateTime'
      },{
        title:'操作人',
        dataIndex: 'sys_user_name'
      }
    ]
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys,
      onChange: (selectedRowKeys,record) => {
        this.setState({
          selectedRowKeys,
          selectedItem: record[0]
        })
        console.log(record[0], 'reco666');
      }
      
      
    }
    return(
    <div>
      <Card>
          < FilterForm />
      </Card>
      <Card style={{marginTop:10}}>
        <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
        < Button style = {
          {
            marginLeft: '10px'
          }
        }
        onClick = {
          this.openOrderDetail
        } > 订单详情 </Button>
        <Table
        style = {
          {
            marginTop: 10
          }
        }
        rowSelection = {
          rowSelection
        }
        bordered
        columns={columns}
        dataSource={this.state.list}
        pagination={this.state.pagination}
        onRow = {
          (record, index) => {
            return {
              onClick: () => {
                this.onRowClick(record, index);
              }
            };
          }
        }
        >
        </Table>
        <Modal title="开通城市" visible={this.state.isShowCIty} onCancel={()=>{this.setState({isShowCIty:false})}} onOk={this.handleSubmit}>

            < OpenCityForm wrappedComponentRef={(form)=>this.cityForm=form} />
        </Modal>
      </Card>
    </div>
    
    )
  }
  
}
 class FilterForm extends React.Component {
   render() {
     const {
       getFieldDecorator
     } = this.props.form;
     return ( 
     < Form layout = "inline" >
       <FormItem label = "城市" > {
         getFieldDecorator('city_id')( <Select style = {
             {
               width: 100
             }
           }
           placeholder = "全部" >
           <Option value = "" > 全部 </Option> 
           <Option value = "1" > 北京市 </Option> 
           <Option value = "2" > 天津市 </Option> 
          <Option value = "3" > 深圳市 </Option> 
          </Select>
         )
       } 
       </FormItem> 
       <FormItem label = "用车模式" > {
         getFieldDecorator('mode')( 
         <Select style = {
             {
               width: 100
             }
           }
           placeholder = "全部" >
           <Option value = "" > 全部 </Option> 
           <Option value = "1" > 指定停车点 </Option> 
           <Option value = "2" > 禁止停车区 </Option> 
         </Select>
         )
       } 
       </FormItem>
        <FormItem label = "运营模式" > {
         getFieldDecorator('yy_mode')( 
         <Select style = {
             {
               width: 100
             }
           }
           placeholder = "全部" >
           <Option value = "" > 全部 </Option> 
           <Option value = "1" > 自营 </Option>
           <Option value = "2" > 加盟 </Option> 
          </Select>
         )
       } </FormItem> 
       < FormItem label = "加盟授权状态" > {
         getFieldDecorator('auth_sta')( 
         <Select style = {
             {
               width: 100
             }
           }
           placeholder = "全部" >
           <Option value = "" > 全部 </Option>  
            <Option value = "1" > 已授权 </Option> 
            <Option value = "2" > 未授权 </Option> 
        </Select>
         )
       } </FormItem> 
       <FormItem >
       <Button type = "primary"
       style = {
         {
           margin: '0 20px'
         }
       } > 查询 </Button> <Button > 重置 </Button> 
       </FormItem> 
      </Form>
     )
   }
 }
 FilterForm = Form.create({})(FilterForm);
//  打开弹窗运行代码
 class OpenCityForm extends React.Component {
   render(){
     const formItemLayout = {
        labelCol : {
            span: 5
        },
        wrapperCol:{
            span: 12 
        }
     }
     const {
       getFieldDecorator
     } = this.props.form;
     return (
       <Form layout="horizontal">
         <FormItem label="选择城市" {...formItemLayout}>
           {" "}
           {getFieldDecorator("city_id", {
             initialValue: "1"
           })(
             <Select
               style={{
                 width: 200
               }}
             >
               <Option value="3"> 全部 </Option>
               <Option value="1"> 北京市 </Option>
               <Option value="2"> 天津市 </Option>
             </Select>
           )}
         </FormItem>
         <FormItem label="营运模式" {...formItemLayout}>
           {" "}
           {getFieldDecorator("op_mode", {
             initialValue: "1"
           })(
             <Select
               style={{
                 width: 200
               }}
             >
               <Option value="1"> 自营 </Option>
               <Option value="2"> 加盟 </Option>
             </Select>
           )}
         </FormItem>
         <FormItem label="用车模式" {...formItemLayout}>
           {getFieldDecorator("use_mode", { initialValue: "1" })(
             <Select
             style={{width:200}}>
             <Option value="1">指定停车点</Option>
             <Option value="2">禁止停车点</Option>
             </Select>
           )
           }
         </FormItem>
       </Form>
     );
   }
 }
  OpenCityForm = Form.create({})(OpenCityForm)