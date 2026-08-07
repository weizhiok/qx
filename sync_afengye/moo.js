/**********************************
脚本功能：Moo日记-解锁部分专业版功能
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：无
使用声明：️仅供学习交流
***********************************
[rewrite_local]
^https:\/\/diary\.aiyouaiyou\.cn\/account\/api\/user\/userInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/moo.js
[mitm] 
hostname = diary.aiyouaiyou.cn
*******************************/
let obj = JSON.parse($response.body);

obj.returnJSON = {
    ...obj.returnJSON,
    "userType" : 2,
    "proType" : 1
}

$done({body: JSON.stringify(obj)});
