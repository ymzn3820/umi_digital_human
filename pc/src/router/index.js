// 导入组件
import Vue from "vue";
import Router from "vue-router";
// 登录
import login from "@/views/login";
// 首页
import index from "@/views/index";
/**
 * 基础菜单
 */
//意见反馈
const opinion = () => import("@/views/system/opinion");
// 计费中心
const residueNumber = () => import("@/views/center/residueNumber");

//分享页面
const share = () => import("@/components/share");
//资讯
const Information = () => import("@/views/information/information");
// 个人中心
const Center = () => import("@/views/center/Center");
// 修改个人信息
const editCneter = () => import("@/views/center/centerMessage");
// 订单记录
const Order = () => import("@/views/order/Order");
// 联系客服
const services = () => import("@/views/service/service");
// 卡密兑换
const Change = () => import("@/views/change/change");
// 防走丢
const here = () => import("@/views/here/here");
// 系统定制
const customized = () => import("@/views/operate/customized");
// 操作指南
const instruction = () => import("@/views/instruction/instruction");
// 问题反馈
const questionFeedback = () =>
  import("@/views/questionFeedback/questionFeedback");
// 历史版本
const version = () => import("../components/version");
// 公告
const noticeIndex = () => import("@/views/notice/index");
// 公告详情
const noticeDetail = () => import("@/views/notice/detail");
// 修改音视频内容
const eidtVideo = () => import("@/views/convertVideo/editVideo");
// 数字人定制
const digitizedHuman = () => import("@/views/digitizedHuman/index");
// 数字人定制/视频
const imageClone = () => import("@/views/digitizedHuman/imageClone");
// 数字人定制/声音
const audioClone = () => import("@/views/digitizedHuman/audioClone");
// 数字人定制/声音
const produceIndex = () => import("@/views/digitizedHuman/produceIndex");
// 数字人定制/新建
const createHuman = () => import("@/views/digitizedHuman/createHuman");
// 数字人定制/我的数字人
const mineHuman = () => import("@/views/digitizedHuman/mineHuman");
// 数字人定制/制作数字人
const startProduceHuman = () =>
  import("@/views/digitizedHuman/startProduceHuman");
// 数字人定制/我的视频
const mineVideo = () => import("@/views/digitizedHuman/mineVideo");
// 数字人定制/我的声音
const mineAudioNew = () => import("@/views/digitizedHuman/mineAudio_new");
  // 数字人定制/我的声音创建
const createAudioCloneNew = () =>
import("@/views/digitizedHuman/createAudioClone_new");
// 数字人定制/合成声音
const synthesisAudio = () => import("@/views/digitizedHuman/synthesisAudio");
// 数字人定制/合成声音记录
const audioCloneHistory = () =>
  import("@/views/digitizedHuman/audioCloneHistory");
// 数字人定制/合成声音记录
const humanOrder = () => import("@/views/digitizedHuman/order");

// 启用路由
Vue.use(Router);

