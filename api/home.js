import http from '@/utils/request.js'

export function banner(){
	return http({url:'/banner', method:'get'})
}

export function personalized(){
	return http({url:'/personalized',method:'get'})
}