import React from 'react';
import {
  Row,
  Col
} from 'antd';
import Header from './component/Header';
import Footer from "./component/Footer";
import NavLeft from "./component/NavLeft";
import "./style/common.less"
class Admin extends React.Component {
  render(){
    return(
       < Row className="containner">
         < Col span = {4} className = "nav-left" > 
         <NavLeft/> 
         左侧布局
         </Col >
         <Col span = {20} className="main">
            < Header/>
            <Row className="content"></Row>
            < Footer/>
         </Col>
       </Row>
    )
  }
}
export default Admin