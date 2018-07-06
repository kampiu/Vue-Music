<template>
    <div class="home-view">
        <div class="home-scroll">
            <search-bar></search-bar>
            <div id="slider">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in swiperList" :key="item.pic"><img :src="item.pic" class="banner-item" alt=""></swiper-slide>
                </swiper>
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
            <grid-box :data="music" state="album" title="推荐歌单"></grid-box>
            <grid-layout :data="mv" title="最新MV"></grid-layout>
            <grid-box :data="cd" state="cd" title="最新音乐"></grid-box>
            <grid-box :data="radios" state="radio" title="主播电台"></grid-box>
        </div>
    </div>
</template>

<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    import PullTo from 'vue-pull-to'
    import api from './../common/api'
    import gridBox from './../components/gridBox'
    import gridLayout from './../components/gridLayout'
    import searchBar from './../components/searchBar'

    export default {
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    continuous: true,
                    speed: 600,
                    auto: 6000,
                    loop: true,
                },
                music: [],
                offset: 0,
                swiperList: [],
                mv: [],
                cd: [],
                radios: []
            }
        },
        components: {
            swiper,
            swiperSlide,
            PullTo,
            gridBox,
            gridLayout,
            searchBar
        },
        created() {
            this.loadData()
            this.loadSwiper()
            this.loadMv()
            this.loadNewMusic()
            this.loadRadio()
        },
        methods: {
            loadData(callback) {
                this.$http.get(api.getPlayListByWhere('全部', 'hot', this.offset, true, 9)).then((res) => {
                    this.offset += 16
                    res.body.playlists.forEach((item, index) => {
                        this.music.push(item)
                    })
                    callback && callback()
                })
            },
            loadSwiper() {
                this.$http.get(api.getBananer()).then((res) => {
                    this.swiperList = res.body.banners
                }).catch((err) => {
                    console.log(err)
                })
            },
            loadMv() {
                this.$http.get(api.getMv()).then((res) => {
                    for(let i = 0; i < 5; i++) {
                        this.mv.push(res.body.data[i])
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            loadNewMusic() {
                this.$http.get(api.getNewCd(0, 9, 'all')).then((res) => {
                    this.cd = res.body.albums
                }).catch((err) => {
                    console.log(err)
                })
            },
            loadRadio() {
                this.$http.get(api.getRadioStation()).then((res) => {
                    for(let i = 0; i < 9; i++) {
                        this.radios.push(res.body.djRadios[i])
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        filters: {
            
        }
    }
</script>

<style>
    .home-scroll {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    
    #slider,
    .banner-item {
        width: 100%;
    }
</style>