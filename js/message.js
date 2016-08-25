$(document).ready(function () {
    //main_right top div2
    var $div2 = $('#div2');
    for (var i = 1; i <= 8; i++) {
        $div2.append('<h2 ><strong>城美得2015短袖..</strong><i>&yen;120.00</i><span>' + i + '</span></h2>');
    }
    $div2.find('h2').eq(0).addClass('h2_1');
    $div2.find('h2').hover(function () {
            $(this).addClass('h2_1').siblings('h2').removeClass('h2_1');
        })
        //放大镜
    var b = new bigPic('bigpic', {
        url: 'img/magni_1.jpg',
        size: 410,
        scal: 2
    })
    var btns = document.getElementById('box').getElementsByTagName('li');
    for (var i = 0; i < btns.length; i++) {
        btns.index = i;
        btns[i].onmouseover = function () {
            b.leftImg.src = this.firstChild.src;
            b.rightImg.src = this.firstChild.src;

        }
    }
    //main_r box
    $('#li8').hover(function () {
        $(this).css('background-position', '0 -70px');
    }, function () {
        $(this).css('background-position', '0 0');
    })
    $('#li9').hover(function () {
            $(this).css('background-position', '0 -210px');
        }, function () {
            $(this).css('background-position', '0 -140px');
        })
        //main_table top_ul
    $('#main_tab li').eq(0).css({
        borderTop: '3px solid #e6212a',
        borderBottom: 'none',
        background: '#fff',
        color: '#e6212a'
    })
    $('#main_tab li').not('#li_0').click(function () {
            $(this).css({
                borderTop: '3px solid #e6212a',
                borderBottom: 'none',
                background: '#fff',
                color: '#e6212a'
            }).siblings('li').css({
                color: '#666',
                border: '1px solid #dcdcdc',
                background: '#f8f8f8',
                lineHeight: '30px',
                borderLeft: 'none'
            })
        })
        //main_right  #message input PIC
    var $mes = $('#message #ul4');

    for (var i = 1; i < 19; i++) {
        $mes.append('<img src=img/wes' + i + '.jpg>');
    }
    //main_r score 评分 星星..
    var $li_star = $('#li12 li');
    $li_star.mouseenter(function () {
            var index = $(this).index();
            for (var i = 0; i < 5; i++) {
                $li_star.eq(i).css({
                    background: 'url(img/score.png) no-repeat 0 -29px'
                });
            }
            for (var i = 5; i > index; i--) {
                $li_star.eq(i).css({
                    background: 'url(img/score.png) no-repeat 0 0px'
                });
            }
            if (index == 0) {
                $('#li12 div').html('一分 很不满意')
            } else if (index == 1) {
                $('#li12 div').html('两分 不满意')
            } else if (index == 2) {
                $('#li12 div').html('三分 一般')
            } else if (index == 3) {
                $('#li12 div').html('四分 满意')
            } else if (index == 4) {
                $('#li12 div').html('五分 很满意')
            }
        })
        //display:none &&block
    $('#message #ul4').css({
        display: 'block'
    })
    $('#tab1').click(function () {
        $('#message #ul4').css({
            display: 'block'
        }).siblings('ul').css('display', 'none')
    });
    $('#tab2').click(function () {
        $('#message #ul5').css({
            display: 'block'
        }).siblings('ul').css('display', 'none')
    });
    $('#tab3').click(function () {
        $('#message #ul6').css({
            display: 'block'
        }).siblings('ul').css('display', 'none')
    });
    $('#tab4').click(function () {
            $('#message #ul7').css({
                display: 'block'
            }).siblings('ul').css('display', 'none')
        })
        //shopping cart购物车..

    //型号选择
    $('#ul_1').find('li').click(function () {
            $(this).css({
                borderColor: 'red',
                color: 'red'
            }).addClass('size').siblings('li').css({
                borderColor: '#dcdcdc',
                color: '#666'
            }).removeClass('size');
             //console.log($size)
        })
        //color
    $('#ul_2').find('li').click(function(){
        $(this).css({
                borderColor: 'red',
                color: 'red'
            }).addClass('color').siblings('li').css({
                borderColor: '#dcdcdc',
                color: '#666'
            }).removeClass('color');
            //var $color = $(this).html();
    })


    $('#btn2').click(function () {
        var num = $('#li10').val();
        var msg = '{"name":"' + $('#name').html() + '","id":"' + $('#goods_id').text() + '","url":"' + $('#bigpic').find('img').attr('src')+'","color":"'+$('.color').html() + '","price":"' + $('#price').html() + '","size":"' + $('.size').html() + '","number":"' + num + '"}';
        /*var str = $('#goods_id').html().substring($('#goods_id').html().indexOf(' ')+1);*/
        $.cookie('clother', msg, {
            expires: 1
        });
        alert('加入购物车>>成功^_^')
        $('#shop_cart').html("购物车"+num+"件")
    })


})