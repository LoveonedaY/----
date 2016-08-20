$(document).ready(function () {
    //main_left_top
    var $li = $('#div2 li');
    $li.one('click',function () {
            for (var i = 0; i < 4; i++) {
                $(this).after("<li class='a'><a href='#'>aaaa</a></li>");  
            }
            $('.a').css({
                background: 'url(img/main_l.png) no-repeat 0px -33px',
            });
        })
        //main_left_bottom
/*    var $div3 = $('#div3');
    for (var i = 1; i <= 8; i++) {
        $div3.append('<h2><strong>城美得2015短袖..</strong><i>&yen;120.00</i><span>' + i + '</span></h2>');
    }
    $div3.find('h2').mouseenter(function(){
        this.append('<img src=')css({
            
        })
    })*/
    var $div3 = $('#div3');
    for (var i = 1; i <= 8; i++) {
        $div3.append('<h2 ><strong>城美得2015短袖..</strong><i>&yen;120.00</i><span>' + i + '</span></h2>');
    }
    $div3.find('h2').eq(0).addClass('h2_1');
    $div3.find('h2').hover(function () {
            $(this).addClass('h2_1').siblings('h2').removeClass('h2_1');
        })
    //main-right box
    var $ctn = $('#ctn');
    var $btn = $('#btn');
    var $num = 20; //每页有二十个内容块
    $.ajax({
        type: 'get',
        url: 'js/list.json',
        dataType: 'json',
        error: function () { //错误调用函数..
            $ctn.html('未找到符合条件的商品')
        },
        success: function (data) { //生出按钮btn
            var $page = Math.ceil(data.length / $num);
            for (var i = 0; i < $page; i++) {
                $btn.append('<li>' + (i + 1) + '</li>')
            };
            for (var i = 0; i < $num; i++) { //分页 第一页内容..
                if (data[i]) {
                    $ctn.append('<li><a href=' + data[i].src + '><img src=' + data[i].url + ' /></a><span>' + data[i].name + '</span><b>&yen;' + data[i].price1 + '</b><i>&yen;' + data[i].price2 + '</i></li>')
                }
            }
            var $btns = $btn.children('li'); //说明__对象
            $btns.eq(0).css({
                background: '#e61d23',
                color: '#fff'
            })
            var $index = null;
            var flag = false;
            $btns.eq(-1).after("<div id='lt3'>&gt;</div><div id='lt4'>&gt;|</div>"); //btns 在前添加< > >|按钮        
            $btns.eq(0).before("<div class='lt' id='lt2'>|&lt;</div><div class='lt' id='lt1'>&lt;</div>")
            $('.lt').css('display', 'none');
            $btns.on('click', fn);

            function fn1() {
                $(window).scrollTop(0);
                $('.lt').css('display', 'block');
                $btns.eq($index).css({
                    background: '#e61d23',
                    color: '#fff'
                }).siblings('li').css({
                    background: '#fff',
                    color: '#000'
                });
                $ctn.empty();
                for (var i = 0 + ($num * $index); i < $num * (1 + $index); i++) {
                    $('#em1').html('显示&nbsp;' + ($num * $index + 1) + '-&nbsp;' + $num * (1 + $index) + ' / 9067 (共计454页) ');
                    if (data[i]) {
                        $ctn.append('<li><a href=' + data[i].src + '><img src=' + data[i].url + ' /></a><span>' + data[i].name + '</span><b>&yen;' + data[i].price1 + '</b><i>&yen;' + data[i].price2 + '</i></li>')
                    }
                }
            }

            $('#lt3').off('click').click(function () {
                if ($index < $page - 1) {
                    $index++; //return false;
                }
                fn1();
            })
            $('#lt4').off('click').click(function () {
                $index = $page - 1;
                fn1();
            })

            function fn() {
                $index = $(this).index() - 2; //说明  ..下标
                $('#lt1').off('click').click(function () {
                    if ($index > 0) {
                        $index--; //return false;
                    }
                    fn1();
                })
                $('#lt2').off('click').click(function () {

                    $index = 0; //return false;

                    fn1();
                })

                fn1();
            }
        }
    })
})