<template>
	<view class="home">
		<Seach :img="img"></Seach>
		<Table></Table>
		<Scroll :class="{ is_fixed: isFixed }" @tab="tab" id="scroll-top" ></Scroll>
		<List :list="list"></List>
		<view class="load-more"><uni-load-more :status="uniload" color="#ffcc99"></uni-load-more></view>
		<homeloader v-if="homeLoadShow"></homeloader>
	</view>
</template>

<script>
import Seach from './components/seach.vue';
import Table from './components/table.vue';
import Scroll from './components/scroll.vue';
import List from './components/list.vue';
import http from '../../api/http.js';
import { uniLoadMore } from '@dcloudio/uni-ui';
export default {
	components: { Seach, Table, Scroll, List, uniLoadMore },
	data() {
		return {
			uniload: 'more',
			homeLoadShow: true,
			active: 0,
			page: 0,
			listReqLength: 0,
			isFixed: false, // ScrollContent 组件页面滚动样式开关
			rect: 0, // 监听index页面滚动的距离
			menutop: 0, // 获取ScrollContent的距离高度
			list: [],
			img: []
		};
	},
	mounted() {
		this.likeReq(0, 10), this.bannerReq();
	},
	onPullDownRefresh() {
		//下拉刷新
		console.log('refresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onReachBottom() {
		//上拉加载
		this.page = this.page + 10;
		this.uniload = 'loading';
		if (this.active == 1) {
			this.otherList(0, this.page + 10, 'renwen');
		} else if (this.active == 2) {
			this.otherList(100, this.page + 10, 'renwen');
		} else if (this.active == 3) {
			this.otherList(0, this.page + 10, 'haidao');
		} else if (this.active == 4) {
			this.otherList(100, this.page + 10, 'wanghong');
		} else if (this.active == 5) {
			this.otherList(0, this.page + 10, 'wanghong');
		} else {
			this.likeReq(0, this.page + 10);
		}
	},
	// 小程序生命周期函数 如下函数
	onLoad() {
		// 微信小程序 无window, 获取页面元素使用如下方法
		let self=this
		const query = wx.createSelectorQuery();
		query.select('#scroll-top').boundingClientRect();
		query.selectViewport().scrollOffset();
		query.exec(function(res) {
			// 显示滚动组件的竖直 滚动位置
			self.menutop = res[0].top;
		});
	},
	// 页面生命周期-监听ScrollContent组件向上滑动的高度，然后让该组件定位在头部上；
	onPageScroll(e) {
		this.rect = e.scrollTop;
		if (this.rect >= this.menutop) {
			this.isFixed = true;
			// console.log('true',this.rect,this.menutop)
		} else {
			this.isFixed = false;
		}
	},
	methods: {
		tab(index) {
			this.active = index;
			if (index == 1) {
				this.otherList(0, 10, 'renwen');
			} else if (index == 2) {
				this.otherList(100, 10, 'renwen');
			} else if (index == 3) {
				this.otherList(0, 10, 'haidao');
			} else if (index == 4) {
				this.otherList(100, 10, 'wanghong');
			} else if (index == 5) {
				this.otherList(0, 10, 'wanghong');
			} else {
				this.likeReq(0, 10);
			}
		},
		likeReq(skip, limit) {
			let self = this;
			let opts = {
				url: '/list',
				method: 'get'
			};
			let param = {
				skip,
				limit
			};
			http.httpTokenRequest(opts, param).then(
				res => {
					self.list = res.data.data;
					//打印请求返回的数据
					if (self.listReqLength == res.data.data.length) {
						self.uniload = 'noMore';
					} else {
						self.uniload = 'more';
					}
					self.listReqLength = res.data.data.length;
				},
				error => {
					console.log(error);
				}
			);
		},
		otherList(skip, limit, url) {
			let self = this;
			let opts = {
				url: '/list/' + url,
				method: 'get'
			};
			let param = {
				skip,
				limit
			};
			http.httpTokenRequest(opts, param).then(
				res => {
					self.list = res.data.data;
					if (self.listReqLength == res.data.data.length) {
						self.uniload = 'noMore';
					} else {
						self.uniload = 'more';
					}
					self.listReqLength = res.data.data.length;
					//打印请求返回的数据
				},
				error => {
					console.log(error);
				}
			);
		},
		bannerReq() {
			let self = this;
			let opts = {
				url: '/banner',
				method: 'get'
			};
			let param = {};
			http.httpTokenRequest(opts, param).then(
				res => {
					self.img = res.data.data;
					self.homeLoadShow = false;
					console.log(res.data, self.img);
					//打印请求返回的数据
				},
				error => {
					console.log(error);
				}
			);
		}
	}
};
</script>

<style lang="less">
.home {
	.load-more {
		height: 60upx;
		display: flex;
		justify-content: center;
	}
	.is_fixed {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
	}
}
</style>
