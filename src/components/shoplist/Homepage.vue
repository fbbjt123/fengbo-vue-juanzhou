<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <Swiper></Swiper>
        <Icon></Icon>
        <Classification></Classification>
        <ShopList></ShopList>
    </van-pull-refresh>
</template>

<script>
import Swiper from '@/components/shoplist/Swiper'
import Icon from '@/components/shoplist/Icon'
import ShopList from '@/components/shoplist/ShopList'
import Classification from '@/components/shoplist/Classification'
export default {
    data(){
        return{
            isLoading: false
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        }
    },
    components:{
        Swiper,
        Icon,
        Classification,
        ShopList
    }
}
</script>

<style lang="stylus" scoped>
</style>
