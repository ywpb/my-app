<template>
	<view class="song-list">
	    <view class="switch-line flex-box">
	        <view class="flex-box">
	            <view class="switch-item" :class="{on : newType == 1}" @click="a(1)">新碟</view>|
	            <view class="switch-item" :class="{on : newType == 2}" @click="a(2)">新歌</view>
	        </view>
	        <template v-if="newType == 1">
	            <view class="more">更多新碟</view>
	        </template>
	        <template v-if="newType == 2">
	            <view class="more">新歌推荐</view>
	        </template>
	    </view>
	    <scroll-view class="scroll-view" scroll-x>
	        <view class="item" v-for="(item, index) in latestAlbum" :key="index">
	            <image class="img" :src="item.picUrl"></image>
	            <view class="desc ellipsis">{{item.name}}</view>
	            <view class="desc ellipsis c9">{{item.artist.name}}</view>
	        </view>
	    </scroll-view>
	</view>
</template>

<script>
	export default {
		name:"newAlbum",
		props:{
			latestAlbum:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				newType:1
			};
		},
		methods:{
			a(data){
				this.newType = data
				this.$emit('switchTab',this.newType)
			}
		}
	}
</script>

<style>

</style>
