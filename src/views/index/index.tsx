/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:34:48
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-13 19:18:22
 */

import { defineComponent } from 'vue';
import style from './index.module.less';
import human from '@/assets/image/Head picture-330x400px.png';
import card from '@/assets/image/card-2.2-250x326px.png';
import square from '@/assets/image/square-22x80px.png';
import card3 from '@/assets/image/card-3.2-350x450px.png';
export default defineComponent({
  name: 'Index',
  setup() {
    return () => (
      <div class={style.index}>
        <div>
          <div>
            <div>
              <div>ABOUT BUZHI</div>
              <div>MELEETE</div>
              <div>WOO</div>
              <div>THE NTH POSSIBILITY OF THE YUANTIDFIP ADDRFSS</div>
            </div>
            <div class="img-hover">
              <img src={human} alt="" />
              <div>Virtual fashion/trend art/aesthetic output transmedia creator & curator</div>
            </div>
          </div>
          <div class={style.fall}>
            <div>Fall in love with the trend · Pass the fashion</div>
            <div>
              <div>
                <h2>Virtual fashion</h2>
                <p>In the centenary year, Meletee Woo, together with many outstanding female artists, pays tribute to the centenary of women's fashion and female power.</p>
                <div class={style.button}>FOR MORE</div>
              </div>
            </div>
          </div>
          <div class={style.digtal}>
            <h2>DIGITAL TIDE PLAY</h2>
            <div>
              <div class={[style.item, 'img-hover']}>
                <img src={card} alt="" />
                <div>DIGITAL FAD</div>
              </div>
              <div class={[style.item, 'img-hover']}>
                <img src={card} alt="" />
                <div>DIGITAL FAD</div>
              </div>
              <div class={[style.item, 'img-hover']}>
                <img src={card} alt="" />
                <div>DIGITAL FAD</div>
              </div>
              <div class={[style.item, 'img-hover']}>
                <img src={card} alt="" />
                <div>DIGITAL FAD</div>
              </div>
            </div>
          </div>
          <div class={style.seeallthe}>SEE ALL THE DIGITAL TIDE PLAY</div>
          <div class={style.guangdong}>
            <img src={square} alt="" />
            <div class={style.text}>
              <h2>2022 Guangdong Fashion Week</h2>
              <h2>White Lining e Digital Fashion Festival "Four Moments"</h2>
            </div>
          </div>
          <div class={style.moment}>
            <div class={[style.item, 'img-hover']}>
              <div>Workplace moment</div>
              <img src={card3} alt="" />
              <div>The proper "stupid" is more points</div>
              <div>Proper "pendulum" can be more full of blood resurrection</div>
            </div>
            <div class={[style.item, 'img-hover']}>
              <div>Workplace moment</div>
              <img src={card3} alt="" />
              <div>The proper "stupid" is more points</div>
              <div>Proper "pendulum" can be more full of blood resurrection</div>
            </div>
            <div class={[style.item, 'img-hover']}>
              <div>Workplace moment</div>
              <img src={card3} alt="" />
              <div>The proper "stupid" is more points</div>
              <div>Proper "pendulum" can be more full of blood resurrection</div>
            </div>
          </div>
          <div class={style.coself}>
            <div>
              <h1>COSELF</h1>
              <div>
                <p>BORAD</p>
                <p>INTRODUCTION</p>
              </div>
              <div class={style.button}>COOPERATION</div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
