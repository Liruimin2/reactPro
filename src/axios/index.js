import JsonP from 'jsonp';
import axios from 'axios';
import {
  message
} from "antd";
export default class Axios{
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (err, response) {
        console.log(response);
        
        // if (response.status === 'success') {
        //   resolve(response);
        // } else {
        //   reject(response.messsage);
        // }
      })
    })
  }
  static ajax(options){
    // 展示loading在html中加载全局的loading页面
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }
    let baseApi = 'https://www.easy-mock.com/mock/5c5157abb1c1b9153666e254/example';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }
        if (response.status == '200') {
          let res = response.data;
          if (res.code == '0') {
            resolve(res);
          } else {
            message.info({
              title: "提示",
              content: res.msg
            })
          }
        } else {
          reject(response.data);
        }
      })
    });
  }
}
