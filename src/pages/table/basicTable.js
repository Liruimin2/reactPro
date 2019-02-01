import React from 'react'
import {
  Table,
  Card,
  message
} from 'antd';
import axios from 'axios'
// import axios from '../../axios/index'
export default class basicTable extends React.Component{
  state = {
    dataSource: [],
    dataSource2:[],
  }
  params = {
    page: 1
  }
  respose=()=>{
    let beseUrl = 'https://www.easy-mock.com/mock/5c5157abb1c1b9153666e254/example/tableList';
    axios.get(beseUrl).then((res)=>{
      // console.log(res.data.code);
      if(res.data.code !==0){
         message.info("this massage is err")
         this.setState({
           dataSource2: []
         })
      }else{
         this.setState({
           dataSource2: res.data.result.list
         })
      }
      // console.log(res.data.result.list,'list');
     
      
    })
    // let self = this;
    // axios.ajax({
    //   url: '/tableList',
    //   data:{
    //     params:{
    //       page:this.params.page
    //     }
    //   }
    // }).then((res)=>{
    //   console.log(res.data.result.list,'list');
    //    this.setState({
    //      dataSource2: res.data.result.list
    //    })
    //   if(res.code ===0){
    //     res.data.result.list.map((item, index)=>{
    //       item.key = index;
    //     })
    //     this.setState({
    //       dataSource2:res.data.result.list
    //     })
    //   }
    // })
  }
 componentDidMount() {
   this.respose();
 }
  render(){
  const dataSource = [{
    key: '1',
    Name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    Name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园2号'
  }];
  const column =[
    {
      title:'序号',
      key:'key',
      dataIndex:'key'
    },{
      title:'姓名',
      dataIndex: 'Name',
      key:'Name'
    },{
      title:'年龄',
      dataIndex:'age',
      key:'age'
    },{
      title:'地址',
      dataIndex:'address',
      key:'address'
    }
  ]
  const columns = [
    {
      title:'序号',
      key:'id',
      dataIndex:'id'
    },
    {
    title: '姓名',
    dataIndex: 'userName',
    key: 'userName',
  }, {
    title: '年龄',
    dataIndex: 'sex',
    key: 'sex',
    render(sex){
      return sex === 1 ? '男' : '女'
    }
  },{
    title:'状态',
    key:'state',
    dataIndex:'state',
    render(state){
      let config = {
        '1':'加油更好',
        '2':'升值加薪',
        '3':'新春快乐',
        '4':'勇往直前',
        '5':'希望明年会更好'
      }
      return config[state]
    }
  },{
    title:'爱好',
    key: 'interest',
    dataIndex: 'interest',
    render(love){
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
      return config[love]
    }
  }, {
    title:'生日',
    key: 'birthday',
    dataIndex: 'birthday'
  },{
    title: '住址',
    dataIndex: 'adress',
    key: 'adress',
  },{
    title:'早起时间',
    dataIndex: 'time',
    key:'time'
  }];
    return(
      <div>
        <Card title="基础表格">
          <Table bordered 
              columns = {
                column
              }
              dataSource={dataSource}
              pagination = {
                false
              }
              >
            </Table>
        </Card>
        <Card title="动态数据表格-mock" style={{margin:10}}>
           <Table bordered 
                columns={columns}
                dataSource={this.state.dataSource2}
                 pagination = {
                   false
                 } > </Table>
        </Card>
      </div>
    )
  }
}