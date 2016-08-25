// JavaScript Document
$(document).ready(function() {
    $(".sub-categories").hover(function(){
        $(".sub-categories-list").css({
          display:'block'  
        });
        },function(){
            $(".sub-categories-list").css({
           display:'none'
          }); 
    });
    
    $(".categories-list ul li").bind('mouseenter', function(){
        $(this).children(".sub-mes").show();
        $(this).find(".mes").find("b").css({color:"#fff"});
    }).bind('mouseleave', function(){
        $(this).children(".sub-mes").hide();
        $(this).find(".mes").find("b").css({color:"#333"});
    });

    /*单独写排行榜最后一排的样式*/
    $(".l-buy li:eq(5)").css({
        width: '198px',
        borderRight: '1px solid #efefef'
    });

    /*--排行榜TAB选显卡切换效果--*/
    !function($) {
        "use strict"; // jshint ;_;
        /* TAB CLASS DEFINITION
         * ==================== */

        var Tab = function(element) {
            this.element = $(element)
        }

        Tab.prototype = {
            constructor: Tab

            , show: function() {
                var $this = this.element
                        , $ul = $this.closest('ul:not(.dropdown-menu)')
                        , selector = $this.attr('data-target')
                        , previous
                        , $target
                        , e

                if (!selector) {
                    selector = $this.attr('href')
                    selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
                }

                if ($this.parent('li').hasClass('active'))
                    return

                previous = $ul.find('.active:last a')[0]

                e = $.Event('show', {
                    relatedTarget: previous
                })

                $this.trigger(e)

                if (e.isDefaultPrevented())
                    return

                $target = $(selector)

                this.activate($this.parent('li'), $ul)
                this.activate($target, $target.parent(), function() {
                    $this.trigger({
                        type: 'shown'
                        , relatedTarget: previous
                    })
                })
            }

            , activate: function(element, container, callback) {
                var $active = container.find('> .active')
                        , transition = callback
                        && $.support.transition
                        && $active.hasClass('fade')

                function next() {
                    $active
                            .removeClass('active')
                            .find('> .dropdown-menu > .active')
                            .removeClass('active')

                    element.addClass('active')

                    if (transition) {
                        element[0].offsetWidth // reflow for transition
                        element.addClass('in')
                    } else {
                        element.removeClass('fade')
                    }

                    if (element.parent('.dropdown-menu')) {
                        element.closest('li.dropdown').addClass('active')
                    }

                    callback && callback()
                }

                transition ?
                        $active.one($.support.transition.end, next) :
                        next()

                $active.removeClass('in')
            }
        }


        /* TAB PLUGIN DEFINITION
         * ===================== */

        $.fn.tab = function(option) {
            return this.each(function() {
                var $this = $(this)
                        , data = $this.data('tab')
                if (!data)
                    $this.data('tab', (data = new Tab(this)))
                if (typeof option == 'string')
                    data[option]()
            })
        }

        $.fn.tab.Constructor = Tab


        /* TAB DATA-API
         * ============ */

        $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
            e.preventDefault()
            $(this).tab('show')
        })

    }(window.jQuery);

// 搜索
    $('#text').click(function() {

        if ($(this).val() == "请输入关键字") {
            $(this).val("");
        }
    });
    $("#text").blur(function() {
        if ($("#text").val() == "")
            $("#text").val("请输入关键字");
    });


 //水费 
     $('#shuifei').click(function(){
       
        var url=$('#none .water').attr('targeturl');
      $('#none .water').attr('src',url);
        $('#none').show() ;
        $('#TB_overlay').show();
     });
     $('.close-img').click(function(){
        $('#none').hide() ;
        $('#TB_overlay').hide();
     });
//    电费
    $('#power').click(function(){
        var url=$('#power1 .water').attr('targeturl');
        $('#power1 .water').attr('src',url);
        $('#power1').show() ;
        $('#TB_overlay').show();
     });
     $('.close-img').click(function(){
        $('#power1').hide() ;
        $('#TB_overlay').hide();
     });
     $('#TB_overlay').click(function(){
          $('#power1').hide() ;
         $('#none').hide() ;
          $('#congzi').hide() ;
        $('#TB_overlay').hide(); 
     });
     
//     在线充值
     $('#recharge').click(function(){
        var url=$('#congzi .congzi1').attr('targeturl');
        $('#congzi .congzi1').attr('src',url);
        $('#congzi').show() ;
        $('#TB_overlay').show();
     });
     $('#close2').click(function(){
        $('#congzi').hide();
        $('#TB_overlay').hide();
     });
   

