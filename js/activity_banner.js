window.onload = function () {
    var box = document.getElementById('box');
    var ball = document.getElementById('ball');

    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var flag = true;
    var l = 0;
    //自动轮播
    var timer = setTimeout(scroll, 4000);
    //自动轮播函数
    function scroll() {
        l -= 1280;
        //判断是否滚到最后一张
        if (l == -6400) { //5倍
            l = -1280;
            ball.style.left = 0;
        }
        //大图调用运动函数
        move.minSpeed({
                dom: ball,
                attr: {
                    left: l
                },
                step: 16,
                callback: function () {
                    //设置循环
                    if (flag == true) {
                        clearTimeout(timer)
                        timer = setTimeout(scroll, 3000);
                    }
                }
            })
    }

    //滑入停止
    box.onmouseenter = function () {
            flag = false;
            clearTimeout(timer)

        }
        //滑出循环轮播
    box.onmouseleave = function () {
            timer = setTimeout(scroll, 1000);
            flag = true;
        }
        //返回上一张
    prev.onclick = function () {
            l += 1280;
            if (l > 0) {
                l = -3840;
                ball.style.left = -5120 + 'px';
            }
            move.minSpeed({
                dom: ball,
                attr: {
                    left: l
                },
                step: 16
            })


        }
        //前进到下一张
    next.onclick = function () {
        l -= 1280;
        if (l == -6400) {
            l = -1280;
            ball.style.left = 0 + 'px';
        }
        move.minSpeed({
            dom: ball,
            attr: {
                left: l
            },
            step: 16
        })


    }
}