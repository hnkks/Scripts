/***********************************

> 应用名称：zymk
> 脚本作者：hnkks
> 解锁说明：不可描述，懂的都懂
> 更新时间：2023-8-26
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/apigate\.kaimanhua\.com\/(zymk-getuserinfo-api\/v1\/getuserinfo|zymk-userpurchased-api\/v1\/userpurchased\/paychapters)\/ url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/zymk.js

[mitm] 

hostname = apigate.kaimanhua.com

***********************************/

var obj = JSON.parse($response.body);
obj.status = 0;
obj.data.isvip = 1;
obj.data.Uviptime = 2043244800000;
obj.data.coins = 999999;
obj.data.Cgold = 999999;
$done({body: JSON.stringify(obj)});
