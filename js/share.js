$(document).ready(function () {
    //-------------右侧分享栏 的出现消失
    var div = $('#share');
    var require = $('#require');
    var req_bar = $('#req_bar');
    div.mouseenter(function () {
        move.minSpeed({
            dom: this,
            attr: {
                right: 0
            },
            step: 20
        })

    })
    div.mouseleave(function () {
            move.minSpeed({
                dom: this,
                attr: {
                    right: -260
                },
                step: 20
            })

        })
        //--------require 侧边栏滚动scrollTop
    window.onscroll = function () {
        var req = document.getElementById('require');
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var iTarget = parseInt((document.documentElement.clientHeight - req.offsetHeight) / 2 + scrollTop);
        //console.log(iTarget);
        /*require.animate({
            top:iTarget
        },40) */
        move.minSpeed({
            dom: req,
            attr: {
                top: iTarget-80
            },
            step: 10
        })
    }


    //有隐藏 出现..
    require.mouseenter(function () {
        req_bar.stop().fadeOut(100);
        move.minSpeed({
            dom: this,
            attr: {
                left: 0
            },
            step: 10
        })

    })
    require.mouseleave(function () {
        req_bar.stop().fadeIn(100);
        move.minSpeed({
            dom: this,
            attr: {
                left: -146
            },
            step: 10
        })

    })
})