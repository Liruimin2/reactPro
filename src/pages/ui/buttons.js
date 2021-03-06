import React from 'react';
import './index.less';
// let count = 0;

// export default class MyComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: count
//     };
//   }

//   componentWillMount() {
//     this.setState({
//       count: ++count
//     });

//     this.setState({
//       count: ++count
//     });

//     setTimeout(() => {
//       this.setState({
//         count: ++count
//       });

//       this.setState({
//         count: ++count
//       });
//     }, 1000);
//   }

//   componentDidMount() {
//     this.button.addEventListener('click', this.onClick.bind(this, '原生浏览器事件'), false);
//   }

//   onClick(info) {
//     console.log(info);

//     this.setState({
//       count: ++count
//     });

//     this.setState({
//       count: ++count
//     });
//   }

//   render() {
//     console.log(this.state.count);
//     return ( <div >
//       <button type = "button"
//       ref = { node => this.button = node}
//       onClick = {
//         this.onClick.bind(this, 'React事件')
//       } > 生成新计数 </button> <div > Count: {
//         this.state.count
//       } </div> </div>
//     );
//   }
// }

// ReactDOM.render( < MyComponent /> , mountNode);
import {
  Button,
  Radio
} from 'antd';
export default class Buttons extends React.Component {
  state={
    loading:true,
    size:'default'
  }
  handleClick=()=>{
    this.setState({
      loading:false
    })
  }
  hideClick=()=>{
    this.setState({
      loading:true
    })
  }
  handleChange=(e)=>{
    this.setState({
      size:e.target.value
    })
  }
  render() {
    return ( 
    <div className="buttons">
      <div className = "basic-buttons" > 
        < h3 > 基础按钮 </h3>
        < Button type = "primary" > Primary </Button> 
        < Button type = "disabled" > diaabled </Button> 
        < Button type = "danger" > Danger </Button>
      </div>
      <div className = "icon-buttons" >
        <h3 > 图标按钮 </h3> 
        <Button icon="plus" > 创建 </Button> 
        <Button icon="edit" > 编辑</Button> 
        <Button icon="delete" > 删除 </Button>
        <Button icon = "search" >搜索 </Button>
        <Button icon="download" type="primary">下载</Button>
      </div>
      <div className="icon-buttons">
        <h3>loading图标按钮</h3>
        <Button type="primary" loading={this.state.loading}></Button>
        < Button loading = {
          this.state.loading
        }
        onClick = {
          this.hideClick
        } > 点击加载 </Button>
        <Button type="primary" onClick={this.handleClick}>关闭</Button>
      </div> 
      <div className="icon-buttons">
        <h3>按钮组</h3>
        <Button.Group>
          <Button type="primary" icon="left">后退</Button>
          <Button type="primary" icon="right">前进</Button>
        </Button.Group>
      </div>
      < div className = "icon-buttons" > 
        <h3>按钮尺寸</h3>
        < Radio.Group className = "radioGro" value={this.state.size} onChange={this.handleChange} >
          <Radio value="small">小</Radio>
          <Radio value="default">中</Radio>
          <Radio value="large">大</Radio>
        </Radio.Group>
        < Button type = "primary" size = {this.state.size} > Imooc </Button> 
          <Button size = {
            this.state.size
          } > Imooc </Button> 
          <Button type = "dashed"size = {this.state.size} > Imooc </Button>
          < Button type = "danger"size = {this.state.size} > Imooc </Button>
      </div>
    </div>
    );
  }
}