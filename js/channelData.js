// 频道数据模块 - 包含从zjyd.m3u提取的频道列表
App.ChannelData = (function ChannelData() {
    // 频道数据数组
    var channelData = [
  {"name":"浙江经济ZJJJ","url":"https://ali-m-l.cztv.com/channels/lantian/channel003/1080p.m3u8","group":"本地频道","logo":"https://livecdn.zbds.top/logo/ 浙江经济.png"},
  {"name":"浙江教科ZJJK","url":"https://ali-m-l.cztv.com/channels/lantian/channel004/1080p.m3u8","group":"本地频道","logo":"https://livecdn.zbds.top/logo/ 浙江教科.png"},
  {"name":"浙江民生ZJMS","url":"https://ali-m-l.cztv.com/channels/lantian/channel006/1080p.m3u8","group":"本地频道","logo":"https://livecdn.zbds.top/logo/ 浙江民生.png"},
  {"name":"浙江新闻ZJXX","url":"https://ali-m-l.cztv.com/channels/lantian/channel007/1080p.m3u8","group":"本地频道","logo":"https://livecdn.zbds.top/logo/ 浙江新闻.png"},
  {"name":"浙江少儿ZJSE","url":"https://ali-m-l.cztv.com/channels/lantian/channel008/1080p.m3u8","group":"本地频道","logo":"https://livecdn.zbds.top/logo/ 浙江少儿.png"},
  {"name":"浙江国际ZJGJ","url":"https://ali-m-l.cztv.com/channels/lantian/channel010/1080p.m3u8","group":"本地频道","logo":"https://livecdn.zbds.top/logo/ 浙江国际.png"},
  {"name":"之江纪录ZJJL","url":"https://ali-m-l.cztv.com/channels/lantian/channel012/1080p.m3u8","group":"本地频道","logo":"https://livecdn.zbds.top/logo/ 之江纪录.png"},
  {"name":"CCTV1","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228318/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV1.png"},
  {"name":"CCTV2","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236163/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV2.png"},
  {"name":"CCTV3","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230740/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV3.png"},
  {"name":"CCTV4","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236258/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV4.png"},
  {"name":"CCTV5","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229687/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV5.png"},
  {"name":"CCTV5+","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228372/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV5+.png"},
  {"name":"CCTV6","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230685/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV6.png"},
  {"name":"CCTV7","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228330/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV7.png"},
  {"name":"CCTV8","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236211/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV8.png"},
  {"name":"CCTV9","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228342/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV9.png"},
  {"name":"CCTV10","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228327/42329182.smil/index.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV10.png"},
  {"name":"CCTV11","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236216/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV11.png"},
  {"name":"CCTV12","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228312/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV12.png"},
  {"name":"CCTV13 4M1080","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230877/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV13  4M1080.png"},
  {"name":"CCTV13","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236169/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV13.png"},
  {"name":"CCTV14","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230701/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV14.png"},
  {"name":"CCTV17","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229762/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV17.png"},
  {"name":"CCTV15","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230658/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV15.png"},
  {"name":"CCTV16","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236181/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV16.png"},
  {"name":"CCTV4K","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229373/01.m3u8?fmt=ts2hls","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CCTV4K.png"},
  {"name":"CGTN-记录Re","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236205/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CGTN- 记录.png"},
  {"name":"CGTN-俄语RU","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236228/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CGTN- 俄语.png"},
  {"name":"CGTN-西语W","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236235/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CGTN- 西语.png"},
  {"name":"CGTN-法语FR","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236288/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CGTN- 法语.png"},
  {"name":"CGTN-阿语AR","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236290/index.m3u8","group":"央视频道","logo":"https://livecdn.zbds.top/logo/CGTN- 阿语.png"},
  {"name":"凤凰中文FHZW","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236260/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 凤凰中文.png"},
  {"name":"凤凰资讯FHZX","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236197/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 凤凰资讯.png"},
  {"name":"天津卫视TianJin","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228320/01.m3u8?fmt=ts2hls","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 天津卫视.png"},
  {"name":"浙江卫视ZheJiang","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228324/01.m3u8?fmt=ts2hls","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 浙江卫视.png"},
  {"name":"东南卫视DongNan","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236151/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 东南卫视.png"},
  {"name":"兵团卫视BingTuan","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236191/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 兵团卫视.png"},
  {"name":"甘肃卫视GangNan","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236201/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 甘肃卫视.png"},
  {"name":"宁夏卫视NingXia","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236209/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 宁夏卫视.png"},
  {"name":"新疆卫视XinJiang","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236215/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 新疆卫视.png"},
  {"name":"河南卫视HeNan","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236218/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 河南卫视.png"},
  {"name":"延边卫视YanBian","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236229/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 延边卫视.png"},
  {"name":"厦门卫视XianMen","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236231/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 厦门卫视.png"},
  {"name":"海南卫视HaiNan","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236232/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 海南卫视.png"},
  {"name":"云南卫视YunNan","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236234/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 云南卫视.png"},
  {"name":"贵州卫视GuiZhou","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236236/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 贵州卫视.png"},
  {"name":"河北卫视HeBei","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236242/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 河北卫视.png"},
  {"name":"青海卫视QingHai","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236252/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 青海卫视.png"},
  {"name":"四川卫视SiChuan","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236255/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 四川卫视.png"},
  {"name":"广西卫视GuangXi","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236263/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 广西卫视.png"},
  {"name":"山西卫视ShanXi","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236264/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 山西卫视.png"},
  {"name":"吉林卫视Jilin","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236268/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 吉林卫视.png"},
  {"name":"内蒙古卫视NeiMengGu","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236270/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 内蒙古卫视.png"},
  {"name":"大湾区卫视DaWanQu","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236327/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 大湾区卫视.png"},
  {"name":"陕西卫视ShanXi","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236370/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 陕西卫视.png"},
  {"name":"海峡卫视HaiXia","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236416/index.m3u8","group":"卫视频道","logo":"https://livecdn.zbds.top/logo/ 海峡卫视.png"},
  {"name":"Hot风尚音乐Music","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228344/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 风尚音乐.png"},
  {"name":"Hot精品剧场Drama","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228360/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 精品剧场.png"},
  {"name":"Hot亚洲影院Asia","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228365/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 亚洲影院.png"},
  {"name":"Hot欧美影院Euro","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228384/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 欧美影院.png"},
  {"name":"Hot少儿动漫Child","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228387/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 少儿动漫.png"},
  {"name":"Hot电子竞技Game","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228572/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 电子竞技.png"},
  {"name":"Hot高清娱乐HD","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228575/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 高清娱乐.png"},
  {"name":"Hot炫动3D","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228578/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 炫动3D.png"},
  {"name":"Hot漫游世界Cartoon","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228581/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Hot 漫游世界.png"},
  {"name":"iHot爱浪漫love","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230005/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱浪漫.png"},
  {"name":"iHot爱科幻Scifi","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230025/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱科幻.png"},
  {"name":"iHot爱院线Cinema","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230019/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱院线.png"},
  {"name":"iHot爱喜剧Comedy","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230022/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱喜剧.png"},
  {"name":"iHot爱赛车Race","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230032/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱赛车.png"},
  {"name":"iHot爱旅行Travel","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230052/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱旅行.png"},
  {"name":"iHot爱谍战Spy","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230092/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱谍战.png"},
  {"name":"iHot爱悬疑Suspect","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230098/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱悬疑 7.5M1080.png"},
  {"name":"iHot爱历史History","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230100/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱历史 7.5M1080.png"},
  {"name":"iHot爱经典Classic","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230101/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱经典 7.5M1080.png"},
  {"name":"iHot爱体育Sport","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230103/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/iHot 爱体育 7.5M1080.png"},
  {"name":"爱科学Science","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221235603/1/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/ 爱科学.png"},
  {"name":"爱奇谈Talk","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221235605/1/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/ 爱奇谈.png"},
  {"name":"爱幼教Education","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221235622/1/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/ 爱幼教.png"},
  {"name":"爱玩具Toy","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221235626/1/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/ 爱玩具.png"},
  {"name":"爱动漫Anime","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221235628/1/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/ 爱动漫.png"},
  {"name":"重温经典Classic","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236436/1/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/ 重温经典.png"},
  {"name":"SiTV都市剧场","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229280/01.m3u8?fmt=ts2hls","group":"数字频道","logo":"https://livecdn.zbds.top/logo/SiTV 都市剧场.png"},
  {"name":"Drama","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236208/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Drama.png"},
  {"name":"Movie","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236157/index.m3u8","group":"数字频道","logo":"https://livecdn.zbds.top/logo/Movie.png"},
  {"name":"江苏优漫卡通JiangsuYouman","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228378/01.m3u8?fmt=ts2hls","group":"儿童频道","logo":"https://livecdn.zbds.top/logo/ 江苏优漫卡通.png"},
  {"name":"优漫卡通YoumanCartoon","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228378/1/01.m3u8?fmt=ts2hls","group":"儿童频道","logo":"https://livecdn.zbds.top/logo/ 优漫卡通.png"},
  {"name":"广东嘉佳卡通JialeCartoon","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228593/01.m3u8?fmt=ts2hls","group":"儿童频道","logo":"https://livecdn.zbds.top/logo/ 广东嘉佳卡通.png"},
  {"name":"嘉佳卡通JiaJia","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228593/1/01.m3u8?fmt=ts2hls","group":"儿童频道","logo":"https://livecdn.zbds.top/logo/ 嘉佳卡通.png"},
  {"name":"SiTV游戏风云Game","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229320/01.m3u8?fmt=ts2hls","group":"儿童频道","logo":"https://livecdn.zbds.top/logo/SiTV 游戏风云.png"},
  {"name":"金牌综艺GoldVariety","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236282/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 金牌综艺.png"},
  {"name":"军旅剧场MilitaryTheater","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236278/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 军旅剧场.png"},
  {"name":"精品记录JingPinJilu","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236276/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 精品记录.png"},
  {"name":"中国功夫ChineseKungFu","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236267/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 中国功夫.png"},
  {"name":"黑莓动画BlackBerryAnimation","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236261/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 黑莓动画.png"},
  {"name":"黑莓电影BlackBerryFilm","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236248/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 黑莓电影.png"},
  {"name":"武搏天下WubaoXian","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236247/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 武搏天下.png"},
  {"name":"古装剧场GuanYuTheater","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236240/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 古装剧场.png"},
  {"name":"精品大剧DaJu","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236239/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 精品大剧.png"},
  {"name":"炫舞未来Dance","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236230/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 炫舞未来.png"},
  {"name":"农业致富AgriculturalRich","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236233/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 农业致富.png"},
  {"name":"惊悚悬疑Thriller","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236223/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 惊悚悬疑.png"},
  {"name":"哒波赛事DabaoMatch","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236207/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 哒波赛事.png"},
  {"name":"家庭剧场FamilyTheater","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236206/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 家庭剧场.png"},
  {"name":"热播精选HotSelection","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236204/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 热播精选.png"},
  {"name":"动作电影ActionFilm","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236183/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 动作电影.png"},
  {"name":"爱情喜剧LoveComedy","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236179/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 爱情喜剧.png"},
  {"name":"欢乐剧场HappyTheater","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236173/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 欢乐剧场.png"},
  {"name":"潮婆辣妈ChaoPoLaMa","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236167/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 潮婆辣妈.png"},
  {"name":"军事评论MilitaryComment","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236155/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 军事评论.png"},
  {"name":"怡伴健康YibanHealth","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236220/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 怡伴健康.png"},
  {"name":"精品体育JingPinSports","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221236300/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 精品体育.png"},
  {"name":"咪咕体育MigubSports","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221235589/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 咪咕体育.png"},
  {"name":"咪咕足球MigubFootball","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221235583/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 咪咕足球UD.png"},
  {"name":"咪咕视频MigubVideo","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221235569/index.m3u8","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 咪咕视频.png"},
  {"name":"咪咕直播MigubLive","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221232657/1/index.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 咪咕直播.png"},
  {"name":"移动高清电视MobileHDTV","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229434/1/index.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 移动高清电视.png"},
  {"name":"移动轮播MobileCarousel","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229434/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 移动轮播.png"},
  {"name":"华数e购MobileECommerce","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228564/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 华数e购.png"},
  {"name":"华数HuaShu","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228564/42329182.smil/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 华数.png"},
  {"name":"都市剧场CityTheaterFilm","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229280/1/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 都市剧场.png"},
  {"name":"游戏风云GameFan","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229320/1/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 游戏风云.png"},
  {"name":"湖南茶频道HunanTeaChannel","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229404/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 湖南茶频道.png"},
  {"name":"茶频道TeaChannel","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229404/1/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 茶频道.png"},
  {"name":"Y+频道YPlusChannel","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229999/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/Y+ 频道.png"},
  {"name":"Y+4K","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229999/1/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/Y+.png"},
  {"name":"欢笑剧场HuanXiao4K","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221230782/1/index.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 欢笑剧场4K.png"},
  {"name":"求索记录SearchRecord4K","url":"http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221232776/1/01.m3u8?fmt=ts2hls","group":"其他频道","logo":"https://livecdn.zbds.top/logo/ 求索记录4K.png"}
];
    
    // 过滤掉URL为空的频道
    var validChannels = [];
    for (var i = 0; i < channelData.length; i++) {
        var channel = channelData[i];
        if (channel.url && channel.url.trim() !== '') {
            validChannels.push(channel);
        }
    }
    
    // 确保validChannels至少有一些数据
    if (validChannels.length === 0) {
        console.warn('原始channelData数组中没有有效频道，使用默认频道数据');
        validChannels = channelData.slice(0, 5); // 使用前5个频道作为默认数据
    }
    
    console.log('有效频道数量:', validChannels.length);
    
    // 暴露获取频道列表的方法
    return {
        getChannels: function() {
            console.log('调用getChannels方法，返回频道数量:', validChannels.length);
            return validChannels;
        },
        
        // 根据分组获取频道
        getChannelsByGroup: function(groupName) {
            var result = [];
            for (var i = 0; i < validChannels.length; i++) {
                var channel = validChannels[i];
                if (channel.group === groupName) {
                    result.push(channel);
                }
            }
            return result;
        },
        
        // 获取所有分组
        getGroups: function() {
            var groups = [];
            var groupSet = {};
            
            for (var i = 0; i < validChannels.length; i++) {
                var channel = validChannels[i];
                if (!groupSet[channel.group]) {
                    groupSet[channel.group] = true;
                    groups.push(channel.group);
                }
            }
            
            return groups;
        },
        
        // 额外导出原始channelData数组用于调试
        _channelData: channelData
    };
}());