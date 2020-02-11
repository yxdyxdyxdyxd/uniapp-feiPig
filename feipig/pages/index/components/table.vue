<template>
	<view>
		<view class="table">
			<block v-for="item in list" :key="item.tick">
				<view class="list">
					<text class="title">{{ item.tick }}</text>
					<text class="nametext">{{ item.nametext }}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					tick: '出境游',
					nametext: '走遍全球'
				},
				{
					tick: '国内游',
					nametext: '精选路线'
				},
				{
					tick: '周边游',
					nametext: '暑假红包'
				},
				{
					tick: '精选购',
					nametext: '免税预购'
				},
				{
					tick: '签证/签注',
					nametext: '领劵'
				},
				{
					tick: '会员',
					nametext: '签到'
				},
				{
					tick: '每日福利',
					nametext: '领里程'
				},
				{
					tick: '全部',
					nametext: '更多推荐'
				}
			]
		};
	}
};
</script>

<style lang="less">
.table {
	display: flex;
	flex-wrap: warp;
	width: 100%;
			-webkit-flex-wrap: wrap;
	overflow: hidden;
	border: 1px solid #eeeeee;
	border-radius: 10rpx;
	.list {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding: 20upx 0;
	}
	.list:nth-child(2) {
		border-left: 1rpx solid #eeeeee;
		border-right: 1rpx solid #eeeeee;
	}
	.list:nth-child(6) {
		border-left: 1rpx solid #eeeeee;
		border-right: 1rpx solid #eeeeee;
	}
	.list:nth-child(3) {
		border-right: 1rpx solid #eeeeee;
	}
	.list:nth-child(7) {
		border-right: 1rpx solid #eeeeee;
	}
	.list:nth-child(-n + 4) {
		border-bottom: 1rpx solid #eeeeee;
	}
	.tick {
		font-size: 30upx;
		color: #333333;
		font-weight: bold;
	}

	.nametext {
		font-size: 23upx;
		color: #686868;
	}
}
</style>
