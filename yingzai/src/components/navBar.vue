<template>
    <div>
        <van-nav-bar
            :title="title"
            :left-arrow="leftArrow"
            @click-left="onClickLeft"
            fixed
            :border="false"
            style="background:#3d3e40"
            />
    </div>
</template>
<script>
export default {
  name: 'NavBarComponent',
  props: {
    leftArrow: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '未设置'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
    .van-icon-arrow-left:before {
        color: #a9adb0;
    }
    .van-nav-bar__title{
        color: #e2e2e4;
    }
</style>
