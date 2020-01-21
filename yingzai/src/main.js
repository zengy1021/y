import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/styles/common.less'
import { Tabbar, TabbarItem, NavBar, Sticky, button, Grid, GridItem, Swipe, SwipeItem, Lazyload, Image, Tag, Skeleton, Icon, uploader, Search } from 'vant'

import Footer from '@/components/footer.vue'
import NavBarComponent from '@/components/navBar.vue'

Vue.config.productionTip = false
Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Sticky).use(button).use(Grid).use(GridItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Image).use(Tag).use(Skeleton).use(Icon).use(uploader).use(Search)
Vue.component(Footer.name, Footer)
Vue.component(NavBarComponent.name, NavBarComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
