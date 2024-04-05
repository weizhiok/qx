/******************************
⚠️如果放远程，请把hundun.js替换成运程链接⚠️
🫧脚本名称:【hundun】4.17.1
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/user\.hundun\.cn\.*?|https?:\/\/course\.hundun\.cn\.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/hundun.js

[mitm]
hostname = user.hundun.cn,course.hundun.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/\{.+\"update_app\".+\}/g,'{}');
$done(body);
