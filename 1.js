/***********************************

> 应用名称：boli
> 脚本作者：hnkks
> 解锁说明：不可描述，懂的都懂
> 更新时间：2023-9-2
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]
  
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/hnkks/Quantumult-X/main/1.js

[mitm] 

hostname = *.biliapi.*, *.bilibili.*

***********************************/

var modifiedHeaders = $request['headers'];
modifiedHeaders['buvid'] = 'Y8407682B61BAAC14CD394C0DD0885861B4A';
modifiedHeaders['x-bili-metadata-bin'] = 'CmtmNTkxNTMzNTlmY2E1OWIyM2JkODRkZWNiNjVkMmY5MmpmZU9vWUtva0lRZ3dEajRrbFN4cmlfREZ0cjlVbzJMUlFYdTNCRUtWQU1HTno4bjU1VU02cnMtU2FpMExwVkZmZEJrNndBQVJRQRIGaXBob25lGgNwYWQgxPW2IyoFYXBwbGUyJFk4NDA3NjgyQjYxQkFBQzE0Q0QzOTRDMEREMDg4NTg2MUI0QToDaW9z';
modifiedHeaders['User-Agent'] = 'bili-universal/74300100 os/ios model/iPad 9G mobi_app/iphone osVer/16.6 network/2';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCDUwYjZkNmFj';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-trace-id'] = '2d3b6f1475d95132216bf13da764f30b:216bf13da764f30b:0:0';
modifiedHeaders['Authorization'] = 'identify_v1 f59153359fca59b23bd84decb65d2f92jfeOoYKokIQgwDj4klSxri_DFtr9Uo2LRQXu3BEKVAMGNz8n55UM6rs-Sai0LpVFfdBk6wAARQA';
modifiedHeaders['x-bili-device-bin'] = 'CAEQxPW2IxokWTg0MDc2ODJCNjFCQUFDMTRDRDM5NEMwREQwODg1ODYxQjRBIgZpcGhvbmUqA2lvczIDcGFkOgVhcHBsZUIFQXBwbGVKB2lQYWQgOUdSBDE2LjZqBjcuNDMuMHJANTlBNTc0Q0QwNzExQkVDQ0M5NUFENTA5MkQ2NDg1N0IyMDIyMTAwMzIxMzMyNzQ1MkY5OUU0MUYyNUIzRDNGRXj4n/GwoDE=';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['SESSDATA'] = '=bcbafdbc%2C1709094622%2Ca5883792jfeOoYKokIQgwDj4klSxri_DFtr9Uo2LRQXu3BEKVAMGNz8n55UM6rs-Sai0LpVFfdBk6wAARQA';
$done({'headers': modifiedHeaders});
