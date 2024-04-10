/******************************
%¥
[rewrite_local]
^https?:\/\/userapi\.edrawsoft.*\/mindmaster.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/EdwarMind.js


[mitm]
hostname = userapi.edrawsoft.com,userapi.edrawsoft.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/19\d\d-\d\d-\d\d/g,'2099-01-01');
body = body.replace(/\"fuser\":false/g,'"fuser":true');
body = body.replace(/\"license\":false/g,'"license":true');
$done(body);
