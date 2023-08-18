/***********************************

> 应用名称：wyyds
> 脚本作者：hnkks
> 解锁说明：本地VIP
> 更新时间：2023-8-18
> 特别说明：本脚本仅供群友学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/wyyds.js

[mitm] 

hostname = p.du.163.com

***********************************/

let obj = JSON.parse($response.body);

obj.tradeEndTime = 3585037627000

$done({body: JSON.stringify(obj)});
