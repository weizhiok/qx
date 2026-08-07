/**********************************
脚本功能：菜谱大全-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：需登录
使用声明：️仅供学习交流
***********************************
[rewrite_local]
^https:\/\/apiios_dq\.xiangha\.com\/v4\/(user\/getUserData|dish\/info) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/cpdq.js
[mitm] 
hostname = apiios_dq.xiangha.com
*******************************/
let obj = JSON.parse($response.body);

if($request.url.indexOf("user\/getUserData") != -1){
  obj.data.data = {
    ...obj.data.data,
    "vip" : {
      "is_open_vip" : 1,
      "is_vip" : 2
    }
  }
}else{
   obj.data.power = {}

}

$done({body: JSON.stringify(obj)});
