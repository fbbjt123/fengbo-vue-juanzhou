<template>
    <div class="v-classification">
        <van-grid :column-num="2">
            <van-grid-item v-for="classimg in classimgs" :key="classimg.id">
                <van-image :src="classimg.src" />
            </van-grid-item>
        </van-grid>
        <div class="v-class-title">猜你喜欢</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            classimgs:[
                {
                    src:"https://ilce.alicdn.com/montage/78701-9c4ee47072d7dc830cb5f594521348fc.jpg?content=%7B%2213%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22papercut%22%3Atrue%2C%22value%22%3A%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fbao%5C%2Fuploaded%5C%2FTB204SSCQOWBuNjSsppXXXPgpXa_%21%213783881426.png%22%7D%7D%2C%2220%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22papercut%22%3Atrue%2C%22value%22%3A%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fbao%5C%2Fuploaded%5C%2FTB20_eRvRjTBKNjSZFwXXcG4XXa_%21%212273140661.png%22%7D%7D%2C%223%22%3A%7B%22attrs%22%3A%7B%22value%22%3A%22%5Cu5929%5Cu732b%5Cu5fc5%5Cu62a2%22%7D%7D%2C%225%22%3A%7B%22attrs%22%3A%7B%22value%22%3A%22%5Cu62a2%5Cu8d2d%5Cu8fdb%5Cu884c%5Cu4e2d%22%7D%7D%7D&pid=42126&getAvatar=avatar&img_path2=https%3A%2F%2Fgw.alicdn.com%2Ftfs%2FTB1tkZ5X4GYBuNjy0FnXXX5lpXa-375-226.jpg"
                },
                {
                    src:"https://ilce.alicdn.com/montage/78702-8761d11efecdba4d473c8ccc14d9d81f.jpg?content=%7B%2213%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22papercut%22%3Atrue%2C%22value%22%3A%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fbao%5C%2Fuploaded%5C%2FTB2q68ib9zqK1RjSZFLXXcn2XXa_%21%213520125898.png%22%7D%7D%2C%2220%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22papercut%22%3Atrue%2C%22value%22%3A%22https%3A%5C%2F%5C%2Fimg.alicdn.com%5C%2Fbao%5C%2Fuploaded%5C%2Fi2%5C%2F401746572%5C%2FO1CN011yQ1PgaVwXNYLNU_%21%21401746572.jpg%22%7D%7D%2C%223%22%3A%7B%22attrs%22%3A%7B%22value%22%3A%22%5Cu5929%5Cu5929%5Cu7279%5Cu4ef7%22%7D%7D%2C%225%22%3A%7B%22attrs%22%3A%7B%22value%22%3A%22%5Cu62a2%5Cu8d2d%5Cu8fdb%5Cu884c%5Cu4e2d%22%7D%7D%7D&pid=42026&getAvatar=avatar&img_path2=https%3A%2F%2Fossgw.alicdn.com%2Fcreatives-assets%2Fscreenshots%2Ftemplates%2F2018%2F01%2F30%2Fdf4b2974-fa05-4ad7-9d04-8ab82b998533-4671.jpg"
                }
            ]
        }
    }
}
</script>

<style lang="stylus">
.v-classification{
    width 100%
    height 100%
    .v-class-title{
        width 100%
        padding .1rem 0
        display flex
        justify-content center
        font-size .16rem
    }
}
</style>