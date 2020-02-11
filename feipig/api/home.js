import http from './http.js'
export function test(params) {
	let data
	let opts = {
		url: '/list',
		method: 'get'
	};
	let param = {
		skip: params.skip,
		limit: params.limit,
	};
	http.httpTokenRequest(opts, param).then(
		res => {
			console.log(res.data);
			data=res.data
			//打印请求返回的数据
		},
		error => {
			console.log(error);
		}
	);
	return data
}
