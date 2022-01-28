import http from '@/utils/request.js'

export function banner(){
	return http({url:'/banner', method:'get'})
}

export function personalized(){
	return http({url:'/personalized',method:'get'})
}

export function topAlbum(data){
	return http({url:'/album/new',method:'get',data})
}

export function topSong(data){
	return http({url:'/top/song',method:'get',data})
}