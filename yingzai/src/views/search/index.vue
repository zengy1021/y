<template>
    <div class="hasFooter hasNav minView">
        <NavBarComponent :leftArrow="false" :title="'环环相扣'" :rightEventObj="rightEventObj" />
        <form action="/">
          <van-search
            v-model="keyWord"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
            @cancel="onCancel"
          >
          </van-search>
        </form>
        <!-- <van-uploader :after-read="afterRead" /> -->
        <!-- <van-image :src="obj.u_image"></van-image> -->
        <Footer  :active="{name:'search'}" />
    </div>
</template>
<script>
import api from '@/api'
export default {
  name: 'Search',
  data () {
    return {
      rightEventObj: {
        text: '',
        type: 'add',
        icon: 'plus'
      },
      obj: {},
      keyWord: ''
    }
  },
  created () {
    this.requestData()
    this.test()
  },
  methods: {
    async requestData () {
      let res = await api.getLogList()
      console.log(res)
    },
    async test () {
      let res = await api.test()
      console.log(res)
      this.obj = res.data
    },
    onSearch () {

    },
    onCancel () {

    },
    afterRead (file) {
      console.log(file)
    }
  }
}
</script>
