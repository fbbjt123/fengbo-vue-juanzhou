<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href="#">
                    <img src="//gw.alicdn.com/tfs/TB1O6iZMVzqK1RjSZFvXXcB7VXa-1035-390.jpg_790x10000Q75.jpg_.webp" alt="">
                </a>
            </div>
            <div class="swiper-slide">
                <a href="#">
                    <img src="//gw.alicdn.com/imgextra/i3/181/O1CN01KLOldX1DCwC7KnZKO_!!181-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt="">
                </a>
            </div>
            <div class="swiper-slide" style="background:yellow">
                <a href="#">
                    <img src="//gw.alicdn.com/imgextra/i2/85/O1CN01AU3xQu1CUyAp3FpPC_!!85-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true,
          cancelable:false
        })
    }
}
</script>

<style lang="stylus" scoped>
.swiper-container
    width 100%
    height 100%
.swiper-wrapper
    width 100%
    height 100%
.swiper-wrapper
    width 100%
    height 100%
.swiper-slide img 
    width 100%
    height 100%
</style>
