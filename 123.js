/***********************************

> 应用名称：
> 脚本作者：hnkks
> 解锁说明：
> 更新时间：2023-8-
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/api\.hujuvod\.com\/user\/personal\/information url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/123.js


[mitm] 

hostname = api.hujuvod.com

***********************************/

var body = $response.body;
var url = $request.url;

if (url.indexOf('/ad/getAll') != -1) {
	var obj = JSON.parse(body);
	obj.data.adList = [];
	body = JSON.stringify(obj);
} else if (url.indexOf('/user/privilege/list') != -1) {
	var obj = JSON.parse(body);
	obj.data = [{
		"action": "play",
		"effectObject": "video",
		"id": 1,
		"function": "originalPainting",
		"func": "originalPainting",
		"endTime": 2043244800000,
		"description": "解锁原画",
		"icon": "jiesuoyuanhua"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 4,
		"function": "noLimit",
		"func": "noLimit",
		"endTime": 2043244800000,
		"description": "看剧无限制",
		"icon": "kanjuwuxianzhi"
	}, {
		"action": "play",
		"effectObject": "growth",
		"id": 37,
		"function": "0.4",
		"func": "0.4",
		"endTime": 2043244800000,
		"description": "看剧经验+40%",
		"icon": "jingyanzhijiacheng"
	}, {
		"action": "send",
		"effectObject": "danmu",
		"id": 43,
		"function": "superBarrageBlue",
		"func": "superBarrageBlue",
		"endTime": 2043244800000,
		"description": "超级弹幕",
		"icon": "chaojidanmu"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 23,
		"function": "noAd",
		"func": "noAd",
		"endTime": 2043244800000,
		"description": "看剧无广告",
		"icon": "kanjuwuguanggao"
	}];

}else if(url.indexOf('api.hujuvod.com') != -1){
	var obj = JSON.parse(body);

	obj.data['season']['feeMode'] = 'restriction';
}


body = JSON.stringify(obj);

$done({
	body
});
