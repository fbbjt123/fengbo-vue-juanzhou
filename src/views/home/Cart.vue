<template>
    <div class="cart-container">
        <header class="cart-header">购物车</header>
        <div class="cart-row"> 
            <div class="car">
                <div class="cart-content-one" v-if="!arr.length">
                    <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt="">
                    <p>看到喜欢的就带回家吧</p>
                    <router-link tag="div" to="/home/shopping">今日推荐</router-link>
                </div>    
                <div class="shopGoodsId" v-for="(item,index) in arr" :key="item.goods_id" v-else>
                    <div class="childOne">
                        <img :src="item.pic_url"/>
                    </div>
                    <div class="childTwo">
                        <p class="p1">{{item.title_long}}</p>
                        <p class="p2">￥{{item.cprice}}元</p>
                        <div class="p3">
                            <button @click="reduceNum(index)">-</button>
                            <input v-model="item.num" type="text" name="">
                            <button @click="addNum(index)">+</button>
                        </div>
                    </div>
                    <div class="childSan">
                        <button @click="deleteGoods(index)" size="small" type="danger">删除</button>
                    </div>
                </div>
                <div class="money">总计：<span>{{totalMoney}}元</span></div>
            </div>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex' 
import Tabbar from '@/components/layout/Tabbar'
export default {
    name: 'car',
    data () {
        return {      
           
        }
    },
    components:{
        Tabbar
    },
    methods:{
        ...mapActions(['addNum','reduceNum','deleteGoods'])
    },
    computed:{
        ...mapGetters(['totalMoney']),//在计算属性里面使用getter和state对象
        ...mapState(['arr'])
    }
}
</script>

<style lang="stylus" scoped>
.cart-container
    height 100%
    display flex
    flex-direction column
    background #f5f5f5
.cart-row
    flex 1
    overflow auto
.cart-header
    width 100%
    padding .1rem 0
    background #ffffff
    font-size .14rem
    display flex
    justify-content center
    align-items center
.cart-content-one
    width 100%
    display flex
    justify-content center
    align-items center
    flex-direction column
.cart-content-one img
    display block
    padding-top .5rem
    width 35%
.cart-content-one p
    font-size .16rem
    padding .08rem 0
.cart-content-one div
    border 1px solid #FF464F
    color #FF464F
    padding 0.2rem 0.4rem
.shopGoodsId
    width 100%
    height 100%
    background #FFF
    display flex
    border-top 1px solid rgba(0,0,0,.1)
    padding-bottom .1rem
.childOne
    width 30%
    display inline-block
.childOne img 
    width 100%
    display block
    padding-top .1rem
    padding-left .1rem
.childTwo
    width 60%
    display inline-block
.childTwo .p1,.childTwo .p2,.childTwo .p3,.childTwo .p4
    padding-left .1rem
    padding-top .1rem
.childTwo .p2
    color #FF464F
    font-size .16rem
.childTwo .p3 input 
    border none
    width 20%
    text-align center
    border 1px solid rgba(0,0,0,.2)
    display inline-block
.childTwo .p3 button 
    border none 
    background rgba(0,0,0,.2)
    display inline-block
    padding 0 .1rem
.childSan
    width 20%
    display inline-block
    padding-top 11%
.childSan button
    border none
    text-align center
    background rgba(0,0,0,.2)
    padding .1rem
.money
    width 100%
    text-align center
    font-size .16rem
    padding-top 5%
</style>
