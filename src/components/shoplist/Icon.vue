<template>
  <van-grid :gutter="1" :column-num="4">
    <van-grid-item
      v-for="value in values"
      :key="value.id"
      :icon="value.icon"
      :text="value.text"
      :to="value.href"
    />
  </van-grid>
</template>

<script>
export default {
  data(){
    return{
      values:[
        {
          icon:require("../../../src/assets/icon/aeropress.png"),
          text:"最后疯抢",
          href: "/home/berserk"
        },
        {
          icon:require("../../../src/assets/icon/biscuit.png"),
          text:"限时秒杀",
          href: "/home/berserk"
        },
        {
          icon:require("../../../src/assets/icon/chemex.png"),
          text:"品牌特卖",
          href: "/home/berserk"
        },
        {
          icon:require("../../../src/assets/icon/coffeebeans.png"),
          text:"生活超市",
          href: "/home/berserk"
        },
        {
          icon:require("../../../src/assets/icon/coffeecapsules.png"),
          text:"每日爆款",
          href: "/home/berserk"
        },
        {
          icon:require("../../../src/assets/icon/coffeecocktail.png"),
          text:"优选好货",
          href: "/home/berserk"
        },
        {
          icon:require("../../../src/assets/icon/coffeemill.png"),
          text:"品牌仓库",
          href: "/home/berserk"
        },
        {
          icon:require("../../../src/assets/icon/coffeepot.png"),
          text:"天天特价",
          href: "/home/berserk"
        }
      ]
    }
  }
};
</script>

<style lang="stylus">
.van-grid-item__text {
  font-size .16rem
}
</style>
