/***********************************

> 应用名称：boli
> 脚本作者：hnkks
> 解锁说明：不可描述，懂的都懂
> 更新时间：2023-9-2
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]
  
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/hnkks/Scripts/main/1.js

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
modifiedHeaders['Cookie'] = '_uuid=07F768EF-899E-BD3D-C087-A02C2C178A1009555infoc; b_nut=1692319710; buvid3=DD82AACE-AA5F-5226-465B-3E4BFF650E0310150infoc; buvid4=A3774072-91A2-3436-6A0C-C9D03349564910150-023081808-HNYvTHSPdBT44sE8h9iRnAp%2Bj%2FkCHTX3C%2Bd44kn8wfpXIL6qqXO%2BYQ%3D%3D; buvid_fp=a45185875f475ea116b1572435dcc8d7; Buvid=Y8407682B61BAAC14CD394C0DD0885861B4A; SESSDATA=bcbafdbc%2C1709094622%2Ca5883792jfeOoYKokIQgwDj4klSxri_DFtr9Uo2LRQXu3BEKVAMGNz8n55UM6rs-Sai0LpVFfdBk6wAARQA; DedeUserID=455653269; DedeUserID__ckMd5=8c88b9029bd46c36; bili_jct=bf3aee6678e88d83aaf2a2e5626c7b18; sid=f04uwnm7';
$done({'headers': modifiedHeaders});
