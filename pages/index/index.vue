<template>
	<div class='find'>
		<!-- 轮播图 -->
		<swiper class="swiper" :autoplay="true" :indicator-dots="true" indicator-active-color="#ff372b"
		 indicator-color='rgba(255,255,255, .5)' duration="5000" :circular="true">
		    <swiper-item v-for="(item,index) in swiper" :key='index'>
		       <view class="swiper-item uni-bg-red">
					<image :src="item.imageUrl" class="img"></image>
					<view class="tag">{{item.typeTitle}}</view>
				</view>
		    </swiper-item>
		</swiper>
		
		<!-- 主入口 -->
		<view class="main-bar flex-box">
		    <view class="flex-item" v-for="(item, index) in contentBar" :key="index">
		        <image :src="'/static/image/index/t_' + (index + 1) + '.png'" class="img"></image>
		        <view>{{item.name}}</view>
		        <!-- <view v-if="index == 0" class="date">{{curDate}}</view> -->
		    </view>
		</view>
		
		<song-list :list='recommend' title='推荐歌单'></song-list>
		

	</div>
	
</template>

<script>
	import {banner,personalized} from '@/api/home.js'
	import songList from '@/components/songList/songList.vue'
	export default {
		components:{songList},
		data() {
			return {
				swiper: [],
				loading:true,
				contentBar:[
					{name:'每日推荐'},
					{ name: "歌单" },
					{ name: "排行榜" },
					{ name: "电台" },
					{ name: "直播" }
				],
				recommend:[]
			}
		},
		onLoad() {
			banner().then((res)=>{
				this.swiper = res.banners
			})
			
			personalized().then(res=>{
				this.recommend = res.result
				// console.log(res.result);
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>

	.find{
		display: flex;
		flex-direction: column;
		
		
		.swiper{
			width: 100%;
			display: flex;
			flex-direction: row;
			swiper-item{
				width: 92%;
				display: flex;
				justify-content: center;
				border-radius: 25rpx;
				
				.swiper-item{
					width: 92%;
					.img{
						$width: 100%;
						width: $width;
						height: ($width * 1);
						border-radius: 25rpx;
					}
				}
			}
		}
		
		.flex-box{
			display: flex;
			.flex-item{
				flex: 1;
			}
		}
		.main-bar{
			padding-bottom: 10rpx;
			margin-top: 20rpx;
			text-align: center;
			line-height: 70rpx;
			color: #666;
			border-bottom: 1rpx solid #e6e6e6;
			.img{
				width: 92rpx;
				height: 92rpx;
				display: block;
				margin: 0 auto;
			}
		}
	}
</style>
