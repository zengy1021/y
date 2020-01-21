<template>
    <div class="hasNav minView">
        <NavBarComponent :leftArrow="true" :title="movieInfo.title" :rightEventObj="rightEventObj"/>
        <div class="videoBox">
            <!-- <van-image class="backgrund" width="100%" :src="movieInfo.bloopers[1].medium" /> -->
            <video
            v-if="movieInfo.blooper_urls"
            :style="`width:100%`"
            preload
            :src="movieInfo.bloopers[1].resource_url"
            controls="controls"></video>
        </div>
        <div class="detail">
            <div class="info">
                <div class="left">
                    <van-image v-if="movieInfo.images" style="border-radius:4px;overflow:hidden" :src="movieInfo.images.small"></van-image>
                </div>
                <div class="right">
                    <div class="title">{{movieInfo.title}}</div>
                    <div class="original_title">{{movieInfo.original_title}}</div>
                    <div class="type">
                        {{formatType(movieInfo.genres)}} / {{formatType(movieInfo.durations)}}
                    </div>
                    <div class="pubdate">
                        {{ formatPubdate(movieInfo.pubdates[movieInfo.pubdates.length-1]) }}
                    </div>
                    <div>热度</div>
                </div>
            </div>
            <div class="">
                评分
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api'
import _ from 'lodash'
export default {
  name: 'MovieDetail',
  props: {

  },
  data () {
    return {
      rightEventObj: {
        text: '',
        type: 'share',
        icon: 'share'
      },
      movieInfo: {
        title: ''
      }
    }
  },
  created () {
    this.requestData()
  },
  methods: {
    async requestData () {
      let res = await api.getMoiveDetailById(this.$route.params.id)
      console.log(res, '1', this.$route.params)
      if (res.status === 200) {
        this.movieInfo = res.data
      }
    },
    formatType (array) {
      if (_.isEmpty(array)) {
        return ''
      }
      let str = ''
      array.map((item, index) => {
        if (index !== array.length - 1) {
          str += item + ' / '
        } else {
          str += item
        }
      })
      return str
    },
    formatPubdate (str) {
      console.log(str.split(')')[0].split('('))
      return `${str.split(')')[0].split('(')[0]} 在${str.split(')')[0].split('(')[1]}上映`
    }
  }
}
</script>
<style lang="less" scoped>
    .videoBox{
        width: 100%;
        padding-bottom: .625rem;
        background: #000;

    }
    .detail{
        width: 100%;
        position: relative;
        top:-0.625rem;
        border-radius: .9375rem .9375rem 0 0;
        background: #3d3e40;
        padding: .9375rem;
        box-sizing: border-box;
        .info{
            display: flex;
            .left{
                width: 5.625rem;
            }
            .right{
                flex:1;
                font-size: .75rem;
                padding-left:.625rem;
                color:rgb(253, 194, 194);
                .title{
                    font-size: 1.125rem;
                    color: #fff;
                }
                .original_title{
                    font-size:.75rem;
                    color: rgb(180, 141, 141);
                    margin-bottom: .625rem;
                }
                .type{
                    font-size: .75rem;
                }
                .pubdate{
                    font-size: .75rem;
                    line-height: 1.875rem;
                }
            }
        }
    }
</style>
