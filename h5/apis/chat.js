import {get, post,put, JsomPost, del, JsomPut} from './util.js'

// 翻译  
export function getEnText(data){
	return post({
		url: global.baseUrl + '/api/chat/text_translate',
		data: data
	})
}


// 点赞拉踩功能
export function chat_likes(data){
	return put({
		url: global.baseUrl + '/api/chat/chat_likes',
		data: data
	})
}

// 获取会员商品列表
export function getProductList(data){
	return JsomPost({
		url: global.memberUrl + '/pay/products/',
		data: data
	})
}

// 获取用户信息
export function getUserInfo(data){
	return get({
		url: global.loginUrl + '/api/user/get_user_info',
		data: data
	})
}

// 获取用户信息
export function wx_xcx_mobile(data){
	return post({
		url: global.loginUrl + '/api/user/wx_xcx_mobile',
		data: data
	})
}

// 发起支付宝支付
export function alipay(data){
	return post({
		url: global.memberUrl + '/pay/form_sheet_alipay/',
		data: data
	})
}

// 发起H5支付
export function webpay(data){
	return post({
		url: global.memberUrl + '/pay/form_sheet_wechat_h5/',
		data: data
	})
}

// 发起微信支付
export function wxpay(data){
	return post({
		url: global.memberUrl + '/pay/form_sheet_wechat_mp/',
		data: data
	})
}

// 查询支付结果
export function getResult(data){
	return post({
		url: global.memberUrl + '/pay/pay_result/',
		data: data
	})
}

// 获取图片验证码
export function image_code(data){
	return post({
		url: global.loginUrl + '/api/user/ImageCode',
	})
}

// 发送短信验证码
export function send_code(data){
	return post({
		url: global.codeUrl + '/api/user/send_code',
		data: data
	})
}
// 指令集获取
export function type_list(data){
	return get({
		url: global.baseUrl + '/api/prompts/type_list',
		data: data
	})
}
// 指令模型获取
export function prompts(data){
	return get({
		url: global.baseUrl + '/api/prompts/prompts',
		data: data
	})
}
export function create_temp_user(data){
	return post({
		url: global.loginUrl + '/api/user/create_temp_user',
		data: data
	})
}
// 手机号登录
export function mobile_login(data){
	return post({
		url: global.loginUrl + '/api/user/mobile_login',
		data: data
	})
}

// 微信登录
export function wxLogin(data){
	return post({
		url: global.loginUrl + '/api/user/wx_xcx_login',
		data: data
	})
}

//问题反馈
export function feedback(data){
	return JsomPost({
		url: global.loginUrl + '/api/user/problem_feedback',
		data: data
	})
}

//重新发起支付
export function againPay(data){
	return post({
		url: global.memberUrl + '/pay/repay/',
		data: data
	})
}

//问答广场
export function getSquare(data){
	return get({
		url: global.baseUrl + '/api/chat/chat_square_rand_list?module_id='+ data.module_id + '&question_id='+ data.question_id,
		data: ''
	})
}

//分享到问答广场
export function shareChat(data){
	return JsomPost({
		url: global.baseUrl + '/api/chat/chat_square',
		data: data
	})
}

// 问题广场详情
export function squareDetail(data){
	return get({
		url: global.baseUrl + '/api/chat/chat_square/'+ data.session_code,
		data: ''
	})
}

// 自定义问题集
export function getConfig(data){
	return post({
		url: global.memberUrl + '/pay/question_config/',
		data: data
	})
}

// sd绘画等待人数
export function getSdQuery(data){
	return get({
		url: global.baseUrl + '/api/chat/get_queue',
		data: ''
	})
}

// sd绘画等获取模型
export function getSdModel(data){
	return get({
		url: global.baseUrl + '/api/chat/get_sd_model',
		data: ''
	})
}

// 请求sd绘画
export function sdDraw(data){
	return JsomPost({
		url: global.baseUrl + '/api/chat/sd_create_image',
		data: data
	})
}

// 开始sd绘画
export function getSdDraw(data){
	return get({
		url: global.baseUrl + '/api/chat/async_text_to_image?task_id='+ data.tag,
		data: ''
	})
}

// 修改头像昵称
export function editInfo(data){
	return post({
		url: global.loginUrl + '/api/user/set_avatar_url',
		data: data
	})
}


