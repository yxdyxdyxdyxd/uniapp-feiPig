<template>
	<view>
		<view class="seach">
			<view class="seach-code"><image src="../../../static/saoma.svg" mode="widthFix"></image></view>
			<view class="seach-input">
				<image src="../../../static/sousuo.svg" mode="widthFix" class="search-img"></image>
				<input type="text" placeholder="请输入文字" />
			</view>
			<view class="seach-code"><image src="../../../static/xiaoxi.svg" mode="widthFix"></image></view>
		</view>
		<swiper
			class="swiper"
			:indicator-dots="true"
			:autoplay="true"
			:interval="2000"
			:duration="1000"
			:circular="true"
			indicator-color="rgba(255, 255, 255)"
			indicator-active-color="#00ff00"
		>
			<swiper-item v-for="item in img" :key="item._id"><view class="swiper-item uni-bg-red">
			<image :src="item.image" mode="aspectFill" class="imageurl"></image></view></swiper-item>

		</swiper>
	</view>
</template>

<script>
	import http from '../../../api/http.js';
	export default{
		props: {
			img: Array
		},
		data(){
			return{
		
			}
		},
		methods:{

		},
		mounted(){
			
			
		}
	}
</script>

<style lang="less">
.seach {
	display: flex;
	justify-content: space-between;
	background: linear-gradient(to top, #ffe566 10%, #ffd300);
	padding: 30upx 0;
	align-items: center;
	.seach-code {
		width: 50upx;
		height: 50upx;
		padding: 0 15upx;
		image {
			width: 50upx;
			height: 50upx;
		}
	}
	.search-img {
		width: 40upx;
		height: 40upx;
		margin: auto 0 auto 20upx;
	}
	.seach-input {
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		display: flex;
		flex-direction: flex;
		background: #fff7d4;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
		border-bottom-right-radius: 50upx;
		input {
			width: 100%;
			height: 70upx;
			line-height: 70upx;
			font-size: 30upx;
			color: #666666;
		}
	}
}
.imageurl{
		width: 100%;
		height:300upx!important ;
	}
	swiper{
		height: 300upx!important;
	}
</style>
