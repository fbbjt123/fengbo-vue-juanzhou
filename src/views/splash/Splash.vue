<template>
    <div class="splash">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <div class="splash-title">卷&nbsp;&nbsp;轴</div>
                <button @click="handleClick">立即体验</button>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data(){
        return{
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    methods: {
        handleClick() {
        this.$router.replace('/home')
    }
  }
}
</script>

<style lang="stylus" scoped>
div.splash
  height 100%
  background-color #FEE140
  background-image linear-gradient(90deg, #FEE140 0%, #FA709A 100%)

  .swiper-container
    height 100%
    .swiper-wrapper
      height 100%
      .swiper-slide
        position relative
        .splash-title
          position absolute
          left 50%
          top 35%
          text-align center
          line-height .55rem
          transform translate(-50%, 0)
          width 1.8rem
          height .55rem
          font-size .30rem
          color #fff
          border none
        button
          position absolute
          left 50%
          top 55%
          transform translate(-50%, 0)
          width 1.8rem
          height .55rem
          font-size .18rem
          border-radius .1rem
          color #fff
          background rgba(0, 0, 0, 0.2)
          border none
</style>