// 导出路由
export default new Router({
  // mode: 'history', // 去掉url的#
  routes: [
    {
      path: "/index",
      name: "首页",
      component: index,
      iconCls: "el-icon-tickets",
      children: [
        {
          path: "/index",
          title: "首页",
          component: digitizedHuman,
          meta: {
            name: "index",
            requireAuth: false
          }
        },
       
        {
          path: "/share",
          title: "分享好友",
          component: share,
          meta: {
            name: "分享好友",
            requireAuth: false
          }
        },
        {
          path: "/residueNumber/residueNumber",
          name: "计费中心",
          component: residueNumber,
          meta: {
            title: "计费中心",
            requireAuth: false
          }
        },
        {
          path: "/information/Information",
          name: "information",
          component: Information,
          meta: {
            title: "资讯",
            requireAuth: false
          }
        },
       
        {
          path: "/center/Center",
          name: "个人中心",
          component: Center,
          meta: {
            title: "个人中心",
            requireAuth: false
          }
        },

       

        {
          path: "/opinion/opinion",
          name: "意见反馈",
          component: opinion,
          meta: {
            title: "意见反馈",
            requireAuth: false
          }
        },
        
        {
          path: "/center/edit",
          name: "修改信息",
          component: editCneter,
          meta: {
            title: "修改信息",
            requireAuth: false
          }
        },
        
        {
          path: "/order/Order",
          name: "订单记录",
          component: Order,
          meta: {
            title: "订单记录",
            requireAuth: false
          }
        },
        
        {
          path: "/services/services",
          name: "联系客服",
          component: services,
          meta: {
            title: "联系客服",
            requireAuth: true
          }
        },
        {
          path: "/change/change",
          name: "卡密兑换",
          component: Change,
          meta: {
            title: "卡密兑换",
            requireAuth: true
          }
        },
        {
          path: "/here/here",
          name: "桌面快捷教程",
          component: here,
          meta: {
            title: "桌面快捷教程",
            requireAuth: true
          }
        },
        {
          path: "/instruction/instruction",
          name: "操作指南",
          component: instruction,
          meta: {
            title: "操作指南",
            requireAuth: true
          }
        },
        {
          path: "/questionFeedwark/questionFeedwark",
          name: "问题反馈",
          component: questionFeedback,
          meta: {
            title: "问题反馈",
            requireAuth: true
          }
        },
        {
          path: "/version/version",
          name: "历史版本",
          component: version,
          meta: {
            title: "历史版本",
            requireAuth: true
          }
        },
       
        {
          path: "/noticeIndex/index",
          name: "公告",
          component: noticeIndex,
          meta: {
            title: "公告",
            requireAuth: true
          }
        },
        {
          path: "/noticeIndex/detail",
          name: "公告详情",
          component: noticeDetail,
          meta: {
            title: "公告详情",
            requireAuth: true
          }
        },
       
        {
          path: "/convert/editVideo",
          name: "修改内容",
          component: eidtVideo,
          meta: {
            title: "修改内容",
            requireAuth: true
          }
        },
        
        {
          path: "/digitizedHuman/profile",
          name: "形象克隆",
          component: imageClone,
          meta: {
            title: "AI直播数字人定制",
            requireAuth: true
          }
        },
        {
          path: "/digitizedHuman/audioClone",
          name: "声音克隆",
          component: audioClone,
          meta: {
            title: "AI直播数字人定制",
            requireAuth: true
          }
        },
        {
          path: "/digitizedHuman",
          name: "produceIndex",
          component: produceIndex,
          children: [
            {
              path: "/digitizedHuman/produceIndex",
              name: "humanIndex",
              component: createHuman,
              meta: {
                title: "创建数字人",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/mineHuman",
              name: "mineHuman",
              component: mineHuman,
              meta: {
                title: "我的数字人",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/mineVideo",
              name: "mineVideo",
              component: mineVideo,
              meta: {
                title: "我的视频",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/mineAudio",
              name: "mineAudio",
              component: mineAudioNew,
              meta: {
                title: "我的声音",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/cloneAudio",
              name: "createAudioClone",
              component: createAudioCloneNew,
              meta: {
                title: "声音克隆",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/synthesisAudio",
              name: "synthesisAudio",
              component: synthesisAudio,
              meta: {
                title: "合成声音",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/audioCloneHistory",
              name: "audioCloneHistory",
              component: audioCloneHistory,
              meta: {
                title: "合成声音记录列表",
                requireAuth: true
              }
            },
            {
              path: "/digitizedHuman/humanOrder",
              name: "humanOrder",
              component: humanOrder,
              meta: {
                title: "数字人订单记录",
                requireAuth: true
              }
            }
          ]
        },
      ]
    },
    {
      path: "/login",
      name: "登录",
      component: login,
      hidden: true,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/customized/customized",
      name: "系统定制",
      component: customized,
      hidden: true,
      meta: {
        title: "系统定制",
        requireAuth: true
      }
    },
    // {
    //   path: "/digitizedHuman",
    //   name: "produceIndex",
    //   component: produceIndex,
    //   children: [
    //     {
    //       path: "/digitizedHuman/produceIndex",
    //       name: "humanIndex",
    //       component: createHuman,
    //       meta: {
    //         title: "创建数字人",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/mineHuman",
    //       name: "mineHuman",
    //       component: mineHuman,
    //       meta: {
    //         title: "我的数字人",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/mineVideo",
    //       name: "mineVideo",
    //       component: mineVideo,
    //       meta: {
    //         title: "我的视频",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/mineAudio",
    //       name: "mineAudio",
    //       component: mineAudio,
    //       meta: {
    //         title: "我的声音",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/cloneAudio",
    //       name: "createAudioClone",
    //       component: createAudioClone,
    //       meta: {
    //         title: "声音克隆",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/synthesisAudio",
    //       name: "synthesisAudio",
    //       component: synthesisAudio,
    //       meta: {
    //         title: "合成声音",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/audioCloneHistory",
    //       name: "audioCloneHistory",
    //       component: audioCloneHistory,
    //       meta: {
    //         title: "合成声音记录列表",
    //         requireAuth: true
    //       }
    //     },
    //     {
    //       path: "/digitizedHuman/humanOrder",
    //       name: "humanOrder",
    //       component: humanOrder,
    //       meta: {
    //         title: "数字人订单记录",
    //         requireAuth: true
    //       }
    //     }
    //   ]
    // },
    {
      path: "/digitizedHuman/startProduceHuman",
      name: "startProduceHuman",
      component: startProduceHuman,
      meta: {
        title: "制作数字人",
        requireAuth: true
      }
    }
  ]
});
