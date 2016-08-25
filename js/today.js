//老样子 获取元素
/*var div = document.getElementById('div');*/
var req = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mircosoft.XMLHTTP');
req.open('get', 'js/today.json', true);
req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
        var data = JSON.parse(req.responseText);
        // console.log(data)
        for (var k = 0; k < 12; k++) { //这是对 第一页 中的 num个元素 添加 json中的数据(默认样式)
            if (data[k]) {
                var today = document.getElementById('today');
                var oli = document.createElement('li');
                oli.innerHTML = "<img src=" + data[k].url + "><span>" + data[k].name + "</span><i>&yen;" + data[k].price1 + "</i><b>&yen;" + data[k].price2 + "</b>"
                today.appendChild(oli); //将子元素添加到div父元素中
            }
        }
    }
}
req.send(null);