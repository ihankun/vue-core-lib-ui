import SvgIcon from '@/packages/svg-icon/svg-icon.vue'

(SvgIcon as any).install = function(Vue: any) {
  Vue.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon
