/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-16 22:31:04
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-03-01 17:06:30
 */
import { defineComponent } from 'vue';
import i499x210px from '@/assets/image/499x210px.png';
import style from './index.module.less';
import LOGO1184x160px from '@/assets/image/LOGO-1-184x160px.png';
import LOGO2364x165px from '@/assets/image/LOGO-2-364x165px.png';
import LOGO3157157px from '@/assets/image/LOGO-3-157x157px.png';
import news1 from '@/assets/image/news (2).png';
import news2 from '@/assets/image/news (3).png';
import news3 from '@/assets/image/news (4).png';
import news4 from '@/assets/image/news (5).png';
import news5 from '@/assets/image/news (1).png';
import news6 from '@/assets/image/news (6).png';
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
          <h2>Contact information</h2>
          <div>Braincircuits@163.com</div>
        </div>
        <div>
          <h2>News</h2>
          <div>
            <div onClick={() => toPath('https://baijiahao.baidu.com/s?id=1717503293366815575&wfr=spider&for=pc')} class={[style.item,'img-hover']}>
              <img src={news1} alt="" />
              <div>
                <div>The artist interview | trend</div>
                <div>Wu does not know: never set limits to </div>
                <div>shape their own diversity</div>
              </div>
            </div>
            <div onClick={() => toPath('https://baijiahao.baidu.com/s?id=1717503293366815575&wfr=spider&for=pc')} class={[style.item,'img-hover']}>
              <img src={news2} alt="" />
              <div>
                <div>The first battle was successful</div>
                <div>Beauty Fairy series 3D digital collection sold out! </div>
              </div>
            </div>
            <div onClick={() => toPath('https://mp.weixin.qq.com/s/wRqtEVmgbsMooAya42oY5w')} class={[style.item,'img-hover']}>
              <img src={news3} alt="" />
              <div>
                <div>Collection launch</div>
                <div>White on e digital fashion festival "Four Moments", </div>
                <div>the first wave of limited</div>
              </div>
            </div>
            <div onClick={() => toPath('https://mi.mbd.baidu.com/r/N1qYkeDSVO?f=cp&u=97da69f95973fe80')} class={[style.item,'img-hover']}>
              <img src={news4} alt="" />
              <div>
                <div>NGART</div>
                <div>Beauty elves join hands with NGART next </div>
                <div>generation trend art season</div>
              </div>
            </div>
            <div onClick={() => toPath('https://page.om.qq.com/page/O7XyTbOIQbkqFBgjedeULIrg0')} class={[style.item,'img-hover']}>
              <img src={news5} alt="" />
              <div>
                <div>COSELF&NOI</div>
                <div>Fashion crossover tide play brand beauty goblin</div>
                <div>and coffee brand Noir Nonoya open delicious linkage</div>
              </div>
            </div>
            <div onClick={() => toPath('https://page.om.qq.com/page/O7XyTbOIQbkqFBgjedeULIrg0')} class={[style.item,'img-hover']}>
              <img src={news6} alt="" />
              <div>
                <div>COSELF&MUA</div>
                <div>MUA Plant Extract fresh wake up mouth spray, leading </div>
                <div>the new fashion of mouth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
