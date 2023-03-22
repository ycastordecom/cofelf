/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-15 00:15:11
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-03-01 17:25:25
 */
import cart1 from '@/assets/image/card-1-1200x380px.png';
import { defineComponent, onMounted } from 'vue';
import style from './index.module.less';
import coself from '@/assets/image/metavers-1150x140px.png';
import i150260px from '@/assets/image/110x220px.png';
import i110x220px from '@/assets/image/110x220px (7).png';
import i110x220px2 from '@/assets/image/110x220px (1).png';
import i110x220px3 from '@/assets/image/110x220px (2).png';
import i110x220px5 from '@/assets/image/110x220px (5).png';
import i110x220px6 from '@/assets/image/110x220px (6).png';
import i110x220px36 from '@/assets/image/110x220px (3).png';
import i538x1077px from '@/assets/image/538x1077px.png';
import logo from '@/assets/image/logo-220x60px.png';
import i65x65px from '@/assets/image/65x65px.png';
import i386x170px from '@/assets/image/386x170px (1).png';
import i386x170px2 from '@/assets/image/23.png';
import i386x170px3 from '@/assets/image/3.png';
import i386x170px4 from '@/assets/image/4.png';
import i767x293px from '@/assets/image/767x293px.png';
import i234x176px from '@/assets/image/234x176px (1).png';
import i234x176px2 from '@/assets/image/234x176px (2).png';
import i234x176px3 from '@/assets/image/234x176px (3).png';
import i234x176px4 from '@/assets/image/234x176px (4).png';
import i299x364px from '@/assets/image/299x364px.png';
import cart from '@/assets/image/coself/items/cart.png';
import gile from '@/assets/image/coself/items/gile.png';
import police from '@/assets/image/coself/items/police.png';
import rich from '@/assets/image/coself/items/rich.png';
import steave from '@/assets/image/coself/items/steave.png';
import tea from '@/assets/image/coself/items/tea.png';
import work from '@/assets/image/coself/items/work.png';
import coself1 from '@/assets/image/coself/coself1.png';
//@ts-ignore
import coselfVideo from '@/assets/video/coself.mp4';
import { ref } from 'vue';
export default defineComponent({
  name: 'Series',
  setup() {
    const imageActive = ref(0);
    const imageBase = ref(i538x1077px);
    const imageClick = (index: number, image: any) => {
      imageActive.value = index;
      imageBase.value = image;
    };

    onMounted(() => {
      //监听页面滚动
      window.addEventListener('scroll', function () {
        // .scroll
        const scroll = document.querySelector('.scroll') as HTMLElement;
        // 获取他在页面中的位置
        const scrollTop = scroll.getBoundingClientRect().top;

        //页面滚动到他的位置时，让他逐渐显示
        if (scrollTop < 500) {
          scroll.style.opacity = '1';
          //动画
          scroll.style.transition = 'all 1s';
        }
      });
    });
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
                <p>
                  With the coming of spring, everything revives again. With one click, a new metaverse breaks out of the time and space staggered and disordered in 2023, where emerging digital fashion collides, to highlight new aesthetic fashion and a pioneering attitude. On February 17-21, COSELF, a virtual-real symbiotic IP brand of WEB3.0, will present their new seasonal “COSELF Metaverse Digital High Fashion Collection Show” on the official schedule for London Fashion Week February 2023.
                </p>
                <p>
                  “COSELF Metaverse Digital High Fashion Collection Show” is created by BUZHIWU, a trending artist, creator across media & curator, who focuses on virtual fashion, aesthetic output, and new trend art. According to BUZHIWU, the collection is the visual extension of virtual-real fashion items from the COSELF Metaverse Designer Toy Collection Show, which adheres to the idea of developing sustainable fashion to “inherit classics and show respect for the future”, and finds inspiration from surreal futurism and a trendy street style to endow virtual fashion with more dynamic features by adopting brand-new bold color schemes and design.
                </p>
              </p>
            </div>
          </div>

          <div class={style.box}>
            <div>
              <h1>Mystery box</h1>
              <h2>Series</h2>
              <div>
                <div>
                  <div>
                    <img onClick={() => imageClick(0, cart)} class={imageActive.value === 0 ? 'img-click' : ''} src={i150260px} alt="" />
                  </div>
                  <img onClick={() => imageClick(1, gile)} class={imageActive.value === 1 ? 'img-click' : ''} src={i110x220px} alt="" />
                  <img onClick={() => imageClick(2, work)} class={imageActive.value === 2 ? 'img-click' : ''} src={i110x220px2} alt="" />
                  <img onClick={() => imageClick(3, rich)} class={imageActive.value === 3 ? 'img-click' : ''} src={i110x220px3} alt="" />
                  <img onClick={() => imageClick(4, steave)} class={imageActive.value === 4 ? 'img-click' : ''} src={i110x220px5} alt="" />
                  <img onClick={() => imageClick(6, police)} class={imageActive.value === 6 ? 'img-click' : ''} src={i110x220px6} alt="" />
                  <img onClick={() => imageClick(7, tea)} class={imageActive.value === 7 ? 'img-click' : ''} src={i110x220px36} alt="" />
                </div>
                <img class="scroll" src={imageBase.value} alt="" />
              </div>
            </div>
          </div>
          <div class={style.news}>
            <div>
              Made In China | Introducing the MUA National Fashion Models
            </div>
            {/*<div class="img-hover">*/}
            {/*  <img src={i540x760px} alt="" />*/}
            {/*  <div>Quintessence of Chinese high tide play art</div>*/}
            {/*</div>*/}
            {/*<div class="img-hover">*/}
            {/*  <iframe class="img-hover" scrolling="no" src="http://39.105.140.152:81/" frameborder="0" margin-top="1px"></iframe>*/}
            {/*  <div>展讯</div>*/}
            {/*</div>*/}
            <div>
              <div>
                <video controls>
                  <source src={coselfVideo} type="audio/mpeg" />
                </video>

              </div>
              <div onClick={()=>window.location.href='https://mp.weixin.qq.com/s/2E4InmOdEAorCLrirkA14A'}>
                <img src={coself1}/>
                <span>
                Every woman is a free, confident individual as beautiful as a phoenix. Their power co-exists with their tenderness, blooming with rays unique to women.
              </span>
              </div>
            </div>
          </div>
          <div
              class={style.fall}
          >
            <div>Resect the Future and Inherit Classics</div>
            <div>
              <img src={cart1}/>
              <div>
                <p>
                  Resect the Future and Inherit Classics
                </p>
                <p>
                  Reshape and pay homage to classic national treasures and tell the stunning
                  beauty of
                  mountains, rivers and the nation with blind boxes.
                </p>
                <p>
                  The upcoming series comprises 6 models.
                </p>
                <span>
                                    *Only one model is currently presented on the webpage.
                                </span>
              </div>
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
                  <img src={i386x170px2} alt="" />
                  <img src={i386x170px3} alt="" />
                  <img src={i386x170px4} alt="" />
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
                    <img src={i234x176px2} alt="" />
                    <img src={i234x176px3} alt="" />
                    <img src={i234x176px4} alt="" />
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
