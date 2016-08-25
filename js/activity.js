$(document).ready(function () {
    //top
    //    var top_a = $('#top li a');
    //    top_a.hover(function () {
    //            $(this).css({
    //                borderBottom: '2px solid #0076db'
    //            })
    //        }, function () {
    //            $(this).css({
    //                borderBottom: '0'
    //            })
    //        })
    //banner_img 轮播图
    /*ar x = $(document.body)[0].clientWidth;
    var str=7 * x + 'px';
    console.log(str)
    $('#box').css({
        width: x + 'px',
        
    })
    var ball = $('#ball');
    ball.find('a').css({
        width: x + 'px'
    })
    ball.css({
        width: 5 * x + 'px'
    })
    ball.find('img').css({
        width: x + 'px'
    })*/
    var prev = $('#prev');
    var box = $('#box');
    var next = $('#next');
    box.hover(function () {
            prev.fadeIn(200);
            next.fadeIn(200);
        }, function () {
            prev.fadeOut(200);
            next.fadeOut(200);
        })
        //main_ul background-position
    var main1_div = $('#main1 ul div');
    var main1_li = $('#main1 ul li');
    main1_div.each(function (index, items) {
        $(items).css({
            background: 'url(img/hy_search_ico.png) no-repeat ' + (-1 * index * 130) + 'px 0'
        })
    })
    main1_li.hover(function () {
            var index = $(this).index();
            $(this).find('div').css({
                background: 'url(img/hy_search_ico.png) no-repeat ' + (-1 * index * 130) + 'px -130px'
            })
        }, function () {
            var index = $(this).index();
            $(this).find('div').css({
                background: 'url(img/hy_search_ico.png) no-repeat ' + (-1 * index * 130) + 'px 0'
            })
        })
        /*$('#filter').mousemove(function (e) {
            var e = e || window.event;
            var posX = e.offsetX;
            console.log(posX) //jqs鼠标移入事件
            $('#main').find('ul').css({
                left:-1*posX/2+'px'
            })
        })*/

    $('#main1').mousemove(function (e) {
        var e = e || window.event;
        var posX = e.clientX;
        //console.log($(this)) //jqs鼠标移入事件
        $(this).find('ul').css({
            left: -1 * posX / 2 + 90 + 'px'
        })
    })

    //main1   over    main1_2  background  change
    var main1_2_li1 = $('#main1_2 .ul1').find('li');
    var main1_2_a = $('#main1_2 .ul2').find('a');

    main1_2_li1.each(function (index, items) {
        $(items).css({
            background: 'url(img/hy_poptabconbg' + (index + 1) + '.jpg) center center',
        })
    });
    main1_2_li1.eq(0).css({
        zIndex: 2,
        display: 'block'

    });
    main1_2_a.eq(0).css({
        backgroundPositionY: -15

    });
    main1_2_a.click(function () {

        $(this).animate({
            backgroundPositionY: -15
        }, 200).siblings('a').css({
            backgroundPositionY: 0
        })
        var index = $(this).index();
        main1_2_li1.eq(index).css({
            zIndex: 2,
            display: 'block'
        }).siblings('li').css({
            zIndex: 1,
            display: 'none'
        })
    });
    //连续动画..fadeIn slideUp
    var main1_2 = $('#main1_2');
    var main1 = $('#main1');
    var close = $('.about_close');
    main1_li.click(function () {
        var index = $(this).index();
        main1_2_li1.eq(index).css({
            zIndex: 2,
            display: 'block'
        }).siblings('li').css({
            zIndex: 1,
            display: 'none'
        });
        main1_2_a.eq(index).animate({
            backgroundPositionY: -15
        }, 200).siblings('a').css({
            backgroundPositionY: 0
        })
        main1.slideUp(1200, function () {
            main1_2.delay(300).slideDown(1200, function () {
                $('#main1_2 .ul2').fadeIn(600)
            })
        })

    })
    close.click(function () {
            main1_2.slideUp(600, function () {
                main1.delay(200).slideDown(600)
            });
        })
        //main2 img 运动..
    $('#top li').eq(0).css({
        background: '#0076db'
    })
    $(document).scroll(function () {
        var top = $(this).scrollTop();
        if (top > 400) {
            $('#moreico').animate({
                left: 50 + '%'
            }, 1000)
        }
        /*if (top < 300) {
                    $('#moreico').animate({
                        right: -30
                    }, 1000)
                }*/
        if (top < 520) {
            return fn(0);
        } else if (top > 570 && top < 900) {
            return fn(1);
        } else if (top > 900 && top < 1500) {
            return fn(2);
        } else if (top > 1500 && top < 1800) {
            return fn(3);
        } else if (top > 1800 && top < 2200) {
            return fn(4);
        } else if (top > 2200 && top < 2500) {
            return fn(5);
        }
        /*if (top > 900) {
            $('#moreico').animate({
                right: -30
            }, 1000)

        }*/

        function fn(i) {
            $('#top li').eq(i).css({
                background: '#0076db'
            }).siblings('li').css({
                background: 'none'
            })
        }
    });
    //main3  table..oic
    var main3 = $('#main3');
    var n = 0;
    main3.append('<ul></ul>');
    for (var i = 0; i < 6; i++) {
        main3.find('ul').append('<li class="li1"></li>')
    };
    for (var i = 0; i < 6; i++) {
        main3.find('ul').append('<li class="li2"></li>')
    };
    main3.append('<div id="dl"></div>');
    for (var i = 0; i < 3; i++) {
        main3.find('div').append('<span></span>')
    };

    //tab 首样式
    $('#main3 .li1').each(function (index, items) {
        $(items).append("<a href='#'><img src='img/hy_" + (index + 1) + ".jpg'></a>")
    });
    $('#main3 .li2').each(function (index, items) {
        $(items).append("<a href='#'><img src='img/hy_" + (index + 7) + ".jpg'></a>")
    });

    // #main3 li 里的图片动画
    $('#main3 li').hover(function () {
        $(this).find('img').animate({
            marginTop: 56
        }, 300)
    }, function () {
        $(this).find('img').animate({
            marginTop: 0
        }, 180)
    });

    //--首样式..
    $('#dl span').eq(0).css({
        backgroundPositionY: -15
    });

    //..点击变化..
    $('#main3 li').append('<h1>电商-微站  ^_^</h1><p>WEB DESIGN</p>');
    $('#dl span').click(function () {
        //--这个颜色变化
        $(this).animate({
                backgroundPositionY: -15
            }, 300).siblings('span').css({
                backgroundPositionY: 0
            })
            //记录下标
        var index = $(this).index();
        n = index * 6;
        //隐藏 ..渐隐
        $('#main3 ul').stop().fadeOut(100, function () {
            $('#main3 .li1,#main3 .li2').empty();
            $('#main3 .li1').each(function (index, items) {
                $(items).append("<a href='#'><img src='img/hy_" + (index + 1 + 2 * n) + ".jpg'></a>")
            })
            $('#main3 .li2').each(function (index, items) {
                    $(items).append("<a href='#'><img src='img/hy_" + (index + 7 + 2 * n) + ".jpg'></a>")
                })
                //显示 ..渐渐显
            $(this).stop().fadeIn(200)
            $('#main3 li').append('<h1>电商-微站  ^_^</h1><p>WEB DESIGN</p>');
        })

    });


    //mian4 --img change
    var main4_img = $('#main4_img').find('img');
    main4_img.hover(function () {
            $(this).animate({
                width: 330,
                height: 159,
                left: -10,
                top: -10
            }, 200)
        }, function () {
            $(this).animate({
                width: 310,
                height: 139,
                left: 0,
                top: 0
            }, 200)
        })
        //main 5  -- 

    //    console.log(w)
    $(document).scroll(function () {
        if ($(this).scrollTop() > 1300) {
            var w = $('html,body')[0].clientWidth;
            $('#arrow').animate({
                left: w / 2 - 36
            }, 1000)

        }
    });
    //------------arrow 连动运动-------------------------
    var arrow = $('#arrow');
    var main5 = $('#main5');

    function fn1() {
        arrow.stop().animate({
            top: 200
        }, 1000, function () {
            $('#msgBox').fadeIn(800)
        }).delay(500).animate({
            top: -50
        }, 800, function () {

            $('html,body').animate({
                scrollTop: $('#main4').offset().top + 225
            }, 1000)
        });
    }

    function fn2() {
        var timer = setInterval(function () {
            var w = $('html,body')[0].clientWidth;
            $('#main5').append('<span class="span"></span>');
            $('#main5 span').css({
                marginLeft: w / 2 - 15
            });
            if ($('#main5 span').length == 10) {
                clearInterval(timer)
            }
        }, 110);
        //--------main5 de高度变化--------
        main5.animate({
            height: 300
        }, 900).delay(600).animate({
            height: 1
        }, 1200);
        setTimeout(function () {
            $('#main5 .span').remove()
        }, 1200);
    }
    arrow.click(function () {
        fn1();
        if (fn1) {
            fn2()
        };

    })


    //---------mian5   over  _____  msgbox title  change
    var li8_li = $('#li8').siblings('li');
    li8_li.each(function (index, items) {
        $(items).css({
            backgroundPositionX: (index + 1) * 85,
            backgroundPositionY: -85
        })
    })

    li8_li.hover(function () {
            $(this).stop().animate({
                backgroundPositionY: 0
            }, 400)
        }, function () {
            $(this).stop().animate({
                backgroundPositionY: -85
            }, 0)
        })
        //msgBox disappear
    $('.about_popclose').click(function () {
        $('#msgBox').animate({
            height: 0
        }, 600, function () {
            $('html,body').animate({
                scrollTop: $('#main4').offset().top - 80
            }, 800, function () {
                fn3();
            })
        })
    })

    function fn3() {
        main5.stop().animate({
            height: 90
        }, 900)
        main5.addEventListener("Animated", function () {
            arrow.stop().animate({
                top: 0
            }, 500)
        })
    }
    //footer  上面的列表....
    var curse = $('#curse');
    for (var i = 0; i < 3; i++) {
        curse.append('<dl></dl>');

    }
    curse.find('dl').append('<dt></dt>');
    for (var i = 0; i < 10; i++) {
        curse.find('dl').append('<dd></dd>');
    }
    curse.find('dt').html('<i>微信开发</i><b>NEWS</b>')
    curse.find('dd').html('微信网五分钟轻松建站')
})