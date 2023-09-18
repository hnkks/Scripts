/***********************************

> 应用名称：xxx
> 脚本作者：hnkks
> 解锁说明：本地vip
> 更新时间：2023-9-18
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/www\.xinxinzhuiju\.org\/userAssets\/detail url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/short.js

[mitm] 

hostname = www.xinxinzhuiju.org

***********************************/

var obj = JSON.parse($response.body);
obj.data.vipEndTime = 2043244800000;
obj.data.totalCoin = 999999;
obj.data.totalFreeUnlockNum = 999;
$done({body: JSON.stringify(obj)});
