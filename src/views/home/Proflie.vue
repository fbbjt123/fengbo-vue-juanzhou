<template>
    <div class="cart-container">
        <main>
            <Proflieheader></Proflieheader>
            <Profliebody></Profliebody>
            <Profliefooter></Profliefooter>
        </main>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Proflieheader from '@/components/shop/Proflieheader'
import Profliebody from '@/components/shop/Profliebody'
import Profliefooter from '@/components/shop/Profliefooter'
import Tabbar from '@/components/layout/Tabbar'
export default {
    components:{
        Proflieheader,
        Profliebody,
        Profliefooter,
        Tabbar
    }
}
</script>

<style lang="stylus" scoped>
.cart-container
    height 100%
    display flex
    flex-direction column
    overflow auto
    background #F5F5F5
main
    width 100%
    flex 1
    overflow auto
</style>
