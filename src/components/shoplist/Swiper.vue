<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="swiperImage in swiperImages" :key="swiperImage.id">
                <img :src="swiperImage.src" alt=""/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    data(){
        return{
            swiperImages: [
                {src:"https://goods3.juancdn.com/jas/190830/4/d/5d68f37033b0896c727b6656_1080x418.jpg"},
                {src:"https://goods4.juancdn.com/jas/190829/7/1/5d6743a433b08911dd6d400c_1080x418.jpg"},
                {src:"https://goods6.juancdn.com/jas/190829/a/f/5d67420a33b0897e6b6bbb2c_1080x418.jpg"}
            ],
        }
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true,
          cancelable:false,
          pagination: {
            el: '.swiper-pagination',
          },
        })
    },
}
</script>

<style lang="stylus">
.swiper-container{
    width 100%
    height 100%
    .swiper-wrapper{
        width 100%
        height 100%
        .swiper-slide{
            width 100%
            height 100%
            img{
                width 100%
                height 100%
            }
        }
    }
    .swiper-pagination-bullet-active{
        background #ff464e
    } 
} 
</style>
