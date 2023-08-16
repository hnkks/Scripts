/***********************************

> 应用名称：ydy
> 脚本作者：hnkks
> 解锁说明：xx
> 更新时间：2023-8-14
> 特别说明：本脚本仅供群友学习交流使用，禁止转载售卖
          
[rewrite_local]
  
^http[s]?:\/\/note\.youdao\.com\/yws/(mapi/payment|api/self) url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/test.js

[mitm] 

hostname = note.youdao.com

***********************************/

  const path1 = "/api/self";
  const path2 = "/mapi/payment";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.vip = true,
obj.properties.FEED_BACK_ID = 1,
obj.properties.isvip = true
}
if ($request.url.indexOf(path2) != -1){
  obj.service = 1,
  obj.payYear = true,
  obj.end = 1867248816000
 }
$done({body: JSON.stringify(obj)});
