<template>
    <div>
        <div>
            <Swiper></Swiper>
            <Icon></Icon>
            <ShopList></ShopList>
        </div>
    </div>
</template>

<script>
import Swiper from '@/components/shoplist/Swiper'
import Icon from '@/components/shoplist/Icon'
import ShopList from '@/components/shoplist/ShopList'
import request from 'utils/request' 
import BScroll from 'better-scroll'
import _ from 'lodash'
import { Toast } from 'mint-ui';
import $http from 'axios'
export default {
    components:{
        Icon,
        Swiper,
        ShopList
    }
}
</script>

<style lang="stylus" scoped>
.list-warp
    position relative
    overflow hidden
.page
    height 100%
</style>
