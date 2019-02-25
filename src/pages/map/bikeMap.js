import React from 'react'
import {
  Card,
  Form
} from 'antd'
import axios from '../../axios/index'
import BaseForm from '../../component/baseForm';
export default class Order extends React.Component {
  state={

  }
  params = {
    page: 1
  }
  formList = [{
    type: 'SELECT',
    label:'城市',
    field:'city',
    width:120,
    list:[{
      id:0,
      name:'全部'
    },{
      id:1,
      name:'北京'
    },{
      id:2,
      name:'上海'
    },{
      id:3,
      name:'深圳'
    }]
  }, {
    type: '时间查询',
    showTime:true
  }, {
    type: 'SELECT',
    label: '订单状态',
    field: 'order_status',
    placeholder: '全部',
    initialValue: 0,
    width: 150,
    list: [{
      id: 0,
      name: '全部'
    }, {
      id: 1,
      name: '进行中'
    }, {
      id: 3,
      name: '行程结束'
    }]
  }]
  handelSubmit=(filterData)=>{
    this.params = filterData
    console.log(this.params,'params');
    
  }
  componentDidMount(){
    this.requestList();
  }
  requestList=()=>{
    axios.ajax({
      url: '/map/bike_list',
      data:{
        params:this.params
      }
    }).then((res)=>{
      this.setState({
        total_count:res.result.total_count
      }
    )

      // 为地图传result的值
      this.renderMap(res.result);
    })
  }
  renderMap=(res)=>{
    let list = res.route_list;
    this.map = new window.BMap.Map("contenner", {
      enableMapClick: false
    })
    let gps1 = list[0].split(',');
    let startPoint = new window.BMap.Point(gps1[0],gps1[1]);
    let gps2 = list[list.length-1].split(',');
    let endPoint = new window.BMap.Point(gps2[0],gps2[1]);
    this.map.centerAndZoom(endPoint,13);
    // 添加起始图标
     let startPointIcon = new window.BMap.Icon("/assets/start_point.png", new window.BMap.Size(36, 42), {
       imageSize: new window.BMap.Size(36, 42),
       anchor: new window.BMap.Size(18, 42)
     });

     var bikeMarkerStart = new window.BMap.Marker(startPoint, {
       icon: startPointIcon
     });
     this.map.addOverlay(bikeMarkerStart);

     let endPointIcon = new window.BMap.Icon("/assets/end_point.png", new window.BMap.Size(36, 42), {
       imageSize: new window.BMap.Size(36, 42),
       anchor: new window.BMap.Size(18, 42)
     });
     var bikeMarkerEnd = new window.BMap.Marker(endPoint, {
       icon: endPointIcon
     });
     this.map.addOverlay(bikeMarkerEnd);
// 添加行程路线

    let routeList = [];
    list.forEach((item)=>{
      let p = item.split(',');
      let point = new window.BMap.Point(p[0],p[1]);
      routeList.push(point)
    })
    // 行驶路线
    var polyLine = new window.BMap.Polyline(routeList, {
      strokeColor: "#ef4139",
      strokeWeight: 3,
      strokeOpacity: 0.8
    });
    this.map.addOverlay(polyLine);
// 服务器路线
    let serverList = res.service_list;
    // console.log(serverList, 'serverList');
    
    let serlistPoint = [];
    serverList.forEach((item)=>{
      let point = new window.BMap.Point(item.lon, item.lat);
      console.log(point,'point');
      
      serlistPoint.push(point)
    })
    // 画线
    var polyServiceLine = new window.BMap.Polyline(serlistPoint, {
      strokeColor: "#ef4136",
      strokeWeight: 3,
      strokeOpacity: 1
    });
    this.map.addOverlay(polyServiceLine);
    // 添加自行车标记
    let bikeList = res.bike_list;
    let bikeIcon = new window.BMap.Icon("/assets/bike.jpg", new window.BMap.Size(36, 42), {
      imageSize: new window.BMap.Size(36, 42),
      anchor: new window.BMap.Size(18, 42)
    });
    bikeList.forEach(item => {
        let p = item.split(',')
        let point = new window.BMap.Point(p[0],p[1]);
        let bikeMarker = new window.BMap.Marker(point,{icon:bikeIcon})
        this.map.addOverlay(bikeMarker)
    });
    // 添加地图控件
    this.addMapControl();
  }
  // 添加地图控件
  addMapControl = () => {
    let map = this.map;
    // 左上角，添加比例尺
    var top_right_control = new window.BMap.ScaleControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    });
    var top_right_navigation = new window.BMap.NavigationControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    });
    //添加控件和比例尺
    map.addControl(top_right_control);
    map.addControl(top_right_navigation);
    map.enableScrollWheelZoom(true);
    // legend.addLegend(map);
  };
  render(){
    return(
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handelSubmit}/>
        </Card>
        <Card style={{margin:10}}>
          <div>共{this.state.total_count}辆车</div>
          <div id="contenner" style={{height:500}}></div>
        </Card>
      </div>
    )
  }
}