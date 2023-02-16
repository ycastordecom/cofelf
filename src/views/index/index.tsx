/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:34:48
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-16 22:36:03
 */

import { defineComponent } from 'vue';
import style from './index.module.less';
import human from '@/assets/image/Head picture-330x400px.png';
import card from '@/assets/image/card-2.2-250x326px.png';
import square from '@/assets/image/square-22x80px.png';
import card3 from '@/assets/image/card-3.2-350x450px.png';
import router from '@/router';

export default defineComponent({
  name: 'Index',
  setup() {
    const toPath = (path: string) => {
      window.location.href = path;
    };
    const toUrl = (url: string) => {
      router.push(url);
    };
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
            <div class="img-hover" onClick={() => toPath('https://muselink.cc/MeleterWoo')}>
              <img src={human} alt="" />
              <div>Virtual fashion/trend art/aesthetic output transmedia creator & curator</div>
            </div>
          </div>
          <div
            onClick={() =>
              toPath(
                'http://mp.weixin.qq.com/s?__biz=Mzg2NzYwMjA5OA==&mid=2247502183&idx=3&sn=c2575eda260cdb602408627203cb9898&chksm=cebb92baf9cc1bac825ccd5889d011dd7b07a6b109c5c45bd5a8c33804044930f3831c7690a5&mpshare=1&scene=1&srcid=0214p1K3IlJLxwRySJUJyqKS&sharer_sharetime=1676379874999&sharer_shareid=f5519bb385aaaca53d87d7ef6582187a#rd'
              )
            }
            class={style.fall}
          >
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
                <div>DIGITAL FAD</div>defineComponent
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
          <div onClick={() => toUrl('/fashion')} class={style.seeallthe}>
            SEE ALL THE DIGITAL TIDE PLAY
          </div>
          <div class={style.guangdong}>
            <img src={square} alt="" />
            <div class={style.text}>
              <h2>2022 Guangdong Fashion Week</h2>
              <h2>White Lining e Digital Fashion Festival "Four Moments"</h2>
            </div>
          </div>
          <div class={style.moment}>
            <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
              <div>Workplace moment</div>
              <img src={card3} alt="" />
              <div>The proper "stupid" is more points</div>
              <div>Proper "pendulum" can be more full of blood resurrection</div>
            </div>
            <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
              <div>Workplace moment</div>
              <img src={card3} alt="" />
              <div>The proper "stupid" is more points</div>
              <div>Proper "pendulum" can be more full of blood resurrection</div>
            </div>
            <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
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
              <div onClick={() => toUrl('/creator')} class={style.button}>
                COOPERATION
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
