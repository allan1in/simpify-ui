import type { App, Plugin } from "vue";

// 定义新类型，以添加 install 方法，使得 SFC 可以被注册
type SFCWithInstall<T> = T & Plugin;

// 传入插件数组返回一个插件函数
export function makeInstaller(components: Plugin[]) {
  // install 用于注册数组中的所有插件
  const install = (app: App) => {
    components.forEach((c) => {
      app.use(c);
    });
  };
  // 插件可以是一个带 install() 方法的对象，亦或直接是一个将被用作 install() 方法的函数
  return install as Plugin;
}

// 传入 SFC 对象，返回一个带有 install 方法的 SFC 对象（SFCWithInstall）
export const withInstall = <T>(component: T) => {
  // 将 component 当作 SFCWithInstall 以添加 install 方法，设置组件名称并全局注册
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    // https://cn.vuejs.org/api/application.html#app-component
    app.component(name, component as Plugin);
  };
  // 返回改造后的 SFC component
  return component as SFCWithInstall<T>;
};
