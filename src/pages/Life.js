import React from 'react';
import Child from './Child';

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
    let style ={
      padding: 30
    }
    return <div style = {style}>
      <p>react生命周期介绍</p>
      <button onClick={this.handleClick.bind(this)}>点击一下</button>
      <p>{this.state.count}</p>
      <Child names={this.state.count}></Child>
    </div>
  }
}