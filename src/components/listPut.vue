<template>
    <div class="player-list" :style="{display: show ? 'block' : 'none'}">
        <div :class="show ? 'player-list-mask-active player-list-mask' : 'player-list-mask'" @click="closelist"></div>
        <div :class="show ? 'player-list-view player-list-view-active' : 'player-list-view'">
            <div class="player-list-head">播放歌单</div>
            <div class="player-list-body">
                <div class="player-list-item" v-for="(item,index) in data" :key="item.id + 'listput'">
                    <div class="player-list-name font-break" @click="play(item)">{{item.name}} - <span>{{item.singer}}</span></div>
                    <div class="player-list-remove" @click="removeSong(item)"></div>
                </div>
            </div>
            <div class="player-list-foot" @click="closelist">关闭</div>
        </div>
    </div>
</template>

<script>
    import {
        mapMutations,
        mapGetters
    } from 'vuex'

    export default {
        props:["data","show"],
        data() {
            return {

            }
        },
        components: {

        },
        created() {

        },
        mounted() {

        },
        methods: {
            closelist(){
                this.$emit("closelist")
            },
            removeSong(song){
                this.$emit("remove",song)
            },
            play(song){
                this.$emit("play",song)
            }
        },
        computed: {
            
        },
        filters: {

        },
        watch: {

        }
    }
</script>

<style>
    .player-list {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2000;
    }
    
    .player-list-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0);
    }
    .player-list-mask-active{
        animation-name: listShow;
        animation-fill-mode: forwards;
        animation-duration: .1s;
        animation-delay: 0.1s;
        animation-timing-function: ease-in-out;
    }
    
    @-webkit-keyframes listShow {
        from {
            background: rgba(0, 0, 0, 0);
        }
        to {
            background: rgba(0, 0, 0, 0.6);
        }
    }
    
    @-webkit-keyframes listViewShow {
        from {
            bottom: -9rem
        }
        to {
            bottom: 0;
        }
    }
    
    .player-list-view {
        width: 100%;
        height: 8rem;
        max-height: 452px;
        position: absolute;
        left: 0;
        background: #FBFCFD;
        bottom:-9rem;
    }
    .player-list-view-active{
        animation-name: listViewShow;
        animation-fill-mode: forwards;
        animation-duration: .14s;
        animation-timing-function: ease-in-out;
    }
    
    .player-list-head,
    .player-list-foot {
        width: 100%;
        height: 0.8rem;
        max-height: 50px;
        float: left;
        text-align: center;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .player-list-head {
        border-bottom: 1px solid #F4F5F6;
    }
    
    .player-list-body {
        width: 100%;
        height: 6.4rem;
        max-height: 352px;
        float: left;
        padding-left: 20px;
        overflow: scroll;
    }
    
    .player-list-foot {
        border-top: 1px solid #F4F5F6;
    }
    
    .player-list-item {
        width: 100%;
        height: 0.8rem;
        max-height: 44px;
        display: flex;
        border-bottom: 1px solid #F4F5F6;
    }
    
    .player-list-name {
        flex: 1 1 auto;
        height: 0.8rem;
        max-height: 44px;
        line-height: 44px;
        color: #333;
        font-size: 12px;
    }
    
    .player-list-name span {
        font-size: 12px !important;
        color: #ACADAF;
    }
    
    .player-list-remove {
        width: 44px;
        height: 44px;
        flex: 0 0 auto;
        background-size: 10px auto;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url("data:image/png;base64,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");
    }
</style>