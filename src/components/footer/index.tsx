/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:38:27
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-13 10:09:37
 */

import { defineComponent } from 'vue';
import logo from './static/LOGO-2-160x186px.png';
import style from './index.module.less';

export default defineComponent({
  name: 'Footer',
  setup() {
    return () => (
      <div class={style.footer}>
        <div>
          <img src={logo} alt="" />
          <div>
            <h2>What is COSELF?</h2>
            <p>
              COSELF (also known as “COSELF Metaverse”) is a cross-domain trendy toy
              brand officially established in 2021. Founded by the brand leader and designer BUZHI WU,
              COSELF is a trendy IP brand crossing
              over the virtual and realistic domains designed on Web 3.0 based on the concept of IP and cosmetics.
            </p>
          </div>
        </div>
      </div>
    );
  },
});
