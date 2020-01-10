<template>
    <div>
        <van-tabbar
            v-model="active.name"
            active-color="#507fb5"
            inactive-color="#7e807f"
            safe-area-inset-bottom
            :border="false"
            style="background:#3d3e40"
            >
            <van-tabbar-item name="home" to='/' icon="wap-home"></van-tabbar-item>
            <van-tabbar-item name="search" to='/search'  icon="service"></van-tabbar-item>
            <van-tabbar-item name="like" to='/like'  icon="like"></van-tabbar-item>
            <van-tabbar-item name="self" to='/self'  icon="manager"></van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    active: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {

    }
  },
  computed: {
  }
}
</script>
