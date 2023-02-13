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
            <h2>Introduction to COSELF</h2>
            <p>
              Beauty Fairy (alias "Beauty Fairy Universe") crossover fashion brand was officially established in 2021, created by the managing director and designer Wu Zijun BUZHI. With IP+ beauty as
              the design concept, the brand is a virtual and real symbiotic crossover IP brand created by web3.0, which pays homage to the expression of future diversified beauty and embraces the
              future aesthetic trend. Explore the symbiotic development of virtual fashion and reality
            </p>
          </div>
        </div>
      </div>
    );
  },
});
