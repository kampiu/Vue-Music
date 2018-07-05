<template>
    <div class="list-navbar" :style="{background:scrolltop > 280 ? '#5179F1' : 'rgba(0,0,0,0)'}">
        <div class="list-navbar-nav back-icon" @click="back"></div>
        {{title}}
        <router-link to="/player" class="list-navbar-nav search-play"></router-link>
    </div>
</template>

<script>
    export default {
        props: ["title"],
        data() {
            return {
                scrolltop:0
            }
        },
        components: {

        },
        created() {
            window.addEventListener("scroll", this.scroll)
        },
        methods: {
            scroll(e) {
                this.scrolltop = document.documentElement.scrollTop || document.body.scrollTop
            },
            back() {
                window.history.go(-1)
            }
        },
        filters: {

        }
    }
</script>

<style>
    .list-navbar {
        width: 100%;
        height: 0.8rem;
        max-height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        color: #FFF;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 500;
        background: rgba(0, 0, 0, 0);
        transition: all linear .2s;
    }
    
    .list-navbar-nav {
        width: 44px;
        height: 100%;
        float: left;
    }
    
    .list-navbar-active {
        background: #5179F1;
    }
</style>