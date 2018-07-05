<template>
    <div class="box-grid">
        <div class="box-grid-title">{{title}}<router-link :to="state == 'album' ? '/albumlist' : '###'">更多</router-link></div>
        <div class="box-grid-body">
            <grid-item :state="state" :item="item" :key="item.id" v-for="(item,index) in data" width="33%" height="2.4rem"></grid-item>
        </div>
    </div>
</template>

<script>
    import gridItem from './../components/gridItem'

    export default {
        props: ["data", "state", "title"],
        data() {
            return {

            }
        },
        components: {
            gridItem
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
    .box-grid {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin: 12px auto;
    }
    
    .box-grid-title {
        width: 100%;
        height: 38px;
        line-height: 38px;
        padding: 0 8px;
        font-size: 14px;
        position: relative;
    }
    
    
    .box-grid-title a {
        float: right;
    }
    .box-grid-body {
        width: 100%;
        /*padding-left:0.01rem;*/
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>