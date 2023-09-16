/***********************************

> 应用名称：简讯
> 脚本作者：hnkks
> 解锁说明：本地vip
> 更新时间：2023-9-16
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/jx.js

[mitm] 

hostname = api.tipsoon.com

***********************************/

var obj = JSON.parse($response.body);
obj.data.is_vip = ture;
obj.data.vip_expire_time = "9999-99-99 00:00:00";
$done({body: JSON.stringify(obj)});
