import React from 'react'
import {
  Card,
  Carousel
} from 'antd'
import './index.less'
export default class Carousels extends React.Component {
  render(){
    return(
      <div className="card-Carousel">
        <Card title="文字轮播图">
        < Carousel >
          <div > < h3 > 文字轮播图1</h3></div >
          <div > < h3 > 文字轮播图2 </h3></div >
          <div > < h3 > 文字轮播图3 </h3></div >
          <div > < h3 > 文字轮播图4 </h3></div >
        </Carousel>
        </Card>
        < Card className="pic-carousel" title = "图片伦播图" >
          < Carousel effect = "fade"
          autoplay >
            < div > < img src = "carousel-img/carousel-1.jpg"
            alt = "" / >
            </div >
            < div > < img src = "carousel-img/carousel-2.jpg"
            alt = "" / > 
            </div >
            < div > < img src = "carousel-img/carousel-3.jpg"
            alt = "" / >
            </div >
    
          </Carousel> 
        </Card>
      </div>
    )
  }
}