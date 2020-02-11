<template>
	<view class="address">
		<view class="address-img">
			<image src="https://img.alicdn.com/bao/uploaded/i3/2200538386031/O1CN01UzXSiL1uQFCqHg9r1_!!2200538386031.jpg_400x400.jpg" mode="aspectFill"></image>
		</view>
		<view class="address-info">
			<view class="address-text" @click="selcetAddress">
				<text class="words">{{ addressName}}</text>
				<image src="../../../static/jiantouxia.png" mode="widthFix"></image>
			</view>
			<view class="words-eng">欢迎</view>
		</view>
		<view class="black"></view>
		<view class="plane"><image src="../../../static/jipiao.png" mode="widthFix"></image></view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			addressName:{}
		};
	},
	methods: {
		getAuthorizeInfo(a = 'scope.userLocation') {
			//1. uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗
			var _this = this;
			uni.authorize({
				scope: a,
				success() {
					//1.1 允许授权
					_this.getLocationInfo();
				},
				fail() {
					//1.2 拒绝授权
					uni.showModal({
					    title: '提示',
					    content: '你拒绝了授权，无法获得周边信息',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
			});
		},
		getLocationInfo() {
			//2. 获取地理位置
			var _this = this;
			uni.getLocation({
				type: 'wgs84',
				success(res) {
					console.log('你当前经纬度是：');
					console.log(res);
					let latitude, longitude;
					latitude = res.latitude.toString();
					longitude = res.longitude.toString();
					uni.request({
						header: {
							'Content-Type': 'application/text'
						},
						url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35',
						success(re) {
							console.log('中文位置');
							console.log(re);
							_this.addressName=re.data.result.address
							console.log(_this.addressName)
							if (re.statusCode === 200) {
								console.log('获取中文街道地理位置成功');
							} else {
								uni.showModal({
								    title: '提示',
								    content: '获取信息失败，请重试！',
								    success: function (res) {
								        if (res.confirm) {
								            console.log('用户点击确定');
								        } else if (res.cancel) {
								            console.log('用户点击取消');
								        }
								    }
								});
							}
						}
					});
				}
			});
		},
		isGetLocation(a = 'scope.userLocation') {
			// 3. 检查当前是否已经授权访问scope属性，参考下截图
			var _this = this;
			uni.getSetting({
				success(res) {
					if (!res.authSetting[a]) {
						//3.1 每次进入程序判断当前是否获得授权，如果没有就去获得授权，如果获得授权，就直接获取当前地理位置
						_this.getAuthorizeInfo();
					} else {
						_this.getLocationInfo();
					}
				}
			});
		},
		selcetAddress(){
			var _this = this;
			uni.chooseLocation({
			    success: function (res) {
					_this.addressName=res.address
			    }
			});
		}
	},
	mounted() {
		this.isGetLocation();
	}
};
</script>

<style lang="less">
.address {
	position: relative;
	.address-img {
		width: 100%;
		height: 400upx;
		image {
			width: 750rpx !important;
			height: 400upx;
		}
	}
	.address-info {
		position: absolute;
		left: 50upx;
		top: 100upx;
		z-index: 999;
	}
	.address-text {
		display: flex;
		align-items: center;
		image {
			width: 33upx;
			height: 33upx;
			padding-left: 30upx;
		}
	}
	.words {
		font-size: 35upx;
		color: #ffffff;
		font-weight: bold;
	}
	.words-eng {
		font-size: 30upx;
		color: #ffffff;
	}
	.black {
		background: rgba(0, 51, 0, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		height: 400upx;
		width: 100%;
	}
	.plane {
		margin: 40upx 20upx;
		height: 150upx;
		image {
			width: 100%;
			border-radius: 20upx;
			height: 150upx;
		}
	}
}
</style>
