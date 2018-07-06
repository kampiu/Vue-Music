<template>

    <div class="ranking-view">
        <nav-bar :back="false" title="排行榜"></nav-bar>
        <div class="ranking-title">官方排行榜</div>
        <div class="ranking-item" v-if="index < 5" v-for="(item,index) in ranking" :key="item.name + item.id">
            <router-link :to="'/album/' + item.id">
            <div class="ranking-img">
                <img alt="" :src="item.coverImgUrl + '?param=140y140'" />
            </div>
            <div class="ranking-list">
                <div class="ranking-list-item" v-for="(it,ind) in item.list">
                    <div class="ranking-item-name">{{it.name}}</div>
                    <div class="ranking-item-singer">{{it.ar[0].name}}</div>
                </div>

            </div>
            </router-link>
        </div>
        <div class="ranking-title">官方排行榜</div>
        <div class="ranking-box">
            <grid-item state="ranking" :item="item" :key="item.id" v-for="(item,index) in ranking" v-if="index>=5" width="2.4rem" height="2.4rem"></grid-item>
        </div>
    </div>
</template>

<script>
    import navBar from './../components/navBar'
    import api from './../common/api'
    import gridItem from './../components/gridItem'

    export default {
        data() {
            return {
                ranking:[]
            }
        },
        components: {
            navBar,
            gridItem
        },
        created() {
            this.loadData()
        },
        methods: {
            loadData(){
                this.$http.get(api.getRanking()).then(res => {
                    if(res.body.code === 200){
                        this.ranking = res.body.list
                    }
                }).catch(err =>{
                    console.log("排行榜Err",err)
                })
            }
        },
        filters: {

        }
    }
</script>

<style>
    .ranking-view {
        width: 100%;
        overflow: scroll;
        /*padding-bottom:52px;*/
    }
    
    .ranking-title {
        width: 100%;
        height: 0.5rem;
        max-height: 32px;
        line-height: 32px;
        padding: 0 0.2rem;
        font-size: 14px;
        font-weight: bold;
    }
    
    .ranking-item ,.ranking-item  > a{
        width: 100%;
        height: 1.9rem;
        max-height: 140px;
        padding: 0 0.1rem;
        display: flex;
    }
    
    .ranking-img {
        width: 1.8rem;
        max-height: 132px;
        max-width: 132px;
        height: 1.8rem;
        margin: 4px 0;
        flex: 0 0 auto;
        margin-right: 0.4rem;
    }
    
    .ranking-img>img {
        width: 100%;
        height: 100%;
    }
    
    .ranking-list {
        flex: 1 1 auto;
        display: flex;
        border-bottom: 1px solid #F0F1F2;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0.1rem 0;
    }
    
    .ranking-list>div {
        flex: 1 1 auto;
        display: flex;
    }
    
    .ranking-list-item>div {
        display: inline-block;
        display: flex;
        align-items: center;
    }
    
    .ranking-item-name {
        overflow: hidden;
        max-width: 4rem;
        width: auto;
        height: 0.6rem;
        max-height: 40px;
        overflow: hidden;
        line-height: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .ranking-item-singer {
        flex: 1 1 auto;
        margin-left: 2px;
        max-height: 40px;
        height: 0.6rem;
        overflow: hidden;
        line-height: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #999;
    }
    .ranking-box{
        display:flex;
        flex-wrap: wrap;
    }
    .ranking-box > div{
        margin-left:0.07rem !important;
    }
</style>