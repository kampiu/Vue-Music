<template>
    <div class="collection-view">
        <nav-bar :back="false" title="收藏"></nav-bar>
        <div class="collection-list">
            <div class="collection-list-title">歌单歌曲</div>
            <div class="collection-item" v-for="(item,index) in songList" :key="item.id + 'collection'">
                <div class="collection-index">{{index + 1}}</div>
                <div class="collection-msg">
                    <div class="collection-name">{{item.name}}</div>
                    <div class="collection-singer">{{item.singer}}</div>
                </div>
                <div class="collection-console">
                    <span @click="playSong(item)"></span>
                    <span @click="removeSong(item)"></span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import navBar from './../components/navBar'
    import store from './../common/store'
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
            navBar
        },
        created() {

        },
        methods: {
            playSong(song) {
                song.fromlist = true
                this.$store.dispatch("initSong", song)
            },
            removeSong(song) {
                this.$store.dispatch("removeSong", song)
            }
        },
        computed: {
            ...mapGetters([
                'songList'
            ])
        },
        filters: {

        }
    }
</script>

<style>
    .collection-view {
        width: 100%;
        overflow-y: scroll;
    }
    
    .collection-list {
        width: 100%;
        min-height: 100%;
    }
    
    .collection-item {
        width: 100%;
        height: 50px;
        padding: 0 0.1rem;
        display: flex;
        align-items: center;
    }
    
    .collection-index {
        width: 0.8rem;
        max-width: 60px;
        flex: 0 0 auto;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #929293;
        font-size: 12px;
    }
    
    .collection-msg {
        height: 50px;
        overflow: hidden;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #F7F8F9;
        padding-top: 2px;
    }
    
    .collection-console {
        width: 1.4rem;
        height: 50px;
        max-width: 100px;
        flex: 0 0 auto;
        border-bottom: 1px solid #F7F8F9;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-right: 0.1rem;
    }
    
    .collection-singer,
    .collection-name {
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .collection-name {
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        color: #1A1A1C;
    }
    
    .collection-singer {
        height: 20px;
        line-height: 20px;
        color: #999;
        font-size: 12px;
    }
    
    .collection-console>span {
        flex: 0 0 auto;
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
    
    .collection-console>span:nth-child(1) {
        width: 20px;
        height: 20px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAh1BMVEUAAACvsLGoqKivsLGvsLGvsbGvsLGurq6zs7OvsLGvsLGvsLGvsLGvsLGtsLOvsLGvsLGwsLCstravsLGvsLGwsLGvsLGwsLGvsbGvsLGvsLGvsLGvsLGvsLGvsLGvsLGvsLGvsLGvsLGwsLGvsbGvsbGvsLGvsLGvsLKvsLGwsLCwsbGvsLEHVDbTAAAALHRSTlMA+gTkRd9nEAvumn/2YBY+yxsHoemRWE3BitHYdEk3vGtT8im0cK4jqHkvxR6r4QQAAAluSURBVHja7V3nktowEJZ7A/cCGNv0cqf3f75MZpKTsGzOVrMuk+9vEsLHdmm1C/7jP34W3I/KDorssonj2rLqON5csiKwqw8X/BSE5j6LPTiKPM72ZgiURtrubzmchPy2b1OgJD6eGw3OwqrbfwC1kFa+Aalg+I0ygtGjIocM8LJKB8vjvs0hM/LiDBaFXnaQE7pyObG4VwtyRB44YAkkxWmKARiWtdtZluHB73HaJkA2wmIF36C++PtjdA4BhvAclXv/Ur/1yIXcUOlsR2locWG37luNbO0i1kapbOUpmH71RkhsgsidaF9RMBY/vYMks2/qYVv1j85MuR79fFgxTSAeyW2YRaRTCdcc5nITbvX2aUCjbiyhWa8u2oB+2UAk7htIwAgSZikHBiSwuQNhWJPi2NkpF/9xjEn/dQVi4JDWseFolSYp7YcQTxwR4v/k7FxMQipGBLjj2rfIugLcUdV9P3IAfJFmfa/yRLYhNNY+XK7BYwdf4QtLicKs7044hpSPnnlYQiNvVPcMhVth35xe9XYruMp2t73s3uQUPbRXcVB4EkYPqa25JCWEb5cAp2cpHGLj/jXaroEk2K96sAeMCF7VSuKBWvuqXgFPeXRS69Bww08mB4gj04FU6D7EcWDwVxDHE0gFqdjU9tng9qaVQC5I169RxpOzh3/IESyCaoVHRipfkxi42zXBQojwtMJIKPKEHc4jAoshwmWym58LZ7heNWBBmLidPGbXUQrYx19UGr0TjvB/y9FfsYcBrZ2Vsxkv8WNxBLjBz8laH3gxCBQAbrE3usy9U+F+D6Qbmgh/x1y3pcjVfmhgcXHqGSTGftUCRdBi7mczX7HWQBngX8uelJp4ePhRCJgH8qakKjfMQBygEBxjludqIEIElAIepc1vqzLsdGwLFMMWyx716TmWpVyPmGtNzrkcT1nF+g0Ts3fnvfAUS036yCYqfrhCjKlCup6I1cfwhGL1uy9YsB1Stt0KwtwXWRbvJ4kkQQKpKXLF41/3GIszr7RGIkmmCKSiOK04YQHrDgThOEEkDvomMetp2morylhilAU73+sfjZpbvWutCghB8+1xsI5ymU+aVIjs7jsDEUBVhjFsyCWbQFpIQAtE6Jf53bFIhxIZxs9HMEQUNDsk88ECFyNKr7tC9Ys8Hbq/zU6MlCMRqBW8qxrdeOeB9ZzxlquCYzBKwBfBO3Nv0E+YMBIhEbeAJxLtjVvKUFSmD7njyELAEZfxHF1HhUgjggj0rjrghgp9bDr6Rznlf1jCb7CL+Jl7PqpbPiEsZiIksgTQYvLXRR4tEkcEroKUd3Q3eo1M9JqFwtQU1A1v3XoNuE9MVEKIIFzufHVrP5JRHjkTEZRKHofzrfSrxtUcpkNmEoJSSUf7sjvc7CLsxF4oEfZUktShdrA2fPJowJHhv4LB854bcr5yiLCXwuZgSpV/mYgrhwi7/3K1gUiSYKcnkoigflX205RwQEwFKxF5+lVg6RZp62tWIvL0yx6w9gy5MllE2P1Xi3JRUt00Vx4RhDqisvYBw/a+PhLIJIKQOSwnmznJ7SKPCPvbMHQO5xI5fCGbCMLmTJ8An4kyd78cEbh6zqyEUOnREI7sKJEIifiDsiS1ifyrXZQI1II5QolQpkvEyLtcIiR2M37KMzo4JeKhszQRqE0305CIiJevT2FvQ2LHY2qg11HU6BdbngpE4G2ioaA4vulnKIYSRCZHMwPlKL0bIEsNIlPLVKt/w1Z/pVqKEJmYKaHvTTBThIimz7tLtFQlAsOZRFRVLS2dqVqqGvtmrrEr6n6n5q45cr88A+KaG4+MNiCiq0UliMQubYqSIW+hAJGNQ500FqhmXJ5IkdKn8QHKDZYmsotYCivkb8pliZz2Ol2pSx4+LErkkjAePqDjIH9BInVDfxzEfkBHSlreCTB5QIdCZL0Ukcudx5EpiBG3RYhYFdMh9ufgtYJ8Ilrhsl0r+AMXPbZ8It2Zw0UPefUmm4hx5Hn1FvK4DC0laRXZNBvyvZ4+MlwlsF9Pkw0D8ojkaz4NA4/BFo5AFhGtcAS0cLRI2nKIsDfQfhIhg2hzkkDEu3Jsc9KH8xZqd1hN5+E7gBXlSKP/nj0BrqRoFZmMXHk3Z1ZTtUoX0pxJtsuaQok8QlHtsmRHsEAiu0h4A3PDrFuVjPZlspPfHP+jClChoSjJ2V19ro8L6yKESN3IeXYBTNaHMI0ErSIfwkQUT5MYiNzu0p4msT8WMylKcjqkxtvf/M44DcWkKJ7Yn+/JeVCJSnJ5DyrZn7iaFCU5qzGWw1HGYnp0/CFaq8hKxNBFPAN3KEpyRoFcxTzM/xT5HhQhnjBRZMs0KqFkL8nZRyWQwysoYskNGyn/AcQgtSbNEymYptKmf9erdBUQhScmEIEDXpJ14W/LBPAHOenjFE4cuZMBBYGP3Jk8BMkEygFzvfk3zuTwU8ZS2T95UFgxY1AYMKGyyhXN+2o3LDgrO0zvMXO84Q0oBGK84bzJjsrgMH8OZoelTMoMoiNGgM4cymr85KGsL20lGyVWes4dk4vsSrF5psTgYppR0gFYHAGkHbAaaSrNyp0/3BvhsPhahZdpgwj2PzIAP/tHVhLEKeOSCK0CC6HBeRjJz13boTGs7UDKybRLSplFKsjtLRZPAoij5NUCm1FYGseVfza/9U+bH7v+qS9cY0pYVXIhV18mmrRK66AR8uC7tO4mZ2ndA77gIGCNoCEhyptIrXgme+YJvmDrAqFwi15DkQk44WzJXLXZWBSrNmmXn2bCHHGS9fvUEsARqS+yJwNBv576PxlvPT4QC4IFpJFHpFWi3D0KUAgx53qriYnmD74BGPl2kdunm0+GJdrsa83ra8rFBtc78g3csFr9XzT/CtuDBLQL0+r/4+Dqf+F1XHIb7Ob1TZ2Khel7lF217DB3cAi5f5xpm06Z5cNdtSaQAv3gwUFom8CcGL9cM/jURnq1DzqQBWe7giPQ4sJu3bccWrvYaXAEp60DZCLEqZCwOv9ZRudQx+QYnqPy6XfW227UbQhkI9mepvT055a121lW7k35y4iGVLhXC3JEHjhgKehlx4tGV+pgUSRPDmIxtnegAKIiZ2HhZZUS6zx/Q298g46F5ZvKsPiD875bzSOx6vZnoCT09nqbKBnjdm1VE0UPoXn14zdGk3/6V1ORNoQJcM+V/SyySxfHtWXVcdxdsuJpN2cl+g/+4z+m4xfho12DCoDLawAAAABJRU5ErkJggg==");
    }
    
    .collection-console>span:nth-child(2) {
        width: 20px;
        height: 20px;
        background-image: url("data:image/png;base64,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");
    }
    
    .collection-list-title {
        width: 100%;
        padding: 0 0.3rem;
        line-height: 0.4rem;
        color: #ACACAC;
        font-size: 0.2;
    }
</style>