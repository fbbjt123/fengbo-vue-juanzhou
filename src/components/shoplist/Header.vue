<template>
  <div class="header-container">
      <van-row type="flex" justify="space-around">
        <van-col>
          <router-link class="v-child-1" to='/home/list' tag="div">分类</router-link>
        </van-col>
        <van-col>
          <router-link class="v-child-2" to='/home/shop' tag='div'>在店铺内搜索</router-link>
        </van-col>
        1
      </van-row>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.header-container{
  width:100%;
  height:0.5rem;
  background:linear-gradient(150deg,#ff5a61 50%,#fd631c)
}
.van-row--justify-space-around{
  width: 100%;
  height: 100%
}
.van-col{
  display: flex;
  justify-content: center;
  align-items: center
}
.v-child-1,.v-child-2{
  font-size:.16rem;
  color:white;
}
.v-child-1{
  padding-left: 0.08rem;
}
.v-child-2{
  padding:.05rem 1rem;
  background: white;
  border-radius: .25rem;
  color:rgba(0, 0, 0, 0.4)
}
</style>
