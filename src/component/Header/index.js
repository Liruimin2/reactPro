import React from 'react';
import {
  Row,
  Col
} from "antd";
import './index.less';
import '../../style/common.less'
import Util from '../../util/util';
import axios from '../../axios'
class Header extends React.Component {
  state = {
  }
  componentWillMount(){
    this.setState({userName:'react'}
    )
 
    setInterval(() => {
      let syaTime = Util.formateDate(new Date().getTime())
      this.setState({
        syaTime
      })
    }, 1000);
    this.getWeatherApidata();
  }
  getWeatherApidata(){
    let city ='北京';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=gIAq2vcLD65Fg0plQS8Em7du99ZubibI'
     
    }).then((res)=>{
      if (res.status === 'success') {
        console.log(res.result);
        
        // let data = res.results[0].weather_data[0];
        // this.setState({
        //   dayPictureUrl: data.dayPictureUrl,
        //   weather: data.weather
        // })
      }
    })
  }
  render() {
    return (
    <div className = "header" > 
      <Row >
        < Col span = {24} className = "header-top" >
          < span > 欢迎， {
            this.state.userName
            } 
          </span>
          <span className="back">退出</span>
        </Col> 
       
      </Row>
      < Row className = "breadcrumb clearfix" >
        <Col  span={4} className = "breadcrumb-title fl" >权限设置
          <div className="titleShape"></div></Col>
        <Col span={20} className = "weather fr" >
          <span className = "date" > {this.state.syaTime}</span> 
          {/* <span className="weather-pic">
            < img src = {
             this.state.dayPictureUrl
            }
            alt = "" / >
          </span>
          <span className="weather-dis">
            {
              this.state.weather
            }
          </span> */}
        </Col>
         
      </Row>
       
     </div>)
    
  }
}
export default Header