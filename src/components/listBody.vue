<template>
    <div class="album-list">
        <div class="album-list-head">
            <div class="album-list-index">
                <!--<img alt="" src="./img/album-play.png" />-->
            </div>
            <div class="play-all">全部播放<span>(共 {{list.length}} 首)</span> </div>
            <div class="coll-all">收藏全部</div>
        </div>
        <list-item v-for="(item,index) in list" :key="item.id + 'albumlist'" :item="item" :index="index"></list-item>
    </div>
</template>

<script>
    import listItem from './listItem'

    export default {
        props:["list"],
        data() {
            return {

            }
        },
        components: {
            listItem
        },
        created() {

        },
        methods: {

        },
        filters: {

        }
    }
</script>

<style>
    .album-list {
        width: 100%;
        overflow: hidden;
        position: relative
    }
    
    .album-list-head {
        overflow: hidden;
        width: 100%;
        /*height:0.8rem;*/
        height: 50px;
        background: #CCC;
        background: #FBFCFD;
        float: left;
        display: flex;
        justify-content: space-between;
    }
    
    .play-all {
        /*line-height: 0.8rem;*/
        line-height: 50px;
        font-size: 14px;
        color: #09090A;
        margin-right: auto;
        border-bottom: 1px solid #EEEFF0;
        flex: 1 1 auto;
    }
    
    .play-all span {
        color: #818081;
        font-size: 12px;
    }
    
    .coll-all {
        float: right;
        width: 120px;
        /*height:0.8rem;*/
        height: 50px;
        background: -webkit-linear-gradient(left, #5AB6FE, #517AF1);
        border-bottom: 1px solid -webkit-linear-gradient(left, #5AB6FE, #517AF1);
        /*line-height: 0.8rem;*/
        line-height: 50px;
        text-align: center;
        color: #FFF;
        flex: 0 0 auto;
    }
    
    .album-list-index {
        max-width: 60px;
        width: 0.8rem;
        /*height:0.8rem;*/
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
        color: #929293;
        font-size: 12px;
    }
    
    .album-list-index>img {
        width: 20px;
        height: 20px;
    }
    
    .album-list-item {
        width: 100%;
        /*height:0.8rem;*/
        height: 50px;
        background: #CCC;
        background: #FBFCFD;
        float: left;
        display: flex;
        justify-content: space-between;
    }
    
    .album-list-song {
        flex: 1 1 auto;
        overflow: hidden;
        display: flex;
        padding: 2px 0;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #EEEFF0;
    }
    
    .album-list-name {
        font-size: 14px;
        line-height: 20px;
        color: #1A1A1C;
        flex: 0 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .album-list-singer {
        line-height: 20px;
        font-size: 12px;
        color: #636465;
        flex: 0 0 auto;
    }
    
    .album-list-console {
        width: 1.6rem;
        max-width: 100px;
        padding-right: 0.1rem;
        height: 50px;
        flex: 0 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #EEEFF0;
    }
    
    .album-list-console>img {
        width: 20px;
        height: 20px;
    }
</style>