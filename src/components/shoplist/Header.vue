<template>
  <van-nav-bar
    title="卷轴"
    left-text="分类"
    right-text="搜索"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.replace("/home/list");
    },
    onClickRight() {
      this.$router.replace("/home/shop");
    }
  }
}
</script>

<style>
.van-nav-bar{
  background:linear-gradient(150deg,#ff5a61 50%,#fd631c)
}
.van-nav-bar__title{
  color:white !important;
  font-size: .18rem !important;
}
.van-nav-bar__text{
  color:white !important;
  font-size: .16rem !important;
}
</style>
