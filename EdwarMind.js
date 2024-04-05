/******************************
⚠️如果放远程，请把EdrawMind.js替换成运程链接⚠️
🫧脚本名称:【EdrawMind】
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/user\.edrawsoft\.com\/.*?|^https?:\/\/userapi\.edrawsoft\.com\/.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/EdwarMind.js


[mitm]
hostname = user.edrawsoft.com,userapi.edrawsoft.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/19\d\d-\d\d-\d\d/g,'2099-01-01');
body = body.replace(/\"fuser\":false/g,'"fuser":true');
body = body.replace(/\"license\":false/g,'"license":true');
$done(body);
