<template>
    <div class="hasFooter hasNav minView">
        <!-- <NavBarComponent /> -->
        <!-- <div class="headTop">
          顶部
        </div> -->
        <NavBarComponent :leftArrow="false" :title="'世间美好'"/>
        <div class="content">
          <van-swipe :autoplay="3000" class="loop">
            <van-swipe-item  v-for="(image, index) in images" :key="index">
              <van-image lazy-load :width="'100%'" height="200" :src="`/img/${image}`"></van-image>
            </van-swipe-item>
          </van-swipe>
        </div>
        <Footer :active="{name:'home'}" />
    </div>
</template>
<script>
import api from '@/api'
export default {
  name: 'Home',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      images: [
        'selfBg.jpg',
        'test1.jpg',
        'test.jpeg',
        'selfBg.jpg',
        'test1.jpg',
        'test.jpeg',
        'selfBg.jpg',
        'test1.jpg',
        'test.jpeg',
        'selfBg.jpg'
      ]
    }
  },
  created () {
    this.getHotMovieList()
  },
  methods: {
    async getHotMovieList () {
      let obj = {
        city: '武汉'
      }
      let res = await api.getHotMovieList(obj)
      console.log(res)
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
    padding: .625rem 1rem;
    box-sizing: border-box;
    .loop{
      border-radius: .5rem;
    }
  }
</style>
