/***********************************

> 应用名称：djdq
> 脚本作者：hnkks
> 解锁说明：不可描述，懂的都懂
> 更新时间：2023-8-31
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/iosshortplay\.sanwubeixin\.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/dj.js

[mitm] 

hostname = iosshortplay.sanwubeixin.cn

***********************************/

let obj = JSON.parse($response.body);
obj.data.isVip = true;
obj.data.vip_time = 2043244800000;
$done({body: JSON.stringify(obj)});
