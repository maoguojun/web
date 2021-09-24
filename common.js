// 友情链接
const websiteUrl = '';  
// 播放链接
const pageUrl = '';
// html 数据
const htmlData = '';
// 当前的解析地址
const analysis = '';
// 解析列表
const urlList = [
	{name:"纯净1",src:"https://z1.m1907.cn/?jx=","t":"m"},
	{name:"B站1",src:"https://vip.parwix.com:4433/player/?url=","t":"m"},
	{name:"爱跟",src:"https://vip.2ktvb.com/player/?url=","t":"m"},
	{name:"爱豆",src:"https://jx.aidouer.net/?url="},
	{name:"BL",src:"https://vip.bljiex.com/?v="},
	{name:"CK",src:"https://www.ckplayer.vip/jiexi/?url="},
	{name:"CHok",src:"https://www.gai4.com/?url="},
	{name:"冰豆",src:"https://api.qianqi.net/vip/?url="},
	{name:"百域",src:"https://jx.618g.com/?url="},
	{name:"ckmov",src:"https://www.ckmov.vip/api.php?url="},
	{name:"大白",src:"https://api.myzch.cn/?url="},
	{name:"大幕",src:"https://jx.52damu.com/dmjx/jiexi.php?url="},
	{name:"迪奥",src:"https://123.1dior.cn/?url="},
	{name:"福星",src:"https://jx.popo520.cn/jiexi/?url="},
	{name:"跟剧",src:"https://www.5igen.com/dmplayer/player/?url="},
	{name:"RDHK",src:"https://jx.rdhk.net/?v=","t":"m"},
	{name:"H8",src:"https://www.h8jx.com/jiexi.php?url="},
	{name:"江湖",src:"https://api.jhdyw.vip/?url=","t":"m"},
	{name:"解析",src:"https://ckmov.ccyjjd.com/ckmov/?url="},
	{name:"解析la",src:"https://api.jiexi.la/?url="},
	{name:"久播",src:"https://jx.jiubojx.com/vip.php?url="},
	{name:"九八",src:"https://jx.youyitv.com/?url="},
	{name:"可乐",src:"https://jx.keleapi.com/?url=","t":"m"},
	{name:"LE",src:"https://lecurl.cn/?url="},
	{name:"懒猫",src:"https://api.lanmaody.com/dm/?url=","t":"m"},
	{name:"老板",src:"https://vip.laobandq.com/jiexi.php?url="},
	{name:"乐多",src:"https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid=","t":"m"},
	{name:"乐喵",src:"https://jx.hao-zsj.cn/vip/?url="},
	{name:"Mao",src:"https://qd.hxys.tv/m3u8.php?url="},
	{name:"M3U8",src:"https://jx.m3u8.tv/jiexi/?url="},
	{name:"MUTV",src:"https://jiexi.janan.net/jiexi/?url="},
	{name:"明日",src:"https://jx.yingxiangbao.cn/vip.php?url="},
	{name:"磨菇",src:"https://jx.wzslw.cn/?url="},
	{name:"诺诺",src:"https://www.ckmov.com/?url="},
	{name:"诺讯",src:"https://www.nxflv.com/?url="},
	{name:"OK",src:"https://okjx.cc/?url="},
	{name:"PM",src:"https://www.playm3u8.cn/jiexi.php?url="},
	{name:"盘古",src:"https://www.pangujiexi.cc/jiexi.php?url="},
	{name:"奇米",src:"https://qimihe.com/?url="},
	{name:"七哥",src:"https://jx.mmkv.cn/tv.php?url="},
	{name:"全民",src:"https://jx.quanmingjiexi.com/?url="},
	{name:"SSAMAO",src:"https://www.ssamao.com/jx/?url="},
	{name:"思云",src:"https://jx.ap2p.cn/?url="},
	{name:"思古",src:"https://api.sigujx.com/?url="},
	{name:"思古2",src:"https://api.bbbbbb.me/jx/?url="},
	{name:"思古3",src:"https://jsap.attakids.com/?url="},
	{name:"淘电影",src:"https://jx.vodjx.top/vip/?url="},
	{name:"听乐",src:"https://jx.dj6u.com/?url=","t":"m"},
	{name:"维多",src:"https://jx.ivito.cn/?url="},
	{name:"虾米",src:"https://jx.xmflv.com/?url="},
	{name:"小蒋",src:"https://www.kpezp.cn/jlexi.php?url="},
	{name:"小狼",src:"https://jx.yaohuaxuan.com/?url="},
	{name:"星驰",src:"https://vip.cjys.top/?url="},
	{name:"月亮",src:"https://api.yueliangjx.com/?url="},
	{name:"云点播",src:"https://api.iopenyun.com:88/vip/?url="},
	{name:"云端",src:"https://jx.ergan.top/?url="},
	{name:"云析",src:"https://jx.yparse.com/index.php?url="},
	{name:"0523",src:"https://go.yh0523.cn/y.cy?url="},
	{name:"17云",src:"https://www.1717yun.com/jx/ty.php?url="},
	{name:"66",src:"https://api.3jx.top/vip/?url="},
	{name:"116",src:"https://jx.116kan.com/?url="},
	{name:"200",src:"https://vip.66parse.club/?url="},
	{name:"8090",src:"https://www.8090g.cn/?url="}

];
// 友情链接列表
const imgList = [
	{src:'/static/img/1905logo.png',url:'https://vip.1905.com/'},
	{src:'/static/img/acfun.png',url:'https://www.acfun.cn/'},
	{src:'/static/img/baofeng.png',url:'http://www.baofeng.com/'},
	{src:'/static/img/bilibili.png',url:'https://www.bilibili.com/'},
	{src:'/static/img/cntvlogo.png',url:'http://tv.cctv.com/'},
	{src:'/static/img/fengxing.png',url:'http://www.fun.tv/'},
	{src:'/static/img/hunantvlogo.png',url:'https://www.mgtv.com/'},
	{src:'/static/img/iqiyilogo.png',url:'http://www.iqiyi.com/'},
	{src:'/static/img/kankan.png',url:'http://www.kankan.com/'},
	{src:'/static/img/letvlogo.png',url:'http://www.le.com/'},
	{src:'/static/img/pptv.png',url:'http://www.pptv.com/'},
	{src:'/static/img/qqlogo.png',url:'https://v.qq.com/'},
	{src:'/static/img/sinalogo.png',url:'http://video.sina.com.cn/'},
	{src:'/static/img/sohulogo.png',url:'https://film.sohu.com/'},
	{src:'/static/img/tudoulogo.png',url:'https://www.tudou.com/'},
	{src:'/static/img/wasulogo.png',url:'https://www.wasu.cn/'},
	{src:'/static/img/yinyuetailogo.png',url:'http://www.yinyuetai.com/'},
	{src:'/static/img/youkulogo.png',url:'https://www.youku.com/'}
]
export default {  
    websiteUrl,
	pageUrl,
	htmlData,
	analysis,
	urlList,
	imgList
} 