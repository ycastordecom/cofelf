/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:23:43
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-13 00:02:00
 */

import { defineComponent } from 'vue';
import ComponentHeader from '@/components/header';
import ComponentFooter from '@/components/footer';
export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <>
        <ComponentHeader />
        <router-view />
        <ComponentFooter />
      </>
    );
  },
});
