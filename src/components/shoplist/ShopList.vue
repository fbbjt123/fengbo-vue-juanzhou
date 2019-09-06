<template>
<div class="shop-list-container">
    <ul class="shop-list-ul">
        <router-link
            class="shop-list-li"
            v-for="item in arr.goods"
            :key="item.goods_id"
            :to="{
                name: 'details',
                params: {
                    goodId: item.goods_id,
                    titleLong:item.title_long,
                    picUrl:item.pic_url,
                    cprice:item.cprice,
                    zgCatThreeid:item.zg_cat_threeid,
                    couponTips:item.coupon_tips
                }
            }"
            tag="li"
            >
            <img v-lazy="item.pic_url" />
            <p id="p1">{{item.title_long}}</p>
            <p id="p2">{{item.time_left}}</p>
            <p id="p3">新价：{{item.cprice}}</p>
        </router-link>
            <!-- <button @click="addGoods(item)">加入购物车</button> -->
    </ul>
</div>
</template>

<script>
import request from "utils/request";
import BScroll from "better-scroll";
// import _ from "lodash";
// import { Toast } from "mint-ui";
// import $http from "axios";
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      arr: []
    };
  },

  async created() {
    const result = await request({
      url:
        "/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
    });
    this.arr = result.data;
  },

//   methods: {
//     ...mapActions(["addGoods"])
//   }
}
</script>

<style lang="stylus">
.shop-list-container {
  width 100%
  height 100%
  .shop-list-ul{
      width 100%
      height 100%
      display flex
      justify-content space-around
      flex-wrap wrap
      .shop-list-li{
          width 50%
          padding 1%
          img{
              width 100%
              background white
          }
          #p1{
              width 100%
              font-size .16rem
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              background white
              padding-top .1rem
              padding-left .03rem
          }
          #p2{
              width 100%
              background white
              padding-top .1rem
              padding-left .03rem
              color rgba(0,0,0,.5)
              font-size .14rem
          }
          #p3{
              padding-top .1rem
              padding-left .03rem
              width 100%
              background white
              font-size .16rem
              color #ff5a61
              font-weight bold
          }
      }
  }
}
</style>
 