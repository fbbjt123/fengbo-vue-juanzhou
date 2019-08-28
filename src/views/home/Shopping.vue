<template>
  <!-- 首页内容 -->
  <div class="layout-container">
    <Header></Header>
    <section>
      <Search></Search>
    </section>
    <main>
      <Homepage></Homepage>
    </main>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/shoplist/Header'
import Search from '@/components/shoplist/Search'
import Homepage from '@/components/shoplist/Homepage'
import Tabbar from '@/components/layout/Tabbar'


export default {
  components:{
    Header,
    Search,
    Homepage,
    Tabbar
  }
}
</script>


<style lang="stylus" scoped>
@import '~assets/border.styl'
@import '~assets/variables.styl'
@import '~@/assets/ellipsis.styl'
.layout-container
  height 100%
  display flex
  flex-direction column
main
  background #f5f5f5
  flex 1
  ellipsis(auto,2)
  overflow auto
</style>