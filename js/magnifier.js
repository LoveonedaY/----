    function bigPic(id, opt) {
        this.box = document.getElementById(id);
        this.url = opt.url;
        this.size = opt.size;
        this.scal = opt.scal;

        this.init();
        this.bindEvent();
    }
    bigPic.prototype = {
        init: function () {
            this.box.style.cssText = 'width:' + this.size + 'px;height:' + this.size + 'px;position:relative;';
            //左侧内容          
            this.leftBox = document.createElement('div');
            this.leftBox.style.cssText = 'width:100%;height:100%;position:relative;';
            this.leftImg = document.createElement('img');
            this.leftImg.src = this.url;
            this.leftImg.style.cssText = 'width:100%;height:100%;';
            this.ball = document.createElement('div');
            this.ball.style.cssText = 'width:' + (this.size / this.scal) + 'px;height:' + (this.size / this.scal) + 'px;position:absolute;left:0;top:0;background:yellow;opacity:.3;filter:alpha(opacity=40);display:none;z-index:1;';
            this.mb = document.createElement('div'); //mb==蒙版
            this.mb.style.cssText = 'width:100%;height:100%;position:absolute;left:0;top:0;z-index:2;';
            //插入左侧内容
            this.leftBox.appendChild(this.leftImg);
            this.leftBox.appendChild(this.ball);
            this.leftBox.appendChild(this.mb);
            this.box.appendChild(this.leftBox);
            //右侧内容
            this.rightBox = document.createElement('div');
            this.rightBox.style.cssText = 'width:' + this.size + 'px;height:' + this.size + 'px;position:absolute;left:' + (this.size + 10) + 'px;top:0;overflow:hidden;display:none;'
            this.rightImg = document.createElement('img');
            this.rightImg.src = this.url;
            this.rightImg.style.cssText = 'width:' + (this.size * this.scal) + 'px;height:' + (this.size * this.scal) + 'px;position:absolute;left:0;top:0;';
            //插入右侧内容
            this.rightBox.appendChild(this.rightImg);
            this.box.appendChild(this.rightBox)
        },
        bindEvent: function () {
            var self = this;
            self.leftBox.onmousemove = function (event) {
                var e = event || window.event;
                self.ball.style.display = 'block';
                self.rightBox.style.display = 'block';
                var posX = e.offsetX - self.ball.offsetWidth / 2;
                var posY = e.offsetY - self.ball.offsetHeight / 2;
                if (posX <= 0) {
                    posX = 0
                } else if (posX >= self.size - self.ball.offsetWidth) {
                    posX = self.size - self.ball.offsetWidth
                }

                if (posY <= 0) {
                    posY = 0
                } else if (posY >= self.size - self.ball.offsetWidth) {
                    posY = self.size - self.ball.offsetWidth;
                }
                self.ball.style.left = posX + 'px';
                self.ball.style.top = posY + 'px';
                self.rightImg.style.left = posX * (-self.scal) + 'px';
                self.rightImg.style.top = posY * (-self.scal) + 'px';
                this.onmouseout = function () {
                    self.ball.style.display = 'none';
                    self.rightBox.style.display = 'none';
                }
            }
        }
    }