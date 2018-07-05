<template>
    <div class="app-view">
        <div class="app-bar-view"></div>
        <keep-alive>
            <router-view class="app-box"></router-view>
        </keep-alive>
        <div class="app-tabbar">
            <router-link to="/home" class="tabbar-item">
                <div class="tabbar-icon tabbar-icon-home"></div>
                <span>首页</span>
            </router-link>
            <router-link to="/ranking" class="tabbar-item">
                <div class="tabbar-icon tabbar-icon-ranking"></div>
                <span>排行榜</span>
            </router-link>
            <router-link to="/collection" class="tabbar-item">
                <div class="tabbar-icon tabbar-icon-collection"></div>
                <span>收藏</span>
            </router-link>
            <router-link to="/personal" class="tabbar-item">
                <div class="tabbar-icon tabbar-icon-personal"></div>
                <span>个人</span>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        components: {

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
    .app-tabbar {
        width: 100%;
        height: 52px;
        display: flex;
        align-items: center;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #DDDDDD;
        z-index: 3000;
    }
    
    .tabbar-item {
        background: #FFF;
        width: 25%;
        height: 52px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .tabbar-item span {
        width: 100%;
        text-align: center;
        margin-top: 2px;
    }
    
    .tabbar-icon-home {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_music.svg");
    }
    
    .tabbar-icon-ranking {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_sort.svg");
    }
    
    .tabbar-icon-collection {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_collection.svg");
    }
    
    .tabbar-icon-personal {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_personal.svg");
    }
    
    .tabbar-icon {
        width: 21px;
        height: 21px;
        background-size: 100% auto;
        background-position: center center;
        background-repeat: no-repeat;
    }
    
    .app-bar-view {
        width: 100%;
        height: 0.8rem;
        max-height: 44px;
    }
    
    .app-box {
        width: 100%;
        height:calc(100vh - 44px);
        overflow: hidden;
        padding-bottom: 52px;
        z-index: 10;
    }
</style>