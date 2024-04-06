/******************************
⚠️如果放远程，请把hundun.js替换成运程链接⚠️
🫧脚本名称:【hundun】4.17.1
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/course\.hundun\.cn\/.*?|^https?:\/\/user\.hundun\.cn\/.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/hundun.js


[mitm]
hostname = user.hundun.cn,course.hundun.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/\"play_tip_btn_msg\":\"\w+\"/g,'"play_tip_btn_msg":""');
body = body.replace(/\"expire_text\":\"\w+\"/g,'"expire_text":""');
body = body.replace(/\"play_tip_msg\":\"\w+.\w+\"/g,'"play_tip_msg":""');
body = body.replace(/\"share_title\":\"\w+\"/g,'"share_title":""');
body = body.replace(/\"playback_button\".+\"is_praise\"/g,'"is_praise"');
body = body.replace(/\"price\":\"\d\"/g,'"price":"0"');
body = body.replace(/\"can_view\":\d/g,'"can_view":1,');
body = body.replace(/\"can_learn\":\d/g,'"can_learn":1,');
body = body.replace(/\"is_unlock\":\d/g,'"is_unlock":1,');
body = body.replace(/\"unlocked\":false/g,'"unlocked":true');
body = body.replace(/\"allow_play\":\d/g,'"allow_play":1');
body = body.replace(/\"is_visible\".+\"will_expire_value\"/g,'"is_visible":0,"will_expire_value"');
body = body.replace(/\"free_trial\":\d/g,'"free_trial":0');
body = body.replace(/\"allow_play_title\":\"\w+\"/g,'"allow_play_title":""');
body = body.replace(/\"can_join_send_activity\":\d/g,'"can_join_send_activity":1,');
body = body.replace(/\"is_free\":\d/g,'"is_free":1,');
body = body.replace(/\"can_write_video_answer\":\d/g,'"can_write_video_answer":1,');
body = body.replace(/\"is_buy\":\d/g,'"is_buy":1');
body = body.replace(/\"is_free_4_user\":false/g,'"is_free_4_user":true');
body = body.replace(/\{.+\"update_app\".+\}/g,'{}');
body = body.replace(/\"expire_time\":\"\d\d\d\d-\d\d-\d\d\"/g,'"expire_time":"2099-01-01"');
body = body.replace(/\"free_trial_info\".+\"i18n_directory\"/g,'"i18n_directory"');
body = body.replace(/\"playback_button\".+\"relate_object\"/g,'"relate_object"');
$done(body);
