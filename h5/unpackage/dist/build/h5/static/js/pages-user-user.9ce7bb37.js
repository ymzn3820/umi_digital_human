(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"245d":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".heads[data-v-300192b0]{\n  /* position: fixed; */\n  /* background-color: #bfa; */\n  /* background: transparent; */\n  /* height: 516upx; */\n  /* position: absolute; */\n  /* width: 375px; */}",""]),e.exports=t},"2eb4":function(e,t,a){"use strict";a.r(t);var n=a("dff0"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"482f":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uModal:a("f2e4").default,uInput:a("01d9").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticStyle:{background:"linear-gradient(261deg, #F2F0FB 0%, #F1F9FE 52.84%, #F9FCFF 100%)"}},[a("v-uni-view",{staticClass:"user_login"},[a("v-uni-view",{staticClass:"user_login_any"},[a("v-uni-view",{staticClass:"user_login_msg"},[a("v-uni-image",{staticClass:"user_login_icon",attrs:{src:e.avatarUrl,mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addInfo.apply(void 0,arguments)}}}),"guess"==e.userInfo.role?a("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goToLogin.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"nickname"},[e._v("登录/注册")]),a("v-uni-view",{staticClass:"tokens"},[e._v("登录后即可体验更多服务 >")])],1):a("v-uni-view",{staticClass:"user_title"},[a("v-uni-view",{staticClass:"nickname"},[e._v(e._s(e.userInfo.nick_name))]),a("v-uni-view",{staticClass:"tokens"},[e._v(e._s(e.userInfo.mobile))])],1)],1),a("v-uni-view",{staticClass:"user_set",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkSet.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"user_set_icon",attrs:{src:e.setImg}}),a("v-uni-view",{staticClass:"user_set_text"},[e._v("设置")])],1)],1)],1),a("u-modal",{attrs:{show:e.show,confirmText:"兑换",confirmColor:"#1F64FF;",showCancelButton:!0},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.closeKey.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.changeKey.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"key_cont"},[a("v-uni-view",{staticClass:"title"},[e._v("卡密兑换")]),a("u-input",{attrs:{customStyle:{padding:"8px",width:"100%"},inputAlign:"center",placeholder:"请输入兑换码",type:"text"},model:{value:e.cardName,callback:function(t){e.cardName=t},expression:"cardName"}})],1)],1)],1)},o=[]},5272:function(e,t,a){"use strict";a.r(t);var n=a("482f"),i=a("2eb4");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("7e76");var c=a("f0c5"),d=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"dceb5e9e",null,!1,n["a"],void 0);t["default"]=d.exports},"616d":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uStatusBar:a("f9d6").default,uIcon:a("1621").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-navbar"},[e.fixed&&e.placeholder?a("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:e.$u.addUnit(e.$u.getPx(e.height)+e.$u.sys().statusBarHeight,"px")}}):e._e(),a("v-uni-view",{class:[e.fixed&&"u-navbar--fixed"]},[e.safeAreaInsetTop?a("u-status-bar",{attrs:{bgColor:e.bgColor}}):e._e(),a("v-uni-view",{staticClass:"u-navbar__content",class:[e.border&&"u-border-bottom"],style:{height:e.$u.addUnit(e.height),backgroundColor:e.bgColor}},[a("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}},[e._t("left",[e.leftIcon?a("u-icon",{attrs:{name:e.leftIcon,size:e.leftIconSize,color:e.leftIconColor}}):e._e(),e.leftText?a("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:e.leftIconColor}},[e._v(e._s(e.leftText))]):e._e()])],2),e._t("center",[a("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:[{width:e.$u.addUnit(e.titleWidth)},e.$u.addStyle(e.titleStyle)]},[e._v(e._s(e.title))])]),e.$slots.right||e.rightIcon||e.rightText?a("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.rightClick.apply(void 0,arguments)}}},[e._t("right",[e.rightIcon?a("u-icon",{attrs:{name:e.rightIcon,size:"20"}}):e._e(),e.rightText?a("v-uni-text",{staticClass:"u-navbar__content__right__text"},[e._v(e._s(e.rightText))]):e._e()])],2):e._e()],2)],1)],1)},o=[]},"6bdc":function(e,t,a){"use strict";var n=a("ad7c"),i=a.n(n);i.a},"7e76":function(e,t,a){"use strict";var n=a("cd57"),i=a.n(n);i.a},a778:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uNavbar:a("ead8").default},i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"heads"},[t("u-navbar",{attrs:{title:this.title,titleStyle:{"font-weight":"550",height:"100upx","font-size":"34upx"},bgColor:"#fff",placeholder:!0}},[t("v-uni-view",{staticClass:"u-nav-slot",attrs:{slot:"left"},slot:"left"})],1)],1)},o=[]},a8c0:function(e,t,a){"use strict";var n=a("b816"),i=a.n(n);i.a},ac96:function(e,t,a){"use strict";a.r(t);var n=a("a778"),i=a("e9b8");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("a8c0");var c=a("f0c5"),d=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"300192b0",null,!1,n["a"],void 0);t["default"]=d.exports},ad7c:function(e,t,a){var n=a("eeba");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f065").default;i("044ccb71",n,!0,{sourceMap:!1,shadowMode:!1})},b130:function(e,t,a){"use strict";a.r(t);var n=a("c4be"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},b816:function(e,t,a){var n=a("245d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f065").default;i("46d782ea",n,!0,{sourceMap:!1,shadowMode:!1})},bda3:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3");var n={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack},titleStyle:{type:[String,Object],default:uni.$u.props.navbar.titleStyle}}};t.default=n},c4be:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("bda3")),o={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};t.default=o},c9fb:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-dceb5e9e]{background:linear-gradient(261deg,#f2f0fb,#f1f9fe 52.84%,#f9fcff)}body.?%PAGE?%[data-v-dceb5e9e]{background:linear-gradient(261deg,#f2f0fb,#f1f9fe 52.84%,#f9fcff)}.user-section[data-v-dceb5e9e]{width:100%;height:%?516?%}.bg_img[data-v-dceb5e9e]{width:100%;height:%?516?%}.user_login[data-v-dceb5e9e]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:%?0?% %?32?%}.user_login_title[data-v-dceb5e9e]{font-style:normal;font-weight:500;font-size:%?34?%;line-height:%?48?%;padding-bottom:%?40?%;color:#000}.user_login_any[data-v-dceb5e9e]{width:100%;display:flex;justify-content:space-between;align-items:center;padding:%?20?% 0}.user_login_msg[data-v-dceb5e9e]{\n  /* width: 444upx; */height:%?142?%;display:flex;align-items:center}.user_title[data-v-dceb5e9e]{margin-left:%?24?%}.nickname[data-v-dceb5e9e]{width:%?180?%;font-style:normal;font-weight:500;font-size:%?36?%;line-height:%?50?%;color:#333;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-left:%?32?%}.tokens[data-v-dceb5e9e]{font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?40?%;color:#969699;margin-left:%?32?%}.user_login_icon[data-v-dceb5e9e]{width:%?120?%;height:%?120?%;border-radius:50%}.user_set[data-v-dceb5e9e]{text-align:center}.user_set .user_set_icon[data-v-dceb5e9e]{width:%?48?%;height:%?48?%}.user_set .user_set_text[data-v-dceb5e9e]{color:#000;font-size:%?26?%}.cont_head[data-v-dceb5e9e]{padding:0 %?32?%;margin-top:%?39?%;display:flex;margin-bottom:%?24?%}.cont_head .cont_l[data-v-dceb5e9e]{width:%?260?%;height:%?198?%;border-radius:%?26?%;background:#fff;margin-right:%?22?%}.cont_head .cont_l .l_up[data-v-dceb5e9e]{color:#1f64ff;font-size:%?30?%;font-weight:500;margin:%?44?% 0 %?24?% %?24?%}.cont_head .cont_l .l_dowm[data-v-dceb5e9e]{color:#000;font-size:%?26?%;margin-left:%?24?%}.cont_head .cont_r[data-v-dceb5e9e]{padding:%?32?% %?36?%;width:%?472?%;border-radius:%?16?%;background:#fff;display:flex;justify-content:space-around}.cont_head .cont_r .r_item[data-v-dceb5e9e]{text-align:center}.cont_head .cont_r .r_item .r_pic[data-v-dceb5e9e]{width:%?80?%;height:%?80?%}.cont_head .cont_r .r_item .r_text[data-v-dceb5e9e]{color:#000;font-size:%?26?%}.user_vip[data-v-dceb5e9e]{width:100%;height:%?100?%;margin:%?20?% 0 %?20?% 0;display:flex;justify-content:space-between;align-items:center;padding:0 %?28?%;background:#f4d398;border-radius:%?16?%;color:#f0f8ff}.user_vip_left[data-v-dceb5e9e]{display:flex;align-items:center}.key_cont[data-v-dceb5e9e]{width:100%;background-color:#fff;border-radius:%?20?%;\n  /* padding: 0upx 0 0 0; */display:flex;flex-direction:column;align-items:center;justify-content:center}.title[data-v-dceb5e9e]{font-weight:500;font-size:%?32?%;line-height:%?48?%;color:#333;margin-bottom:%?32?%}.user_link[data-v-dceb5e9e]{width:100%;margin-bottom:%?15?%}.user_link .link_cont .cont[data-v-dceb5e9e]{width:100%;display:flex;align-items:center}.user_link .link_cont .cont .box[data-v-dceb5e9e]{width:%?348?%;height:%?128?%;position:relative}.user_link .link_cont .cont .link_img[data-v-dceb5e9e]{width:100%;height:100%}.user_link .link_cont .cont .cont_l[data-v-dceb5e9e]{flex-direction:column;padding:%?26?% %?24?%;position:absolute;top:0;left:0;display:flex;width:100%}.user_link .link_cont .cont .cont_l .l_top[data-v-dceb5e9e]{display:flex;align-items:center;flex-direction:row}.user_link .link_cont .cont .cont_l .l_top .top_text[data-v-dceb5e9e]{font-size:%?28?%;font-weight:520;color:#333;padding-right:%?15?%}.user_link .link_cont .cont .cont_l .l_top .right_img[data-v-dceb5e9e]{width:%?24?%;height:%?24?%}.user_link .link_cont .cont .cont_l .l_btn[data-v-dceb5e9e]{color:#ad9245;font-size:%?22?%;font-weight:400;padding-top:%?15?%}.cont_user[data-v-dceb5e9e]{padding:%?0?% %?32?%;margin-bottom:%?16?%}.cont_user .cont_ul[data-v-dceb5e9e]{padding:%?22?%;background:#fff;border-radius:%?14?%}.cont_user .cont_ul .user_tit[data-v-dceb5e9e]{color:#333;font-size:%?30?%;font-style:normal;font-weight:520;line-height:150%}.cont_user .cont_ul .user_icon[data-v-dceb5e9e]{display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap}.cont_user .cont_ul .user_icon .icon_list[data-v-dceb5e9e]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:%?20?% 0 %?10?% 0;width:25%}.cont_user .cont_ul .user_icon .icon_list .icon_img[data-v-dceb5e9e]{width:%?48?%;height:%?48?%}.cont_user .cont_ul .user_icon .icon_list .icon_title[data-v-dceb5e9e]{color:#333;font-size:%?24?%;font-style:normal;font-weight:400;line-height:%?36?%;margin-top:%?12?%}.company_info[data-v-dceb5e9e]{width:100%;height:%?800?%;background-size:100% 100%;padding-top:%?200?%}.company_info .chat_text[data-v-dceb5e9e]{width:100%;padding:%?20?% 0}.company_info .chat_text .text_cont[data-v-dceb5e9e]{display:flex;align-items:center;margin-bottom:%?10?%;width:100%}.company_info .chat_text .text_cont .text_l[data-v-dceb5e9e]{color:#ff0101;font-size:%?22?%;font-style:normal;font-weight:400;line-height:%?26?%;margin-right:%?5?%}.company_info .chat_text .text_cont .text_r[data-v-dceb5e9e]{color:#333;text-align:center;font-size:%?24?%;font-style:normal;font-weight:530;line-height:%?26?%}.company_info .chat_btn[data-v-dceb5e9e]{width:100%;display:flex;align-items:center;justify-content:center;background:#1f64ff;border-radius:%?12?%;line-height:%?90?%;font-style:normal;font-weight:500;font-size:%?34?%;color:#fff}.company_info .chat_btn[data-v-dceb5e9e]:active{opacity:.5}.head[data-v-dceb5e9e]{width:100%;height:%?120?%;position:relative;margin-bottom:%?25?%}.head .head_img[data-v-dceb5e9e]{width:100%;height:%?120?%}.head .head_cont[data-v-dceb5e9e]{width:100%;display:flex;flex-direction:column;position:absolute;top:%?45?%;left:%?30?%}.head .head_cont .cont_top[data-v-dceb5e9e]{display:flex;align-items:flex-end}.head .head_cont .cont_top .cont_img[data-v-dceb5e9e]{width:%?32?%;height:%?26?%;margin-right:%?10?%}.head .head_cont .cont_top .top_text[data-v-dceb5e9e]{color:#fdd995;font-size:%?30?%;font-style:normal;font-weight:500;line-height:%?30?%}.head .head_cont .head_desc[data-v-dceb5e9e]{display:flex;align-items:flex-end}.head .head_cont .head_desc .desc_right[data-v-dceb5e9e]{color:#f9eecb;font-size:%?22?%;font-style:normal;font-weight:500;line-height:%?45?%}.head .right_cont[data-v-dceb5e9e]{display:flex;align-items:center;justify-content:center;width:%?170?%;height:%?60?%;border-radius:%?50?%;background:linear-gradient(136deg,#fdeabf,#fdd892);position:absolute;top:%?30?%;right:%?30?%}.head .right_cont .cont_text[data-v-dceb5e9e]{color:#754a1d;font-size:%?26?%;font-style:normal;font-weight:500;line-height:%?32?%}.head .right_cont .right_img[data-v-dceb5e9e]{width:%?28?%;height:%?28?%;margin-left:%?10?%}",""]),e.exports=t},cd57:function(e,t,a){var n=a("c9fb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f065").default;i("9bc6332e",n,!0,{sourceMap:!1,shadowMode:!1})},ce32:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},props:{title:String},methods:{rightClick:function(){console.log("rightClick")},leftClick:function(){console.log("leftClick")}}};t.default=n},dff0:function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("e9c4");var i=n(a("ade3")),o=a("f22e"),c=(a("755d"),n(a("ac96"))),d={data:function(){var t;return t={userInfo:{role:""},cardName:"",isClick:!0,show:!1,avatarUrl:""},(0,i.default)(t,"userInfo",JSON.parse(uni.getStorageSync("userInfo"))),(0,i.default)(t,"headPic1",e.baseImg+"/xcx/com/message_center/user充值中心.png"),(0,i.default)(t,"headPic2",e.baseImg+"/xcx/com/message_center/user卡密兑换.png"),(0,i.default)(t,"headPic3",e.baseImg+"/xcx/com/message_center/user我要分销.png"),(0,i.default)(t,"payImg",e.baseImg+"/xcx/com/message_center/充值.png"),(0,i.default)(t,"rightImg",e.baseImg+"/xcx/com/message_center/%E6%9B%B4%E5%A4%9A.png"),(0,i.default)(t,"backImg",e.baseImg+"/xcx/com/message_center/%E5%88%86%E9%94%80.png"),(0,i.default)(t,"backImg2",e.baseImg+"/xcx/com/message_center/%E4%BC%9A%E5%91%98.png"),(0,i.default)(t,"shareImg",e.baseImg+"/xcx/5996afad-f926-4f65-b0e7-edda0649642c.jpg"),(0,i.default)(t,"memberImg",e.baseImg+"/xcx/4e20e4ad-b3e6-4c2c-bc9f-82a58ba63714.jpg"),(0,i.default)(t,"countImg",e.baseImg+"/xcx/ca60327f-3a7d-44ee-906c-5f193dab9a7e.jpg"),(0,i.default)(t,"fxImg",e.baseImg+"/xcx/com/message_center/usergift.png"),(0,i.default)(t,"orderImg",e.baseImg+"/xcx/0fbfb940-6e78-4e77-951f-8bb33839406b.jpg"),(0,i.default)(t,"roleImg",e.baseImg+"/xcx/com/message_center/user创作中心.png"),(0,i.default)(t,"companyImg",e.baseImg+"/xcx/59bb082c-9d28-41cb-aa5b-c787b259cfcb.jpg"),(0,i.default)(t,"keyImg",e.baseImg+"/xcx/5e65b669-7914-4e18-ad3d-40c96fc3a5e4.jpg"),(0,i.default)(t,"openImg",e.baseImg+"/xcx/8940eb96-25e1-43d8-9dbe-5bff09523c1e.jpg"),(0,i.default)(t,"facImg",e.baseImg+"/xcx/com/message_center/user服务商.png"),(0,i.default)(t,"historyImg",e.baseImg+"/xcx/b31cf730-b4ed-4471-9504-66bc8e862182.jpg"),(0,i.default)(t,"bussImg",e.baseImg+"/xcx/2f504e0c-ca6c-4932-ad6b-5117cb2e37bd.jpg"),(0,i.default)(t,"adImg",e.baseImg+"/xcx/3fd32c44-523b-44db-a943-6e3954861339.jpg"),(0,i.default)(t,"qsImg",e.baseImg+"/xcx/92c00dde-1e07-4e6f-b9d0-b6930683da7c.jpg"),(0,i.default)(t,"versionImg",e.baseImg+"/xcx/08c60d00-5eb8-4453-ad08-5be4e63b914d.jpg"),(0,i.default)(t,"setImg",e.baseImg+"/xcx/bd44ea1b-5cce-49e9-962a-9ba82fb5d11d.jpg"),(0,i.default)(t,"infoImg",e.baseImg+"/xcx/a18146ee-df32-4ecd-94d4-779dc78e47ab.jpg"),(0,i.default)(t,"productImg",e.baseImg+"/xcx/0f78ff2c-ef4e-44a7-9874-8ed66533f18c.jpg"),(0,i.default)(t,"newsImg",e.baseImg+"/xcx/086158e9-d48d-4e7d-80d5-98b10d68837d.jpg"),(0,i.default)(t,"knowImg",e.baseImg+"/xcx/6322b018-c738-42dd-82ab-c68dcb699e72.jpg"),(0,i.default)(t,"companyInfoImg",'background-image: url("'+e.baseImg+'/xcx/86a3d5f4-1184-4a31-8012-85fa8ce84d0a.jpg")'),(0,i.default)(t,"vipback",e.baseImg+"/xcx/e72c490f-ed32-4b8c-aa18-159eae09a0f8.jpg"),(0,i.default)(t,"vipStart",e.baseImg+"/xcx/cfee4f80-fd59-4f33-8933-be9f73b8723d.jpg"),(0,i.default)(t,"chatImg",e.baseImg+"/xcx/com/message_center/user微信.png"),(0,i.default)(t,"miniproImg",e.baseImg+"/xcx/com/message_center/小程序.png"),(0,i.default)(t,"h5Img",e.baseImg+"/xcx/com/message_center/h5.png"),(0,i.default)(t,"pcImg",e.baseImg+"/xcx/com/message_center/pc 1.png"),(0,i.default)(t,"companyName",""),(0,i.default)(t,"phone",""),(0,i.default)(t,"job",""),(0,i.default)(t,"isCompany",!1),(0,i.default)(t,"isLevel",null),(0,i.default)(t,"level",0),t},components:{Title:c.default},onLoad:function(){},onShow:function(){this.getInfo()},methods:{getInfo:function(){var t=this;(0,o.getUserInfo)().then((function(a){console.log(a,320),2e4==a.code?(t.userInfo=a.data,t.avatarUrl=e.baseImg+"/"+a.data.avatar_url,uni.setStorageSync("memberInfo",JSON.stringify(a.data)),uni.setStorageSync("avatarUrl",a.data.avatar_url)):t.$api.msg(a.msg)})).catch((function(e){console.log(e,320),t.$api.msg("获取信息失败！")}))},addInfo:function(){"guess"==this.userInfo.role?uni.navigateTo({url:"/pages/login/login"}):uni.navigateTo({url:"/pages/user/info/info"})},checkSet:function(){uni.navigateTo({url:"/pages/user/set/set"})}}};t.default=d}).call(this,a("c8ba"))},e9b8:function(e,t,a){"use strict";a.r(t);var n=a("ce32"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},ead8:function(e,t,a){"use strict";a.r(t);var n=a("616d"),i=a("b130");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("6bdc");var c=a("f0c5"),d=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"d7d0f5be",null,!1,n["a"],void 0);t["default"]=d.exports},eeba:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-d7d0f5be], uni-scroll-view[data-v-d7d0f5be], uni-swiper-item[data-v-d7d0f5be]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-d7d0f5be]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-d7d0f5be]{display:flex;flex-direction:row;align-items:center;height:44px;position:relative;justify-content:center;background-size:100% 100%}.u-navbar__content__left[data-v-d7d0f5be], .u-navbar__content__right[data-v-d7d0f5be]{padding:0 13px;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-d7d0f5be]{left:0}.u-navbar__content__left--hover[data-v-d7d0f5be]{opacity:.7}.u-navbar__content__left__text[data-v-d7d0f5be]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-d7d0f5be]{text-align:center;font-size:16px;color:#303133}.u-navbar__content__right[data-v-d7d0f5be]{right:0}.u-navbar__content__right__text[data-v-d7d0f5be]{font-size:15px;margin-left:3px}',""]),e.exports=t}}]);