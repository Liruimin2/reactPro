import React from 'react'
import {
  Card,
  Button,
  Tabs,
  message,
  Icon
} from 'antd'
import './index.less'
export default class notifications extends React.Component {
  componentWillMount() {
    const panes = [{
      title: 'Tab 1',
      content: 'Tab 1',
      key: '1'
    },
    {
      title: 'Tab 2',
      content: 'Tab 2',
      key: '2'
    },
    {
      title: 'Tab 3',
      content: 'Tab 3',
      key: '3'
    }
  ]
    this.setState({
      activeKey: panes[0].key,
      panes
    });
  }
  onChange = (activeKey) => {
    this.setState({ activeKey });
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render() {
    const TabPane = Tabs.TabPane;
    function callback(key) {
      console.log(key);
    }
    
    return (
      < div className = "card-tab" >
        <Card title="tab基础标签页">
          < Tabs defaultActiveKey = "1"
          onChange = {
              callback
            } >
            <TabPane tab = "Tab 1"key = "1" > Content of Tab Pane 1 </TabPane> 
            <TabPane tab = "Tab 2"key = "2" > Content of Tab Pane 2 </TabPane>
            <TabPane tab = "Tab 3"key = "3" > Content of Tab Pane 3 </TabPane> 
          </Tabs>
          </Card>
          <Card title="带图标tab">
          < Tabs defaultActiveKey = "2" >
            < TabPane tab = { < span ><Icon type="plus">Tab1</Icon></ span>
            }
            key = "1" > 欢迎学习react </TabPane>  
            <TabPane tab ={< span ><Icon type="edit">Tab2</Icon > </ span>}
            key = "2" > Content of Tab Pane 2 </TabPane> 
            < TabPane tab = { < span > < Icon type = "delete" > Tab3 </Icon > </span >
            }key = "3" > Content of Tab Pane 3 </TabPane>
          </Tabs>
          </Card>
          <Card title="可以增加和删除tab的标签">
            <Tabs
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
            </Tabs>
          </Card>
        
      </div>
    )
  }
}