<template>
	<view class="home-loder">
		<view class="home-img"><image src="../static/homeload.svg" mode=""></image></view>
	</view>
</template>

<script></script>

<style lang="less">
.home-loder {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
	overflow: hidden;
	background: rgba(242, 243, 244, 0.6);
	.home-img {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		image {
			width: 200upx;
			height: 200upx;
			background: rgb(0, 0, 0, 0.6);
			border-radius: 10upx;
		}
	}
}
</style>
