<template>
    <div class="box-grid-item" :style="{width:width}">
        <router-link :to="state == 'album' || state == 'ranking'? '/album/' + item.id : '###'">
            <div class="box-grid-item-img" :style="{height: height}">
                <img :src=" state == 'album' || state == 'ranking'? item.coverImgUrl + '?param=140y140' : item.picUrl + '?param=140y140'" class="load-img" @load="imgLoad" alt="" />
                <img class="img-default" src="../../static/image/default.jpg" alt="" />
                <div class="box-grid-item-depict" v-if="state == 'album'">{{item.playCount | formatCount}}</div>
            </div>
            <div class="box-grid-item-content font-break">
                <div class="font-break">{{item.name}}</div>
                <div class="box-grid-item-creator font-break" v-if="state == 'cd'">{{item.artists[0].name}}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import gridItem from './../components/gridItem'

    export default {
        props: ["item", "state", "width","height"],
        data() {
            return {

            }
        },
        components: {

        },
        created() {

        },
        methods: {
            imgLoad(e) {
                e.target.className = "load-img img-loadEnd"
            }
        },
        filters: {
            formatCount(e) {
                let v = parseInt(e)
                if(v < 9999) {
                    return v
                } else {
                    return(v / 10000).toFixed(0) + '万'
                }
            }
        }
    }
</script>

<style>
    .box-grid-item,
    .box-grid-item a {
        float: left;
        margin-bottom: 6px;
        overflow: hidden;
    }
    .box-grid-item a{
        width:100%;
    }
    
    .box-grid-item-img {
        width: 100%;
        height: 2.4rem;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
    }
    
    .box-grid-item>img {
        width: 100%;
        height: auto;
    }
    
    .box-grid-title:before {
        content: "";
        position: absolute;
        left: 0;
        top: 9px;
        width: 3px;
        height: 18px;
        background: #5179f1;
        font-weight: 700;
    }
    
    .box-grid-item-img img {
        width: 100%;
        height:100%;
        /*height: 2.4rem;*/
    }
    
    .box-grid-item-img:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-size: 100% 100%;
        background-image: url("data:image/png;base64,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");
        z-index: 50;
    }
    
    .box-grid-item-depict {
        width: 100%;
        height: 22px;
        line-height: 22px;
        color: #f8f8f8;
        padding: 0 6px;
        position: absolute;
        left: 0;
        top: 0;
        text-align: right;
        z-index: 300;
    }
    
    .box-grid-item-content {
        height: 1.2rem;
        width: 100%;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    
    .box-grid-item-content>div:first-child {
        padding: .07rem 0;
        display: inline-block;
        width: 100%;
        max-height: .8rem;
        line-height: .34rem;
        font-size: .2rem;
        color: #333;
        -webkit-line-clamp: 2;
    }
    
    .box-grid-item-creator {
        width: 100%;
        height: .2rem;
        line-height: .2rem;
        font-size: .16rem;
        color: #69696a;
        -webkit-line-clamp: 1;
        margin-bottom: .1rem;
    }
</style>