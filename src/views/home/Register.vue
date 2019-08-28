<template>
<div>
    <div class="header-container ">
        <ul>
            <router-link class="li1" to='/home/proflie' tag="li">
                <svg
                    class="icon"
                    width="25px" 
                    height="25.00px" 
                    viewBox="0 0 1024 1024" 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFF" d="M257.2 567.1h584.5c29 0 52.5-23.4 52.5-52.2V512c0-28.8-23.5-52.2-52.5-52.2H255.9L431 284.1c20.2-20.3 20.2-53 0-73.3l-0.4-0.4c-20.2-20.3-53.1-20.5-73.6-0.5l-0.5 0.5L71.8 496.1a26.013 26.013 0 0 0 0 36.7l55.7 55.9L352 813.8c20.4 20.5 53.7 20.6 74.3 0.4l0.4-0.4 1.7-1.7c20.3-20.3 20.3-53.1 0-73.4L257.2 567.1z" /></svg>
            </router-link>
            <li class="li2">注册</li>
            <router-link class="li3" to="/home/login" tag="li">登录</router-link>
        </ul>
    </div>
    <main class="main">
        <RegisterUser></RegisterUser>  
    </main>
</div>
</template>

<script>
import RegisterUser from '@/components/login/RegisterUser'
export default {
    components:{
        RegisterUser
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
// 登录
.main
    width 100%
    height 100%
    display flex
.main form 
    width 100%
    display flex
    justify-content center
    align-items center
    flex-direction column
.main form input[type="text"]
    width 96%
    height .5rem
    display flex
    border none
.main form button
    display flex
    width 96%
    margin-top .2rem
    height .5rem
    display flex
    border none
    justify-content center
    align-items center
    color #ffffff
    background #dbdbdb
    font-size .16rem
.reg
    width 96%
    display flex
    padding-top .05rem
    color #999
    flex-direction row
    justify-content space-between
.wap-app
    width 100%
    display flex
    justify-content center
    align-items center
    flex-direction column
.third-txt
    display flex
    color #999
    padding-top .5rem
.third-app
    display flex
</style>
