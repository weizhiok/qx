
/******************************
%¥
[rewrite_local]
^http?:\/\/wallpaper\.soutushenqi\.com\/.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/soutushenqi.js


[mitm]
hostname = wallpaper.soutushenqi.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/vipType\": 0/g,'vipType": 1024');
body = body.replace(/\"普通用户\"/g,'"VIP"');
$done(body);
