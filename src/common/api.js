//const _baseUrl = 'http://musicapi.duapp.com/api.php'
//const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'
const _baseUrl = "http://localhost:3002/api"

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
	
	getLrc(id) {
		return _baseUrl + '/lyric?id=' + id
	},
	getSong(id) {
		return _baseUrl + "/music/url?id=" + id
	},
	search(type, keywords, offset, limit) {
		return _baseUrl + "/search?type=" + type + "&keywords=" + keywords + "&limit=" + limit + "&offset=" + offset
	},
	getTime(time) {
		var o = parseInt(t),
			fen = o % 60;
		if(fen < 10) {
			fen = "0" + fen;
		}
		return((o - (o % 60)) / 60) + ":" + fen;
	},
}