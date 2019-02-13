import React from 'react'
import {
  Table,
  Card,
  message,
  Button,
  Modal,
  Badge
} from 'antd';
// import axios from 'axios'
import axios from '../../axios/index';
import Utils from '../../util/util';
export default class basicTable extends React.Component {
  state={
    dataSource2:[],
    dataSource3:[]
  }
   params = {
     page: 1
   }
  respose = () => {
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
          dataSource2: res.result.list,
          selectedRowKeys: [],
          selectedRows: null,
          pagination: Utils.pagination(res, (current) => {
            self.params.page = current;
            this.respose();
          })
        })
      }
    })
  }
  resquest = () => {
    let self = this;
    axios.ajax({
      url: 'table/high/list',
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
          dataSource3: res.result.list,
          selectedRowKeys: [],
          selectedRows: null,
          pagination: Utils.pagination(res, (current) => {
            self.params.page = current;
            this.resquest();
          })
        })
      }
    })
  }
  // 按行删除操作
  handleDel=(item)=>{
    let id = item.id;
    Modal.confirm({
      title:'确认',
      content:'你确定要删除内容么?',
      onOk:()=>{
        message.success('删除成功')
        this.resquest();
      }
    })
  }
  componentDidMount() {
    this.respose();
    this.resquest();
  }
  render(){
    const columnws = [{
          title: '序号',
          key: 'id',
          dataIndex: 'id',
          fixed: 'left',
          width: 100
        },
        {
          title: '姓名',
          dataIndex: 'userName',
          key: 'userName',
          width: 100
        }, {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          render(sex) {
            return sex === 1 ? '男' : '女'
          }
        },{
          title:'年龄',
          dataIndex: 'age',
          key: 'age',
          sorter:(a,b)=>{
            console.log(a,'a');
            console.log(b,'b');
            
            return a.age-b.age
          }
        }, {
          title: '状态',
          key: 'state',
          dataIndex: 'state',
          render(state) {
            let config = {
              '1': '加油更好',
              '2': '升值加薪',
              '3': '新春快乐',
              '4': '勇往直前',
              '5': '希望明年会更好'
            }
            return config[state]
          }
        }, {
          title: '爱好',
          key: 'interest',
          dataIndex: 'interest',
          render(love) {
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
          title: '生日',
          key: 'birthday',
          dataIndex: 'birthday'
        }, {
          title: '住址',
          dataIndex: 'adress',
          key: 'adress',
        }, {
          title: '住址',
          dataIndex: 'adress',
          key: 'adress',
        }, {
          title: '住址',
          dataIndex: 'adress',
          key: 'adress',
        }, {
          title: '早起时间',
          dataIndex: 'time',
          key: 'time'
        },{
          title:'操作',
          render:(item)=>{
            return <Button size="small" onClick={(item)=>this.handleDel(item)}>删除</Button>
          }
        }

    ]
    const columns = [{
        title: '序号',
        key: 'id',
        dataIndex: 'id',
        fixed: 'left',
        width:100
      },
      {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
        width:100
      }, {
        title: '年龄',
        dataIndex: 'sex',
        key: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      }, {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': < Badge status = "success"
            text = '加油更好' /> ,
            '2': < Badge status = "success"
            text = '升值加薪' /> ,
            '3': < Badge status = "default"
            text = '新春快乐' /> ,
            '4': < Badge status = "processing"
            text = '勇往直前' /> ,
            '5': < Badge status = "warning"
            text = '希望明年会更好' />
          }
          return config[state]
        }
      }, {
        title: '爱好',
        key: 'interest',
        dataIndex: 'interest',
        render(love) {
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
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      }, {
        title: '住址',
        dataIndex: 'adress',
        key: 'adress',
      }, {
        title: '住址',
        dataIndex: 'adress',
        key: 'adress',
      }, {
        title: '住址',
        dataIndex: 'adress',
        key: 'adress',
      }, {
        title: '早起时间',
        dataIndex: 'time',
        key: 'time'
      }
    ];
    return(
      <div>
        < Card title = "表格固定"
          style = {
            {
              marginTop: 10
            }} >
          <Table
            bordered
            columns = {
              columns
            }
            scroll = {
                {
                  x: 2650
                }
            }
            dataSource = {
              this.state.dataSource2
            }
           pagination = {
              this.state.pagination
            } 
          >
          </Table>
       </Card>
       < Card title = "过滤表格"
          style = {
           {
             marginTop: 10
           }
         } >
         <Table
          bordered

          columns = {
             columnws
          }
          dataSource = {
            this.state.dataSource3
          }
          pagination = {
           this.state.pagination
         } >
         </Table>
        </Card>
      </div>
    )
  }
}