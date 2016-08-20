$(document).ready(function () {
    //亲 你的姓名
    if (getCookie('username')) {
        var u = getCookie('username');
    } //else {
    // var u = getCookie('name');

    // }
    $('#qin').text(u)
        //console.log(u)
        //img_er 二维码
    $('#web_phone').hover(function () {
            $('#img_er').stop().fadeIn();
        }, function () {
            $('#img_er').stop().fadeOut();
        })
        //banner
    var $ban = $('#ban_l>li');
    $ban.each(function (index, items) {
            $(items).append('<img src=img/ban' + index + '.jpg>').find('img').css({
                position: 'absolute',
                left: '5px',
                top: '12px'
            });
        })
        //#left_bottom..
    var $left_btm = $('#left_btm li');
    /*$left_btm.each(function (index, items) {
        $(items).append("<a href='#'></a><div></div>");
    })*/
    $('#li7,#p5').hover(function () {
        $('#android').stop().fadeIn(200);
    }, function () {
        $('#android').stop().fadeOut(200);
    })
    $('#li6').hover(function () {
            $('#ios').stop().fadeIn(200);
        }, function () {
            $('#ios').stop().fadeOut(200);
        })
        //right_bottom..
    $(document).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('#right_btm').fadeIn(200);
        } else {
            $('#right_btm').fadeOut(200);
        }
    });
    //main2 tr td
    $('#tr1>td').each(function (index, items) {
        $(items).css('position', 'relative').append("<a href='#'><img src=img/pin" + (index + 1) + ".jpg /></a><div></div>");
    })
    $('#tr2>td').each(function (index, items) {
        $(items).css('position', 'relative').append("<a href='#'><img src=img/pin" + (index + 8) + ".jpg /></a><div></div>");
    })
    $('#tr3>td').each(function (index, items) {
        $(items).css('position', 'relative').append("<a href='#'><img src=img/pin" + (index + 16) + ".jpg /></a><div></div>");
    })
    $('#tr4>td').each(function (index, items) {
        $(items).css('position', 'relative').append("<a href='#'><img src=img/pin" + (index + 24) + ".jpg /></a><div></div>");
    })
    $('#tr5>td').each(function (index, items) {
            $(items).css('position', 'relative').append("<a href='#'><img src=img/pin" + (index + 32) + ".jpg /></a><div></div>");
        })
        //hover 改变背景色
    $('#main2 td').hover(function () {
            $(this).find('div').css('display', 'block');
        }, function () {
            $(this).find('div').css('display', 'none')
        })
        //today
        /*    $('#today>li').each(function (index, items) {
                $(items).append('<img src=img/today' + (index + 1) + '.jpg />');
            })
            $('#today').find('span').each(function (index, items) {
                    $(items).html('2015运动服运动套装女款夏短袖..<br/>');
                }).end().find('i').each(function (index, items) {
                    $(items).html('&yen;100.00').css({
                        fontSize: '12px',
                        color: 'red',
                        fontStyle: 'normal',
                        position: 'absolute',
                        left: '10px',
                        bottom: '12px'
                    })
                }).end().find('b').each(function (index, items) {
                    $(items).html('&yen;218.00').css({
                        fontSize: '9px',
                        color: '#c1bfc0',
                        fontWeight: 'normal',
                        position: 'absolute',
                        left: '70px',
                        bottom: '12px'
                    })
                })*/
        //bottom1
    $('#bottom1>dl').each(function (index, items) {
            $(items).css('background', 'url(img/bottom1-' + (index + 1) + '.png) no-repeat 0 8px');
        })
        //bottom2 web
    for (var i = 1; i <= 8; i++) {
        $('#p1').append("<a href='#'><img src=img/web" + i + ".jpg /></a>");
    }
    for (var i = 9; i <= 11; i++) {
        $('#p2').append("<a href='#'><img src=img/web" + i + ".jpg /></a>");
    }
    for (var i = 12; i <= 16; i++) {
        $('#p3').append("<a href='#'><img src=img/web" + i + ".jpg /></a>");
    }
    for (var i = 17; i <= 18; i++) {
        $('#p4').append("<a href='#'><img src=img/web" + i + ".jpg /></a>");
    }
})