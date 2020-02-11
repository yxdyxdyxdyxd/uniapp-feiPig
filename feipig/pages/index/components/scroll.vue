<template>
	<view class="scroll-title">
		<scroll-view scroll-x="true" class="scroll">
			<block v-for="(item, index) in tab" :key="index">
				<view class="tab-list" @click="active(index)" :class="{activea: index == num}">
					<view>
						<text class="name">{{ item.name }}</text>
					</view>
					<view>
						<text class="title" :class="{activeb: index == num}">{{ item.title }}</text>
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tab: [
				{ name: '推荐', title: '猜你喜欢' },
				{ name: '好景点', title: '周末放空' },
				{ name: '人文', title: '文化之旅' },
				{ name: '海岛', title: '阳光与沙滩' },
				{ name: '自由行', title: '超值精选' },
				{ name: '网红', title: '最火打卡地' }
			],
			num:0,
		};
	},
	methods:{
		active(index){
			this.num=index
			this.$emit('tab',index)
		}
	}
};
</script>

<style lang="less">
.scroll-title {
	.scroll {
		white-space: nowrap;
		width: 100%;
		position: relative;
		left: 0;
		right: 0;
		background: #ffffff;
		padding: 20upx 0;
	}
	.tab-list {
		width: 180upx;
		display: inline-block;
		text-align: center;
	}
	.name {
		color: #292c33;
		font-size: 30upx;
		font-weight: bold;
	}
	.title {
		color: #9ea0a5;
		font-size: 23upx;
	}
	.activea{
		background-image: linear-gradient(to right, #ccffff 0%, #ffcc00 100%);
				border-top-right-radius: 50upx;
	}
		.activeb {
			color: #292c33 !important;
		}
}
</style>
