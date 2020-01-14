<template>
    <div class="hasFooter hasNav minView">
        <!-- <NavBarComponent /> -->
        <!-- <div class="headTop">
          顶部
        </div> -->
        <NavBarComponent :leftArrow="false" :title="'世间美好'"/>
        <div class="content">
          <div style="padding: .625rem 1rem;">
            <van-swipe :autoplay="3000" class="loop" >
              <van-swipe-item  v-for="(image, index) in images" :key="index">
                <van-image
                  fit="cover"
                  lazy-load
                  :width="'100%'"
                  height="200"
                  :src="`/img/${image}`"
                />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="movie">
            <span :class="currentMode==='1'?'currentMode':''" style="margin-left:.9375rem" @click="tabMode('1')">热映影片</span><i></i><span  :class="currentMode==='2'?'currentMode':''"  @click="tabMode('2')">即将上映</span>
            <van-tag
              class="allMovie"
              round
              >
              全部影片
              <div class="van-icon van-icon-arrow van-cell__right-icon"></div>
            </van-tag>
          </div>
            <HotMovie v-show="currentMode==='2'" :movie-mode="'2'"/>
            <HotMovie v-show="currentMode==='1'" :movie-mode="'1'"/>
        </div>
        <Footer :active="{name:'home'}" />
    </div>
</template>
<script>
import HotMovie from './hotMovie'
export default {
  name: 'Home',
  data () {
    return {
      images: [
        'selfBg.jpg',
        'test1.jpg',
        'test.jpeg',
        'selfBg.jpg',
        'test1.jpg',
        'test.jpeg',
        'selfBg.jpg',
        'test1.jpg',
        'selfBg.jpg',
        'test1.jpg',
        'test.jpeg'
      ],
      hotList: [],
      currentMode: '1'

    }
  },
  components: {
    HotMovie
  },
  methods: {
    tabMode (mode) {
      this.currentMode = mode
    }
  }
}
</script>
<style lang="less" scoped>
  .headTop{
    // background-color: red;
    height: 2.875rem;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
  }
  .content{
    min-height: calc(100vh - 6rem);
    overflow:auto;
    // background:gold;
    .loop{
      box-sizing: border-box;
      border-radius: .5rem;
    }
    .movie{
      padding: .625rem 0;
      display: flex;
      position: relative;
      color: #756767;
      font-size: .875rem;
      height: 1.225rem;
      line-height:  1.225rem;
      >i{
        margin:0 .9375rem;
        border-left: 1px solid #756767;
      }
      .currentMode{
        color: #fff;
        font-size: 1rem;
      }
      .allMovie{
        height: calc(100% - 1.25rem);
        position: absolute;
        right: .9375rem;
        top:0;
        bottom:0;
        margin: auto;
      }
    }
  }
</style>
