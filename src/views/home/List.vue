<template>
    <div class="app">
        <div class="cate-list">
            <ListHeader></ListHeader>
            <div class="cate-nav">
                <Listleft></Listleft>
                <ListRight></ListRight>
            </div>
        </div>
    </div>  
</template>

<script>
import ListHeader from '@/components/list/ListHeader'
import Listleft from '@/components/list/Listleft'
import ListRight from '@/components/list/ListRight'
export default {
    components:{
        ListHeader,
        Listleft,
        ListRight
    }
}
</script>

<style lang="stylus" scoped>
.app
    width 100%
.cate-list
    overflow auto
.cate-nav
    width 100%
    height 100%
</style>
