// 导入组件，组件必须声明 name
import LapButton from './src'

// 为组件提供 install 安装方法，供按需引入
LapButton.install = function (Vue) {
  Vue.component(LapButton.name, LapButton)
}

// 导出组件
export default LapButton
