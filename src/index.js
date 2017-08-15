import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from 'components/login/login';
import registerServiceWorker from './registerServiceWorker';

// 把一些基础样式导入
import 'common/stylus/index.styl'

ReactDOM.render(<Login/>, document.getElementById('root'));
registerServiceWorker();
