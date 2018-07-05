<template>
    <div class="album-list-item">
        <div class="album-list-index">{{index + 1}}</div>
        <div class="album-list-song">
            <div class="album-list-name">{{item.name}}</div>
            <div class="album-list-singer font-break">{{item.artists[0].name}}</div>
        </div>
        <div class="album-list-console">
            <!--<img onClick={ this.play } alt="" src="./img/album-list-play.png" />
            <img onClick={ this.addSong } alt="" src="./img/album-list-coll.png" />-->
        </div>
    </div>
</template>

<script>
    export default {
        props:["item","index"],
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

</style>