/******************************
脚本功能：小白记账-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：无
使用声明：️仅供学习交流
*******************************
[rewrite_local]
^https:\/\/record-api\.cykmi\.com\/api\/user\/my_info(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xbjz.js
[mitm] 
hostname = record-api.cykmi.com
*******************************/
let obj = JSON.parse($response.body);

obj.data.user = {
    ...obj.data.user,
    "vip_level" : 1,
    "vip_et" : 32472115200,
    "vip_end_date" : "2999-01-01"
}

$done({body: JSON.stringify(obj)});
