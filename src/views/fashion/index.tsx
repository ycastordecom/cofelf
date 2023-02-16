/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-16 00:34:36
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-16 21:34:06
 */

import { defineComponent, onMounted } from 'vue';
import style from './index.module.less';
import digital from '@/assets/image/Digital tide toy.png';
import i273x512px from '@/assets/image/273x512px.png';
import i250x340px1 from '@/assets/image/250x340px (1).png';
import i250x340pxw from '@/assets/image/250x340px (2).png';
import i2250x340px1 from '@/assets/image/250x340px (3).png';
import i2250x340px12 from '@/assets/image/250x340px (4).png';
import BUT1448x675px from '@/assets/image/BUT-1-448x675px.png';
import BUT2407x148pxfrom from '@/assets/image/BUT-2-407x148px.png';
import BUT3407x94px from '@/assets/image/BUT-3-407x94px.png';
import BUT478x132px from '@/assets/image/BUT-4-78x132px.png';
import EAST1448x675px from '@/assets/image/EAST-1-448x675px.png';
import EAST2144x361px from '@/assets/image/EAST-2-144x361px.png';
import EAST3171x331px from '@/assets/image/EAST-3-171x331px.png';
import EAST4209x275px from '@/assets/image/EAST-4-209x275px.png';
import LIPS1591x365px from '@/assets/image/LIPS-1-591x365px.png';
import LIPS2166x351px from '@/assets/image/LIPS-2-166x351px.png';
import LIPS3214x258px from '@/assets/image/LIPS-3-214x258px.png';
import LIPS4197x297px from '@/assets/image/LIPS-4-197x297px.png';
import i262x324px1 from '@/assets/image/262x324px-1.png';
import i19x280px from '@/assets/image/19x280px.png';
import i262x324px2 from '@/assets/image/262x324px-2.png';
import i262x324px3 from '@/assets/image/262x324px-3.png';
import i262x324px4 from '@/assets/image/262x324px-4.png';

