<template>
<div class="scrollContainer">
    <div class="shoplist">
        <div class="shoplist-nav">
            <ul class="shoplist-ul">
                <li
                    class="shoplist-li"
                    v-for="item in arr.goods"
                    :key="item.goods_id"
                >
                    <router-link 
                        :to="{name: 'details', params: {
                                goodId: item.goods_id,
                                titleLong:item.title_long,
                                picUrl:item.pic_url,
                                cprice:item.cprice,
                                zgCatThreeid:item.zg_cat_threeid,
                                couponTips:item.coupon_tips
                            }}"
                        tag="div">
                            <img v-lazy="item.pic_url"/>
                            <p class="title-long">{{item.title_long}}</p>
                            <span class="cprice">新价：{{item.cprice}}</span>
                            <span class="time-left">{{item.time_left}}</span>
                    </router-link>
                    <button @click="addGoods(item)">加入购物车</button>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import request from 'utils/request' 
import BScroll from 'better-scroll'
import _ from 'lodash'
import { Toast } from 'mint-ui';
import $http from 'axios'
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            arr:[]
        }
    }, 
    
    async created(){
        const result = await request({
            url:"/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
        })
        this.arr = result.data
    },

    methods:{
        ...mapActions(['addGoods']) //使用action对象中addGoods方法

    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/ellipsis.styl'
.shoplist
    width 100%
    height 100%
.shoplist-nav
    width 100%
    height 100%
.shoplist-ul
    width 100%
    height 100%
.shoplist-li
    width 48%
    float left
    margin-top 2%
    margin-left 1.5%
    background white
.shoplist-li img
    width 100%
    background #CCC
.shoplist-li .title-long
    width 100%
    padding-top 0.15rem
    ellipsis()
.cprice
    color #ff464e
    font-size .14rem
    padding-top 0.1rem
    display inline-block
    float left
.time-left
    color #888
    font-size .12rem
    padding-top 0.1rem
    padding-right 0.1rem
    display inline-block
    float right
.shoplist-li button 
    display block
    width 100%
    border none
    text-align center
    color white
    background #ff464e
    padding .15rem 0
    font-size .14rem
</style>
 