<template>
  <div class="header-container">
    <ul>
      <router-link class="li1" to='/home/list' tag="li">
        <svg
          class="icon"
          width="25px"
          height="25.00px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFF"
            d="M46.545455 134.981818h148.945454v69.818182H46.545455zM316.509091 134.981818H977.454545v69.818182H316.509091zM46.545455 479.418182h148.945454v69.818182H46.545455zM316.509091 479.418182H977.454545v69.818182H316.509091zM46.545455 819.2h148.945454v69.818182H46.545455zM316.509091 819.2H977.454545v69.818182H316.509091z"
          ></path>
        </svg>
      </router-link>
      
      <li class="li2">卷皮</li>
      <router-link class="li3" to="/home/login" tag="li">登录</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:JSON.parse(localStorage.getItem("userInfo"))
    }
  }
}
</script>


<style lang="stylus" scoped>
.header-container 
  width 100%
  height 0.5rem
  background linear-gradient(150deg,#ff5a61 50%,#fd631c)
  display flex

ul
 width 100%
 height 100%
 display flex

li 
  height  100%
  display  flex
  flex-direction  column
  justify-content  center
  align-items  center
  color white
.li1,.li3
  flex 0.5
.li2
  flex 2
  font-size .20rem
.li3
  font-size .16rem
</style>
