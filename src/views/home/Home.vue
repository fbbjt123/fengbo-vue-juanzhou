<template>
    <div class="layout-container">
        <!-- <Header></Header> -->
        <div class="main-scroll">
          <router-view>
          </router-view>
        </div>
        <!-- <Tabbar></Tabbar> -->
    </div>
</template>

<script>
    // import Header from '@/components/layout/Header'
    // import Search from '@/components/shoplist/Search'
    import Shopping from '@/views/home/Shopping'
    // import Tabbar from '@/components/layout/Tabbar'

    export default {
      components:{
          // Header,
          // Search,
          Shopping
          // Tabbar
      }
    }
</script>

<style lang="stylus" scoped>
@import '~@/assets/ellipsis.styl'
.layout-container
  height 100%
  display flex
  flex-direction column
section
  background #FFF
.main-scroll
  flex 1
  background #ffffff
  ellipsis(auto,2)
</style>
