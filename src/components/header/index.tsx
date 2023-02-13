/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:36:10
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-12 23:58:36
 */

import { defineComponent } from 'vue';
//样式
import style from './index.module.less';
//图片
import logo from './static/LOGO-1-220x60px.png';
import sing from './static/singin-220x44px.png';
import menu from './static/menu-60x46px.png';

export default defineComponent({
  name: 'Header',
  setup() {
    return () => (
      <div class={style.header}>
        <img class={style.logo} src={logo} alt="" />
        <div>
          <img class={style.sing} src={sing} alt="" />
          <img class={style.menu} src={menu} alt="" />
        </div>
      </div>
    );
  },
});
