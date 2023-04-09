/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-16 00:34:36
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-04-09 15:13:01
 */

import { defineComponent, onMounted, ref } from 'vue';
import style from './index.module.less';
import digital from '@/assets/image/Digital tide toy.png';
// import i250x340px1 from '@/assets/image/250x340px (1).png';
// import i250x340pxw from '@/assets/image/250x340px (2).png';
// import i2250x340px1 from '@/assets/image/250x340px (3).png';
// import i2250x340px12 from '@/assets/image/250x340px (4).png';
import BUT1448x675px from '@/assets/image/BUT-1-448x675px.png';
import BUT2407x148pxfrom from '@/assets/image/BUT-2-407x148px.png';
import BUT3407x94px from '@/assets/image/BUT-3-407x94px.png';
import BUT478x132px from '@/assets/image/BUT-4-78x132px.png';
import EAST1448x675px from '@/assets/image/EAST-1-448x675px.png';
import EAST2144x361px from '@/assets/image/EAST-2-144x361px.png';
import EAST3171x331px from '@/assets/image/EAST-3-171x331px.png';
import EAST4209x275px from '@/assets/image/EAST-4-209x275px.png';
import LIPS2166x351px from '@/assets/image/LIPS-2-166x351px.png';
import LIPS3214x258px from '@/assets/image/LIPS-3-214x258px.png';
import LIPS4197x297px from '@/assets/image/LIPS-4-197x297px.png';
import i262x324px1 from '@/assets/image/262x324px-1.png';
import i19x280px from '@/assets/image/19x280px.png';
import i262x324px2 from '@/assets/image/262x324px-2.png';
import i262x324px3 from '@/assets/image/262x324px-3.png';
import i262x324px4 from '@/assets/image/262x324px-4.png';
import LIPS1591x365px from '@/assets/image/LIPS-1-591x365px.png';

