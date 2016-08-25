$(document).ready(function () {
    var uName = $('#uName');
    var pWord = $('#pWord');
    var pWord1 = $('#pWord1');
    var email = $('#email');
    var agree = $('#agree');
    var submit = $('#submit');
    var submit1 = $('#submit1');
    var submit2 = $('#submit2');
    var submit3 = $('#submit3');
    uName.blur(function () {
        var val = $(this).val();
        var reg_uname = /^[a-zA-z][a-zA-Z0-9_]{2,9}$/;
        if (reg_uname.test(val) == false) {
            uName.next('span').html('用户名格式错了');
        }
    }).focusin(function () {
        uName.val('');
        uName.next('span').html('')
    });
    pWord.blur(function () {
        var val = $(this).val();
        var reg_pword = /^\w{6,20}$/;
        if (reg_pword.test(val) == false) {
            pWord.next('span').html('密码格式输入错误');
        }
    }).focusin(function () {
        pWord.val('');
        pWord.next('span').html('')
    });
    pWord1.blur(function () {
        var val = $(this).val();
        if (val != pWord.val()) {
            pWord1.next('span').html('密码错误不一致');
        }
    }).focusin(function () {
        pWord1.val('');
        pWord1.next('span').html('')
    });
    email.blur(function () {
        var val = $(this).val();
        var reg_email = /^\w+@\w+(\.\w+)+$/;
        if (reg_email.test(val) == false) {
            email.next('span').html('无效的邮箱地址！');
        }
    }).focusin(function () {
        email.val('');
        email.next('span').html('')
    });
    submit.click(function () {
        if ($('#agree:checked').length != 0) {
            var $data = {
                status: 'register',
                userID: $('#uName').val(),
                password: $('#pWord').val()
            }
            $.ajax({
                type: 'get',
                url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
                data: $data,
                success: function (status) {
                    switch (status) {
                    case '0':
                        alert('用户名已存在');
                        break;
                    case '1':
                        alert('注册成功');
                        setCookie('username', uName.val(), 1);
                        setCookie('password', pWord.val(), 1);
                        break;
                    case '2':
                        alert('数据库报错');
                        break;
                    default:
                        alert('未知错误..');
                    }
                }
            })
        } else {
            alert('请阅读协议之后注册..');
        }
    });
    submit2.click(function () {
        window.location.href = 'login.html';
    });
    submit1.click(function () {
        window.location.href = 'register.html';
    });
    submit3.click(function () {
        //setCookie('name',uName.val(),1);
        var u = getCookie('username');
       // console.log(u)
        var p = getCookie('password');
        if (uName.val() == u && pWord.val() == p) {
            window.location.href = 'index.html';
        } else {
            alert('用户名或密码错误');
            pWord.val('');

        }
    })
})