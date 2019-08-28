<template>
    <div class="detalis-container">
        <div class="detalis-row">
            <router-link class="returnPage" to="/home/shopping" tag="div">
                <svg
                    class="icon"
                    width="30px"
                    height="30.00px"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                <path 
                    fill="#333333"
                    d="M512 919.771429c-226.742857 0-411.428571-184.685714-411.428571-411.428572S285.257143 96.914286 512 96.914286 923.428571 281.6 923.428571 508.342857 738.742857 919.771429 512 919.771429z m-71.314286-599.771429L228.571429 493.714286l212.114285 138.971428v-104.228571s104.228571-21.942857 193.828572 20.114286 160.914286 120.685714 160.914285 120.685714-27.428571-133.485714-122.514285-186.514286C563.2 420.571429 438.857143 424.228571 438.857143 424.228571l1.828571-104.228571z"  /></svg>
            </router-link>
            <div class="details-cum">
                <img class="detalis-img" :src="picUrl"/>
            </div>
            <div class="details-title">
                <div class="details-title-father">
                    <div class="details-title-left">
                        <span class="span-one">￥<i>{{cprice}}</i></span>
                        <span class="span-two">包邮</span>
                    </div>
                    <div class="details-title-right">
                        <span>{{zgCatThreeid}}人购买</span>
                    </div>  
                </div>
                <p>{{titleLong}}</p>
            </div>
            <div class="sc-row">
                <div class="sc-row-left">
                    <div class="sc-left-one">
                        <span class="span1">满件折</span>
                        <span class="span2">{{couponTips}}</span>
                    </div>
                    <div class="sc-left-two">
                        <svg
                            class="icon"
                            width="25px"
                            height="25.00px"
                            viewBox="0 0 1028 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                fill="#999"
                                d="M514.554 62c-248.709 0-450.284 200.379-450.284 447.598s201.586 447.594 450.283 447.594c248.674 0 450.261-200.375 450.261-447.594 0.001-247.211-201.587-447.598-450.261-447.598zM514.479 899.037c-214.814 0-388.955-174.142-388.955-388.955 0-214.814 174.142-388.955 388.955-388.955 214.813 0 388.955 174.142 388.955 388.955 0 214.814-174.142 388.955-388.955 388.955zM280.224 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695zM470.086 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695zM641.49 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695z" />
                        </svg>
                    </div>
                </div>
                <div class="sc-row-right">
                    <div class="sc-right-one">
                        <span>24小时发货.</span>
                        <span>7天包退.</span>
                        <span>售后补贴</span>
                    </div>
                    <div class="sc-right-two">
                        <svg
                            class="icon"
                            width="25px"
                            height="25.00px"
                            viewBox="0 0 1028 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                fill="#999"
                                d="M514.554 62c-248.709 0-450.284 200.379-450.284 447.598s201.586 447.594 450.283 447.594c248.674 0 450.261-200.375 450.261-447.594 0.001-247.211-201.587-447.598-450.261-447.598zM514.479 899.037c-214.814 0-388.955-174.142-388.955-388.955 0-214.814 174.142-388.955 388.955-388.955 214.813 0 388.955 174.142 388.955 388.955 0 214.814-174.142 388.955-388.955 388.955zM280.224 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695zM470.086 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695zM641.49 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="tabbar-container">
            <ul>
                <router-link to="/home/shopping" exact active-class="active" tag="li">
                    <svg
                    class="icon"
                    width="25px"
                    height="25.00px"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill = "rgba(0,0,0,.4)"
                        d="M933.236364 460.8L563.2 90.763636c-27.927273-27.927273-74.472727-27.927273-100.072727 0l-372.363637 370.036364c-20.945455 20.945455-25.6 51.2-13.963636 76.8S111.709091 581.818182 141.963636 581.818182h37.236364v276.945454c0 53.527273 41.890909 95.418182 95.418182 95.418182h474.763636c53.527273 0 95.418182-41.890909 95.418182-95.418182v-88.436363c0-13.963636-9.309091-23.272727-23.272727-23.272728s-23.272727 9.309091-23.272728 23.272728v88.436363c0 25.6-20.945455 48.872727-48.872727 48.872728h-88.436363V670.254545c0-13.963636-9.309091-23.272727-23.272728-23.272727H386.327273c-13.963636 0-23.272727 9.309091-23.272728 23.272727V907.636364h-88.436363c-25.6 0-48.872727-20.945455-48.872727-48.872728V558.545455c0-13.963636-9.309091-23.272727-23.272728-23.272728H141.963636c-16.290909 0-20.945455-11.636364-23.272727-16.290909-2.327273-4.654545-4.654545-16.290909 4.654546-27.927273l372.363636-367.70909c9.309091-9.309091 25.6-9.309091 34.909091 0l370.036363 370.036363c11.636364 11.636364 6.981818 23.272727 4.654546 27.927273-2.327273 4.654545-6.981818 16.290909-23.272727 16.290909h-60.509091c-13.963636 0-23.272727 9.309091-23.272728 23.272727v97.745455c0 13.963636 9.309091 23.272727 23.272728 23.272727s23.272727-9.309091 23.272727-23.272727V581.818182h37.236364c30.254545 0 53.527273-16.290909 65.163636-44.218182 11.636364-25.6 6.981818-55.854545-13.963636-76.8z m-523.636364 232.727273h207.127273V907.636364h-207.127273v-214.109091z"
                    ></path>
                    </svg>
                    <b>首页</b>
                </router-link>
                <router-link to="/home/cart" active-class="active" tag="li">
                    <svg 
                    class="icon"
                    width="25px"
                    height="25.00px"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path 
                        fill = "rgba(0,0,0,.4)"
                        d="M355.728 826.384c-26.554 0-48.061 21.507-48.061 48.061s21.507 48.061 48.061 48.061 48.061-21.507 48.061-48.061-21.507-48.061-48.061-48.061z m412.756 0c-26.554 0-48.061 21.507-48.061 48.061s21.507 48.061 48.061 48.061 48.061-21.507 48.061-48.061-21.507-48.061-48.061-48.061z m73.253-46.619H351.918c-19.974 0-39.496-7.668-54.971-21.592-15.492-13.939-25.371-32.746-27.815-52.955l-0.004-0.034-51.159-360.168-29.084-168.179-0.058-0.417c-2.246-16.221-17.087-29.925-32.408-29.925H118c-13.807 0-25-11.193-25-25s11.193-25 25-25h38.418c40.122 0 75.994 31.859 81.871 72.613l29.074 168.122 51.404 361.965c0.994 8.221 5.121 15.959 11.622 21.809 6.28 5.65 13.925 8.762 21.528 8.762h489.819c13.808 0 25 11.193 25 25s-11.191 24.999-24.999 24.999zM389.532 657.269c-12.972 0-23.937-10.019-24.906-23.163-1.015-13.77 9.325-25.755 23.094-26.771l408.873-30.139 0.59-0.016c16.205-0.428 30.604-12.955 32.781-28.521l0.132-0.841 47.394-271.179c0.016-0.086 0.024-0.151 0.032-0.216 1.395-11.716-1.94-23.753-8.703-31.425-4.64-5.25-10.736-8.037-17.613-8.037H329.09c-13.807 0-25-11.193-25-25s11.193-25 25-25h522.116c21.316 0 40.886 8.861 55.102 24.952 16.142 18.311 23.936 44.625 20.865 70.411a53.075 53.075 0 0 1-0.433 2.946l-47.323 270.777c-5.732 39.299-40.099 69.724-80.271 71.097L391.396 657.2a25.4 25.4 0 0 1-1.864 0.069z"  />
                    </svg>
                    <b>购物车</b>
                </router-link>
                <li>立即购买</li>
                <li class="li4">加入购物车</li>
            </ul>
        </div>
    </div>
