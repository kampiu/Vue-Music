import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
import Axios from './http'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		audio: {
			'id': 0,
			'name': '歌曲名称',
			'singer': '演唱者',
			'albumPic': '/static/player-bar.png',
			'songUrl': '',
			'album': ''
		},
		lyric: '',
		currentIndex: 0, 
		playing: false, 
		loading: false, 
		songList: [], 
		randList: [], 
		currentTime: 0, 
		durationTime: 0, 
		change: false, 
		router: "home", 
		mode: 0, 
	},
	getters: {
		audio: state => state.audio,
		playing: state => state.playing,
		loading: state => state.loading,
		router: state => state.router,
		lyric: state => state.lyric,
		mode: state => state.mode,

		showDetail: state => state.showDetail,
		durationTime: state => state.durationTime,
		currentIndex: state => state.currentIndex,
		bufferedTime: state => state.bufferedTime,
		tmpCurrentTime: state => state.tmpCurrentTime,
		songList: state => state.songList,
		change: state => state.change,
		currentTime: state => state.currentTime,
		prCurrentTime: state => {
			return state.currentTime / state.durationTime * 100
		},
		prBufferedTime: state => {
			return state.bufferedTime / state.durationTime * 100
		}
	},
	mutations: {
		play(state) {
			state.playing = true
		},
		pause(state) {
			state.playing = false
		},
		initAudio(state, song) {
			state.audio = song
			state.playing = true
			state.currentIndex = state.songList.length
			state.songList.forEach((item, index) => {
				if(item.id === state.audio.id) {
					state.currentIndex = index
					return
				}
			})
		},
		initAudioByRand(state, song) {
			state.audio = song
			state.playing = true
		},
		initDurationTime(state, time) {
			state.durationTime = time
		},
		updateCurrentTime(state, time) {
			state.currentTime = time
		},
		updateRouter(state, router) {
			state.router = router
		},
		initSongList(state) {
			state.songList = localStorage.getItem("billson_vue_music") ? JSON.parse(localStorage.getItem("billson_vue_music")) : []
		},
		addToList(state, songs) {
			state.songList.push(songs)
			localStorage.setItem("billson_vue_music", JSON.stringify(state.songList))
		},
		setLrc(state, lrc) {
			state.lyric = lrc
		},
		changeMode(state) {
			state.mode = (++state.mode >= 3 ? 0 : state.mode++)
			if(state.mode === 2) {
				state.randList = state.songList.slice().sort(function() {
					return 0.5 - Math.random()
				})
				if(state.playing && state.currentIndex < state.songList.length) {
					state.randList.forEach((item, index) => {
						if(item.id === state.audio.id) {
							state.currentIndex = index
							return
						}
					})
				}
			} else if(state.mode === 0) {
				if(state.playing && state.currentIndex < state.songList.length) {
					state.songList.forEach((item, index) => {
						if(item.id === state.audio.id) {
							state.currentIndex = index
							return
						}
					})
				}
			}
		},
		resetAudio(state) {
			state.audio = {
				'id': 0,
				'name': '歌曲名称',
				'singer': '演唱者',
				'albumPic': '/static/player-bar.png',
				'songUrl': '',
				'album': ''
			}
			state.currentIndex = 0
			sttae.currentTime = 0
			state.lyric = ""
			state.playig = false
		}

	},
	actions: {
		initSong({
			commit,
			state
		}, song) {
			getSongUrl(song).then(data => {
				commit('initAudio', data.song)
				commit('setLrc', data.lyric)
			}).catch(err => {
				console.log("版权问题，获取歌曲失败!")
			})
		},
		nextSong({
			commit,
			state
		}) {
			let len, audio
			switch(state.mode) {
				case 0:
					len = ((state.currentIndex === state.songList.length - 1) ? 0 : state.currentIndex++)
					audio = state.songList[len]
					break
				case 1:
					len = state.currentIndex
					audio = state.audio
					break
				case 2:
					len = ((state.currentIndex++ === state.songList.length - 1) ? 0 : state.currentIndex++)
					audio = state.randList[len]
					break
				default:
					len = ((state.currentIndex === state.songList.length - 1) ? 0 : state.currentIndex++)
					audio = state.songList[len]
					break
			}
			getSongUrl(audio).then(data => {
				commit('initAudioByRand', data.song)
				commit('setLrc', data.lyric)
			}).catch(err => {
				console.log("触发下一首歌曲，因版权问题，无法播放")
			})
		},
		prevSong({
			commit,
			state
		}) {
			let len, audio
			switch(state.mode) {
				case 0:
					len = ((state.currentIndex === 0) ? state.songList.length - 1 : state.currentIndex--)
					audio = state.songList[len]
					break
				case 1:
					len = state.currentIndex
					audio = state.audio
					break
				case 2:
					len = ((state.currentIndex === 0) ? state.songList.length - 1 : state.currentIndex--)
					audio = state.randList[len]
					break
				default:
					len = ((state.currentIndex === 0) ? state.songList.length - 1 : state.currentIndex--)
					audio = state.songList[len]
					break
			}
			getSongUrl(audio).then(data => {
				commit('initAudioByRand', data.song)
				commit('setLrc', data.lyric)
			}).catch(err => {
				console.log("触发下一首歌曲，因版权问题，无法播放")
			})
		},
		removeSong({
			commit,
			state
		}, song) {
			state.songList.forEach((item, index) => {
				if(item.id === song.id) {
					if(state.currentIndex > index) { 
						state.currentIndex -= 1
					} else if(state.currentIndex === index) {
						if(state.songList.length !== 1) {
							state.currentIndex -= 1
							getSongUrl(state.songList[index - 1]).then(data => {
								commit('initAudio', data.song)
								commit('setLrc', data.lyric)
							})
						} else {
							commit("resetAudio")
						}
					}
					state.songList.splice(index, 1)
					localStorage.setItem("billson_vue_music", JSON.stringify(state.songList))
					return
				}
			})
		}
	}
})

const getSongUrl = (data) => {
	return new Promise((resolve, reject) => {
		Axios.get(api.getSong(data.id)).then(res => {
				data.songUrl = res.data.data[0].url
				Axios.get(api.getLyric(data.id)).then(lry => {
					return resolve({
						song: data,
						lyric: lry.data.lrc.lyric
					})
				})
			})
			.catch((error) => {
				console.log(error)
				return reject(data)
			})
	})
}

export default store