/******************************
⚠️如果放远程，请把EdwarMind.js替换成运程链接⚠️
*******************************
%¥
[rewrite_local]
^https?:\/\/userapi\.edrawsoft\.com\/api\/user\/*.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/EdwarMind.js


[mitm]
hostname = userapi.edrawsoft.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/1970-01-01/g,'2099-01-01');
body = body.replace(/\"fuser\"\:false/g,'"fuser":true');
body = body.replace(/\"license\"\:false/g,'"license":true');
body = body.replace(/1900-01-01/g,'2099-01-01');
$done(body);
