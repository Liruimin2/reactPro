import React from 'react';
import {Menu} from 'antd';
import './index.less';
import MenueConfig from '../../config/menueConfig';
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
   componentWillMount() {
       const menuTreeNode = this.renderMenue(MenueConfig);
       this.setState({
           menuTreeNode
       })
   }
    renderMenue = (data) => {
        return data.map((item, i) => {
            if (item.children) {
                return ( <SubMenu title = {item.title}
                    key = {item.key} > {
                        this.renderMenue(item.children)
                    } </SubMenu>
                )
            }
             return ( < Menu.Item  title = {item.title}
                 key = {item.key} > { item.title
                 } </Menu.Item>
             )
        })
    }
    
     handleClick = (e) => {
         console.log('click ', e);
     }
    render() {
        return ( 
        <div className = "nav-left" >
            <div className = "logo" >
                <img className = "fl"
                src = "/assets/logo-ant.svg"
                alt = "" / >
                <h1 > 后台管理系统 </h1> 
            </div> 
            < Menu theme = "dark"
            onClick = {this.handleClick} >
                {this.state.menuTreeNode}
            </Menu>
        </div>
        )
    }
}