</template>
<script>
import $http from 'axios'
import request from 'utils/request'
import {mapActions} from 'vuex' 

export default {
    data(){
        return{
            goodId:this.$route.params.goodId,
            titleLong:this.$route.params.titleLong,
            picUrl:this.$route.params.picUrl,
            cprice:this.$route.params.cprice,
            zgCatThreeid:this.$route.params.zgCatThreeid,
            couponTips:this.$route.params.couponTips
        }
    },
    methods:{
        ...mapActions(['addGoods']) //使用action对象中addGoods方法
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/border.styl'
.returnPage
    position absolute
    z-index 10
    left 1%
    top 1%
    opacity 0.8
.detalis-container
    width 100%
    height 100%
    background #F5F5F5
    display flex
    flex-direction column
.detalis-row
    width 100%
    height 100%
    display flex
    flex-direction column
    overflow auto
    position relative
.details-cum
    width 100%
    display flex
    flex-direction column
.detalis-img
    width 100%
.details-title
    width 100%
    display flex
    flex-direction column
    padding-top .1rem
    padding-bottom .14rem
    background #FFF
.details-title-father
    width 100%
    display flex
    justify-content space-between
    align-items center
.details-title-left
    padding-left .15rem
.span-one
    color #ff464e
    font-size .16rem
.span-one i 
    color #ff464e
    font-size .24rem
.span-two
    background #ff464e
    color #FFF
    margin-left .1rem
.details-title-right
    color #999
    padding-right .15rem
.details-title p
    width 100%
    color #333
    font-size .16rem
    padding .05rem .15rem 0
.sc-row 
    width 100%
    margin-top .2rem
    display flex
    background #FFF
    flex-direction column
.sc-row-left,.sc-row-right
    width 100%
    display flex
    padding-left .15rem
    padding-top .1rem
    padding-bottom .1rem
.sc-row-left
    justify-content space-between
    border-bottom 1px solid rgba(0,0,0,.2)
.sc-left-one
    display flex
.span1
    background #ff464e
    color #FFF
.span2
    margin-left .1rem
.sc-left-two
    display flex
    padding-right .15rem
.sc-row-right
    width 100%
    display flex
    justify-content space-between
.sc-right-two
    padding-right .15rem
.tabbar-container
  width  100%
  height  0.62rem
  border(1px 0 0 0)
  background  white
.tabbar-container ul
  height  100%
  display flex
.tabbar-container ul li 
  height  100%
  flex  1
  display  flex
  flex-direction  column
  justify-content  center
  align-items  center
  border-right 1px solid rgba(0,0,0,.2)
.tabbar-container ul li b 
  font-size  0.16rem
  transform  scale(0.8)
  line-height  0.25rem
  color rgba(0,0,0,.4)
.li4
    background #ff464e
    color white
    border-right 0
</style>
