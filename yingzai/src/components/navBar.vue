<template>
    <div>
        <van-nav-bar
            :title="title"
            :left-arrow="leftArrow"
            @click-left="onClickLeft"
            fixed
            :border="false"
            style="background:#3d3e40"
        >
            <van-icon
              v-if="rightEventObj"
              :name="rightEventObj.type"
              slot="right"
              color="#a9adb0"
              size="1.25rem"
              @click="onClickRight"
              >
              {{rightEventObj.text}}
           </van-icon>
        </van-nav-bar>
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
    },
    rightEventObj: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      switch (this.rightEventObj.type) {
        case 'add':
          this.addNewLog()
          break
        case 'share':
          this.shareOther()
          break
        default:
          this.nullEvent()
          break
      }
    },
    addNewLog () {
      console.log('新增日记')
    },
    shareOther () {
      console.log('分享影片')
    },
    nullEvent () {
      console.log('null事件')
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
