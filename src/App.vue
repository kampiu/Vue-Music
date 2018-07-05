<template>
    <div id="app">
        <keep-alive>
            <router-view class="index-box"></router-view>
        </keep-alive>
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