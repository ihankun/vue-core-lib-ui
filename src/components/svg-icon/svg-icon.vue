<template>
  <svg :fill="iconColor" :class="iconClass">
    <use :xlink:href="iconNameCp"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class SvgIcon extends Vue {
  @Prop({ type: String, required: true }) iconName !: string;
  @Prop({ type: String, default: '#666' }) iconColor !: string;
  created() {
    // console.log('svg图标:' + this.iconName)
  }

  get iconNameCp() {
    return `#icon-${this.iconName}`
  }

  get iconClass() {
    return '`svg-icon`'
  }
}
</script>

<style scoped lang='scss'>
</style>
