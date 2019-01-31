import React from 'react'
import {
  Table,
  Card
} from 'antd';
import axios from 'axios'
export default class basicTable extends React.Component{
  state = {
    dataSource: []
  }
  respose=()=>{
    let beseUrl = 'https://www.easy-mock.com/mock/5c5157abb1c1b9153666e254/example/tableList';
    axios.get(beseUrl).then(()=>{

    })
  }
 componentDidMount() {
   this.respose();
 }
  render(){
  const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园2号'
  }];
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];
    return(
      <div>
        <Card title="基础表格">
          <Table bordered 
              columns={columns}
              dataSource={dataSource}
              pagination = {
                false
              }
              ></Table>
        </Card>
        <Card title=""></Card>
      </div>
    )
  }
}