/***********************************

> 应用名称：
> 脚本作者：hnkks
> 解锁说明：
> 更新时间：2023-8-
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/api\.hujuvod\.com(\/user\/personal\/information|\/ad\/getAll|\/drama\/detail) url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/123.js


[mitm] 

hostname = *.hujuvod.*

***********************************/

var body = $response.body;
var url = $request.url;

if (url.indexOf('/user/personal/information') != -1) {
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
	}];

}else if(url.indexOf('/drama/detail') != -1){
	var obj = JSON.parse(body);

	obj.data['season']['feeMode'] = 'restriction';
}


body = JSON.stringify(obj);

$done({
	body
});
