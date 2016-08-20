//创建cookie
function setCookie(name, value, e_day) {
    var c_date = new Date();
    c_date.setDate(c_date.getDate() + e_day)
    document.cookie = name + '=' + escape(value) + (e_day ? ';expires=' + c_date.toString() : null);

}
//获取cookie
function getCookie(name) {
    var coo = document.cookie;
    var start = coo.indexOf(name + '=');
    var end = coo.indexOf(';', start);
    if (end == -1) {
        end = coo.length;
    }
    var len = name.length + 1;
    var p = coo.substring(start + len, end);
    var result = unescape(p);
    return result;
}
//清空cookie
function cleanCookie(name) {
    setCookie(name, '', -1)
}