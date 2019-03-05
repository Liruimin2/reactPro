import React from 'react';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {
    switchMenu,
    saveBtnList
} from './../redux/action'
import './index.less';
import MenueConfig from '../../config/menueConfig';
const SubMenu = Menu.SubMenu;
 class NavLeft extends React.Component {
    state = {
        currentKey: '',
        key:''
    }
   componentWillMount() {
       const menuTreeNode = this.renderMenue(MenueConfig);
       this.setState({menuTreeNode})
   }
    renderMenue = data => {
        
        return data.map((item, index) => {
            if (item.children) {
                return ( 
                <SubMenu title = {item.title} key ={item.key} > 
                {this.renderMenue(item.children)}
                </SubMenu>
                )
            }
            
             return ( 
               <Menu.Item  title = {item.title} key={item.key}>
                    <NavLink to = {item.key} > {item.title} </NavLink>
               </Menu.Item>
              
             )
             
        })
    }
    handleClick = ({item,key}) => {
        if(key === this.state.currentKey){
            
            return false
        }
        // console.log(item.key,'itemmm');
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const {dispatch} = this.props;
        dispatch(switchMenu(item.props.title))
        this.setState({currentKey:key})
    }
    homeHandleClick=()=>{
        const {dispatch}= this.props;
        dispatch(switchMenu('首页'));
        this.setState({
            currentKey:''
        })
    }
    //  homeHandleClick = ({
    //          index,
    //          key
    //      }) => {
    //     // console.log(key, 'key');
    //     // console.log(index);
    //     // console.log(this.state.currentKey, 'currentkey');
    //  }
    render() {
        return ( 
        <div className = "nav-left" >
            <NavLink to = "/home" onClick = {()=>this.homeHandleClick}>
                <div className = "logo" >
                    <img className = "fl" src = "/assets/logo-ant.svg" alt = "" / >
                        < h1 > 后台管理系统 </h1>  
                </div>
            </NavLink>
            < Menu theme = "dark" mode = "vertical" onClick = {this.handleClick} >
                {this.state.menuTreeNode}
            </Menu>
        </div>
        )
    }
}
export default connect()(NavLeft)
