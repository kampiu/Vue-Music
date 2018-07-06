<template>
    <div class="album-list-item">
        <div class="album-list-index">{{index + 1}}</div>
        <div class="album-list-song">
            <div class="album-list-name">{{item.name}}</div>
            <div class="album-list-singer font-break">{{item.artists[0].name}}</div>
        </div>
        <div class="album-list-console">
            <img @click="toplay" alt="" src="data:image/png;base64,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" />
            <img @click="addSong" alt="" src="data:image/png;base64,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" />
        </div>
    </div>
</template>

<script>
    import store from './../common/store'

    export default {
        props: ["item", "index"],
        data() {
            return {

            }
        },
        components: {

        },
        created() {

        },
        methods: {
            toplay(e) {
                let songs = this.dataForm(this.item)
                this.$store.dispatch("initSong", songs)
            },
            addSong() {
                let songs = this.dataForm(this.item)
                this.$store.commit("addToList", songs)
            },
            dataForm(data){
                return {
                    id: data.id,
                    name: data.name,
                    singer: (data.artists ? data.artists[0].name : data.ar[0].name),
                    albumPic: (data.album ? data.album.picUrl : data.al.picUrl),
                    songUrl: '',
                    album: (data.album ? data.album.name : data.al.name)
                }
            }
        },
        filters: {

        }
    }
</script>

<style>

</style>