import React from 'react';
import {
  Row,
  Col
} from "antd";
import './index.less';
import '../../style/common.less'
import Util from '../../util/util';
import axios from 'axios';
import {
  connect
} from 'react-redux'
// import axios from '../../axios'
class Header extends React.Component {
  state = {
    province:'',
    city:'',
    temperature:'',
    weather:'',
   winddirection:''

  }
  componentWillMount(){
    this.setState({userName:'react'}
    )
 
    
    // this.getWeatherApidata();
  }
  timer(){
    setInterval(() => {
      let syaTime = Util.formateDate(new Date().getTime())
      this.setState({
        syaTime
      })
    }, 1000);
  }
  componentDidMount(){
    this.getWeatherApidata();
    this.timer();
   
  }
  componentWillUnmount=()=>{
    this.setState=(state,callback)=>{
      return
    }
    // this.getWeatherApidata();
    // clearTimeout(this.timer);
  }
  getWeatherApidata(){
    axios('https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=		bffa43c7d8bad97198b27d18cf0dd34a').then((res)=> {
      // console.log(res.data);
      // console.log(res.status);
      let data = res.data.lives[0];
      // console.log(data);
      this.setState({
        province: data.province,
        city:data.city,
        temperature: data.temperature,
        weather: data.weather,
        winddirection: data.winddirection
      })
    })
  }
  
  render() {
    const {
      menuName,
      menuType
    }= this.props;
    return (
    <div className = "header" > 
      <Row >
        {
         menuType ?
            < Col span = {
              6
            }
            className = "logo" >
            <img src = "/assets/logo-ant.svg" style={{width:'50px'}} alt = "" / >
            < span > IMooc 通用管理系统 </span> 
            </Col>:''
        }
        {
          < Col className = "header-top"
          span = {
            menuType ? 18 : 24
          } >
            < span > 欢迎， {this.state.userName} </span>
            < a href = "#" > 退出 </a>
          </Col>

        }
        {/* < Col span = {24} className = "header-top" >
          < span > 欢迎， {
            this.state.userName
        } 
          </span>
          <span className="back">退出</span>
        </Col>  */}
      </Row>
      < Row className = "breadcrumb clearfix" >
        <Col  span={4} className = "breadcrumb-title fl" >{menuName || '首页'}
          <div className="titleShape"></div></Col>
        <Col span={20} className = "weather fr" >
          <span className = "date" > {this.state.syaTime}</span> 
          <span className="weather-dis">
            {
              this.state.province
            }
             {/* < span className = "weather-dis" > {
              this.state.city
            } </span> */}
            <span className = "weather-dis">温度：{
            this.state.temperature
            } 摄氏度   </span>
            < span className = "weather-dis" >天气： {
              this.state.weather
            } </span>
            < span className = "weather-dis" >    风向：{
              this.state.winddirection
            } </span>
          </span>
        </Col>
         
      </Row>
       
     </div>)
    
  }
}
  const mapStateToProps = state => {
    return {
      menuName: state.menuName
    }
  };
export default connect(mapStateToProps)(Header)