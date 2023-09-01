/***********************************

> 应用名称：manhuatai
> 脚本作者：hnkks
> 解锁说明：不可描述，懂的都懂
> 更新时间：2023-9-1
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/api-cdn\.kaimanhua\.com\/kanmanapi\/user\/user\/\?client-version=3\.3\.0&examine_info=1&ismhtlite=1&myuid=87738533&openid=14444473_470C769B223224BA5B34F0A9FEF60719&platformname=ipad&productname=mht&type=mkxq url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/mht.js

[mitm] 

hostname = api-cdn.kaimanhua.com

***********************************/

var obj = JSON.parse($response.body);
obj.status = 0;
obj.data.is_year_vip = 1;
obj.data.vipoverday = 1;
obj.data.isvip = 1;
obj.data.coin = 99999999;
obj.data.Cgold = 99999999;
$done({body: JSON.stringify(obj)});
