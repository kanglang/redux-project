import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
//第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux';
import store from './redux/store.js';

// 将store作为prop传入，即可使应用中的所有组件使用store 
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider >,
    document.getElementById('root')
);

