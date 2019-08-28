<template>
    <div class="cart-container">
      <input type="text" class="search" placeholder="搜索商品"  v-model="title"/>
      <div id="cart-row">
        <div class="cart-div" v-for="item in filteredBlogs" :key="item.goods_id">
          <router-link
            tag="div" 
            class="cart-div-child"
            :to="{name: 'details', params: {
                  goodId: item.goods_id,
                  titleLong:item.title_long,
                  picUrl:item.pic_url,
                  cprice:item.cprice,
                  zgCatThreeid:item.zg_cat_threeid,
                  couponTips:item.coupon_tips
                }}">
            <div class="cart-img">
              <img v-lazy="item.pic_url"/>
            </div>
            <div class="cart-p">
              <p class="title-long">{{item.title_long}}</p>
              <div class="cart-pop">
                <span class="cart-span-one">新价：{{item.cprice}}元</span>
              </div>
              <div class="cart-bottom">
                <span>{{item.zg_cat_threeid}}人已经付款</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <Tabbar></Tabbar>
    </div>
</template>

<script>
import request from 'utils/request' 
import Tabbar from '@/components/layout/Tabbar'
import $http from 'axios'

const delay = (function() {
  let timer = 0
  return function(callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

export default {
  name: 'search',
  components:{
    Tabbar
  },
  data() {
    return {
      title: '',
      search:[],
      source: null
    }
  },
  watch: {
    title() {
      delay(() => {
        this.fetchData()
      }, 300)
    }
  },
  methods: {
    async fetchData(val) {
      const result = await request({
        url: 'https://api.myjson.com/bins/1aqabe',
      })
      this.search = result.goods
    },
    cancelQuest(){
        if(typeof this.source ==='function'){
          //取消请求
          this.source('终止请求'); 
        }
    },
    getInfo(goods_id){
        const _this = this;
        //在请求发出前取消上一次未完成的请求；
        this.cancelQuest(); 
        //发送请求
        this.$http.get(`https://api.myjson.com/bins/1aqabe`,{
          cancelToken: new this.$http.CancelToken(function executor(c) {
            _this.source = c;
          })
        }).then(res =>{
        }).catch(error => {
            if (this.$http.isCancel(err)) {
                //请求如果被取消，这里是返回取消的message
                console.log('Rquest canceled', err.message);
            } else {
                console.log(err);
            }
        })
    }
  },
  // 搜索
  computed:{
    filteredBlogs(){
      let title = this.title
      let search = this.search
      if(title){
        return search.filter((item)=>{
          return item.title_long.match(this.title)
        })
      }
      return
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/ellipsis.styl'
.cart-container
  width 100%
  height 100%
  background #ccc
  display flex
  flex-direction column
.search
  width 96%
  height .35rem
  margin 10px auto
  color #999
  border none 
  border-radius 20px 
  text-indent 28px
#cart-row
  display flex
  flex-direction column
  width 100%
  flex 1
  overflow auto
  background #FFF
  align-items center
.cart-div
  width 96%
  padding-top .2rem
.cart-img
  width 48%
  float left
  border 1px solid rgba(0,0,0,.2)
.cart-img img
  width 100%
  display block
  border-radius 3px
.cart-p 
  width 46%
  float right
  padding-right .1rem
  padding-top .1rem
.cart-pop
  width 100%
  padding-top .2rem
.cart-div p
  width 100%
.cart-div .title-long
  width 100%
  font-size .15rem
.cart-span-one
  font-size .17rem
  color #ff464e
.cart-bottom
  width 100%
  padding-top .2rem
</style>