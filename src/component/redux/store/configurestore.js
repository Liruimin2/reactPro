import reducer from './../reducer';
// 引入createStore创建store，引入applyMiddleware 来使用中间件
import {
  createStore,
  applyMiddleware
} from 'redux';
const initialState = {
  menuName: ''
}
const configureStore = () => createStore(reducer, initialState);

export default configureStore;