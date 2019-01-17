import React from 'react';
import {
  Row,
  Col
} from 'antd';
import Header from './component/Header';
import Footer from "./component/Footer";
import NavLeft from "./component/NavLeft";
import "./style/common.less";
import Home from "./pages/home"
class Admin extends React.Component {
  render(){
    return(
       < Row className="containner clearfix">
         < Col span = {4} className = "nav-lefts fl" > 
         <NavLeft/> 
         </Col >
         <Col span = {20} className="main fr">
            < Header/>
            <Row className="content">
            <Home/>
            </Row>
            < Footer/>
         </Col>
       </Row>
    )
  }
}
export default Admin