import React from 'react'
import {
  Card
} from 'antd'
import ReactEcharts from 'echarts-for-react';
// import echartTheme from '../echartsTheme'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Line extends React.Component {
  chartOption(){
    let option={
      title: {
          text: '用户骑行订单',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
       series: [{
         name: '订单量',
         type: 'pie',
         radius: '55%',
         center: [
           '50%', '60%'
         ],
         data: [{
             value: 1000,
             name: '周一'
           },
           {
             value: 1000,
             name: '周二'
           },
           {
             value: 2000,
             name: '周三'
           },
           {
             value: 1500,
             name: '周四'
           },
           {
             value: 3000,
             name: '周五'
           },
           {
             value: 2000,
             name: '周六'
           },
           {
             value: 1200,
             name: '周日'
           },
         ],
         itemStyle: {
           emphasis: {
             shadowBlur: 10,
             shadowOffsetX: 0,
             shadowColor: 'rgba(0, 0, 0, 0.5)'
           }
         }
       }]
    }
    return option
  }
  chartOption2(){
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
       data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [{
        name: '订单量',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
            value: 1000,
            name: '周一'
          },
          {
            value: 1000,
            name: '周二'
          },
          {
            value: 2000,
            name: '周三'
          },
          {
            value: 1500,
            name: '周四'
          },
          {
            value: 3000,
            name: '周五'
          },
          {
            value: 2000,
            name: '周六'
          },
          {
            value: 1200,
            name: '周日'
          },
        ]
      }]
    };
    return option
  }
  render(){
    return(
      <div>
        <Card title="饼状图1">
          <ReactEcharts option={this.chartOption()} style={{height:500}}></ReactEcharts>
        </Card>
        <Card title="圆形饼状图2">
          < ReactEcharts option = {
            this.chartOption2()
          }
          style = {
            {
              height: 500
            }
          } > </ReactEcharts>

        </Card>
      </div>
    )
  }
}