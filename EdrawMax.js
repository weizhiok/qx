/******************************
%¥
[rewrite_local]
^https?:\/\/userapi\.edrawsoft.*\/api\/user\/\d+\/subscription\/max\?.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/EdrawMax.js
# 关闭试用横幅
^https?:\/\/userapi\.edrawsoft.*\/api\/member\/\d+\/sales\/plan\?.*? url reject-200

[mitm]
hostname = userapi.edrawsoft.com,userapi.edrawsoft.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/\{\"status\"\:\"success\"\,\"data\"\:(null|\{\").+\"msg\"\:(null|\d)\}/g,'{"status":"success","data":{"exp":4070883661000,"mobile_exp":4070883661000,"online_exp":4070883661000,"win_exp":4070883661000,"mac_exp":4070883661000,"linux_exp":4070883661000,"group":true,"is_sub_vip":true,"version":1,"fuser":true,"platform_fuser":true,"now":1704042061000},"msg":2}');
$done(body);
