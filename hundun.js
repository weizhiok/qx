/******************************
⚠️如果放远程，请把hundun.js替换成运程链接⚠️
🫧脚本名称:【hundun】4.17.1
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/user\.hundun\.cn\/.*?|https?:\/\/course\.hundun\.cn\/.*? url script-response-body https://raw.githubusercontent.com/weizhiok/qx/main/hundun.js


[mitm]
hostname = user.hundun.cn,course.hundun.cn
%¥
*******************************/
var body = $response.body;
var obj = JSON.parse(body);

// 修改数据字段
obj.play_tip_btn_msg = "";
obj.expire_text = "";
obj.play_tip_msg = "";
obj.share_title = "";
obj.price = "0";
obj.can_view = 1;
obj.can_learn = 1;
obj.is_unlock = 1;
obj.unlocked = true;
obj.allow_play = 1;
obj.free_trial = 0;
obj.allow_play_title = "";
obj.can_join_send_activity = 1;
obj.can_write_video_answer = 1;
obj.is_buy = 1;
obj.is_free_4_user = true;
obj.expire_time = "2099-01-01";
// 重写响应体
$done({ body: JSON.stringify(obj) });

