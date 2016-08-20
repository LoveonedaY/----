var move = {
    //此获取css样式-值
    getStyle: function (obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, false)[attr]
    },
    //ci此运速运动情况
    fixedSpeed: function (opt) {
        var start = parseFloat(this.getStyle(opt.dom, opt.attr));
        //var speed=(opt.end-start)/opt.step;
        var len = ((opt.end - start) / opt.step) > 0 ? Math.ceil((opt.end - start) / opt.step) : Math.floor((opt.end - start) / opt.step);
        clearInterval(opt.dom.timer);
        opt.dom.timer = setInterval(fn, 10);

        function fn() {
            if (len > 0) {
                if (start >= opt.end) {
                    clearInterval(opt.dom.timer);
                    opt.dom.style[opt.attr] = opt.end + 'px';
                    opt.callback ? opt.callback() : null;
                } else {
                    start += len;
                    opt.dom.style[opt.attr] = start + 'px';
                }
            } else {
                if (start <= opt.end) {
                    clearInterval(opt.dom.timer);
                    opt.dom.style[opt.attr] = opt.end + 'px';
                    opt.callback ? opt.callback() : null;
                } else {
                    start += len;
                    opt.dom.style[opt.attr] = start + 'px';
                }


            }
        }
    },
    //ci此变减速运动
    minSpeed: function (opt) {
        var self = this;
        clearInterval(opt.dom.timer);
        opt.dom.timer = setInterval(fn, 10);

        function fn() {
            opt.dom.isMove = true;
            for (key in opt.attr) {
                if (key == 'opacity') {
                    var start = parseInt(self.getStyle(opt.dom, key)) * 100;
                } else {
                    var start = parseInt(self.getStyle(opt.dom, key));
                }

                var len = ((opt.attr[key] - start) / opt.step) > 0 ? Math.ceil((opt.attr[key] - start) / opt.step) : Math.floor((opt.attr[key] - start) / opt.step);


                if (start != opt.attr[key]) {
                    if (key == 'opacity') {
                        //关闭动画结束的开关
                        opt.dom.isMove = false;
                        opt.dom.style.opacity = (start + len) / 100;
                        opt.dom.style.filter = 'alpha(opacity=' + parseFloat(start + len) + ')';
                    } else {
                        //关闭动画结束的开关
                        opt.dom.isMove = false;
                        opt.dom.style[key] = (start + len) + 'px';
                    }

                }
                //判断是否结束动画
                if (opt.dom.isMove) {
                    clearInterval(opt.dom.timer);
                    opt.callback ? opt.callback() : null;
                }
            }

        }
    }

}