/*--热销榜js动效--*/		      
	$(".hot-list li").hover(function(){
        $(this).css({
          height:'70px'
        },'1000');
		$(this).addClass("on"); 
		$(this).siblings().css({
           height:'37px'
          },'1000');
		$(this).siblings().removeClass("on") 
        });
		
	/*--sub商品分类显示隐藏层--*/		      
   $(".s-l-categories>ul>li").click(function(){
        $(".s-l-categories>ul>li").children("ul").css({
          display:'block'
        },'1000');  
		$(this).siblings().children("ul").css({
           display:'none'
          },'1000')
        }); 
		
	/*产品介绍、买家评论、购买记录的tab切换选项卡*/
	$('#tab_pdt_info span').bind('click', function(){
		$('#tab_pdt_info span').removeClass('on');
		$(this).addClass('on');
	    var index = ($(this).index());
		$('.pannel_test').hide();
		$('.pannel_test').eq(index).show();
	});
    
    //  实现搜索框
    $('.btn').bind('click', function() {
		url ='/index.php?route=product/search';
      
		
		var search = $('input[name=\'search\']').attr('value');
	
		if (search) {
			url += '&search=' + encodeURIComponent(search);
			
		}
		
        window.location.href = url;
	});
	
	$('.head input[name=\'search\']').bind('keydown', function(e) {
		if (e.keyCode == 13) {
			url = $('.search').attr('href') + 'index.php?route=product/search';
			 
			var search = $('input[name=\'search\']').attr('value');
			
			if (search) {
				url += '&search=' + encodeURIComponent(search);
			}
			
//			location = url;
            window.location.href=url;
		}
	});
	
	
	
	$('#button-search').click(function() {

        url = 'index.php?route=product/search';

        var search = $('#search').attr('value');


        if (search) {
            url += '&search=' + encodeURIComponent(search);
        }

        var category_id = $('select[name=\'category_id\']').attr('value');

        if (category_id > 0) {
            url += '&category_id=' + encodeURIComponent(category_id);
        }

        var sub_category = $('input[name=\'sub_category\']:checked').attr('value');

        if (sub_category) {
            url += '&sub_category=true';
        }

        var filter_description = $('input[name=\'description\']:checked').attr('value');

        if (filter_description) {
            url += '&description=true';
        }

        location = url;
    });	

});

