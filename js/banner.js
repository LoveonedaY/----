$(document).ready(function () {
    //ban_l parts..       
    $('#ban_l>li').hover(function () {
            $(this).css({
                background: '#e6212a',
                color: '#fff'
            }).find('span').css('color', '#fff').end().siblings('li').css('background', 'rgba(0, 0, 0,0)');
            $('#ban_lbox>li').eq($(this).index()).css('display', 'block').siblings('li').css('display', 'none');
        }, function () {
            $(this).css({
                background: 'rgba(0, 0, 0,0)',
                color: '#000'
            }).find('span').css('color', '#95a09e');
            $('#ban_lbox>li').eq($(this).index()).css('display', 'none');
        })
        //timer ban_r 自动轮播..
    var $timer;
    var $index = 0;
    var $ban = $('#ban_r>li');
    $timer = setInterval(fade, 4000);
    //定时器的函数
    function fade() {
        $index++;
        if ($index == 5) {
            $index = 0;
        }
        $ban.eq($index).stop().fadeIn(300, function () {
            $ban.eq($index).siblings('li').stop().fadeOut(300)
        });
    }
})