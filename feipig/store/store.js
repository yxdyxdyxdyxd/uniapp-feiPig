import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// vuex 存储数据
const state = {
	loading: '', // tab 切换的状态
	nonedata: '',
}
export default new Vuex.Store({
	state,
	mutations:{},
	action:{}
})