/* banner切换效果样式*/
(function($) {
    $.fn.kinMaxShow = function(user_options) {
        //默认设置
        var default_options = {
            height: 400,
            intervalTime: 6,
            switchTime: 500,
            hoverPause: true,
            easing: 'linear',
            imageAlign: 'center center',
            button: {
                switchEvent: 'click',
                showIndex: false,
                normal: {width: '10px', height: '10px', right: '10px', bottom: '10px', background: "#fff", marginRight: '8px', float: 'left'},
                focus: {background: "#cb0303"}
            },
            callback: function(index, action) {
            }

        };
        options = jQuery.extend(true, {}, default_options, user_options);

        var k = {};

        k.selector = $(this).selector;

        if ($(this).length > 1) {
            $.error('kinMaxShow error[More than one selected object]');
            return false;
        }

        k.self = this;
        k.index = 0;
        k.lindex = 0;
        k.size = $(k.self).children('div').size();
        k.prename = 'KMSPrefix_' + k.selector.replace(/\W/ig, '') + '_';
        k.data = {};
        k.fn = {};
        k.onload = function() {
            $(k.self).css({width: '100%', height: options.height, overflow: 'hidden', position: 'relative'}).children('div').addClass(k.prename + 'image_item').hide();
            k.init();

        };


        //初始化
        k.init = function() {

            k.setLayout();
            k.setAnimate();

        };

        //布局
        k.setLayout = function() {

            //image 容器
            $(k.self).children('div').wrapAll('<div class="' + k.prename + 'image_box"></div>');
            $('.' + k.prename + 'image_item', k.self).each(function() {
                var a = $(this).children('a');
                if (a.length) {
                    var image = a.children('img').attr('src');
                    a.children('img').remove();
                    a.addClass(k.prename + 'coverlink');
                } else {
                    var image = $(this).children('img').attr('src');
                    $(this).children('img').remove();
                }
                //
                $(this).css({background: 'url(' + image + ') no-repeat ' + options.imageAlign, 'z-index': 1});

            });

            $('.' + k.prename + 'image_item', k.self).eq(0).css('z-index', '2');

            //button 容器
            if (options.button.normal.display != 'none') {
                var button_list = '';
                for (i = 1; i <= k.size; i++) {
                    if (options.button.showIndex) {
                        button_list += '<li>' + i + '</li>';
                    } else {
                        button_list += '<li> </li>';
                    }
                }
                $(k.self).append('<ul class="' + k.prename + 'button">' + button_list + '</ul>');
                $('.' + k.prename + 'button li', k.self).eq(0).addClass(k.prename + 'focus');
            }

            //设置 css
            k.setCSS();

            //显示内容
            $('.' + k.prename + 'image_item:gt(0)', k.self).css('z-index', 1).css({opacity: 0});
            $('.' + k.prename + 'image_item', k.self).show();
            $(k.self).css({overflow: 'visible', visibility: 'visible', display: 'block'});


        };

        //CSS
        k.setCSS = function() {

            var cssCode = '<style type="text/css">';
            cssCode += k.selector + ' *{ margin:0;padding:0;} ';
            cssCode += k.selector + ' .' + k.prename + 'image_box{width:100%;height:' + parseInt(options.height) + 'px;position:relative;z-index:1;} ';
            cssCode += k.selector + ' .' + k.prename + 'image_box .' + k.prename + 'image_item{width:100%;height:' + parseInt(options.height) + 'px;position:absolute;overflow:hidden;} ';
            cssCode += k.selector + ' .' + k.prename + 'image_box .' + k.prename + 'image_item a.' + k.prename + 'coverlink{width:100%;height:' + parseInt(options.height) + 'px;display:block;text-decoration:none;padding:0;margin:0;background:transparent;text-indent:0;outline:none;hide-focus:expression(this.hideFocus=true);} ';
            if (options.button.normal.display != 'none') {
                cssCode += k.selector + ' .' + k.prename + 'button{' + k.fn.objToCss(options.button.normal, ['top', 'right', 'bottom', 'left'], true) + ';position:absolute;list-style:none;z-index:2;overflow:hidden;_zoom:1;}';
                cssCode += k.selector + ' .' + k.prename + 'button li{' + k.fn.objToCss(options.button.normal, ['top', 'right', 'bottom', 'left']) + ';cursor:pointer;-webkit-text-size-adjust:none;}';
                cssCode += k.selector + ' .' + k.prename + 'button li.' + k.prename + 'focus{' + k.fn.objToCss(options.button.focus, ['top', 'right', 'bottom', 'left']) + ';cursor:default;}';
            }
            cssCode += '</style>';
            $(k.self).prepend(cssCode);

        }

        //动画管理
        k.setAnimate = function() {

            options.callback.call($('.' + k.prename + 'image_item:eq(' + k.index + ')', k.self), k.index, 'fadeIn');

            var overDelayTimer;//当switchEvent是mouseover时  执行延迟计时器
            $('.' + k.prename + 'button', k.self).delegate('li', options.button.switchEvent, function() {
                _this = this;
                function setChange() {
                    k.index = $(_this).index();
                    k.setOpacity();
                }
                if (options.button.switchEvent == 'mouseover') {
                    overDelayTimer = setTimeout(setChange, 100);
                } else {
                    setChange();
                }
            })
            //mouseover 延时
            if (options.button.switchEvent == 'mouseover') {
                $('.' + k.prename + 'button', k.self).delegate('li', 'mouseout', function() {
                    clearTimeout(overDelayTimer);
                })
            }

            //设置索引
            k.index = 1;
            k.lindex = 0;
            //自动切换定时器
            k.data.moveTimer = setInterval(k.setOpacity, options.intervalTime * 500 + options.switchTime);

            //悬停暂停
            if (options.hoverPause) {
                $(k.self).hover(function() {
                    clearInterval(k.data.moveTimer);
                }, function() {
                    k.data.moveTimer = setInterval(k.setOpacity, options.intervalTime * 500 + options.switchTime);
                })
            }

        };

        //擦除(切换)
        k.setOpacity = function() {

            //回调 fadeOut callback
            options.callback.call($('.' + k.prename + 'image_item:eq(' + (k.lindex) + ')', k.self), k.lindex, 'slideUp');
            //按钮切换
            if (options.button.normal.display != 'none') {
                $('ul.' + k.prename + 'button li', k.self).removeClass(k.prename + 'focus');
                $('ul.' + k.prename + 'button li', k.self).eq(k.index).addClass(k.prename + 'focus');
            }

            //停止执行中的动画
            $('.' + k.prename + 'image_item:animated', k.self).stop(true, false);
            //设置上一个显示的z-index为0
            $('.' + k.prename + 'image_item', k.self).css('z-index', 1);
            //设置当前显示的z-index为1
            $('.' + k.prename + 'image_item', k.self).eq(k.index).css({opacity: 0, 'z-index': 2});
            //alert(k.index)
            $('.' + k.prename + 'image_item', k.self).eq(k.index).animate({opacity: 1}, options.switchTime, options.easing, function() {
                $('.' + k.prename + 'image_box .' + k.prename + 'image_item:not(:eq(' + k.index + '))', k.self).css({opacity: 0});
                //回调 fadeIn callback
                options.callback.call($('.' + k.prename + 'image_item:eq(' + k.index + ')', k.self), k.index, 'slideDown');
                k.lindex = k.index;
                if (k.index == k.size - 1) {
                    k.index = 0;
                } else {
                    k.index++;
                }
            }
            );

        };

        //运行			
        k.run = function() {
            k.onload();
        };

        k.fn.objToCss = function(obj, excArr, excFlag) {
            excFlag = excFlag ? true : false;
            var isIE = navigator.userAgent.indexOf("MSIE") != -1;
            var style = '';
            if (excFlag) {
                for (var key in obj) {
                    if ($.inArray(key, excArr) != -1) {
                        pKey = key.replace(/([A-Z])/, KtoLowerCase);
                        if (pKey == 'opacity' && isIE) {
                            style += "filter:alpha(opacity=" + (obj[key] * 100) + ");";
                        } else {
                            style += pKey + ":" + obj[key] + ";";
                        }
                    }
                }
                ;
            } else {
                for (var key in obj) {
                    if ($.isArray(excArr)) {
                        if ($.inArray(key, excArr) == -1) {
                            pKey = key.replace(/([A-Z])/, KtoLowerCase);
                            if (pKey == 'opacity' && isIE) {
                                style += "filter:alpha(opacity=" + (obj[key] * 100) + ");";
                            } else {
                                style += pKey + ":" + obj[key] + ";";
                            }
                        }
                    } else {
                        pKey = key.replace(/([A-Z])/, KtoLowerCase);
                        if (pKey == 'opacity' && isIE) {
                            style += "filter:alpha(opacity=" + (obj[key] * 100) + ");";
                        } else {
                            style += pKey + ":" + obj[key] + ";";
                        }
                    }
                }
                ;
            }


            function KtoLowerCase(word) {
                var str = '';
                str = '-' + word.toLowerCase();
                return str;
            }
            ;
            return style;
        };

        /* 运行 */
        k.run();

    }

})(jQuery)



