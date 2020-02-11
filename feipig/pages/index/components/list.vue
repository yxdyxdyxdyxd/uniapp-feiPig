<template>
	<view class="scroll-list">
		<view class="content">
			<view class="content-list" v-for="(item, index) in list" :key="index">
				<view class="list-img"><image :src="item.image" mode="aspectFill"></image></view>
				<view class="list-info">
					<view class="list-name">{{ item.title }}</view>
					<view class="list-title">{{ item.list }}</view>
					<view class="list-label">{{ item.label }}</view>
					<view class="purchase">
						<text class="purchase-price">￥{{ item.price }}</text>
						<text class="purchase-num">{{ item.buy }}人已购</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: Array
	},
	data() {
		return {
			// lists: [
			// 	{
			// 		id: 1,
			// 		image: 'http://gw.alicdn.com/tps/i4/2496170055/O1CN014o3iQj1CHEG6LIxVT_!!2496170055.jpg_220x220Q75.jpg',
			// 		title: '稻城亚丁',
			// 		list: '成都直飞稻城亚丁4天3晚自由行（景区住宿+独立用车+豪华酒店）',
			// 		label: '豪华酒店',
			// 		price: 449,
			// 		buy: 49
			// 	},
			// 	{
			// 		id: 2,
			// 		image: 'http://gw.alicdn.com/tps/i4/2496170055/O1CN014o3iQj1CHEG6LIxVT_!!2496170055.jpg_220x220Q75.jpg',
			// 		title: '青海旅游自由',
			// 		list: '4天3晚 青海旅游自由行祁连张掖七彩丹霞西北甘肃青海湖西宁拼车',
			// 		label: '七彩丹霞',
			// 		price: 1300,
			// 		buy: 57
			// 	}
			// ]
		};
	},
	mounted(){
		
	}
};
</script>

<style lang="less">
.scroll-list {
	margin: 0 20upx;
	.content {
		display: flex;
		flex-wrap: warp;
		justify-content: space-between;
		width: 100%;
		-webkit-flex-wrap: wrap;
		overflow: hidden;
	}
	.content-list {
		width: 48%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
	}
	.list-img {
		height: 400upx !important;
		object-fit: cover;
		overflow: hidden;
		image {
			width: 100% !important;
			height: 100% !important;
			object-fit: cover;
			border-radius: 10rpx;
		}
	}
	.list-info {
		padding-left: 10upx;
	}
	.list-name {
		font-size: 32upx;
		color: #d0b083;
		margin: 10upx 0;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.list-title {
		font-size: 32upx;
		color: #444444;
		font-weight: bold;
		line-height: 50upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 100upx !important;
	}
	.list-label {
		font-size: 25upx;
		color: #d0b083;
		padding: 10upx 0;
	}
	.purchase {
		display: flex;
		align-items: center;
		padding-bottom: 10upx;
	}
	.purchase-price {
		font-size: 36upx;
		color: #ff6b28;
		padding-right: 9upx;
	}
	.purchase-num {
		font-size: 30upx;
		color: #cacaca;
	}
}
</style>
