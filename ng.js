/***********************************

> 应用名称：ng
> 脚本作者：hnkks
> 解锁说明：不可描述，懂的都懂
> 更新时间：2023-8-31
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/open-secret-api-v2\.vcinema\.cn\/v5\.0\/user\/v2\/18848578 url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/ng.js

[mitm] 

hostname = open-secret-api-v2.vcinema.cn

***********************************/

let obj = JSON.parse($response.body);
obj.data.user_vip_end_date = 2024.10.1;
obj.data.is_get = true;
obj.data.get = true;
$done({body: JSON.stringify(obj)});
