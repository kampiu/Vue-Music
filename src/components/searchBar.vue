<template>
    <div class="search-bar">
        <div :class="isFocus ? 'search-bar-nav search-bar-hide' : 'search-bar-nav'">
            <div class="search-slide-menu"></div>
        </div>
        <div class="search-bar-input" :style="{width:isFocus ? '7.2rem' : '5.78rem'}">
            <div class="search-view">
                <div :class="isFocus ? 'search-icon search-icon-active' : 'search-icon'">
                    <span></span> {{isFocus ? '' : 'Search'}}
                </div>
                <input id="search" @keyup="write" @focus="focus" @blur="cancel" :blur="isFocus" type="text" class="search" />
            </div>
            <div :class="isFocus ? 'search-cancel search-cancel-active' : 'search-cancel'" @click="cancelBybtn">取消</div>
        </div>
        <div :class="isFocus ? 'search-bar-nav search-bar-hide' : 'search-bar-nav'">
            <router-link to="/player" class="search-play"></router-link>
        </div>
        <div :class="isFocus ? 'search-list search-list-active' : 'search-list'">
            <div class="search-tip">
                {{word == "" ? "" : '搜索：' + word}}
            </div>
            <div class="search-result-content" @click="cancel">
                <ul class="search-result">
                    <li class="search-songs-item" v-for="(item,index) in result" :key="item.id + 'searchresult'">
                        <div class="search-songs-index">{{index + 1}}</div>
                        <div class="search-songs-msg">
                            <div class="search-songs-name">{{item.name}}</div>
                            <div class="search-songs-singer">{{item.artists[0].name}}</div>
                        </div>
                        <div class="search-songs-console">
                            <img @click="toplay(item)" alt="" src="data:image/png;base64,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" />
                            <img @click="addSong(item)" alt="" src="data:image/png;base64,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" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import api from './../common/api'

    export default {
        data() {
            return {
                isFocus: false,
                isShowList: false,
                word: "",
                result: []
            }
        },
        components: {

        },
        created() {

        },
        methods: {
            toplay(song) {
                let songs = this.dataForm(song)
                this.$store.dispatch("initSong", songs)
            },
            addSong(song) {
                let songs = this.dataForm(song)
                this.$store.commit("addToList", songs)
            },
            dataForm(song) {
                return {
                    id: song.id,
                    name: song.name,
                    singer: song.artists[0].name,
                    albumPic: song.album.artist.img1v1Url,
                    songUrl: '',
                    album: song.album.name
                }
            },
            focus(e) {
                this.isFocus = true
                this.isShowList = true
            },
            cancel() {
                this.isFocus = (this.word !== "") ? true : false
            },
            cancelBybtn() {
                this.isFocus = false
                this.result = []
                this.word = ""
                document.getElementById("search").value = ""
            },
            write(e) {
                this.word = e.target.value
                this.debounce(this.getResult(), 200, 1000)
            },
            getResult() {
                this.$http.get(api.getSearch(this.word)).then(res => {
                    if(res.body.code === 200 && res.body.result.songs && res.body.result.songs.length > 0) {
                        this.result = res.body.result.songs
                    }
                }).catch(err => {
                    console.log("search-err", err)
                })
            },
            debounce(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this,
                        args = arguments;
                    var later = function() {
                        timeout = null;
                        if(!immediate) func.apply(context, args);
                    };
                    var callNow = immediate & !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if(callNow) func.apply(context, args);
                };
            }
        },
        filters: {

        }
    }
</script>

