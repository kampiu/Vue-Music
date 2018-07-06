<template>
    <div class="app-view">
        <div class="app-bar-view"></div>
        <keep-alive>
            <router-view class="app-box"></router-view>
        </keep-alive>
        <div class="app-tabbar">
            <router-link to="/home" class="tabbar-item">
                <div :class="router == 'home' ? 'tabbar-icon tabbar-icon-home-active' : 'tabbar-icon tabbar-icon-home'"></div>
                <span :style="{color: router == 'home' ? '#5179F1' : '#555555'}">首页</span>
            </router-link>
            <router-link to="/ranking" class="tabbar-item">
                <div :class="router == 'ranking' ? 'tabbar-icon tabbar-icon-ranking-active' : 'tabbar-icon tabbar-icon-ranking'"></div>
                <span :style="{color: router == 'ranking' ? '#5179F1' : '#555555'}">排行榜</span>
            </router-link>
            <router-link to="/collection" class="tabbar-item">
                <div :class="router == 'collection' ? 'tabbar-icon tabbar-icon-collection-active' : 'tabbar-icon tabbar-icon-collection'"></div>
                <span :style="{color: router == 'collection' ? '#5179F1' : '#555555'}">收藏</span>
            </router-link>
            <router-link to="/personal" class="tabbar-item">
                <div :class="router == 'personal' ? 'tabbar-icon tabbar-icon-personal-active' : 'tabbar-icon tabbar-icon-personal'"></div>
                <span :style="{color: router == 'personal' ? '#5179F1' : '#555555'}">个人</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {
        mapMutations,
        mapGetters
    } from 'vuex'
    import store from './../common/store'

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
        computed: {
            ...mapGetters([
                'router'
            ])
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
    .tabbar-icon-home-active{
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_active_music.svg");
    }
    
    .tabbar-icon-ranking {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_sort.svg");
    }
    .tabbar-icon-ranking-active {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_active_sort.svg");
    }
    
    .tabbar-icon-collection {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_collection.svg");
    }
    .tabbar-icon-collection-active {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_active_collection.svg");
    }
    
    .tabbar-icon-personal {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_personal.svg");
    }
    .tabbar-icon-personal-active {
        background-image: url("https://billson.oss-cn-shenzhen.aliyuncs.com/React-Music/tabbar_active_personal.svg");
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