<template>
    <div>
       <van-skeleton title :row="5" :loading="loading">
        <div class="content">
            <div class="scrollBox">
                <div class="box" v-for="(item,index) in hotList" :key="index">
                        <div class="movieImg" v-if="item.images">
                            <van-image
                                fit="cover"
                                lazy-load
                                :width="'100%'"
                                height="8.25rem"
                                :src="`${item.images.large}`"
                              />
                            <div class="rating" v-if="movieMode==='1'">淘票票评分<span> {{ item.rating.average }}</span></div>
                            <div class="rating" v-else><span></span></div>
                            <div class="shadow"></div>
                        </div>
                        <div v-else class="movieImg lookMore">
                          查看全部
                        </div>
                        <div class="movieTitle van-ellipsis">
                            {{item.title||''}}
                        </div>
                        <div class="tip" v-if="movieMode==='1'">
                          <van-tag
                          class="tipStyle"
                          v-for="(genre,index) in item.genres"
                          :key="index"
                          :type="index===0?'primary':index===1?'success':'warning'">{{genre}}</van-tag>
                        </div>
                        <div v-else class="upDate">
                          {{formatUpdateTime(item.mainland_pubdate)}}
                        </div>
                </div>
            </div>
        </div>
          </van-skeleton>
    </div>
</template>
<script>
import _ from 'lodash'
import api from '@/api'
export default {
  name: 'HotMovie',
  props: {
    movieMode: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      hotList: [],
      loading: true
    }
  },
  watch: {
    // 'movieMode': {
    //   handler (val, old) {
    //     if (val) {
    //       this.getMovieList()
    //     }
    //   },
    //   immediate: true
    // }
  },
  created () {
    this.getMovieList()
  },
  methods: {
    async getMovieList () {
      this.hotList = []
      let obj = {
        city: '深圳',
        start: 1,
        count: 10
      }
      let res = {}

      if (this.movieMode === '1') {
        res = await api.getHotMovieList(obj)
      } else {
        delete obj['city']
        res = await api.getComingMovieList(obj)
      }
      // console.log(res)
      if (res.status === 200) {
        // this.images = res.data.subjects.map(item => {
        //   return item.images.large
        // })
        this.hotList = res.data.subjects || []
        this.hotList.map((item, index) => {
          if (item.genres.length > 2) {
            item.genres.splice(2, item.genres.length)
          }
          if (index === this.hotList.length - 1) {
            this.hotList.push([])
          }
        })
        this.loading = false
      }
    },
    formatUpdateTime (time) {
      console.log(time)
      if (_.isEmpty(time)) {
        return ''
      }
      let list = time.split('-')
      list.splice(0, 1)
      let str = ''
      list.map((item, index) => {
        // if (index === 0) {
        //   str += item + '年'
        // } else
        if (index === 0) {
          str += item + '月'
        } else {
          str += item + '日'
        }
      })
      return `${str}上映`
    }
  }
}
</script>
<style lang="less" scoped>
.content{
    width: 100%;
    overflow-y: scroll;
  .scrollBox{
        // display: flex;
        // flex-wrap: nowrap;
        width: calc(6.5rem * 11) ;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        .box{
            width: 6rem;
            height: 13.5rem;
            display: flex;
            flex-direction: column;
            .lookMore{
              background-color:rgb(51, 50, 50);
              font-size: .875rem;
            }
            .movieImg{
                position: relative;
                width: 100%;
                height: 8.25rem;
                border-radius: 8px;
                overflow: hidden;
                text-align: center;
                line-height: 8.25rem;
                .rating{
                    position: absolute;
                    z-index: 2;
                    width: 100%;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    bottom: 0;
                    left: 0;
                    font-size: .75rem;
                    box-sizing: border-box;
                    padding-left: .3125rem;
                    color:rgb(238, 155, 2);
                    // 3d3e40
                    >span{
                        // font-size: .875rem;
                        font-weight: 700;
                    }
                }
                .shadow{
                    position: absolute;
                    z-index: 1;
                    width: 100%;
                    height:  2.5rem;
                    bottom: 0;
                    left: 0;
                    background:linear-gradient(rgba(255,255,255,0),rgba(61,62,64,.8))
                }
            }
            .movieTitle{
                // display: flex;
                // align-items: center;
                height: 3.25rem;
                line-height: 3.25rem;
                font-size: .875rem;
            }
            .tip{
              height: 2rem;
                .tipStyle{
                  margin-right: .3125rem;
                    transform: scale(1);
                    font-size: .75rem;
                }
            }
            .upDate{
              font-size: .75rem;
              color: antiquewhite;
            }
        }
    }
}

</style>
