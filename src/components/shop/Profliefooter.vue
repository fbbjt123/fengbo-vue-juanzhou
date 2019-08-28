<template>
    <div class="container-footer">
        <!-- 优惠  start -->
        <div class="userItems">
            <div class="user-item-horizontal">
                <span>我的优惠券</span>
            </div>
            <div class="user-item-horizontal">
                <span>我的收藏</span>
            </div>
            <div class="user-item-horizontal">
                <span>我的拼团</span>
            </div>
            <div class="user-item-horizontal">
                <span class="user-left">我的免单券</span>
                <span class="user-right">0张</span>
            </div>
            <div class="user-item-horizontal">
                <span class="user-left">借钱</span>
                <span class="user-right">新用户免费领1000元</span>
            </div>
            <div class="user-item-horizontal">
                <span>客服中心</span>
            </div>
            <div class="user-item-horizontal no-bottom">
                <span>关于卷皮</span>
            </div>
        </div>
        <!-- 优惠  end -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.fr
    float right
.container-footer
    width 100%
    background #FFF
    margin-top .1rem
.userItems
    width 100%
    color #333
    font-size .16rem
    display flex
    flex-direction column
.user-item-horizontal
    width 100%
    display flex
    padding-left .15rem
    padding-top .15rem
    padding-bottom .15rem
    align-items center
    border-bottom 1px solid #F5F5F5
    flex-direction row
    justify-content space-between
.user-item-horizontal span 
    display flex
.user-right
    color #999
    font-size .14rem
    padding-right .2rem
</style>
