/***********************************

> 测试脚本

          
[rewrite_local]

^http[s]?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/112.js

[mitm] 

hostname = p.du.163.com

***********************************/

let obj = JSON.parse($response.body);

obj.tradeEndTime = 458503762700

$done({body: JSON.stringify(obj)});