export default defineComponent({
  name: 'Fashion',
  setup() {
    onMounted(() => {
      //打字机
      const text = document.querySelector('.text') as HTMLElement;
      const txt = ['NATIONAL MAIDEN'];
      let index = 0;
      let xiaBiao = 0;
      let huan = true;
      setInterval(function () {
        if (huan) {
          text.innerHTML = txt[xiaBiao].slice(0, ++index);
        } else {
          text.innerHTML = txt[xiaBiao].slice(0, index--);
        }

        if (index == txt[xiaBiao].length + 3) {
          huan = false;
        } else if (index < 0) {
          index = 0;
          huan = true;
          xiaBiao++;
          if (xiaBiao >= txt.length) {
            xiaBiao = 0;
          }
        }
      }, 200);

      //监听页面滚动
      window.addEventListener('scroll', function () {
        // .scroll
        const scroll = document.querySelector('.scroll1') as HTMLElement;
        // 获取他在页面中的位置
        const scrollTop = scroll.getBoundingClientRect().top;

        //页面滚动到他的位置时，让他逐渐显示
        if (scrollTop < 500) {
          scroll.style.opacity = '1';
          //动画
          scroll.style.transition = 'all 1s';
        } else {
          scroll.style.opacity = '0';
          //动画
          scroll.style.transition = 'all 1s';
        }
      });
    });

    return () => {
      return (
        <div>
          <div class={style.nav}></div>
          <div class={style.banner}>
            <div>
              <h1>
                <img src={digital} alt="" />
                <div>COSELF Dimension Show - Virtual couture series</div>
              </h1>
              <h2>FUTURE GOBLIN</h2>
              <div>
                <img src={i273x512px} alt="" />
                <div>
                  <div>
                    <p class="text"></p>
                  </div>
                  <div class="scroll">
                    "National Girl" is a girl with personality and fighting power. She has taken up the mission of protecting her nation since she was born. In the wasted years, she has numerous
                    achievements, but the face can not see the traces of the years, has the appearance of not old, people affectionately called her "national girl".
                  </div>
                </div>
              </div>
              <div>
                <div class="img-hover">
                  <img src={i250x340px1} alt="" />
                  <div>National maiden</div>
                </div>
                <div class="img-hover">
                  <img src={i250x340pxw} alt="" />
                  <div>Sky land</div>
                </div>
                <div class="img-hover">
                  <img src={i2250x340px1} alt="" />
                  <div>Blue and white porcelain</div>
                </div>
                <div class="img-hover">
                  <img src={i2250x340px12} alt="" />
                  <div>Geometric mirohime</div>
                </div>
              </div>
              <h2>DIGITAL FASHION</h2>
              <div>
                <div>
                  <h3>BUTTERFLES CREATE</h3>
                  <div>EVERYTHING</div>
                  <div>
                    Fashion features: Star tiara, star pearl chain, laser butterfly wing skirt, translucent butterfly wing cape, colorful laser, imitation Raw metal butterfly, magic fluorescent
                    headdress
                  </div>
                  <div>
                    Fashion introduction: The overall sense of power butterfly shape and full of mechanical design, thin wings like cicada wings glow with the future The glossy, colorful irregulars
                    are as soft as silk. Reconstruct and combine the futuristic light and bionic elements to show the butterfly The beauty of the reopening of the universe.
                  </div>
                  <div>
                    <img src={BUT2407x148pxfrom} alt="" />
                    <img src={BUT478x132px} alt="" />
                    <img src={BUT3407x94px} alt="" />
                  </div>
                </div>
                <img src={BUT1448x675px} alt="" />
              </div>
              <div>
                <img src={EAST1448x675px} alt="" />
                <div>
                  <h3>DRAGON LADY OF THE</h3>
                  <div>EAST</div>
                  <div>Fashion Features: Frosted leather coat, double-sided high slit sleeveless dragon scale cheongsam, dragon jade wear, bionic dragon skeleton bra,Liquid metal keel</div>
                  <div>
                    Fashion introduction: Clothing fusion of Cybernew Chinese style and waste earth mechanical style, get rid of the Oriental gentle feeling of new Chinese tradition, note The heavy
                    metal mechanical wind of cyberpunk adds a "mechanical taste" to sexiness, reflecting a free rebellion of zero gender spirit.
                  </div>
                </div>
                <div>
                  <img src={EAST2144x361px} alt="" />
                  <img src={EAST3171x331px} alt="" />
                  <img src={EAST4209x275px} alt="" />
                </div>
              </div>
              <div>
                <h1>Lipstick Mechanic</h1>
                <div>
                  <img src={LIPS1591x365px} alt="" />
                  <div>
                    Fashion features: Function waste soil, street tide play, bright silver laser light reflective vest, PU rainbow face crisp coat, evil Magic Foot Lei Feng Hat, transparent PU
                    baseball brim, inflatable plastic pendant, skeleton demon belt buckle, frosted translucent demon doll
                  </div>
                </div>
                <div>
                  <div>
                    Fashion features: Function waste soil, street tide play, bright silver laser light reflective vest, PU rainbow face crisp coat, evil Magic Foot Lei Feng Hat, transparent PU
                    baseball brim, inflatable plastic pendant, skeleton demon belt buckle, frosted translucent demon doll
                  </div>
                  <div>
                    <img src={LIPS2166x351px} alt="" />
                    <img src={LIPS3214x258px} alt="" />
                    <img src={LIPS4197x297px} alt="" />
                  </div>
                </div>
              </div>
              <h2>Functional clothing</h2>
              <div>
                <div>
                  <img src={i262x324px1} alt="" />
                  <div>
                    <img src={i19x280px} alt="" />
                    <div>
                      <h2>Workplace moment</h2>
                      <div>
                        You don't have to be smart all the time, the appropriate "stupid" more points; You don't have to be energetic all the time. It's healthier to "suck it up" a little bit. Petting
                        cats, watching TV shows, drinking happy water will help you recharge.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={i262x324px2} alt="" />
                  <div>
                    <img src={i19x280px} alt="" />
                    <div>
                      <h2>Delicate moment</h2>
                      <div>
                        Audrey Hepburn said: I believe,every day,you should have at least one exquisite moment, however, time goes by, the tide goes on... Every moment of peace in the present is a
                        delicate moment for you.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={i262x324px3} alt="" />
                  <div>
                    <img src={i19x280px} alt="" />
                    <div>
                      <h2>Shining moment</h2>
                      <div>
                        Focus All in love, face the difficulties, face the light, where the past, relax, give the past a little time, the past will be past; Where the future, patiently wait, give the
                        future a little time, the future will come; Enough burning life, there will be your highlight moment.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={i262x324px4} alt="" />
                  <div>
                    <img src={i19x280px} alt="" />
                    <div>
                      <h2>Believe in the future</h2>
                      <div>
                        No matter what kind of future your interests take you to, take the power you have gained, use it in the right place, find your fearless side, let it find the future you want,
                        dare to create, the future moment is now, from now on, start to believe, start lucky, start free, start equal, start extraordinary!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  },
});
