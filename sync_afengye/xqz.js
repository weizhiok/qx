/******************************
脚本功能：小青账-解锁永久会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：需登录
使用声明：️仅供学习交流
*******************************
[rewrite_local]
^https:\/\/api\.bill\.youqian\.pro\/vip-server\/vip\/userVipList url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xqz.js
[mitm] 
hostname = api.bill.youqian.pro
*******************************/
let obj = JSON.parse($response.body);

obj.data = [
    {
      "expireTime" : "2999-01-01 00:00:00",
      "remainingDays" : 99999,
      "type" : "OFFICIAL",
      "isPermanent" : true,
      "isOverdue" : false,
    }
]

$done({body: JSON.stringify(obj)});
