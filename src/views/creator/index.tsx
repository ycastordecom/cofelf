/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-16 22:31:04
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-03-30 22:09:02
 */
import {defineComponent} from 'vue';
import i499x210px from '@/assets/image/499x210px.png';
import style from './index.module.less';
import LOGO1184x160px from '@/assets/image/LOGO-1-184x160px.png';
import LOGO2364x165px from '@/assets/image/LOGO-2-364x165px.png';
import LOGO3157157px from '@/assets/image/LOGO-3-157x157px.png';
import news1 from '@/assets/image/news (2).png';
import news2 from '@/assets/image/news (3).png';
import news3 from '@/assets/image/news (4).png';
import news4 from '@/assets/image/news/news1.png';
import news5 from '@/assets/image/news/news2.png';
import news6 from '@/assets/image/news/news3.png';
import insImage from '@/assets/image/creator/ins.png'
import wbImage from '@/assets/image/creator/wb.png'
import hongImage from '@/assets/image/creator/hong.png'
export default defineComponent({
    name: 'Creator',
    setup() {
        const toPath = (path: string) => {
            window.location.href = path;
        };
        return () => (
          <div class={style.creator}>
            <div class={style.nav}></div>
            <div>
              <div>
                <div>Fashion artist</div>
                <img src={i499x210px} alt="" />
                <div>The creator of the digital twin</div>
              </div>
            </div>
            <div>
              <h2>PEOPLE WE WORKED WITH</h2>
              <div>
                <img src={LOGO1184x160px} alt="" />
                <img src={LOGO2364x165px} alt="" />
                <img src={LOGO3157157px} alt="" />
              </div>
            </div>
            <div>
              <h3>Contact information</h3>
              <div>Braincircuits@163.com</div>
              <div>
                <img onClick={() => toPath('https://weibo.com/u/7387967060')} src={wbImage} alt="" />
                <img onClick={() => toPath('https://www.xiaohongshu.com/user/profile/604cd1a1000000000100ae69?xhsshare=CopyLink&appuid=6180ff6800000000020')} src={hongImage} alt="" />
                <img onClick={() => toPath('https://instagram.com/buzhiwuiiiiiiii?igshid=YmMyMTA2M2Y=')} src={insImage} alt="" />
              </div>
            </div>
            <div>
              <h2>News</h2>
              <div>
                <div onClick={() => toPath('https://mp.weixin.qq.com/s/yZnMgqylYkt8czjrCu9WZQ')} class={[style.item, 'img-hover']}>
                  <img src={news1} alt="" />
                  <div>
                    <div>The artist interview | trend</div>
                    <div>Wu does not know: never set limits to</div>
                    <div>shape their own diversity</div>
                  </div>
                </div>
                <div
                  onClick={() => toPath('https://www.digitaljournal.com/pr/news/london-fashion-week-2023-fashion-scout-china-a-leading-international-platform-and-consultancy-for-designers')}
                  class={[style.item, 'img-hover']}
                >
                  <img src={news2} alt="" />
                  <div>
                    <div>The first battle was successful</div>
                    <div>Beauty Fairy series 3D digital collection sold out!</div>
                  </div>
                </div>
                <div onClick={() => toPath('https://mp.weixin.qq.com/s/wRqtEVmgbsMooAya42oY5w')} class={[style.item, 'img-hover']}>
                  <img src={news3} alt="" />
                  <div>
                    <div>Collection launch</div>
                    <div>White on e digital fashion festival "Four Moments",</div>
                    <div>the first wave of limited</div>
                  </div>
                </div>
                <div onClick={() => toPath('http://www.52hrtt.com/ar/n/w/info/fifm202302232111325405371')} class={[style.item, 'img-hover']}>
                  <img src={news4} alt="" />
                  <div>
                    <div>The unstoppable Chinese upstart</div>
                    <div>Sixteen Chinese designers appeared at London Fashion Week, making it one of the world's top four fashion shows with a record number of Chinese brands in its history</div>
                  </div>
                </div>
                <div
                  onClick={() => toPath('https://www.digitaljournal.com/pr/news/london-fashion-week-2023-fashion-scout-china-a-leading-international-platform-and-consultancy-for-designers')}
                  class={[style.item, 'img-hover']}
                >
                  <img src={news5} alt="" />
                  <div>
                    <div>London Fashion Week 2023</div>
                    <div>Fashion Scout China – a Leading International Platform and Consultancy for Designers</div>
                  </div>
                </div>
                <div
                  onClick={() =>
                    toPath(
                      'https://3w.huanqiu.com/a/de583b/4BrkXiGe2hC?agt=%C3%83%C6%92%C3%86%E2%80%99%C3%83%E2%80%9A%C3%82%C2%AF%C3%83%C6%92%C3%A2%E2%82%AC%C5%A1%C3%83%E2%80%9A%C3%82%C2%BC%C3%83%C6%92%C3%A2%E2%82%AC%C2%B9%C3%83%E2%80%A6%C3%A2%E2%82%AC%C5%93'
                    )
                  }
                  class={[style.item, 'img-hover']}
                >
                  <img src={news6} alt="" />
                  <div>
                    <div>London Fashion Week is back in style!</div>
                    <div>Known as established brands and budding industry stars, the Autumn/Winter 2023 London Fashion Week will be held from February 17 to February 21</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    },
});