/*多图滚动轮播*/
$(document).ready(function(e) {
    /***不需要自动滚动，去掉即可***/
/*    time = window.setInterval(function() {
        $('.og_next').click();
    }, 5000);*/
    /***不需要自动滚动，去掉即可***/
    linum = $('.mainlist li').length;//图片数量
    w = linum * 250;//ul宽度
    //$('.piclist').css('width', w + 'px');//ul宽度
    //$('.swaplist').html($('.mainlist').html());//复制内容

    /*	$('.og_next').click(function(){
     
     if($('.swaplist,.mainlist').is(':animated')){
     $('.swaplist,.mainlist').stop(true,true);
     }
     
     if($('.mainlist li').length>4){//多于4张图片
     ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
     sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
     if(ml<=0 && ml>w*-1){//默认图片显示时
     $('.swaplist').css({left: '940px'});//交换图片放在显示区域右侧
     $('.mainlist').animate({left: ml - 940 + 'px'},'slow');//默认图片滚动				
     if(ml==(w-940)*-1){//默认图片最后一屏时
     $('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
     }
     }else{//交换图片显示时
     $('.mainlist').css({left: '1000px'})//默认图片放在显示区域右
     $('.swaplist').animate({left: sl - 940 + 'px'},'slow');//交换图片滚动
     if(sl==(w-940)*-1){//交换图片最后一屏时
     $('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
     }
     }
     }
     })
     $('.og_prev').click(function(){
     
     if($('.swaplist,.mainlist').is(':animated')){
     $('.swaplist,.mainlist').stop(true,true);
     }
     
     if($('.mainlist li').length>4){
     ml = parseInt($('.mainlist').css('left'));
     sl = parseInt($('.swaplist').css('left'));
     if(ml<=0 && ml>w*-1){
     $('.swaplist').css({left: w * -1 + 'px'});
     $('.mainlist').animate({left: ml + 940 + 'px'},'slow');				
     if(ml==0){
     $('.swaplist').animate({left: (w - 940) * -1 + 'px'},'slow');
     }
     }else{
     $('.mainlist').css({left: (w - 940) * -1 + 'px'});
     $('.swaplist').animate({left: sl + 940 + 'px'},'slow');
     if(sl==0){
     $('.mainlist').animate({left: '0px'},'slow');
     }
     }
     }
     })*/
});