// import BUT1591x365px2 from '@/assets/image/BLUEANDWHITEPOCELAIN273x512px.png';
// import SKYLAND273x512px from '@/assets/image/SKYLAND273x512px.png';
// import NATIONAL273x512px from '@/assets/image/NATIONALMAI273x512px.png';
import black from '@/assets/image/future/goblin/black.gif';
import blackthum from '@/assets/image/future/goblin/blackthum.png';
import green from '@/assets/image/future/goblin/green.gif';
import greenthum from '@/assets/image/future/goblin/greenthum.png';
import light from '@/assets/image/future/goblin/light.gif';
import lightthum from '@/assets/image/future/goblin/lightthum.png';
import pinBlue from '@/assets/image/future/goblin/pinBlue.gif';
import pinBluethum from '@/assets/image/future/goblin/pinBluethum.png';
import redYellow from '@/assets/image/future/goblin/redYellow.gif';
import redYellowthum from '@/assets/image/future/goblin/redYellowthum.png';
import white from '@/assets/image/future/goblin/white.gif';
import whitethum from '@/assets/image/future/goblin/whitethum.png';
import whiteBlue from '@/assets/image/future/goblin/whiteBlue.gif';
import whiteBluethum from '@/assets/image/future/goblin/whiteBluethum.png';
import whiteSky from '@/assets/image/future/goblin/whiteSkyBlue.gif';
import whiteSkythum from '@/assets/image/future/goblin/whiteSkyBluethum.png';
import w264x523px from '@/assets/image/WechatIMG255.png';
import w458x665px from '@/assets/image/458x665px.12b8c5f5.png';
const data = [
  {
    thum: greenthum,
    baseImage: green,
    title: 'National Girl: Vitality',
    content:
      'Ethnic Girl, a girl with a distinct personality and combat power, is born with the mission of safeguarding her nation. As months and years elapse, she has achieved many war exploits but her face shows no traces of age. She is affectionately known as the “National Girl”. ',
  },
  {
    thum: whiteSkythum,
    baseImage: whiteSky,
    title: 'Sky Realm',
    content:
      'As the avatar of freedom, Sky Realm aspires to an unrestrained and free life. She likes roaming in wind, sun and forests...With an unlimited extension of her imagination, she has a dreamy expectation about the future. With her presence, you will be able to perceive the beauty of all things in a state of self-possessiveness.',
  },
  {
    thum: whiteBluethum,
    baseImage: whiteBlue,
    title: 'The Blue and White Porcelain Doll',
    content:
      'The Blue and White Porcelain Doll is a classic beauty who likes blue and white colors. Her gorgeous and dignified appearance seems to have the ability to strike a chord in your heart. Aside from a faint impression of aesthetics ',
  },
  {
    thum: whitethum,
    baseImage: white,
    title: 'Geometric Futuristic Lady',
    content:
      'Adopting an undertone of cement white surrounded by scorching colors like fire and golden, the Geometric Futuristic Girl conveys not only purity, fearlessness and otherworldliness but also a great innate power. Geometric Futuristic Lady looks like a little girl who just descends into the world without much understanding of worldly affairs. Since her descent into the world, she has been experiencing all worldly phenomena and beautiful things with high curiosity and a spirit of exploration. During this period, she has experienced a lot, including both joyful moments of reunions and sad departures. Nevertheless, these experiences help her gradually develop great inner strength. Regardless of adversity or favorable conditions, she always holds a sense of pride and unruliness, refusing to be defined by any labels. Along the path of her growth, she has constantly held herself true to her original dreams and pure power, bearing infinite possibilities about the future. ',
  },
  {
    thum: pinBluethum,
    baseImage: pinBlue,
    title: 'Goddess of Romance',
    content:
      'With multiple personalities, the Goddess of Romance is a mystical and distant being yet with a touch of innocence and a gentle and delicate heart. Having witnessed the romantic relationships of humans, she gradually understands what true love is and stops being distant from other people. Instead, she starts to show her girly side to the outside world.  ',
  },
  {
    thum: redYellowthum,
    baseImage: redYellow,
    title: 'Rose of London',
    content:
      'With outstanding vitality and creativity, the Rose of London is renowned as a “little genius” thanks to her exceptional imagination and hands-on skills developed since childhood. Apart from these qualities, she now has a greater enthusiasm towards life and work, giving an impression of constant positive energy and passion in life.”. ',
  },
  {
    thum: blackthum,
    baseImage: black,
    title: 'Future Elf',
    content:
      'In an ever-changing journey towards the future, you know,' +
      ' the road will open up, the flowers will bloom and even the cold night will give way to warm sunlight in' +
      ' the morning. Try to keep your passion, as you will make exceptional accomplishments' +
      '. The ensuing chapters of the future will be yours, in your imagination and your hands.”. ',
  },
  {
    thum: lightthum,
    baseImage: light,
    title: 'Universe Butterfly',
    content:
      'Whether you are bathed by the shimmering light of the universe or the starlight in the world, your very presence in the vast space and time of the universe, in itself, is a matter of romance and the entire universe shines brightly because of your goodness. The universe provides you with a starry night. But it is you that constitutes the brilliant Milky Way and it is because of you that the universe lasts in eternity. ',
  },
];

