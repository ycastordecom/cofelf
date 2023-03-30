/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:34:48
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-03-29 23:19:12
 */

import {defineComponent} from 'vue';
// import cart1 from '@/assets/image/card-1-1200x380px.png';
import style from './index.module.less';
import human from '@/assets/image/Head picture-330x400px.png';
import card from '@/assets/image/card-2.2-250x326px.png';
import square from '@/assets/image/square-22x80px.png';
import router from '@/router';
import Lipstick from '@/assets/image/Lipstick Mechanic.png';
import Dragon from '@/assets/image/Dragon lady of the east.png';
import Butterflies from '@/assets/image/Butterflies create everything.png';
import Geometric from '@/assets/image/Geometric mirohime.png';
import National from '@/assets/image/National maiden.png';
import Sky from '@/assets/image/Sky land.png';
//@ts-ignore
import vedio from '@/assets/video/home.mp4'
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
                  <video controls>
                    <source src={vedio} type="video/mp4" />
                  </video>
                  <div>
                    <div>
                      <div>BUZHIWU</div>
                      {/* <div>WOO</div> */}
                      <div>The Nth possibility of the metabrand IP</div>
                    </div>
                    <div class="img-hover" onClick={() => toPath('https://muselink.cc/MeleterWoo')}>
                      <img src={human} alt="" />
                      <div>
                        <p>Cross-media Creator & Curator</p>
                        <p>Founder of the Circuit Brain Culture & Leader of the COSELF Brand</p>
                      </div>
                    </div>
                  </div>

                  <div class={style.guangdong}>
                    <img src={square} alt="" />
                    <div class={style.text}>
                      <h2>COSELF Metaverse </h2>
                      <h2>Digital High Fashion Collection Show</h2>
                    </div>
                  </div>
                  <div class={style.moment}>
                    <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
                      <img src={Lipstick} alt="" />
                      <div>Lipstick Mechanic</div>
                    </div>
                    <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
                      <img src={Dragon} alt="" />
                      <div>Dragon Lady of the East</div>
                    </div>
                    <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
                      <img src={Butterflies} alt="" />
                      <div>Butterfly That Begets Everything</div>
                    </div>
                  </div>
                  <div class={style.digtal}>
                    <h2>Future Fashion</h2>
                    <div>
                      <div class={[style.item, 'img-hover']}>
                        <img src={card} alt="" />
                        <div>Goddess of Romance</div>
                      </div>
                      <div class={[style.item, 'img-hover']}>
                        <img src={Geometric} alt="" />
                        <div>Geometric Futuristic Lady</div>
                      </div>
                      <div class={[style.item, 'img-hover']}>
                        <img src={National} alt="" />
                        <div>National Girl: Vitality</div>
                      </div>
                      <div class={[style.item, 'img-hover']}>
                        <img src={Sky} alt="" />
                        <div>Sky Realm</div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => toUrl('/fashion')} class={style.seeallthe}>
                    SEE ALL THE DIGITAL TIDE PLAY
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