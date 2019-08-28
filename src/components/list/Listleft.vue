<template>
    <div class="list-nav-left">
        <ul class="list-nav-left-ul">
            <li :class="currentIndex === 0 ? 'active' : ''" @click="handleClick(0)">女装</li>
            <li to="/" tag="list" v-for="list in lists" :key="list">
                {{list}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentIndex: 0,
            lists:['男装','母婴','鞋子','箱包','居家百货','家电数码','内衣配饰','美妆','运动户外','美食','车品文娱']
        }
    },
    methods: {
            handlerClick(index) {
            this.currentIndex = index
        }
    } 
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/variables.styl'
@import '~@/assets/border.styl'
.list-nav-left
    width 25%
    height 100%
    display flex
    background #f9f9f9
    justify-content center
    align-items center
    float left
.list-nav-left ul
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
.list-nav-left ul li
    width 100%
    display flex
    justify-content center
    align-items center
    font-size .14rem
    padding .15rem 0 
</style>
