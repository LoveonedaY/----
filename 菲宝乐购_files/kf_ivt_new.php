	var hz6d_guest_id = $53.getCookie('53gid2');

	var hz6d_cus_web_msg_gids = "";
    
	function hz6d_cus_web_msg_open(){
		var openurl = "http://www7.53kf.com/webCompany.php?arg=10045499&style=10&kflist=off&kf=2354569736%40qq.com%2C18627077133%40163.com&zdkf_type=1&language=cn&charset=gbk&username=&userinfo=&introurl=&lyurl=&lytype=0&copartner=&referer=http%3A%2F%2Fwww.fgnmall.com%2F&keyword=http%3A%2F%2Fblog.sina.com.cn%2Fs%2Fblog_14891b7990102vooe.html&brief=&logo=&question=";
		try{
			window.open(openurl,"_blank","height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
		}catch(e){}
	}

//	hz6d_get_guest_id_timer = setTimeout("hz6d_get_guest_id()", 500);
	
	var create_flp_jquery_timer = window.setInterval(function(){
		if (!document.getElementById('hz6d_flp_jquery')) {
			$53.creElm({
				id: 'hz6d_flp_jquery',
				src: 'http://www7.53kf.com/minkh/js/jquery-1.4.2.flp.js?20121127002',
				charset: "utf-8",
				type: 'text/javascript'
			},'script', document.body, 1);
			clearInterval(create_flp_jquery_timer);
		}
	},500);