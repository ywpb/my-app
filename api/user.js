import http from '@/utils/request.js'

export function login(data){
	return http({url:'/login', method:'POST', data})
}