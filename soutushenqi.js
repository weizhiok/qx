
/******************************
%¥
[rewrite_local]
^http?:\/\/wallpaper\.soutushenqi\.com\/api\/v?\/account\/token.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/soutushenqi.js


[mitm]
hostname = wallpaper.soutushenqi.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/vipType\":0/g,'vipType":1024');
$done(body);
