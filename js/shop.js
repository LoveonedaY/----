 $(document).ready(function () {
     if (document.cookie) {
         var msg = $.cookie();
         var reg = /^clother/;
         //数据cookie的获得
         $.each(msg, fn);
         //点击刷新商品数量
         $('#table .num div').click(function () {
             var num = ($('#table .num>input').val()) * ($('#table .price').html().substring(1));
             $('#table .sum').html("&yen;" + num + ".00");
             $('#em_1,#em_2').html("&yen;" + num + ".00");
         });
         //显示价格
         $('#em_1,#em_2').html($('#table .sum').html());
         //移除数据
         $('#table .remove div').click(function () {
             $('#table .tr,#em_1,#em_2').empty();
             $.cookie('clother', '', {
                 expires: -3
             })

         })

         //调用的函数
         function fn(key, items) {
             if (reg.test(key) == true) {
                 var val = eval('(' + items + ')');
                 $('#table table').append('<tr class="tr"><td id="picture"><img src=' + val.url + '></td><td id="msg"><span>' + val.name + '</span>&nbsp;(' + val.id + ')<br/>-&nbsp;属性:' + val.size + '<br/>-&nbsp;颜色:' + val.color + '</a></td><td class="num"><input type="text" value="' + val.number + '"><div></div></td><td class="price">&yen;' + val.price + '</td><td class="sum">&yen;' + parseFloat(val.price * val.number) + '.00</td><td class="remove"><div></div></td></tr>');
                 $('#shop_cart').html("购物车" + val.number + "件")
             }

         }
         //console.log($.cookie())
     }
 });