export default defineComponent({
  name: 'Fashion',
  setup() {
    const txt = [data[0].title];
    let content = data[0].content;
    onMounted(() => {
      //打字机
      const text = document.querySelector('.text') as HTMLElement;
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
        const scroll = document.querySelector('.scroll') as HTMLElement;
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

    //切换
    const image = ref(data[0].baseImage);
    const change = (item: any) => {
      image.value = item.baseImage;
      txt[0] = item.title;
      content = item.content;
    };
    return () => {
      return (
        <div>
          <div class={style.nav}></div>
          <div class={style.bgi}></div>
          <div class={style.banner}>
            <div>
              <h1>
                <img src={digital} alt="" />
                {/* <div>COSELF Dimension Show - Virtual couture series</div> */}
              </h1>
              <div>
                <h2>DIGITAL FASHION</h2>
              </div>
              <div>
                <div>
                  <h3>Butterfly That Begets</h3>
                  <div>EVERYTHING</div>
                  <div>
                    <span>Features:</span>Starry crown, starry pearl strings, laser butterfly wing skirt, translucent butterfly wing cloak, colorful laser, bionic metal butterflies, illusory
                    fluorescent headwear
                  </div>
                  <div>
                    <span>Description:</span>The whole item features an exceptional butterfly silhouette and fully mechanical design, with the wings as thin as a cicada’s shining and looking
                    futuristic, as well as colorful irregular accessories floating in the air like silk. The reconstruction and combination of futuristic light and bionic elements show the beauty of
                    reopening the universe in Butterfly That Begets Everything.
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
                  <h3>Dragon Lady of the</h3>
                  <div>EAST</div>
                  <div>
                    <span>Features: </span>Frosted leather &nbsp; overcoat, sleeveless dragon scale cheongsam with long side slits at both sides, dragon-shaped pendant, bionic dragon bone bra, and
                    liquid metal dragon bones
                  </div>
                  <div>
                    <span>Description:</span> Clothing fusion of Cybernew Chinese style and waste earth mechanical style, get rid of the Oriental gentle feeling of new Chinese tradition, note The
                    heavy metal mechanical wind of cyberpunk adds a "mechanical taste" to sexiness, reflecting a free rebellion of zero gender spirit.
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
                    Features: Technical wasteland, street-style designer toys, laser illusory bright silver reflective vest, rainbow-covered crisp PU coat, trooper’s hat with devil’s horns,
                    transparent PU baseball cap brim, inflatable plastic pendant, skeleton demon belt buckle, the frosted translucent demon doll
                  </div>
                </div>
                <div>
                  <div>
                    Description:Wearing a laser illusory bright silver reflective vest, a rainbow-covered crisp PU coat, and a trooper’s hat with devil’s horns, the item is a patchwork of street
                    culture and fashion, to restore the coolest original street-style trendy feel. The bold and bright colors convey excited and restless emotions, and the unrestrained feel shows the
                    diversified aesthetic style belonging to forthright street-style girls.
                  </div>
                  <div>
                    <img src={LIPS2166x351px} alt="" />
                    <img src={LIPS3214x258px} alt="" />
                    <img src={LIPS4197x297px} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <h2>Future Cosmic Genie</h2>
                <div>
                  <img src={w264x523px} alt="" />
                  <div>
                    <div>
                      <span>Features:</span> CYBERPUNK, floating cat’s ears shaped headphones, a red leather skirt, outer translucent gradient blue pvc, toy brick model style thigh boots, headphones,
                      transparent gradient geometric sectional overcoat
                    </div>
                    <div>
                      <span>Description:</span>
                      The garment fuses futuristic technical elements such as pixels, electrons and neon, to create an emerging stage of fusion and coexistence between a metaverse show and a real show
                      in staggered time and space for every girl wearing the garment, witnessing the exploration of future life and feminine beauty, as well as new expectations of beauty.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2>Spotlighted Racer</h2>
                <div>
                  <div>
                    Features: CYBERPUNK, floating cat’s ears shaped headphones, a red leather skirt, outer translucent gradient blue pvc, toy brick model style thigh boots, headphones, transparent
                    gradient geometric sectional overcoat
                  </div>
                  <img src={w458x665px} alt="" />
                  <div>
                    Description: The garment fuses futuristic technical elements such as pixels, electrons and neon, to create an emerging stage of fusion and coexistence between a metaverse show and
                    a real show in staggered time and space for every girl wearing the garment, witnessing the exploration of future life and feminine beauty, as well as new expectations of beauty.
                  </div>
                </div>
              </div>
              <h2>Future ELF</h2>
              <div>
                <img src={image.value} alt="" />
                <div>
                  <div>
                    <p class="text"></p>
                  </div>
                  <div class="scroll">{content}</div>
                </div>
              </div>
              <div>
                {data.map((item) => {
                  return (
                    <div onClick={() => change(item)} class="img-hover">
                      <img src={item.thum} alt="" />
                      <div>{item.title}</div>
                    </div>
                  );
                })}
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
                        You don’t have to be constantly smart because being “dumb” will sometimes do wonders for you. You don't have to be always energetic either, because an appropriate level of
                        “quiet quitting” is more healthy
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
                        Audrey Hepburn said, “I believe, every day, you should have at least one exquisite moment.” No matter how time elapses or trend changes…there will always be one moment when you
                        can celebrate your exquisiteness with contentment.
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
                        There are few occasions where we are the center of all attention in our life. Most of the time, we have to be patient travelers who carefully exert our energy and efforts,
                        holding an “all-in” passion for life to embrace challenges, let go of the past and give the future time and patience.
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
                        No matter what you decide to devote your life to or where your interest will take you in the future, just put your energy into the correct places, find your fearless side and
                        let it guide you to the future.
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
