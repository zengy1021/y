<template>
    <div class="hasFooter minView">
         <!-- <van-sticky > -->
           <div class="bgStyle">
              <div class="bg">
                <div class="tx" />
                <div class="name">
                  <h2>莹崽</h2>
                  <p>18671561774</p>
                </div>
              </div>
           </div>
           <!-- <img src="../../assets/selfBg.jpg" alt="" style="width:100%"> -->
         <!-- </van-sticky> -->
         <div class="content">
           <van-grid :column-num="3">
              <van-grid-item
                v-for="value in 8"
                :key="value"
                icon="photo-o"
                text="文字"
              />
            </van-grid>
         </div>
         <Footer :active="{name:'self'}" />
    </div>
</template>
<script>
export default {
  name: 'Self'
}
</script>
<style lang="less" scoped>
  .content{
    max-height: calc(100vh - 16.275rem);
    overflow:auto;

  }
  .bgStyle{
    .bg{
      width: 100%;
      height: 13.15rem;
      background: url(../../assets/selfBg.jpg) center no-repeat;
      background-size: 100%;
      position: relative;
      .tx{
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        left:.825rem;
        bottom: .625rem;
        background: url(../../assets/test.jpeg) center no-repeat;
        background-size: cover;
      }
      .name{
          position: absolute;
          width: calc(100vw - 6.825rem) ;
          height: 6rem;
          left:7.825rem;
          bottom: .625rem;
          font-size: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
      }
    }
  }
</style>
