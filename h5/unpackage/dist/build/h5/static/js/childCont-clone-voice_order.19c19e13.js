(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-clone-voice_order"],{"067a":function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e25e"),a("d3b7"),a("159b"),a("14d9");var i=a("755d"),n=a("ee03"),o={data:function(){return{ideaImg:t.baseImg+"/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png",active:0,searchValue:"",loadingType:0,page_no:1,page_count:10,orderList:[],pageTotal:0,backImg:t.baseImg+"/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg",tablist:[{name:"我的声音",index:1},{name:"声音克隆",index:2},{name:"合成配音",tip:3},{name:"订单记录",tip:4}],current:3,voiceCount:0}},components:{},onLoad:function(){this.current=3},onShow:function(){this.getOrderList(),this.getVoiceCount()},methods:{tabsChange:function(t){this.current=t.index,0==this.current?uni.navigateTo({url:"/childCont/clone/my_voice"}):1==this.current?this.voiceCount>0?uni.navigateTo({url:"/childCont/clone/voice_clone"}):uni.navigateTo({url:"/childCont/clone/pay_clone"}):2==this.current?uni.navigateTo({url:"/childCont/clone/copy_voice"}):3==this.current&&uni.navigateTo({url:"/childCont/clone/voice_order"})},getVoiceCount:function(){var t=this;(0,n.getVoiceCount)().then((function(e){2e4==e.code?t.voiceCount=e.data.count_number:t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取失败")}))},version:function(t){0==t?this.active=0:1==t?this.active=1:2==t?this.active=2:4==t&&(this.active=4),this.page_no=1,this.loadingType=0,this.searchValue="",this.getOrderList()},search:function(){this.page_no=1,this.loadingType=0,this.getOrderList()},getOrderList:function(){var t=this,e=JSON.parse(uni.getStorageSync("userInfo")),a={user_id:e.user_id,prod_cate_id:"9",status:this.active,order_id:this.searchValue,page_index:this.page_no,page_count:this.page_count};(0,i.orderList)(a).then((function(e){if(2e4==e.code){t.orderList=e.data;var a=e.total;a%t.page_count==0?t.pageTotal=a/t.page_count:t.pageTotal=parseInt(a/t.page_count)+1,1==t.pageTotal&&(t.loadingType=1)}else t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取订单信息失败")}))},onReachBottom:function(){var t=this;if(1!=this.loadingType){this.page_no++;var e=JSON.parse(uni.getStorageSync("userInfo")),a={user_id:e.user_id,prod_cate_id:"9",status:this.active,order_id:this.searchValue,page_index:this.page_no,page_count:this.page_count};(0,i.orderList)(a).then((function(e){if(2e4==e.code){var a=e.total;if(0==a)return;var i=e.data,n=t.orderList;i.forEach((function(t){n.push(t)})),a%t.page_count==0?t.pageTotal=a/t.page_count:t.pageTotal=parseInt(a/t.page_count)+1,t.pageTotal<=t.page_no&&(t.loadingType=1)}else t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取订单信息失败")}))}}}};e.default=o}).call(this,a("c8ba"))},25328:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-fbb49a08]{background:#f6f8fb}body.?%PAGE?%[data-v-fbb49a08]{background:#f6f8fb}.tab_li[data-v-fbb49a08]{background:#fff}.top_cont[data-v-fbb49a08]{width:100%;height:%?250?%;background:#fff;position:fixed;top:0;z-index:10}.search_cont[data-v-fbb49a08]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:%?25?% %?25?% 0 %?25?%}.search[data-v-fbb49a08]{width:90%;height:%?72?%;background:#f6f6f6;border-radius:%?100?%;display:flex;align-items:center;justify-content:center;padding:0 %?32?%;margin-bottom:%?20?%}.search_input[data-v-fbb49a08]{flex:1}.search_img[data-v-fbb49a08]{width:%?36?%;height:%?36?%}.cont_tabs[data-v-fbb49a08]{width:100%;display:flex}.tabs_l[data-v-fbb49a08]{width:25%;display:flex;align-items:center;justify-content:center}.active_tabs[data-v-fbb49a08]{font-style:normal;font-weight:500;font-size:%?28?%;line-height:%?50?%;color:#1f64ff;border-bottom:%?5?% solid #1f64ff}.tabs[data-v-fbb49a08]{font-style:normal;font-weight:500;font-size:%?28?%;line-height:%?50?%;color:#999}.list_ul[data-v-fbb49a08]{padding:%?25?% %?10?%;margin-top:%?200?%;margin-bottom:%?30?%;width:100%}.ul_style[data-v-fbb49a08]{display:flex;flex-direction:column;padding:0 %?15?%;width:100%}.li_style[data-v-fbb49a08]{display:flex;flex-direction:column;background:#fff;\n  /* border: 1px solid #C0C4CC; */box-shadow:%?0?% %?0?% %?10?% rgba(0,0,0,.14);border-radius:%?15?%;padding:%?30?%;margin-bottom:%?25?%}.li_top[data-v-fbb49a08]{display:flex;align-items:center;justify-content:space-between;margin-bottom:%?18?%}.top_l[data-v-fbb49a08]{font-weight:400;font-size:%?28?%;line-height:%?42?%;color:#333;width:70%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.top_r[data-v-fbb49a08]{ont-weight:400;font-size:%?24?%;line-height:%?30?%;color:#6e7480}.li_btn[data-v-fbb49a08]{font-weight:400;font-size:%?24?%;line-height:%?35?%;color:#6e7480;margin-bottom:%?12?%}.li_bom[data-v-fbb49a08]{display:flex;align-items:center;justify-content:space-between}.bom_l[data-v-fbb49a08]{font-weight:400;font-size:%?24?%;line-height:%?35?%;color:#6e7480}.r_btn[data-v-fbb49a08]{background:rgba(82,196,26,.2);border-radius:%?8?%;font-weight:400;font-size:%?20?%;line-height:%?28?%;color:#52c41a;padding:%?8?% %?18?%}.r_btn_stop[data-v-fbb49a08]{background:rgba(31,100,255,.2);border-radius:%?8?%;font-weight:400;font-size:%?20?%;line-height:%?28?%;color:#1f64ff;padding:%?8?% %?18?%}.r_btn_gq[data-v-fbb49a08]{background:rgba(245,172,62,.2);border-radius:%?8?%;font-weight:400;font-size:%?20?%;line-height:%?28?%;color:#f5ac3e;padding:%?8?% %?18?%}.on_order[data-v-fbb49a08]{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw}.order_img[data-v-fbb49a08]{width:%?450?%;height:%?450?%}.on_order_list[data-v-fbb49a08]{display:flex;align-items:center;justify-content:center;font-size:%?28?%;height:%?100?%;line-height:%?100?%;width:100vw;color:#c0c4cc}",""]),t.exports=e},"4f06":function(t,e,a){"use strict";var i=a("bc76"),n=a.n(i);n.a},5613:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJiSURBVHgB7ZfRUeMwEIbXqSBXwfkquFwFUSoAKrhcBQcV4FRAqIDQAVQQ5yHPhA5cQnjNQ8K/sAqLEqyV44FhJv+MJrJiyd9Kq9WK6Khvpizl5el06jqdzslms3F4zFG68tcCpUL7PX7LwWBQUUOZgAAyzLLsUiAsmgBu1AQsi4DkALlB1VG6lgI1TunUoXqYaQDDH7lGGaD8cM5lXFD/g/IP/5fq3S76X81ms0tKUBaByX0bg+CngMVLqhH7mczqti+ei36/P6KmQGVZ6pnhWTkDSElGAaorUKe+jWfVMka2Z7ChDOYHYpg7aqDAsArL+yvWZ8eHZDd5mFFTGOnPfuWXOGdjY33eAfH609vaVygTOkC87cX3XgRj/8b6hDN0quoHBTglve0d+xdZgWDBb1+HZbfUgmRXlqrJkRUI6qn6gloSjHtUjzklAG2nMxZvErXc9w0L0JcrBKp8ZT6f/6SWpH2TIq4QAm1fXq1WZ9SetG9WZAWC8818HVadUAsKYxt8M2mGJqruZLCDpCM/vd/+cSDeWTr+8JkWC2R1Qurxn1Tc4aMo1mffLitInT+c01ADwZAeAMYK5toS+XeA5PzRlgxxaj9wjkRG8cxIPuXFBhaWvh+msAAogvWv8DxZr9e3H1kqyRn3cTsfMiZpsZw6hPIq0b4A3JN8jGMWH8yhvy11mwUqeuvYl5Ja5FNelHNtVAzKfC+TTJLzGVfzmt+lY72s4UzXQSVdFGVwXoKeFL8cFcqiLuhZoZKBDlEIhdm8CO9tn3ra4+NFEFLy8J1PTz8E6oJej6mkW+1RR1n0DFMuJYmylwERAAAAAElFTkSuQmCC"},bc76:function(t,e,a){var i=a("25328");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f065").default;n("73521f1f",i,!0,{sourceMap:!1,shadowMode:!1})},bd9b:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uTabs:a("13f2").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"top_cont"},[i("v-uni-view",{staticClass:"tab_li"},[i("u-tabs",{attrs:{list:t.tablist,lineWidth:"45",lineHeight:"2",lineColor:"#1f64ff",activeStyle:{color:"#1F64FF","font-size":"30rpx"},current:t.current,inactiveStyle:{"font-size":"30rpx"}},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"search_cont"},[i("v-uni-view",{staticClass:"search"},[i("v-uni-image",{staticClass:"search_img",attrs:{src:a("5613")}}),i("v-uni-input",{staticClass:"search_input",attrs:{placeholder:"请输入订单编号",type:"text"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),i("v-uni-view",{staticClass:"cont_tabs"},[i("v-uni-view",{staticClass:"tabs_l"},[i("v-uni-view",{class:[0==t.active?"active_tabs":"tabs"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.version(0)}}},[t._v("全部")])],1),i("v-uni-view",{staticClass:"tabs_l"},[i("v-uni-view",{class:[1==t.active?"active_tabs":"tabs"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.version(1)}}},[t._v("待付款")])],1),i("v-uni-view",{staticClass:"tabs_l"},[i("v-uni-view",{class:[2==t.active?"active_tabs":"tabs"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.version(2)}}},[t._v("已付款")])],1),i("v-uni-view",{staticClass:"tabs_l"},[i("v-uni-view",{class:[4==t.active?"active_tabs":"tabs"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.version(4)}}},[t._v("已过期")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"chat_cont"},[t.orderList.length>0?i("v-uni-scroll-view",{staticClass:"list_ul",attrs:{"scroll-y":"true"}},t._l(t.orderList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"ul_style"},[i("v-uni-view",{staticClass:"li_style"},[i("v-uni-view",{staticClass:"li_top"},[i("v-uni-text",{staticClass:"top_l"},[t._v("订单号："+t._s(e.order_id))]),i("v-uni-text",{staticClass:"top_r"},[t._v(t._s(e.created_at.slice(0,10)))])],1),i("v-uni-view",{staticClass:"li_btn"},[t._v("金     额：￥"+t._s(e.total_amount))]),i("v-uni-view",{staticClass:"li_bom"},[i("v-uni-view",{staticClass:"bom_l"},[t._v("套     餐："+t._s(e.prod_name))]),i("v-uni-view",{staticClass:"bom_r"},[1==e.status?i("v-uni-text",{staticClass:"r_btn"},[t._v("待付款")]):t._e(),2==e.status?i("v-uni-text",{staticClass:"r_btn_stop"},[t._v("已付款")]):t._e(),4==e.status?i("v-uni-text",{staticClass:"r_btn_gq"},[t._v("已过期")]):t._e()],1)],1)],1)],1)})),1):i("v-uni-view",{staticClass:"on_order"},[i("v-uni-image",{staticClass:"order_img",attrs:{src:t.backImg}})],1),1==t.loadingType?i("v-uni-view",{staticClass:"on_order_list"},[t._v("没有更多内容了!")]):t._e()],1)],1)},o=[]},c765:function(t,e,a){"use strict";a.r(e);var i=a("bd9b"),n=a("f199");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("4f06");var s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"fbb49a08",null,!1,i["a"],void 0);e["default"]=c.exports},ee03:function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.againVoice=function(e){return(0,i.JsomPut)({url:t.baseUrl+"/api/sv_voice/volcengine_voice_train",data:e})},e.creatVoice=function(e){return(0,i.JsomPost)({url:t.baseUrl+"/api/sv_voice/volcengine_voice_train",data:e})},e.getVoiceCount=function(e){return(0,i.get)({url:t.baseUrl+"/api/sv_voice/get_vid_number",data:e})},e.getVoiceIdQuery=function(e){return(0,i.get)({url:t.baseUrl+"/api/sv_voice/VoiceIdQuery",data:e})},e.getVoiceList=function(e){return(0,i.get)({url:t.baseUrl+"/api/sv_voice/volcengine_voice_train",data:e})},e.getapplication=function(e){return(0,i.JsomPost)({url:t.memberUrl+"/pay/message_center/",data:e})},e.getapplicationContent=function(e){return(0,i.JsomPost)({url:t.memberUrl+"/pay/message_center_content/",data:e})},e.openVoice=function(e){return(0,i.put)({url:t.baseUrl+"/api/sv_voice/enable_voice",data:e})};var i=a("a725")}).call(this,a("c8ba"))},f199:function(t,e,a){"use strict";a.r(e);var i=a("067a"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);