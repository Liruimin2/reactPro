import React from 'react'
import {
  Input,
  Select,
  Form,
  Button,
  Checkbox,
  DatePicker
} from 'antd'
import Utils from './../../util/util';
const FormItem = Form.Item;
// const Option = Select.Option;
class FillForm extends React.Component{
  state={

  }
  reset=()=>{
    this.props.form.resetFields()
  }
  handleClick=()=>{
    let fieldsValue = this.props.form.getFieldDecorator();
    this.props.filterSubmit(fieldsValue)
  }
  innitForm=()=>{
    const {
      getFieldDecorator
    } = this.props.form;
    let formList = this.props.formList;
    const formItemList = [];
    if(formList && formList.length>0){
      formList.forEach((item)=>{
        let label = item.label;
        let filed = item.filed;
        let initialValue = item.initialValue |'';
        let placeholder = item.placeholder;
        let width = item.width;
        if (item.type == '时间查询'){
         
          const begin_time = < FormItem label = "订单时间"
          key = {
            filed
          } > {
            getFieldDecorator('begin_time')(
              < DatePicker showTime = {
                true
              }
              placeholder = {
                placeholder
              }
              format = "YYYY-MM-DD HH:mm:ss"/>
            )
          }</FormItem>
          formItemList.push(begin_time)
          const end_time = < FormItem label = "~"
          key = {
              filed
            } > {
              getFieldDecorator('end_time')(
                 <DatePicker 
                 showTime = {
                  true
                }
                placeholder = {
                  placeholder
                }
                format = "YYYY-MM-DD HH:mm:ss" />
                
              )
            } </FormItem>
          formItemList.push(end_time)
        } else if (item.type == "INPUT"){
          const INPUT = <FormItem label={label} key={filed}>
          {
            getFieldDecorator([filed],{
              initialValue:initialValue
            })(
              <Input type="text" placeholder={placeholder}/>
            )
          }
          </FormItem>
          formItemList.push(INPUT)
        } else if (item.type == "SELECT"){
          const SELECT = <FormItem label={label} key ={filed}>
            {
              getFieldDecorator([filed],{
                initialValue:initialValue
              })(
                <Select style={{width:width}} placeholder={placeholder}>
                {Utils.getOptionList(item.list)}
                </Select>
              )
            }
          </FormItem>
          formItemList.push(SELECT)
        } else if (item.type == 'CHECKBOX'){
          const CHECKBOX = < FormItem label = {
            label
          }
          key = {
              filed
            } > {
            getFieldDecorator([filed], {
              valuePropName: 'checked',
              initialValue: initialValue //true | false
            })( <Checkbox > {
                label
              } </Checkbox>
            )
          }
          </FormItem>;
          formItemList.push(CHECKBOX)
        }
      })
    }
    return formItemList;
  }
 
  render(){
    return (
      <Form layout="inline">
        {this.innitForm()}
        <FormItem>
          <Button type="primary" style={{margin:'0 10px'}} onClick={this.handleClick}>查询</Button>
          <Button onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    )
  }
  
}
export default Form.create({})(FillForm)