<style>
    .search-bar {
        width: 100%;
        height: 44px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 4000;
        background: #5179F1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #FFF;
    }
    
    .search-bar-nav {
        width: 40px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: ease-in-out all .2s;
        opacity: 1;
    }
    
    .search-bar-nav>div,
    .search-bar-nav>a {
        height: 44px;
        max-height: 46px;
        width: 40px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 20px auto;
    }
    
    .search-bar-hide {
        width: 0;
        opacity: 0;
    }
    
    .search-slide-menu {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI0Y4RjhGOCIgZD0iTTEwMTUuOTM2IDk4MC4wOTZsLTc2LjgtNzYuNzM2YzMwLjcyLTM4LjQgMzMuMjgtOTIuMDk2IDAtMTMwLjQzMkw2OTYuMjU2IDQ3My42YzEyLjgtMzUuODQgMjAuNDgtNzQuMTc2IDIwLjQ4LTExNS4wNzIgMC0xOTYuOTkyLTE2MS4yMTYtMzU4LjE0NC0zNTguMTQ0LTM1OC4xNDRDMTYxLjUzNiAwLjM4NCAwLjM4NCAxNjEuNTM2IDAuMzg0IDM1OC41MjhjMCAxOTYuOTI4IDE2MS4xNTIgMzU4LjE0NCAzNTguMTQ0IDM1OC4xNDQgNDAuOTYgMCA3OS4yOTYtNy42OCAxMTUuMDcyLTIwLjQ4bDI5OS4zMjggMjQzLjAwOGMxNy45MiAxNS4zNiA0MC45NiAyMy4wNCA2My45MzYgMjMuMDQgMjMuMDQgMCA0Ni4wOC03LjY4IDY2LjU2LTIzLjA0bDc2LjY3MiA3Ni43MzZjNS4xMiA1LjEyIDEyLjggNy42OCAxNy45MiA3LjY4IDUuMTIgMCAxMi44LTIuNTYgMTcuOTItNy42OCAxMC4yNC0xMC4yNCAxMC4yNC0yNS42IDAtMzUuODR6TTU3Ljk4NCAzNTcuMTJBMzAwLjAzMiAzMDAuMDMyIDAgMCAxIDM1Ny4xMiA1Ny45ODRjNzIuMzIgMCAxMzkuNTg0IDI3LjM5MiAxOTIgNjkuNzZMMTI3Ljc0NCA1NDkuMTJDODUuMzc2IDQ5Ni43MDQgNTcuOTg0IDQyOS40NCA1Ny45ODQgMzU3LjEyeiBtMzkyLjgzMiAyODMuMDcyYy0yOC44IDkuNi02MC4xNiA5Ljg1Ni04OC45NiA5Ljg1Ni02OS42MzIgMC0xMzEuODQtMTUuNTUyLTE4Mi4yNzItNTYuMzg0TDU5MC4wOCAxODcuMDA4YzQzLjIgNTAuNDMyIDU5LjkwNCAxMDUuMjE2IDU5LjkwNCAxNzQuODQ4IDAgMjguOC0zLjc3NiA2Mi45MTItMTMuMzc2IDkxLjcxMmwtMTg1Ljg1NiAxODYuNjI0eiBtNDM3LjgyNCAyMjYuMjRsLTIyLjE0NCAyMi4xNDRhNDguNTc2IDQ4LjU3NiAwIDAgMS0zNC40MzIgMTQuNzJjLTcuMzYgMC0xOS42NDgtMi40MzItMzItOS43OTJMNTE5LjY4IDY2Mi4yNzJsMTQ1LjE1Mi0xNDUuMDg4IDIyOC43MzYgMjgyLjg4YzE0LjcyIDIyLjA4IDE0LjcyIDQ5LjE1Mi00LjkyOCA2Ni4zNjh6IiAgLz48L3N2Zz4=');
    }
    
    .search-bar-input {
        width: 5.78rem;
        height: 0.52rem;
        max-height: 30px;
        border-radius: 0.26rem;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        transition: all linear .2s;
    }
    
    .search-view {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #779FF7;
        border-radius: 0.26rem;
    }
    
    .search-icon {
        width: 100%;
        height: 0.52rem;
        max-height: 30px;
        font-size: 16px;
        position: absolute;
        justify-content: center;
        display: flex;
        align-items: center;
        left: 0;
        top: 0;
        transition: all linear .2s;
        background: #779FF7;
        z-index: 20;
    }
    
    .search-icon-active {
        width: 1.2rem
    }
    
    .search-cancel {
        width: 0;
        height: 0.52rem;
        text-align: center;
        font-size: 14px;
        color: #FFF;
        line-height: 0.52rem;
        transition: all linear .2s;
        opacity: 0;
    }
    
    .search-cancel-active {
        width: 1.2rem;
        max-width: 50px;
        opacity: 1;
    }
    
    .search-icon>span {
        content: "";
        width: 16px;
        height: 16px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA5R/p9yIGA/JwsY+HaBsT7rlKDtfRwCrOlXVGxIqEfVs/MQv7+eDKqKGdmXg0xmBVUTq2F2MnnGbvAAACMklEQVRYw91W7XKCMBAMEECooAioWBHwu1pttW3e/9E6vTDFygWuY2fa6f68u13CZXMJ+4vonbJtzMXKiI7759532YvcXYlLbLzwOx/fcVFDJxkR6bbTETh2pFUUkVBCG7Tzvap8eXR3aTfZBp2LRdhk/th5ZSWswcOnhmvT+NFZBiqNDUWhWJYdd+pV1r5dwe8LwAPum7y0xkzFt8YCMFEVHDTIr1SGmJTfZ0rospdTPBvKbNDUpJMAPKHJGeTiBWtCAkVrLPUq/T9njbCkTzFHpvIHWAvuoewFycgOF0gGqzNr8RHWX3WrHhV7SDhtprRjLT78CHOEgFcatTC4OKIIPMES9OsxhC4MgHfrdG1SiKYUAQtKnavoGaJvjAKwfIb6454kYGBn+gACzyQB1Ah++WMY0FIP7UwXZdAWCz4YUgQ8/NQGcBNQrh4Xxq6N6+YEG3D82PvIOUcxUA21GBIHhILUcWTwOYLURk85uRcGxYxhv6rCl7Bufs3s5cWLt1eTP2G3HmUxahq4Imnga80VqQBsLdUOcshzpd3sjQCMfeXdCUha7/d+Vt/nuSs+cadUmBuilJh83Y0CzgpBQY+qR9Ks8MsovG+ICuHxso5H03jdX1avTcdoVbAyLlSY+sxsV2DmEKdzmHgUBZZP6/TYgbYSFZg/GX9hpzDCyAqA3tm7C4bBdt/N4duIQpeR8eMK2q0K+v9SyG5WePx9hXV4m4KmM3aLAs6nK+B8OkzgvwP+p7P3YWJUTQAAAABJRU5ErkJggg==");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% auto;
        display: inline-block;
        margin-right: 4px;
    }
    
    .search {
        height: 100%;
        width: 100%;
        border-radius: 0.26rem;
        -webkit-appearance: none;
        border: none;
        outline: none;
        background: none;
        color: #FFF;
        padding: 0 28px 0 .96rem;
        color: #f8f8f8;
        z-index: 30;
        font-size: 14px;
    }
    
    .search-list {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 50;
        background: #FFF;
        opacity: 0;
        display: none;
        transition: all linear .2s;
    }
    
    .search-list-active {
        width: 100%;
        height: calc(100vh - 44px);
        position: absolute;
        left: 0;
        top: 44px;
        background: #FFF;
        opacity: 1;
        display: block;
        z-index: 200;
    }
    /*result*/
    
    .search-result {
        flex: 1 1 auto;
        width: 100%;
        background: #FBFCFD;
        margin-bottom: 0.6rem;
    }
    
    .search-songs-view {
        width: 100%;
        height: 100%;
    }
    
    .search-songs-item {
        width: 100%;
        height: 0.8rem;
        max-height: 50px;
        align-items: center;
        display: flex;
        padding: 0;
        overflow: hidden;
    }
    
    .search-songs-index {
        width: 0.8rem;
        max-width: 50px;
        height: 0.8rem;
        max-height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
        color: #929293;
        font-size: 12px;
    }
    
    .search-songs-msg {
        max-width: 4.8rem;
        max-height: 50px;
        flex: 1 1 auto;
        height: 100%;
        display: flex;
        padding: 0.01rem 0;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #EEEFF0;
        padding-right: 20px;
    }
    
    .search-songs-name {
        font-size: 14px;
        height: 0.3rem;
        max-height: 28px;
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        color: #1A1A1C;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .search-songs-singer {
        font-size: 12px;
        color: #636465;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .search-songs-console {
        width: 1.6rem;
        max-width: 160px;
        padding-right: 0.1rem;
        height: 0.8rem;
        max-height: 50px;
        flex: 0 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #EEEFF0;
    }
    
    .search-songs-console>img {
        width: 0.36rem;
        height: 0.36rem;
        max-width: 20px;
        max-height: 20px;
    }
    
    @media only screen and (min-width: 768px) {
        .search-songs-msg {
            max-width: 6rem;
        }
    }
    
    .search-tip {
        height: .6rem;
        max-height: 50px;
        padding: 0 .14rem;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        font-size: 12px;
        font-weight: 700;
        color: #5179f1;
    }
    
    .search-result-content {
        width: 100%;
        height: 100%;
        padding-left: 0.2rem;
        overflow: scroll;
    }
</style>