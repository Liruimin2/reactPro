import React from 'react'
import {
  // Button,
  Row, Col,
  Card,
  Modal
} from 'antd'
import './index.less'
export default class Gallery extends React.Component {
  state={
    visible:false
  }
  openGallery = (imgSrc) => {
    this.setState({
      visible:true,
      currentImg: '/gallery/' + imgSrc
    })
  }
  render(){
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]

    const imgList = imgs.map((list,key) => list.map((item,key) =>
      
          < Card style = {
            {
              marginBottom: 10,
              // height:300
            }
          }
          cover = { 
          
          < img src = {
              '/gallery/' + item
              
            }
 
            onClick = {
              () => this.openGallery(item)
            }
             alt = "" 
            />} >
            <Card.Meta
            title = "React Admin"
            description = "I Love Imooc" 
            />
            </Card>
          ))

    return(
        <div className="card-wrap">
        < Row gutter = {
            10
          } >
          <Col md = {
            6
          } > {
            imgList[0]
          } </Col> <Col md = {
            6
          } > {
            imgList[1]
          } </Col> <Col md = {
            6
          } > {
            imgList[2]
          } </Col> <Col md = {
            6
          } > {
            imgList[3]
          } </Col> 
        </Row>
        <Modal width={300} height={600} visible={this.state.visible} title="图片画廊"onCancel={()=>{
          this.setState({visible:false})
        }}
        footer={null}
        >
        {
        
        < img src = {
            this.state.currentImg
          }
          style = {
            {
              width: '100%'
            }
          }
          alt = "" />
        }

        </Modal>
        </div>
    )
  }
}