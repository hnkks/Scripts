
/***********************************

> 应用名称：xxx
> 脚本作者：hnkks
> 解锁说明：本地vip
> 更新时间：2023-9-18
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/iosshortplay\.sanwubeixin\.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/short.js

[mitm] 

hostname = iosshortplay.sanwubeixin.cn

***********************************/

var obj = JSON.parse($response.body);
obj.data.isVip = true;
obj.data.vip_time = 2043244800000;
obj.data.vip_type = 0;
$done({body: JSON.stringify(obj)});
