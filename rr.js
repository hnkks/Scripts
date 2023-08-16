/***********************************

> 应用名称：人人为我
> 脚本作者：hnkks
> 解锁说明：淦它！
> 更新时间：2023-8-16
> 特别说明：本脚本仅供群友学习交流使用，禁止转载售卖

[rewrite_local]

^http[s]?:\/\/api\.hujuvod\.com\/user\/personal\/information url script-response-body 

[mitm] 

api.hujuvod.com

***********************************/

var body = $response.body.replace(/expiredTime":\d+/g,'expiredTime":11')
.replace(/valid":\w+/g,'valid":true')
.replace(/endTime":".*?"/g,'endTime":"9999-11-15 11:55:06"')
$done({ body });
