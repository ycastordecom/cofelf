/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 22:47:44
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-12 23:13:35
 */
import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
