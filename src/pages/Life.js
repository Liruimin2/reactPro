import React from 'react';
import Child from './Child';
import { Button } from "antd";
import {
  Steps
} from 'antd';
const Step = Steps.Step;
// import 'antd/dist/antd.css';
export default class Life extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  };
  handleClick(){
    this.setState({
      count:this.state.count +1
    })
  }
  render(){
   
    return <div className="content">
      <p>react生命周期介绍</p>
      <Button onClick={this.handleClick.bind(this)}>点击一下</Button>
      <p>{this.state.count}</p>
      <Child names={this.state.count}></Child>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>,
    </div>
  }
}