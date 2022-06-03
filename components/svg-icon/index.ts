import SvgIcon from './svg-icon.vue'

(SvgIcon as any).install = function(Vue: any) {
  Vue.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon
