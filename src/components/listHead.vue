<template>
    <div class="album-view-head">
        <list-nav-bar title="歌单"></list-nav-bar :title="">
        <div class="album-view-content">
            <div class="album-view-img">
                <img alt="" :src="data.coverImgUrl" />
            </div>
            <div class="album-view-main">
                <div class="album-view-name">{{data.name}}</div>
                <div class="album-view-create">
                    <img alt="" :src="data.creator.avatarUrl" /> {{data.creator.nickname}}
                </div>
            </div>
        </div>
        <div id="album-view-mark" :style="{backgroundImage:'url(' + data.coverImgUrl + ')'}"></div>
        <div class="album-view-mark-view"></div>
    </div>
</template>

<script>
    import listNavBar from './listNavBar'
    
    export default {
        props:["data"],
        data() {
            return {

            }
        },
        components: {
            listNavBar
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
    .album-view-head {
        width: 100%;
        height: 5.4rem;
        /*padding-top: 0.4rem;*/
        float: left;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #album-view-mark {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 5;
        filter: blur(1rem);
        -webkit-filter: blur(1rem);
        -webkit-transform: scale(1.05);
    }
    
    .album-view-mark-view {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        z-index: 8;
    }
    
    .album-view-content {
        width: 100%;
        height: 1.8rem;
        z-index: 10;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    
    .album-view-img {
        width: 2rem;
        height: 2rem;
        overflow: hidden;
        flex: 0 0 auto;
        border-radius: 6px;
        position: relative;
    }
    
    .album-view-img:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 6px;
        background-image: url("./../../static/image/img-transparent.png");
        background-size: cover;
    }
    
    .album-view-img img {
        width: 100%;
    }
    
    .album-view-main {
        flex: 1 1 auto;
        display: flex;
        height: 1.8rem;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 20px;
    }
    
    .album-view-main>div {
        width: 100%;
    }
    
    .album-view-name {
        width: 100%;
        font-size: 0.28rem;
        color: #FFF;
        font-weight: bold;
        line-height: 0.5rem;
        height: 1rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    
    .album-view-create {
        width: 100%;
        line-height: 0.6rem;
        height: 0.6rem;
        font-size: 0.24rem;
        position: relative;
        padding-left: 0.6rem;
        color: #F6EBEF;
    }
    
    .album-view-create img {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        left: 0.05rem;
        border-radius: 50%;
    }
</style>