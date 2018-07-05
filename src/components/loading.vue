<template>
    <div class="loading">
        <div class="loading-box">
            <div class="loading-round"></div>
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["loading", "time","title"],
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
    .loading {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        position: fixed;
        left: 01;
        top: 0;
        z-index: 5000;
    }
    
    .loading-box {
        width: 80px;
        height:96px;
        left: 50%;
        top: 50%;
        position: fixed;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgba(0, 0, 0, .7);
        color: #fff;
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .loading-box span{
        font-size: 14px;
    }
    .loading-round {
        border: 4px solid transparent;
        border-top-color: rgb(204, 204, 204);
        border-left-color: rgb(204, 204, 204);
        border-bottom-color: rgb(204, 204, 204);
        height: 32px;
        width: 32px;
        animation: mint-spinner-rotate .8s infinite linear;
        border-radius: 50%;
        margin-bottom:16px;
    }
    
    @keyframes mint-spinner-rotate {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(1turn);
            transform: rotate(1turn)
        }
    }
</style>