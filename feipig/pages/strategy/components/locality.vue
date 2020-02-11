<template>
	<view class="loaclity">
		<view class="title">当地必体验</view>
		<view class="menu-block">
			<view v-for="(item, index) in citytab" :key="index" :class="{ activetext: index == num }" 
			@click="menuActive(index, item.name)">{{ item.name }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			num: 0,
			citytab: [
				{
					name: '全景'
				},
				{
					name: '景点'
				},
				{
					name: '美食'
				},
				{
					name: '网红打卡'
				}
			]
		};
	},
methods:{
	menuActive(index, name) {
		this.num = index;
	}
}
};
</script>

<style lang="less">
.loaclity {
	.title {
		margin: 0 20upx;
		color: #292c33;
		font-size: 50upx;
	}
	.menu-block {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		view {
			background: #ffffff;
			border: 1px solid #c2c5cc;
			border-radius: 6upx;
			font-size: 25upx;
			color: #292c33;
			font-weight: bold;
			text-align: center;
			padding: 15upx;
			margin: 20upx;
		}
	}
	.activetext {
		color: #4cd964;
		background: #ffdd00 !important;
		border: 1px solid #ffdd00 !important;
	}
}
</style>
