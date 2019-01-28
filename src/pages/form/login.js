import React from 'react'
import {
  Form,
  Icon,
  Input,
  Button,
  Card,
  Checkbox,
  message
} from 'antd';
import './index.less'
const FormItem = Form.Item;

class RormLogin extends React.Component {
  state = {
    iconType: "eye-invisible",
    pwdWord: "passWord",
    iconCome: false
  };
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    //  console.log(this.props.form.getFieldsValue(), 'this.props.form');

    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${
            userInfo.userPwd
          }`
        );
      }
    });
  };
  eyeClick = () => {
    if (this.state.iconCome === true) {
      
      this.setState({ iconType: "eye-invisible", pwdWord: "passWord", iconCome: false });

    } else {
      this.setState({ iconType: "eye", pwdWord: "text", iconCome: true });

    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="表单行内登陆">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button>登陆</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登陆水平表单">
          <Form
            style={{
              width: 300
            }}
          >
            <FormItem>
              {getFieldDecorator("userName", {
                initialValue: "",
                rules: [
                  { required: true, message: "用户名不能为空" },
                  {
                    min: 6,
                    max: 12,
                    message: "不在范围之内"
                  },
                  {
                    pattern: new RegExp("^\\w+$", "g"),
                    message: "用户名必须为字母或者数字"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{
                        color: "rgba(0,0,0,.25)"
                      }}
                    />
                  }
                  placeholder="userName"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("userPwd", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  },
                  {
                    min: 6,
                    max: 12,
                    message: "不在范围之内"
                  },
                  {
                    pattern: new RegExp("^\\w+$", "g"),
                    message: "用户名必须为字母或者数字"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{
                        color: "rgba(0,0,0,.25)"
                      }}
                    />
                  }
                  placeholder="userPwd"
                  type={this.state.pwdWord}
                />
              )}
              <Icon
                type={this.state.iconType}
                onClick={this.eyeClick}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 4
                }}
              />
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              <a
                style={{
                  float: "right"
                }}
                href="#"
              >
                忘记密码
              </a>
            </FormItem>
            <FormItem>
              <Button
                className="login-form-button"
                type="primary"
                onClick={this.handleSubmit}
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(RormLogin)