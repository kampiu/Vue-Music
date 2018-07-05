import Vue from 'vue'
import App from './App'
import Router from './common/router'
import VueResource from 'vue-resource'
import Axios from './common/http.js'
import store from './common/store'
import PullTo from 'vue-pull-to'
import './common/common.css'
import './common/common.js'
//组件
import gridBox from './components/gridBox'
import gridItem from './components/gridItem'
import gridLayout from './components/gridLayout'
import searchBar from './components/searchBar'

import listHead from './components/listHead'
import listBody from './components/listBody'
import listItem from './components/listItem'
import listNavBar from './components/listNavBar'
import navBar from './components/navBar'
import typeSelect from './components/typeSelect'

//tool
import loading from './components/loading'

Vue.use(listHead)
Vue.use(listNavBar)
Vue.use(listBody)
Vue.use(listItem)

Vue.use(gridBox)
Vue.use(gridItem)
Vue.use(gridLayout)
Vue.use(searchBar)
Vue.use(navBar)
Vue.use(typeSelect)
Vue.use(loading)
Vue.use(PullTo)



//开启debug模式
Vue.config.debug = true

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(Router)
Vue.use(VueResource)

const app = new Vue({
	el: "#app",
	router: Router,
	render: h => h(App),
	store,
	components: {
		App
	},
	watch: {

	}
})


