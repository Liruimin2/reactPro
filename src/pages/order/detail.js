import React from 'react';
import {
  Card
} from 'antd'
import './detail.less';
import axios from '../../axios/index';
export default class City extends React.Component {
   state={
     orderInfo:{
      // "order_sn": 'T1803244422704080JGJI',
      // "bike_sn": '802410001',
      // "user_name": '何超',
      // "mobile": "13597482075",
      // "start_location": "北京市昌平区回龙观东大街",
      // "end_location": "北京市海淀区奥林匹克公园",
      // "distance":1000,

     },
     position_lists:[]
   }
   componentDidMount(){
     let orderId = this.props.match.params.id;
     console.log(orderId,'orderOd');
     
       this.getDetilInfo(orderId)
    
   }
   getDetilInfo=(orderId)=>{
     axios.ajax({
       url: '/order/detail',
       data:{
         params:{
           orderId:orderId
         }
       }
     }).then((res)=>{
      if (res.code === '0') {
         this.setState({
           orderInfo: res.result,
           position_lists: res.result.position_list
         })
         this.renderMap(res.result);
        //  this.state.position_list = res.result.position_list;
      }
     })
   }
   renderMap=()=>{
     this.map = new window.BMap.Map('orderDetailMap');
     this.map.centerAndZoom('北京')
     this.addMaoCortral()
    this.drawBikeRoute();
   }
  //  添加地图空间
  addMaoCortral = ()=>{
    let map = this.map;
    map.addControl(new window.BMap.ScaleControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    }));
    map.addControl(new window.BMap.NavigationControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    }));
  }
  // 绘制用户的行驶路线
  drawBikeRoute = () => {
    let startPoin = '';
    let endPoint = '';
    let position_list = this.state.position_lists;
    console.log(position_list, 'list');
    
  //   if (position_list.length > 0) {
  //     let first = position_list[0];
  //     let last = position_list[position_list.length - 1 - 1];
  //     startPoin = new window.BMap.point(first.lon, first.lat);
  //     endPoint = new window.Bmap.point(last.lon, last.lat);
  //     let startIcon = new window.BMap.Icon('/public/assets/start_point.png', new window.BMap.Size(36, 42), {
  //           imageSize: new window.BMap.Size(36, 42)
  //   }
  // )
  //   let startMarker = new window.BMap.Marker(startPoin, {
  //     icon: startIcon
  //   });
  //   // 标注添加到地图
  //   this.map.addControl(startMarker);
  //   endPoint = new window.Bmap.point(last.lon, last.lat);
  //   let endIcon = new window.BMap.Icon('/public/assets/end_point.png', new window.BMap.Size(36, 42), {
  //     imageSize: new window.BMap.Size(36, 42)
  //   })
  //   let endMaker = new window.BMap.Marker(endPoint, {
  //     icon: endIcon
  //   })
  //   this.map.addControl(endMaker);
  //   // 链接地图路线
  //   let trackPoint = [];
  //  position_list.map((item,index)=>{
  //    let point = item;
  //    trackPoint.push(new window.BMap.Point(point.lon, point.lat))
  //  })
  //  let polyline = new window.BMap.Polyline(trackPoint, {
  //    strokeColor: '#1869AD',
  //    strokeWeight: 3,
  //    strokeOpacity: 1
  //  })
  //  this.map.addOverlay(polyline);
  //  this.map.centerAndZoom(endPoint, 11);
  // }
}
  render(){
    const info = this.state.orderInfo;
    console.log(info,'infos');
    
    return(
      <div>
        <Card>
          < div id = "orderDetailMap" > </div>
          < div 
          className = "order-map" >
            <div className="detail-items">
              基础信息
            </div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式:</div>
                <div className="detail-form-content">{info.mode ===1?'服务区':'停车点'}</div>
              </li>
              <li>
                < div className = "detail-form-left" > 订单编号:</div> <div className = "detail-form-content" > 
                    {
                     info.order_sn
                    }
                </div>
              </li>
              <li>
                < div className = "detail-form-left" > 车辆编号: </div> 
                < div className = "detail-form-content" > {
                    info.bike_sn
                  }
                </div>
              </li>
              <li>
                < div className = "detail-form-left" > 用户姓名: </div>
                < div className = "detail-form-content" > {
                    info.user_name
                  }
                </div>
              </li>
              < li >
                <div className = "detail-form-left" > 手机号码: </div>
                <div className = "detail-form-content" > {info.mobile} </div>
              </li>
            </ul>
          </div>
          < div className = "order-map" > 
          < div className = "detail-items" >行车轨迹: </div>
          < ul className = "detail-form" >
            < li >
              <div className = "detail-form-left" > 行程起点: </div> <div className = "detail-form-content" > {
                info.start_location
              } </div>
            </li> 
            <li >
              <div className = "detail-form-left" > 行程终点: </div> <div className = "detail-form-content" > {
                info.end_location
              } </div>
            </li> 
            <li >
              <div className = "detail-form-left" > 行驶里程 </div> <div className = "detail-form-content" > {
                info.distance / 1000
              }公里 </div> 
            </li>
          </ul>
          </div>
        </Card>
      </div>
    )
  }
}