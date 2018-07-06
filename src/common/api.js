//const _baseUrl = "http://localhost:3002/api"
const _baseUrl = "https://music.billson.club/api"

export default {
	getPlayListByWhere(cat, order, offset, total, limit) {
		return _baseUrl + '/top/playlist?cat=' + cat + '&order=' + order + '&offset=' + offset + '&total=' + total + '&limit=' + limit 
	},
	getBananer(){
		return _baseUrl + "/banner"
	},
	getMv(){
		return _baseUrl + "/mv/first"
	},
	getNewCd(offset,limit,type){
		return _baseUrl + '/top/album?offset=' + offset + '&limit=' + limit + '&type=' + type
	},
	getRadioStation(){
		return _baseUrl + '/dj/recommend'
	},
	getalbumlist(id){
		return _baseUrl + "/playlist/detail?id=" + id
	},
	getSearch(keywords){
		return _baseUrl + '/search/suggest?keywords=' + keywords
	},
	getRanking(){
		return _baseUrl + '/ranking'
	},
	getSong(id) {
		return _baseUrl + "/music/url?id=" + id
	},
	getLyric(id){
		return _baseUrl + '/lyric?id=' + id
	}
}