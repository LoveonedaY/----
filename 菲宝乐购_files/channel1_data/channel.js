
var aFxDate=['无持续风向','东北风','东风','东南风','南风','西南风','西风','西北风','北风','旋转风'];var aFlDate=['微风','3-4级','4-5级','5-6级','6-7级','7-8级','8-9级','9-10级','10-11级','11-12级'];var aWeather=['晴','多云','阴','阵雨','雷阵雨','冰雹','雨夹雪','小雨','中雨','大雨','暴雨','大暴雨','特大暴雨','阵雪','小雪','中雪','大雪','暴雪','雾','冻雨','沙尘暴','小到中雨','中到大雨','大到暴雨','暴雨到大暴雨','大暴雨到特大暴雨','小到中雪','中到大雪','大到暴雪','浮尘','扬沙','强沙尘暴','','','','','','','','','','','','','','','','','','','','','','霾'];var arrzhishus=['ag','cl','lk','yh','uv','ls','mf','pj','tr','yd','hc','ac','ct','gj','ys','nl','pk','zs','xc','co','dy','fs','gm','jt','xq','pl','pp'];var arrzhishunames=['息斯敏过敏指数','晨练指数','路况指数','约会指数','紫外线强度指数','晾晒指数','美发指数','啤酒指数','旅游指数','运动指数','划船指数','空调开启指数','穿衣指数','逛街指数','雨伞指数','夜生活指数','放风筝指数','中暑指数','洗车指数','舒适度指数','钓鱼指数','防晒指数','感冒指数','交通指数','心情指数','空气污染扩散条件指数','化妆指数'];String.format=function(){if(arguments.length==0)
return null;var str=arguments[0];for(var i=1;i<arguments.length;i++){var re=new RegExp('\\{'+(i-1)+'\\}','gm');str=str.replace(re,arguments[i]);}
return str;}
function getzsname(enname){for(var i=0;i<arrzhishus.length;i++){if(arrzhishus[i]==enname)return arrzhishunames[i];}}
function GetIntValue(vlu){var rtnforthiskey=parseInt(vlu);if(isNaN(rtnforthiskey)){rtnforthiskey=0;}
return rtnforthiskey;}
function GetWeatherImgName(name,j){var specialtubiao="00,01,03,13,18";var folder="qixiang/";var suffix=getsuffix();var dayornight=j%2==1?"day_":"night_";if(specialtubiao.indexOf(name)>=0){if(new Date().getHours()>=6&&new Date().getHours()<=18)return folder+dayornight+name+suffix;else return folder+dayornight+name+suffix;}else{return folder+name+suffix;}}
function getsuffix(){return getIEVersion()==6?".gif":".png";;}
function getIEVersion(){var ua=navigator.userAgent;var b=ua.indexOf("MSIE ");if(b<0){return 0;}
return parseFloat(ua.substring(b+5,ua.indexOf(";",b)));}
function toDecimal(x){var f=parseFloat(x);if(isNaN(f)){return;}
f=Math.round(x*100)/100;return f;}
var gdyjimgs=['00','02','07','10','12','14','13','04','05','','10'];function getyjimg(st,sl,province){if(province=="广东"){for(var i=0;i<gdyjimgs.length;i++){}}else{return"yujing/"+st+"-"+sl+".png";}}
function getsdimg(sd){var value=GetIntValue(sd.replace("%",""));var img='';if(value>50)
img="more50"+getsuffix();else if(value<50)
img="less50"+getsuffix();else
img="50"+getsuffix();return"shidu/"+img;}
function substring(str,len){if(str&&str.length>=len)
return str.substring(0,len)+"...";else
return str;}