function scrollimg(contentid, next, prev, listnum, listwidth) {
    var content = $(contentid);
    var i = 1;  //已知显示的<a>元素的个数
    var count = content.find("img").length;//总共的<a>元素的个数
    var ram = count % listnum;
    var num = Math.floor(count / listnum);
    var apphtml = '';
    var ramn = listnum - ram;
    if (ram > 0)
    {
        content.find("li").each(function() {
            if (ramn > 0) {
                apphtml += '<li>' + $(this).html() + '</li>';
                ramn--;
            } else {
                return false;
            }
        });
        content.append(apphtml);
        num += 1;
    }
    var time;
    $(next).click(function() {
        //查找有没有img的src不存在
        content.find("img[src='']").each(function() {
            $(this).attr('src', $(this).attr('original'));
        });
        if (!content.is(":animated")) {  //判断元素是否正处于动画，如果不处于动画状态，则追加动画。
            if (i < num) {
                i++;
                content.animate({left: "-=" + listwidth + "px"}, 1000);
            } else {
                content.animate({left: 0}, 1000);
                i = 1
            }
        }
    });
    $(prev).click(function() {
        if (!content.is(":animated")) {
            if (i > 1) {
                i--;
                content.animate({left: "+=" + listwidth + "px"}, 1000);
            }
        }
    });
}
    /* Search */
//    $('.btn').bind('click', function() {
//      
//        url = $('.search').attr('href') + 'index.php?route=product/search';
//
//
//        var search = $('input[name=\'search\']').attr('value');
//        var category_id=$('input[name=\'search\']').attr('for');
//         if(category_id!=""){
//         
//            url += '&category_id=' + category_id;
//        }
//        if (search) {
//            url += '&search=' + encodeURIComponent(search);
//        }
//      
//       
//
//        window.location.href = url;
//    });
//    $('.abc').bind('click', function() {
//
//        url = $('.search').attr('href') + 'index.php?route=product/search';
//        
//
//        var search = $('input[name=\'search\']').attr('value');
//        var category_id=$('input[name=\'search\']').attr('for');
//     
//        if (search) {
//            url += '&search=' + encodeURIComponent(search);
//        }
//         if(category_id!=""){
//         
//            url += '&category_id=' + category_id;
//        }
//        window.location.href = url;
//    });
//    $('.head input[name=\'search\']').bind('keydown', function(e) {
//        if (e.keyCode == 13) {
//            url = $('.search').attr('href') + 'index.php?route=product/search';
//
//            var search = $('input[name=\'search\']').attr('value');
//             var category_id=$('input[name=\'search\']').attr('for');
//
//            if (search) {
//                url += '&search=' + encodeURIComponent(search);
//            }
//            if (category_id != "") {
//
//                url += '&category_id=' + category_id;
//            }
////			location = url;
//            window.location.href = url;
//        }
//    });


    $('#text').click(function() {

        if ($(this).val() == "请输入关键字") {
            $(this).val("");
        }
    });
    $("#text").blur(function() {
        if ($("#text").val() == "")
            $("#text").val("请输入关键字");
    });

    /* Ajax Cart */
    $('#cart > .heading a').live('click', function() {
        $('#cart').addClass('active');

        $('#cart').load('index.php?route=module/cart #cart > *');

        $('#cart').live('mouseleave', function() {
            $(this).removeClass('active');
        });
    });

/*小图片轮播*/
$(document).ready(function() {
    scrollimg("#ISL_Cont_1", "#RightArs", "#LeftArs", 4, 920);
    scrollimg("#ISL_Cont_3", "#Right", "#Left", 5, 350);

});

//手机上星云（弹出二维码）
$(function() {
    $('.pop_2code').bind('mousemove', function() {
        $('.code2').fadeIn(500);
    }).bind('mouseout', function(){
        $('.code2').fadeOut(500);
    });
})
