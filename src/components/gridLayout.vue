<template>
    <div class="grid-layout">
        <div class="box-grid-title">{{title}}<span>更多</span></div>
        <div class="flex-row-2">
            <div class="flex-row-item" v-for="(item,index) in data" v-if="index < 2">
                <div class="flex-row-img" :style="{backgroundImage:'url(' + item.cover + ')'}"></div>
                <div class="flex-row-name font-break">{{item.name}}</div>
                <div class="flex-row-creator font-break">{{item.artistName}}</div>
            </div>
        </div>
        <div class="flex-row-1">
            <div class="flex-row-item" v-for="(item,index) in data" v-if="index == 2">
                <div class="flex-row-img" :style="{backgroundImage:'url(' + item.cover + ')'}"></div>
                <div class="flex-row-name font-break">{{item.name}}</div>
                <div class="flex-row-creator font-break">{{item.artistName}}</div>
            </div>
        </div>
        <div class="flex-row-2">
            <div class="flex-row-item" v-for="(item,index) in data" v-if="index > 2">
                <div class="flex-row-img" :style="{backgroundImage:'url(' + item.cover + ')'}"></div>
                <div class="flex-row-name font-break">{{item.name}}</div>
                <div class="flex-row-creator font-break">{{item.artistName}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["data", "title"],
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
    .grid-layout {
        width: 100%;
        overflow: hidden;
        margin-bottom: 24px;
    }
    
    .flex-row-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        float: left;
        padding: 0 0.06rem;
    }
    
    .flex-row-2>.flex-row-item {
        width: 3.6rem;
        margin: 0 0.06rem;
        overflow: hidden;
    }
    
    .flex-row-2 .flex-row-img {
        width: 100%;
        height: 2.1rem;
        background-size: cover;
    }
    
    .flex-row-creator,
    .flex-row-name {
        width: 100%;
        height: .36rem;
        line-height: .36rem;
        font-size: .2rem;
        padding: 0 .02rem;
        overflow: hidden;
        color: #333;
        font-size: .24rem;
        font-weight: 700;
    }
    
    .flex-row-creator {
        color: #666;
        font-size: .2rem;
        font-weight: 400;
    }
    
    .flex-row-2>.flex-row-all-item {
        width: 100%;
        overflow: hidden;
        margin: 0 .06rem;
    }
    
    .flex-row-2 .flex-row-all-img {
        width: 100%;
        height: 2.68rem;
        background-size: cover;
    }
    
    .flex-row-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        float: left;
        padding: 0 0.06rem;
    }
    
    .flex-row-1>.flex-row-item {
        width: 100%;
        overflow: hidden;
        margin: 0 0.06rem;
    }
    
    .flex-row-1 .flex-row-img {
        width: 100%;
        height: 2.68rem;
        background-size: cover;
    }
</style>