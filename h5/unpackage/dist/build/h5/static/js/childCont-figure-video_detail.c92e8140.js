(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-figure-video_detail"],{"175d":function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("466d"),i("841c"),i("c975");var o=i("f22e"),n=i("755d"),a={data:function(){return{info:"",isClick:!0,live_code:"",pay_price:0,productInfo:[],timer:0}},components:{},onLoad:function(t){t.live_code&&(this.live_code=t.live_code);var e=navigator.userAgent.toLowerCase();"micromessenger"==e.match(/MicroMessenger/i)&&(null!=uni.getStorageSync("openid")&&"null"!=uni.getStorageSync("openid")&&""!=uni.getStorageSync("openid")||this.getCode())},onShow:function(){var t=this;this.getList(),this.getProduct();var e=uni.getStorageSync("orderId");""!=e&&(this.timer=setInterval((function(){t.getPayResult(e)}),2e3))},onUnload:function(){clearInterval(this.timer)},methods:{getList:function(){var t=this,e={live_code:this.live_code};(0,n.getFigureDetail)(e).then((function(e){2e4==e.code?t.info=e.data:t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取失败")}))},getProduct:function(){var t=this;(0,o.getProductList)({prod_cate_id:[7]}).then((function(e){2e4==e.code?(t.productInfo=e.data[7][0],t.pay_price=t.productInfo.prod_price):t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取失败！")}))},wxPay:function(){var e=JSON.parse(uni.getStorageSync("userInfo")),i={user_id:e.user_id,prod_id:this.productInfo.prod_id,prod_cate_id:this.productInfo.prod_cate_id,prod_name:this.productInfo.prod_name,total_amount:this.productInfo.prod_price,price:this.productInfo.prod_price,model_name:this.info.live_name,live_code:this.info.live_code,quantity:1};if(0==this.isClick)return!1;this.isClick=!1;var n=this,a=navigator.userAgent.toLowerCase();"micromessenger"==a.match(/MicroMessenger/i)?(i.open_id=uni.getStorageSync("openid"),(0,o.wxpay)(i).then((function(t){if(2e4==t.code){var e=t.data[0].order_id;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.data[0].req_data.app_id,timeStamp:t.data[0].req_data.time_stamp,nonceStr:t.data[0].req_data.nonce_str,package:t.data[0].req_data.package,signType:t.data[0].req_data.sign_type,paySign:t.data[0].req_data.pay_sign},(function(t){"get_brand_wcpay_request:ok"==t.err_msg?(n.getPayResult(e),n.isClick=!0):"get_brand_wcpay_request:fail"==t.err_msg?(console.log("支付失败"),n.isClick=!0):(console.log("取消支付"),n.isClick=!0)}))}else n.$api.msg(t.msg),n.isClick=!0})).catch((function(t){n.isClick=!0,n.$api.msg("获取支付信息失败！")}))):(0,o.webpay)(i).then((function(e){if(2e4==e.code){var i=e.data[0].order_id;n.isClick=!0,uni.setStorageSync("orderId",i);var o=encodeURIComponent(t.url+"/#/childCont/figure/video_detail?order_id="+i),a=e.data[0].req_data.mweb_url+"&redirect_url="+o;window.location.href=a}else n.$api.msg(e.msg),n.isClick=!0})).catch((function(t){n.isClick=!0,n.$api.msg("获取支付信息失败！")}))},getPayResult:function(t){var e=this,i={order_id:t};(0,o.getResult)(i).then((function(t){2e4==t.code?1==t.data[0].status?(e.$api.msg("支付成功"),e.isClick=!0,clearInterval(e.timer),uni.setStorageSync("orderId",""),uni.redirectTo({url:"/childCont/figure/pay_video"})):2==t.data[0].status?(e.isClick=!0,clearInterval(e.timer),e.$api.msg("已退款"),uni.setStorageSync("orderId","")):3==t.data[0].status||4==t.data[0].status?(e.isClick=!0,clearInterval(e.timer),e.$api.msg("支付失败"),uni.setStorageSync("orderId","")):uni.setStorageSync("orderId",""):(clearInterval(e.timer),e.isClick=!0,e.$api.msg(t.msg),uni.setStorageSync("orderId",""))})).catch((function(t){clearInterval(e.timer),e.isClick=!0,e.$api.msg("获取支付结果失败！"),uni.setStorageSync("orderId","")}))},getCode:function(){var e=t.url+"/#/childCont/figure/figure_oral";if(this.code=this.getUrlCode().code,null==this.code||""==this.code){var i="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfe35c4c93a227f12&redirect_uri="+encodeURIComponent(e)+"&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";window.location.href=i}else{var o={"content-type":"application/x-www-form-urlencoded",source:t.source},n={code:this.code};uni.request({url:t.loginUrl+"/api/user/get_open_id",data:n,header:o,method:"POST",success:function(t){2e4==t.data.code?uni.setStorageSync("openid",t.data.data):console.log("获取openid失败")}})}},getUrlCode:function(){var t=location.search,e=new Object;if(-1!=t.indexOf("?"))for(var i=t.substr(1),o=i.split("&"),n=0;n<o.length;n++)e[o[n].split("=")[0]]=o[n].split("=")[1];return console.log(e,"111"),e}}};e.default=a}).call(this,i("c8ba"))},"3c07":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-81b45394]{background:#f6f8fb}body.?%PAGE?%[data-v-81b45394]{background:#f6f8fb}.container[data-v-81b45394]{padding:%?20?% %?24?%}.cont[data-v-81b45394]{padding:%?12?% %?36?%;background:#fff;border-radius:16px}.cont_top[data-v-81b45394]{padding:%?20?% 0}.order_sn[data-v-81b45394]{font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?40?%;color:#333}.order_price[data-v-81b45394]{font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?40?%;color:#6e7480}.bottom[data-v-81b45394]{width:100%;background:#fff;position:fixed;bottom:0;display:flex;border-top:%?1?% solid #e7e7e7;padding-top:%?20?%}.bottom .bottom_left[data-v-81b45394]{width:35%;padding:%?20?%}.bottom .bottom_left .left_text[data-v-81b45394]{color:#eb504b;font-size:%?28?%;font-style:normal;font-weight:600;line-height:%?52?%}.bottom .bottom_left .right_text[data-v-81b45394]{color:#eb504b;font-size:%?52?%;font-style:normal;font-weight:700}.bottom_cont[data-v-81b45394]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding-bottom:%?25?%;width:65%}.bottom_cont .bottom_buy[data-v-81b45394]{width:90%;height:%?80?%;background:#1f64ff;border-radius:6px;font-style:normal;font-weight:500;font-size:14px;line-height:20px;color:#fff;display:flex;justify-content:center;align-items:center;margin:auto}.bottom_cont .bottom_desc[data-v-81b45394]{height:%?34?%;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?34?%;margin:%?20?% auto 0;text-align:center}",""]),t.exports=e},4351:function(t,e,i){"use strict";i.r(e);var o=i("6f54"),n=i("7ac2");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("bbae");var r=i("f0c5"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"81b45394",null,!1,o["a"],void 0);e["default"]=c.exports},"6f54":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"cont"},[i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_sn"},[t._v("模特名称：")]),i("v-uni-text",{staticClass:"order_sn"},[t._v(t._s(t.info.live_name))])],1),i("v-uni-view",{staticClass:"cont_top"},[i("v-uni-text",{staticClass:"order_price"},[t._v("商品价格：")]),i("v-uni-text",{staticClass:"order_price"},[t._v("￥1999")])],1)],1)],1),1==t.info.make_status?i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"bottom_left"},[i("v-uni-text",{staticClass:"left_text"},[t._v("￥")]),i("v-uni-text",{staticClass:"right_text"},[t._v(t._s(t.pay_price))])],1),i("v-uni-view",{staticClass:"bottom_cont"},[i("v-uni-view",{staticClass:"bottom_buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wxPay.apply(void 0,arguments)}}},[t._v("立即定制")]),i("v-uni-view",{staticClass:"bottom_desc"},[i("v-uni-text",[t._v("定制即默认接受")]),i("v-uni-text",{staticStyle:{color:"#1F64FF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkAgree.apply(void 0,arguments)}}},[t._v("《定制数字人协议》")])],1)],1)],1):t._e()],1)},n=[]},"7ac2":function(t,e,i){"use strict";i.r(e);var o=i("175d"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},bbae:function(t,e,i){"use strict";var o=i("c5c9"),n=i.n(o);n.a},c5c9:function(t,e,i){var o=i("3c07");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f065").default;n("a653eebc",o,!0,{sourceMap:!1,shadowMode:!1})}}]);