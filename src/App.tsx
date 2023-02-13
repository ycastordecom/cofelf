import { defineComponent } from 'vue';
import './App.module.less';
export default defineComponent({
  name: 'App',
  setup() {
    return () => <router-view />;
  },
});
