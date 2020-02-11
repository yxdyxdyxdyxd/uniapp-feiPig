<template>
	<view class="strategy">
		<Address></Address>
		<Locality></Locality>
		<List></List>
		<view class="publish"><image src="../../static/fab.png" mode="widthFix"></image></view>
	</view>
</template>

<script>
import Address from './components/address.vue';
import Locality from './components/locality.vue';
import List from '../index/components/list.vue';
export default {
	components: { Address, Locality, List },
	data() {
		return {};
	},
	mounted() {}
};
</script>

<style lang="less">
.strategy {
	.publish {
		position: fixed;
		bottom: 20upx;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		image {
			width: 120upx !important;
			height: 100upx !important;
			border-radius: 40upx;
		}
	}
}
</style>
