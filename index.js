import Button from './packages/button'
import Progress from './packages/progress'

export {
  Button,
  Progress
}

// 存储组件列表
const components = [
  Button,
  Progress
]

const install = function (Vue) {
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
