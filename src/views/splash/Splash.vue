<template>
  <div class="splash">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(imgUrl,i) in imgUrls" :key="imgUrl.id">
        <img :src="imgUrl.wUrl" alt="" />
        <div class="num">{{count}}秒后跳转</div>
        <div class="box1" v-if="i === 0">
          <p>在这里</p>
          <p>TA会在<span>下一秒</span>遇见你</p>
        </div>
        <div class="box1" v-if="i === 1">
          <p>在这里</p>
          <p>你可以听到周围人的<span>心声</span></p>
        </div>
        <button @click="handleClick" v-if="i === 2">立即体验</button>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import request from "utils/request.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      count: "", //倒计时
      imgUrls: [
        {wUrl: require("../../../src/assets/splashimg/w1.png")},
        {wUrl: require("../../../src/assets/splashimg/w2.png")},
        {wUrl: require("../../../src/assets/splashimg/w3.png")}
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    this.threeGo()
  },
  methods: {
    handleClick() {
      this.$router.replace("/home");
    },
    threeGo() {
      const TIME_COUNT = 3;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            this.$router.push({
              path: "/home"
            });
          }
        }, 1000);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
div.splash {
  height: 100%;
  .swiper-container {
    height: 100%;
    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .num{
          position: absolute;
          right:3%;
          top:2%;
          background:black;
          opacity:0.5;
          padding:.1rem .2rem;
          border-radius:.2rem;
          color:white
        }
        .box1 {
          position: absolute;
          left: 50%;
          top: 72%;
          transform: translate(-50%, 0);
          font-size: 0.18rem;
          color: white;
          width: 100%;
          p {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              font-size: 0.24rem;
            }
          }
        }
        button {
          position: absolute;
          left: 50%;
          top: 72%;
          transform: translate(-50%, 0);
          width: 1.8rem;
          height: 0.55rem;
          font-size: 0.18rem;
          border-radius: 0.1rem;
          border: none;
          background: white;
        }
      }
    }
  }
}

.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 30px;
  left: 0;
  width: 100%;
}
</style>

