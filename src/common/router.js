import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//全页面
const MusicAlbum = resolve => require(['./../view/MusicAlbum.vue'], resolve)
const MusicPlayer = resolve => require(['./../view/MusicPlayer.vue'], resolve)
const MusicAlbumList = resolve => require(['./../view/MusicAlbumList.vue'], resolve)
//tabbar - view
const MusicTabbarView = resolve => require(['./../view/MusicTabbarView.vue'], resolve)
const MusicHome = resolve => require(['./../view/MusicHome.vue'], resolve)
const MusicPersonal = resolve => require(['./../view/MusicPersonal.vue'], resolve)
const MusicRanking = resolve => require(['./../view/MusicRanking.vue'], resolve)
const MusicCollection = resolve => require(['./../view/MusicCollection.vue'], resolve)

export default new Router({
	routes: [{
		name: 'index',
		path: '/',
		component: MusicTabbarView,
		redirect:'/home',
		children: [{
			name: 'home',
			path: 'home',
			component: MusicHome
		}, {
			name: 'ranking',
			path: 'ranking',
			component: MusicRanking
		}, {
			name: 'collection',
			path: 'collection',
			component: MusicCollection
		}, {
			name: 'personal',
			path: 'personal',
			component: MusicPersonal
		}]
	}, {
		name: 'album',
		path: '/album/:id',
		component: MusicAlbum
	}, {
		name: 'player',
		path: '/player',
		component: MusicPlayer
	},  {
		name: 'albumlist',
		path: '/albumlist',
		component: MusicAlbumList
	}, {
		path: '*',
		redirect: '/home'
	}]
})