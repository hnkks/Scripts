/***********************************

> 应用名称：kuwo
> 脚本作者：hnkks
> 解锁说明：不可描述，懂的都懂
> 更新时间：2023-8-26
> 特别说明：脚本仅供学习交流使用，禁止转载售卖
          
[rewrite_local]

^http[s]?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/hnkks/Scripts/main/kuwo.js

[mitm] 

hostname = vip1.kuwo.cn

***********************************/
