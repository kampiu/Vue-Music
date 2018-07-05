<template>
    <div class="album-view">
        <list-head :data="albuminfo"></list-head>
        <list-body :list="albumlist"></list-body>
    </div>
</template>

<script>
    import listHead from './../components/listHead'
    import listBody from './../components/listBody'
    import api from './../common/api'

    export default {
        data() {
            return {
                albumid: null,
                albumlist: [],
                albuminfo: {
                    creator:{}
                }
            }
        },
        components: {
            listHead,
            listBody
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                if(parseInt(to.params.id) !== parseInt(vm.albumid)) {
                    vm.albumid = to.params.id
                    vm.loadData(to.params.id)
                }
            })
        },
        created() {

        },
        methods: {
            loadData(id) {
                this.$http.get(api.getalbumlist(id)).then((res) => {
                    console.log("list-success", res) 
                    let {
                        tracks: list,
                        ...info
                    } = res.body.result
                    this.albuminfo = info
                    this.albumlist = list
                    console.log(this.albumlist, this.albuminfo)
                }).catch((err) => {
                    console.log("albumlist-err",err)
                })
            }
        },
        beforeDestroy(e) {
            console.log("beforeDestroy", e)
        },
        filters: {

        }
    }
</script>

<style>
.album-view{
    height:auto;
}
</style>