/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 22:47:44
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-12 23:20:52
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
