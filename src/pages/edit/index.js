import React from 'react';
import {
  EditorState
} from 'draft-js';
import {
  Editor
} from 'react-draft-wysiwyg';
import draftjs from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  Button,
  Card,
  Modal
} from 'antd'
export default class RichText extends React.Component {
  state={
    editorState:'',
    editorContent:'',
    showRich:false
  }
  onEditorChange = (editorContent) => {
    this.setState({
      editorContent
    })
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  // 清空
  handleClearContent=()=>{

    this.setState({
      editorState: ''
    })
  }
  // 获取html文件
  handleGetText=()=>{
    this.setState({
      showRich:true
    })
  }
  render(){
    // const {
    //   editorContent,
    //   editorState
    // } = this.state;
    return(
      <div>
        < Card style = {
            {
              marginTop: 10
            }
          } >
          <Button type = "primary"
        onClick = {
            this.handleClearContent
          } > 清空内容 </Button> <Button type = "primary"
        onClick = {
            this.handleGetText
          } > 获取HTML文本 </Button> </Card>
        < Card title = "富文本编辑器" >
     
              < Editor editorState = {
                this.state.editorState
              }
              onContentStateChange = {
                this.onEditorChange
              }
              onEditorStateChange = {
                this.onEditorStateChange
              }
              />
            
         </Card>
         < Modal title = "富文本编辑器"
         visible = {
           this.state.showRich
         }
         onCancel = {
             () => {
           this.setState({showRich:false})
         }}
         footer={null}>
         {
           draftjs(this.state.editorContent)
         }
         </Modal>
      </div>
    )
  }
}