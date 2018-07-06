<template>
    <div id="app">
        <keep-alive>
            <router-view class="index-box"></router-view>
        </keep-alive>
        <audio @ended="playerend" :src="audio.songUrl" id="audio" @timeupdate="updateTime" @canplay="canPlaySong" @error="loadError"></audio>
    </div>
</template>

<script>
    import {
        mapMutations,
        mapGetters
    } from 'vuex'
    
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        created() {
            this.initAll()
        },
        methods: {
            initAll(){
                this.$store.commit("initSongList")
            },
            canPlaySong(e) {
                this.$store.commit('play')
                e.target.play()
                this.$store.commit('initDurationTime', parseInt(e.target.duration))
            },
            loadError(e) {
                
            },
            updateTime(e) {
                this.$store.commit('updateCurrentTime', parseInt(e.target.currentTime))
            },
            playerend(e){
                this.$store.dispatch("nextSong")
            }
        },
        computed: {
            ...mapGetters([
                'audio',
                'playing'
            ])
        },
        filters: {

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        width: 100%;
        height: 100%;
        position: relative;
        /*overflow: hidden;*/
    }
    .index-box{
        width: 100%;
        height: 100%;
        overflow: hidden;
        /*padding-bottom: 52px;*/
        z-index: 10;
    }
    
    
</style>