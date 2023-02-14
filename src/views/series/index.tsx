/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-15 00:15:11
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-15 06:35:39
 */

import { defineComponent } from 'vue';
import style from './index.module.less';
import coself from '@/assets/image/metavers-1150x140px.png';
import i150260px from '@/assets/image/150x260px.png';
import i110x220px from '@/assets/image/110x220px (7).png';
import i110x220px2 from '@/assets/image/110x220px (1).png';
import i110x220px3 from '@/assets/image/110x220px (2).png';
import i110x220px4 from '@/assets/image/110x220px (4).png';
import i110x220px5 from '@/assets/image/110x220px (5).png';
import i110x220px6 from '@/assets/image/110x220px (6).png';
import i110x220px36 from '@/assets/image/110x220px (3).png';
import i538x1077px from '@/assets/image/538x1077px.png';
import i540x760px from '@/assets/image/540x760px.png';
import logo from '@/assets/image/logo-220x60px.png';
import i65x65px from '@/assets/image/65x65px.png';
import i386x170px from '@/assets/image/386x170px (1).png';
import i767x293px from '@/assets/image/767x293px.png';
import i234x176px from '@/assets/image/234x176px (1).png';
import i299x364px from '@/assets/image/299x364px.png';
export default defineComponent({
  name: 'Series',
  setup() {
    return () => {
      return (
        <div class={style.series}>
          <img src={coself} alt="" />
          <iframe scrolling="no" src="http://39.105.140.152:81/" frameborder="0" margin-top="1px"></iframe>
          <div class={style.metavers}>
            <div>
              <h1>COSELF</h1>
              <h2>METAVERS</h2>
              <p>
                COSELF dimensional show represents the never-ending show, the never-ending pursuit and expression of beauty, is thousands of women show beauty and expression of beauty stage,
                staggered, transformed, diversified and embrace different. COSELF dimensional show series is a new expression of paying tribute to future diversity, embracing future aesthetic trends
                and exploring virtual fashion.
              </p>
              <p>
                When it comes to the future fashion imagination, BUZHIWU believes that the future fashion is more inclined to "echo" the real emotional desire of users, and on the basis of
                sustainable, it will pursue more diversity and independence. Users will feel and experience the most authentic expression of happiness and emotions. "A good brand is one that can build
                a long-term relationship and emotional bond between the product and the user". In digital fashion, innovation and breakthrough, breaking and reshaping
              </p>
            </div>
          </div>
          <div class={style.box}>
            <div>
              <h1>Mystery box</h1>
              <h2>Series</h2>
              <div>
                <div>
                  <img src={i150260px} alt="" />
                  <img src={i110x220px} alt="" />
                  <img src={i110x220px2} alt="" />
                  <img src={i110x220px3} alt="" />
                  <img src={i110x220px4} alt="" />
                  <img src={i110x220px5} alt="" />
                  <img src={i110x220px6} alt="" />
                  <img src={i110x220px36} alt="" />
                </div>
                <img src={i538x1077px} alt="" />
              </div>
            </div>
          </div>
          <div class={style.news}>
            <div class="img-hover">
              <img src={i540x760px} alt="" />
              <div>Quintessence of Chinese high tide play art</div>
            </div>
            <div class="img-hover">
              <iframe class="img-hover" scrolling="no" src="http://39.105.140.152:81/" frameborder="0" margin-top="1px"></iframe>
              <div>展讯</div>
            </div>
          </div>
          <div class={style.joint}>
            <div>Joint</div>
            <div>authorization</div>
            <div>
              <div>
                <div>
                  <img src={logo} alt="" />
                  <img src={i65x65px} alt="" />
                  <div>NOIR</div>
                </div>
                <div>
                  <img src={i386x170px} alt="" />
                  <img src={i386x170px} alt="" />
                  <img src={i386x170px} alt="" />
                  <img src={i386x170px} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <img src={logo} alt="" />
                  <img src={i65x65px} alt="" />
                  <div>COSELF FASHION</div>
                </div>
                <div>
                  <img src={i767x293px} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <img src={logo} alt="" />
                  <img src={i65x65px} alt="" />
                  <div>MUA</div>
                </div>
                <div>
                  <div>
                    <img src={i234x176px} alt="" />
                    <img src={i234x176px} alt="" />
                    <img src={i234x176px} alt="" />
                    <img src={i234x176px} alt="" />
                  </div>
                  <img src={i299x364px} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  },
});
