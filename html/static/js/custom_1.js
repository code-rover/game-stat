/* -------------------- Check Browser --------------------- */

function browser() {
	
	var isOpera = !!(window.opera && window.opera.version);  // Opera 8.0+
	var isFirefox = testCSS('MozBoxSizing');                 // FF 0.8+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !isSafari && testCSS('WebkitTransform');  // Chrome 1+
	//var isIE = /*@cc_on!@*/false || testCSS('msTransform');  // At least IE6

	function testCSS(prop) {
	    return prop in document.documentElement.style;
	}
	
	if (isOpera) {
		
		return false;
		
	}else if (isSafari || isChrome) {
		
		return true;
		
	} else {
		
		return false;
		
	}
	
}

/* ---------- IE8 list style hack (:nth-child(odd)) ---------- */

jQuery(document).ready(function($){
	
	if($('.messagesList').width()) {
		
		if(jQuery.browser.version.substring(0, 2) == "8.") {

			$('ul.messagesList li:nth-child(2n+1)').addClass('odd');
			
		}
		
	}
	
});	

var pmap = {
		"1":"副本战斗",
		"2":"副本购买次数",
		"3":"活动副本",
		"4":"活动",
		"5":"活动海加尔山",
		"6":"竞技场",
		"7":"竞技场次数",
		"8":"竞技场爵位",
		"9":"竞技场爵位升级",
		"10":"每日签到",
		"11":"每日签到补签",
		"12":"系统补偿",
		"13":"英雄升星",
		"14":"英雄进化",
		"15":"英雄升级",
		"16":"英雄技能升级",
		"17":"英雄购买技能点数",
		"18":"装备进化",
		"19":"装备合成",
		"20":"装备一件合成",
		"21":"任务",
		"22":"任务",
		"23":"背包出售英雄碎片",
		"24":"背包出售物品",
		"25":"好友领体力",
		"26":"好友切磋",
		"27":"商城金币抽",
		"28":"商城钻石抽",
		"29":"魂匣",
		"30":"副本战斗返还体力",
		"31":"活动副本返还体力",
		"32":"金币商店购买",
		"33":"出售英雄碎片",
		"34":"魂兽升级",
		"35":"魂兽合成",
		"36":"魂兽商店抽奖",
		"37":"礼盒",
		"38":"聊天多使用的次数",
		"39":"护送选择基友",
		"40":"护送系统，抢夺奖励",
		"41":"护送系统，购买面包",
		"42":"护送失败，送奖励",
		"43":"护送放弃，得到奖励",
		"44":"护送完成，得到奖励",
		"45":"护送搜索，消耗金币",
		"46":"活动海加尔山奖励关",
		"47":"签到送魂兽",
		"48":"魂兽装备强化",
		"49":"日登陆活动",
		"50":"连续登陆活动",
		"51":"升级活动",
		"52":"护送活动",
		"53":"魂兽活动",
		"54":"太阳井活动",
		"55":"海山奖励关进攻活动",
		"56":"被踢出公会",
		"57":"被拒绝加入",
		"58":"全员邮件",
		"59":"解散公会",
		"60":"赠送公会月卡的反馈邮件",
		"61":"接受公会月卡的邮件",
		"62":"赠送公会月卡的消耗",
		"63":"月卡系统",
		"64":"礼包卡",
		"65":"活动副本重置",
		"66":"魂侠单抽",
		"67":"魂侠十连抽",
		"68":"使用体验卡",
		"69":"使用增加技能点道具",
		"70":"公会月卡",
		"71":"累计登陆活动",
		"72":"累计充值活动",
		"73":"单次充值活动",
		"74":"升级活动",
		"75":"战力排行活动",
		"76":"累计消费行活动",
		"77":"升级排行活动",
		"78":"购买基金活动",
		"79":"全民福利活动",
		"80":"英雄进阶活动",
		"81":"首日购买体力送钻石活动",
		"82":"首次充值活动",
		"83":"充值",
		"84":"创建公会",
		"85":"公会改名",
		"86":"公会钻石膜拜",
		"87":"购买背包",
		"88":"太阳井重置",
		"89":"海山防守更改",
		"90":"修改玩家名字",
		"91":"公会普通膜拜",
		"92":"礼包赠送",
		"93":"删档充值返利",
		"94":"购买体力",
		"95":"点金手购买",
		"96":"副本重置",
		"97":"金币商店刷新",
		"98":"商城金币单抽",
		"99":"商城金币免费单抽",
		"100":"商城金币10连抽",
		"101":"商城钻石单抽",
		"102":"商城钻石免费单抽",
		"103":"商城钻石10连抽",
		"104":"技能点购买",
		"105":"雇佣好友战斗",
		"106":"雇佣公会成员战斗",
		"107":"海加尔山雇佣好友战斗",
		"108":"海加尔山雇佣公会成员战斗",
		"109":"海加尔山奖励关雇佣好友战斗",
		"110":"海加尔山奖励关雇佣公会成员战斗",
		"111":"碎片合成英雄",
		"112":"金币商店购买",
		"113":"公会英雄派遣",
		"115":"海山奖励关宝箱奖励",
		"116":"海山奖励关防守次数宝箱奖励",
		"117":"装备出售",
		"118":"魔域禁地战斗",
		"119":"海山宝箱奖励",
		"120":"海山战斗",
		"121":"英雄碎片出售",
		"122":"板块副本星级宝箱奖励",
		"123":"竞技爵位奖励",
		"125":"充值活动钻石",
		"126":"装备材料分解",
		"127":"血石商店",
}

var tutorial_map = {
	"2": "第1次完成英雄升级",
	"8": "成功添加1个好友",
	"9": "合成牧一奶",
	"10": "合成小黑",
	"11": "第1次完成“矿洞寻宝”副本",
	"12": "新手任务第2次完成魔狱禁地",
};
var task_map = {
	"1": "奥格城外",
	"2": "逃离",
	"3": "围捕",
	"4": "追兵",
	"5": "忠心",
	"6": "同仇敌忾",
	"7": "优秀的部下",
	"8": "联手",
	"9": "往日阴影",
	"10": "杀出血路",
	"11": "突破重围",
	"12": "烽烟再起",
	"13": "哀嚎",
	"14": "异象",
	"15": "黑暗女王",
	"16": "源源不绝",
	"17": "行踪败露",
	"18": "爆风城主",
	"19": "联手",
	"20": "污染的树人",
	"21": "金尔度",
	"22": "格杀勿论",
	"23": "前路漫漫",
	"24": "小索索",
	"25": "形势严峻",
	"26": "源头",
	"27": "支配者",
	"28": "真相的指引",
	"29": "古堡狼影",
	"30": "狼群",
	"31": "疑团",
	"32": "强敌？",
	"33": "圣光骑士",
	"34": "回响",
	"35": "意志的考验",
	"36": "意外",
	"37": "还未清醒",
	"38": "崩溃的边缘",
	"39": "死亡男爵",
	"40": "新的线索",
	"41": "恢复理智",
	"42": "不期而遇",
	"43": "疯狂野猪",
	"44": "态度坚决",
	"45": "复仇",
	"46": "希望",
	"47": "无法诱惑",
	"48": "德鲁伊",
	"49": "一路人",
	"50": "上古之神",
	"51": "操控",
	"52": "异象突生",
	"53": "小珍珍",
	"54": "各路人马",
	"55": "情侣",
	"56": "安静下来",
	"57": "众多的敌人",
	"58": "矮人之王",
	"59": "清醒",
	"60": "动摇",
	"61": "神秘法阵",
	"62": "立入禁止",
	"63": "墓地",
	"64": "古神的仆从",
	"65": "错误的信任",
	"66": "背叛",
	"67": "再次出手",
	"68": "奇怪的雕像",
	"69": "背叛的奖励",
	"70": "克星？",
	"71": "突然袭击",
	"72": "大局为重",
	"73": "惊喜",
	"74": "钢铁大军",
	"75": "形势险恶",
	"76": "另一批访客",
	"77": "另外的位面",
	"78": "野猪人",
	"79": "高地战事",
	"80": "新队友",
	"81": "罪恶搭档",
	"82": "黑锁",
	"83": "不甘失败",
	"84": "一网打尽",
	"85": "恶魔爪牙",
	"86": "何去何从",
	"87": "无奈之举",
	"88": "失败的尝试",
	"89": "矮人的圣地",
	"90": "泰坦的子民",
	"91": "无人可挡",
	"92": "绝不退缩",
	"93": "上古造物",
	"94": "狼人的杀机",
	"95": "身份验证",
	"96": "一路前行",
	"97": "地精科技",
	"98": "新的线索",
	"99": "追赶",
	"100": "大法师的理智",
	"101": "破冰",
	"102": "一致对外",
	"103": "诺甘农圆盘",
	"104": "日下沙海",
	"105": "坏主人",
	"106": "穷追不舍",
	"107": "艰难跋涉",
	"108": "巨魔之傲",
	"109": "又遇狼人",
	"110": "血仇",
	"111": "古神的宠物",
	"112": "不由自主",
	"113": "沙海血影",
	"114": "被证实的猜想",
	"115": "更强的实力？",
	"116": "巨魔的防御",
	"117": "来迟了？",
	"118": "无能为力",
	"119": "玛拉德",
	"120": "兵分两路",
	"121": "永不为奴",
	"122": "失踪的队友",
	"123": "半人马的地盘",
	"124": "呵缪尔的心事",
	"125": "誓仇",
	"126": "同伴",
	"127": "水火不容",
	"128": "另一股力量",
	"129": "最后的希望",
	"130": "新新新发明",
	"131": "绝不投降",
	"132": "最后一个队友",
	"133": "一个都不能少",

};
$(document).ready(function(){
		
			
	$("#username").focus(function() {
		
		$(this).parent(".input-prepend").addClass("input-prepend-focus");
	
	});
	
	$("#username").focusout(function() {
		
		$(this).parent(".input-prepend").removeClass("input-prepend-focus");
	
	});
	
	$("#password").focus(function() {
		
		$(this).parent(".input-prepend").addClass("input-prepend-focus");
	
	});
	
	$("#password").focusout(function() {
		
		$(this).parent(".input-prepend").removeClass("input-prepend-focus");
	
	});
	
				
	/* ---------- Add class .active to current link  ---------- */
	$('ul.main-menu li a').each(function(){
		
			if($($(this))[0].href==String(window.location)) {
				
				$(this).parent().addClass('active');
				
			}
	
	});
	
	$('ul.main-menu li ul li a').each(function(){
		
			if($($(this))[0].href==String(window.location)) {
				
				$(this).parent().addClass('active');
				$(this).parent().parent().show();
				
			}
	
	});
	
	/* ---------- Submenu  ---------- */
	
	$('.dropmenu').click(function(e){

		e.preventDefault();

		$(this).parent().find('ul').slideToggle();
	
	});
			
	/* ---------- Acivate Functions ---------- */
	template_functions();
	init_masonry();
	sparkline_charts();
	charts();
	calendars();
	growlLikeNotifications();
	widthFunctions();
	
	if(jQuery.browser.version.substring(0, 2) == "8.") {
		 
		//disable jQuery Knob
		
	} else {
		
		circle_progess();
		
	}
	
	chart();
	messageLike();	
	
});

/* ---------- Like/Dislike ---------- */

function messageLike(){
	
	if($('.messagesList')) {
		
		$('.messagesList').on('click', '.star', function(){
			
			$(this).removeClass('star');
			
			$(this).addClass('dislikes');
			
			//here add your function
			
		});
		
		$('.messagesList').on('click', '.dislikes', function(){
			
			$(this).removeClass('dislikes');
			
			$(this).addClass('star');
			
			//here add your function
			
		});		
		
	}	
	
}

/* ---------- Check Retina ---------- */

function retina(){
	
	retinaMode = (window.devicePixelRatio > 1);
	
	return retinaMode;
	
}

/* ---------- Chart ---------- */

function chart(){
	
	if($('.verticalChart')) {
		
		$('.singleBar').each(function(){
			
			var theColorIs = $(this).parent().parent().parent().css("background");
			
			var percent = $(this).find('.value span').html();
			
			$(this).find('.value span').css('color',theColorIs);
			
			$(this).find('.value').animate({height:percent}, 2000, function() {
			    
				$(this).find('span').fadeIn();
			 
			});
			
		});
		
	}
	
}

/* ---------- Masonry Gallery ---------- */

function init_masonry(){
    var $container = $('.masonry-gallery');

    var gutter = 6;
    var min_width = 250;
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : '.masonry-thumb',
            gutterWidth: gutter,
            isAnimated: true,
              columnWidth: function( containerWidth ) {
                var num_of_boxes = (containerWidth/min_width | 0);

                var box_width = (((containerWidth - (num_of_boxes-1)*gutter)/num_of_boxes) | 0) ;

                if (containerWidth < min_width) {
                    box_width = containerWidth;
                }

                $('.masonry-thumb').width(box_width);

                return box_width;
              }
        });
    });
}

/* ---------- Numbers Sepparator ---------- */

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
}

/* ---------- Template Functions ---------- */		
		
function template_functions(){
	
	/* ---------- ToDo List Action Buttons ---------- */
	
	$(".todo-remove").click(function(){
		
		$(this).parent().parent().fadeTo("slow", 0.00, function(){ //fade
			$(this).slideUp("slow", function() { //slide up
		    	$(this).remove(); //then remove from the DOM
		    });
		});
		
		
		return false;
	});
	
	$(".todo-list").find('.action').each(function(){
		
		$(this).click(function(){
			
			if($(this).hasClass('icon-check-empty')) {
				
				$(this).removeClass('icon-check-empty');
				$(this).addClass('icon-check');
				
				$(this).parent().css('text-decoration','line-through');
				
			} else {
				
				$(this).removeClass('icon-check');
				$(this).addClass('icon-check-empty');
				
				$(this).parent().css('text-decoration','none');
				
			}
			
			return false;
			
		});
		
	});
	
	

	/* ---------- Skill Bars ---------- */
	$(".meter > span").each(function() {
		
		var getColor = $(this).parent().css('borderTopColor');
				
		$(this).css('background',getColor);
		
		$(this)
		.data("origWidth", $(this).width())
		.width(0)
		.animate({
			width: $(this).data("origWidth")
		}, 3000);
	});
	
	/* ---------- Disable moving to top ---------- */
	$('a[href="#"][data-top!=true]').click(function(e){
		e.preventDefault();
	});
	
	/* ---------- Text editor ---------- */
	$('.cleditor').cleditor();
	
	/* ---------- Datapicker ---------- */
	$('.datepicker').datepicker();
	
	/* ---------- Notifications ---------- */
	$('.noty').click(function(e){
		e.preventDefault();
		var options = $.parseJSON($(this).attr('data-noty-options'));
		noty(options);
	});

	/* ---------- Uniform ---------- */
	$("input:checkbox, input:radio, input:file").not('[data-no-uniform="true"],#uniform-is-ajax').uniform();

	/* ---------- Choosen ---------- */
	$('[data-rel="chosen"],[rel="chosen"]').chosen();

	/* ---------- Tabs ---------- */
	$('#myTab a:first').tab('show');
	$('#myTab a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});

	/* ---------- Makes elements soratble, elements that sort need to have id attribute to save the result ---------- */
	$('.sortable').sortable({
		revert:true,
		cancel:'.btn,.box-content,.nav-header',
		update:function(event,ui){
			//line below gives the ids of elements, you can make ajax call here to save it to the database
			//console.log($(this).sortable('toArray'));
		}
	});

	/* ---------- Tooltip ---------- */
	$('[rel="tooltip"],[data-rel="tooltip"]').tooltip({"placement":"bottom",delay: { show: 400, hide: 200 }});

	/* ---------- Popover ---------- */
	$('[rel="popover"],[data-rel="popover"]').popover();

	/* ---------- File Manager ---------- */
	var elf = $('.file-manager').elfinder({
		url : 'misc/elfinder-connector/connector.php'  // connector URL (REQUIRED)
	}).elfinder('instance');

	/* ---------- Star Rating ---------- */
	$('.raty').raty({
		score : 4 //default stars
	});

	/* ---------- Uploadify ---------- */
	$('#file_upload').uploadify({
		'swf'      : 'misc/uploadify.swf',
		'uploader' : 'misc/uploadify.php'
		// Put your options here
	});

	/* ---------- Fullscreen ---------- */
	$('#toggle-fullscreen').button().click(function () {
		var button = $(this), root = document.documentElement;
		if (!button.hasClass('active')) {
			$('#thumbnails').addClass('modal-fullscreen');
			if (root.webkitRequestFullScreen) {
				root.webkitRequestFullScreen(
					window.Element.ALLOW_KEYBOARD_INPUT
				);
			} else if (root.mozRequestFullScreen) {
				root.mozRequestFullScreen();
			}
		} else {
			$('#thumbnails').removeClass('modal-fullscreen');
			(document.webkitCancelFullScreen ||
				document.mozCancelFullScreen ||
				$.noop).apply(document);
		}
	});

	/* ---------- Datable ---------- */
	$('.datatable').dataTable({
			"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span12'i><'span12 center'p>>",
			"sPaginationType": "bootstrap",
			"oLanguage": {
			"sLengthMenu": "_MENU_ records per page"
			}
		} );
	$('.btn-close').click(function(e){
		e.preventDefault();
		$(this).parent().parent().parent().fadeOut();
	});
	$('.btn-minimize').click(function(e){
		e.preventDefault();
		var $target = $(this).parent().parent().next('.box-content');
		if($target.is(':visible')) $('i',$(this)).removeClass('chevron-up').addClass('chevron-down');
		else 					   $('i',$(this)).removeClass('chevron-down').addClass('chevron-up');
		$target.slideToggle();
	});
	$('.btn-setting').click(function(e){
		e.preventDefault();
		$('#myModal').modal('show');
	});
	
	
	/* ---------- Progress  ---------- */

		$(".simpleProgress").progressbar({
			value: 89
		});

		$(".progressAnimate").progressbar({
			value: 1,
			create: function() {
				$(".progressAnimate .ui-progressbar-value").animate({"width":"100%"},{
					duration: 10000,
					step: function(now){
						$(".progressAnimateValue").html(parseInt(now)+"%");
					},
					easing: "linear"
				})
			}
		});

		$(".progressUploadAnimate").progressbar({
			value: 1,
			create: function() {
				$(".progressUploadAnimate .ui-progressbar-value").animate({"width":"100%"},{
					duration: 20000,
					easing: 'linear',
					step: function(now){
						$(".progressUploadAnimateValue").html(parseInt(now*40.96)+" Gb");
					},
					complete: function(){
						$(".progressUploadAnimate + .field_notice").html("<span class='must'>Upload Finished</span>");
					} 
				})
			}
		});
		
		if($(".taskProgress")) {
		
			$(".taskProgress").each(function(){
				
				var endValue = parseInt($(this).html());
												
				$(this).progressbar({
					value: endValue
				});
				
				$(this).parent().find(".percent").html(endValue + "%");
				
			});
		
		}
		
		if($(".progressBarValue")) {
		
			$(".progressBarValue").each(function(){
				
				var endValueHTML = $(this).find(".progressCustomValueVal").html();
				
				var endValue = parseInt(endValueHTML);
												
				$(this).find(".progressCustomValue").progressbar({
					
					value: 1,
					create: function() {
						$(this).find(".ui-progressbar-value").animate({"width": endValue + "%"},{
							duration: 5000,
							step: function(now){
																
								$(this).parent().parent().parent().find(".progressCustomValueVal").html(parseInt(now)+"%");
							},
							easing: "linear"
						})
					}
				});
				
			});
		
		}
	
	
	/* ---------- Custom Slider ---------- */
		$(".sliderSimple").slider();

		$(".sliderMin").slider({
			range: "min",
			value: 180,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMinLabel" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-1").slider({
			range: "min",
			value: 50,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMin1Label" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-2").slider({
			range: "min",
			value: 100,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMin2Label" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-3").slider({
			range: "min",
			value: 150,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMin3Label" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-4").slider({
			range: "min",
			value: 250,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMin4Label" ).html( "$" + ui.value );
			}
		});

		$(".sliderMin-5").slider({
			range: "min",
			value: 350,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderLabel" ).html( "$" + ui.value );
			}
		});
		
		$(".sliderMin-6").slider({
			range: "min",
			value: 450,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderLabel" ).html( "$" + ui.value );
			}
		});
		
		$(".sliderMin-7").slider({
			range: "min",
			value: 550,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderLabel" ).html( "$" + ui.value );
			}
		});
		
		$(".sliderMin-8").slider({
			range: "min",
			value: 650,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderLabel" ).html( "$" + ui.value );
			}
		});
		
		
		$(".sliderMax").slider({
			range: "max",
			value: 280,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( ".sliderMaxLabel" ).html( "$" + ui.value );
			}
		});

		$( ".sliderRange" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 192, 470 ],
			slide: function( event, ui ) {
				$( ".sliderRangeLabel" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});

		$( "#sliderVertical-1" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 60,
		});

		$( "#sliderVertical-2" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 40,
		});

		$( "#sliderVertical-3" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 30,
		});

		$( "#sliderVertical-4" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 15,
		});

		$( "#sliderVertical-5" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 40,
		});

		$( "#sliderVertical-6" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 80,
		});
		
		$( "#sliderVertical-7" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 60,
		});

		$( "#sliderVertical-8" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 40,
		});

		$( "#sliderVertical-9" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 30,
		});

		$( "#sliderVertical-10" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 15,
		});

		$( "#sliderVertical-11" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 40,
		});

		$( "#sliderVertical-12" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 80,
		});
			
}

/* ---------- Circle Progess Bars ---------- */

function circle_progess() {
	
	var divElement = $('div'); //log all div elements
	
	if (retina()) {
		
		$(".whiteCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 240,
	        'height': 240,
			'bgColor': 'rgba(255,255,255,0.5)',
	        'fgColor': 'rgba(255,255,255,0.9)',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true
	    });
	
		$(".circleStat").css('zoom',0.5);
		$(".whiteCircle").css('zoom',0.999);
		
		
	} else {
		
		$(".whiteCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 120,
	        'height': 120,
			'bgColor': 'rgba(255,255,255,0.5)',
	        'fgColor': 'rgba(255,255,255,0.9)',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true
	    });
		
	}
	
	
	
	$(".circleStatsItemBox").each(function(){
		
		var value = $(this).find(".value > .number").html();
		var unit = $(this).find(".value > .unit").html();
		var percent = $(this).find("input").val()/100;
		
		countSpeed = 2300*percent;
		
		endValue = value*percent;
		
		$(this).find(".count > .unit").html(unit);
		$(this).find(".count > .number").countTo({
			
			from: 0,
		    to: endValue,
		    speed: countSpeed,
		    refreshInterval: 50
		
		});
		
		//$(this).find(".count").html(value*percent + unit);
		
	});
	
}                

      

/* ---------- Calendars ---------- */

function calendars(){
	

	$('#external-events div.external-event').each(function() {

		// it doesn't need to have a start or end
		var eventObject = {
			title: $.trim($(this).text()) // use the element's text as the event title
		};
		
		// store the Event Object in the DOM element so we can get to it later
		$(this).data('eventObject', eventObject);
		
		// make the event draggable using jQuery UI
		$(this).draggable({
			zIndex: 999,
			revert: true,      // will cause the event to go back to its
			revertDuration: 0  //  original position after the drag
		});
		
	});
	
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	$('#main_calendar').fullCalendar({
		header: {
			left: 'title',
			right: 'prev,next today,month,agendaWeek,agendaDay'
		},
		editable: true,
		events: [
			{
				title: 'All Day Event',
				start: new Date(y, m, 1)
			},
			{
				title: 'Long Event',
				start: new Date(y, m, d-5),
				end: new Date(y, m, d-2)
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d-3, 16, 0),
				allDay: false
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d+4, 16, 0),
				allDay: false
			},
			{
				title: 'Meeting',
				start: new Date(y, m, d, 10, 30),
				allDay: false
			},
			{
				title: 'Lunch',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false
			},
			{
				title: 'Birthday Party',
				start: new Date(y, m, d+1, 19, 0),
				end: new Date(y, m, d+1, 22, 30),
				allDay: false
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://google.com/'
			}
		]
	});
	
	$('#main_calendar_phone').fullCalendar({
		header: {
			left: 'title',
			right: 'prev,next'
		},
		defaultView: 'agendaDay',
		editable: true,
		events: [
			{
				title: 'All Day Event',
				start: new Date(y, m, 1)
			},
			{
				title: 'Long Event',
				start: new Date(y, m, d-5),
				end: new Date(y, m, d-2)
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d-3, 16, 0),
				allDay: false
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d+4, 16, 0),
				allDay: false
			},
			{
				title: 'Meeting',
				start: new Date(y, m, d, 10, 30),
				allDay: false
			},
			{
				title: 'Lunch',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false
			},
			{
				title: 'Birthday Party',
				start: new Date(y, m, d+1, 19, 0),
				end: new Date(y, m, d+1, 22, 30),
				allDay: false
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://google.com/'
			}
		]
	});		
	
			
	$('#calendar').fullCalendar({
		header: {
			left: 'title',
			right: 'prev,next today,month,agendaWeek,agendaDay'
		},
		editable: true,
		droppable: true, // this allows things to be dropped onto the calendar !!!
		drop: function(date, allDay) { // this function is called when something is dropped
		
			// retrieve the dropped element's stored Event Object
			var originalEventObject = $(this).data('eventObject');
			
			// we need to copy it, so that multiple events don't have a reference to the same object
			var copiedEventObject = $.extend({}, originalEventObject);
			
			// assign it the date that was reported
			copiedEventObject.start = date;
			copiedEventObject.allDay = allDay;
			
			// render the event on the calendar
			// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
			$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
			
			// is the "remove after drop" checkbox checked?
			if ($('#drop-remove').is(':checked')) {
				// if so, remove the element from the "Draggable Events" list
				$(this).remove();
			}
			
		}
	});
	
}

/* ---------- Sparkline Charts ---------- */

function sparkline_charts() {
	
	//generate random number for charts
	randNum = function(){
		//return Math.floor(Math.random()*101);
		return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
	}

	var chartColours = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];

	//sparklines (making loop with random data for all 7 sparkline)
	i=1;
	for (i=1; i<9; i++) {
	 	var data = [[1, 3+randNum()], [2, 5+randNum()], [3, 8+randNum()], [4, 11+randNum()],[5, 14+randNum()],[6, 17+randNum()],[7, 20+randNum()], [8, 15+randNum()], [9, 18+randNum()], [10, 22+randNum()]];
	 	placeholder = '.sparkLineStats' + i;
		
		if (retina()) {
			
			$(placeholder).sparkline(data, {
				width: 160,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
				height: 80,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
				lineColor: '#ffffff',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
				fillColor: 'rgba(255,255,255,0.2)',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
				spotColor: '#ffffff',//The CSS colour of the final value marker. Set to false or an empty string to hide it
				maxSpotColor: '#ffffff',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
				minSpotColor: '#ffffff',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
				spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
				lineWidth: 1//In pixels (default: 1) - Integer
			});
			
			$(placeholder).css('zoom',0.5);
			
		} else {
			
			if($.browser.msie  && parseInt($.browser.version, 10) === 8) {
				
				$(placeholder).sparkline(data, {
					width: 80,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
					height: 40,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
					lineColor: '#ffffff',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
					fillColor: '#ffffff',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
					spotColor: '#ffffff',//The CSS colour of the final value marker. Set to false or an empty string to hide it
					maxSpotColor: '#ffffff',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
					minSpotColor: '#ffffff',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
					spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
					lineWidth: 1//In pixels (default: 1) - Integer
				});
				
			} else {
				
				$(placeholder).sparkline(data, {
					width: 80,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
					height: 40,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
					lineColor: '#ffffff',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
					fillColor: 'rgba(255,255,255,0.2)',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
					spotColor: '#ffffff',//The CSS colour of the final value marker. Set to false or an empty string to hide it
					maxSpotColor: '#ffffff',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
					minSpotColor: '#ffffff',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
					spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
					lineWidth: 1//In pixels (default: 1) - Integer
				});
				
			}
			
		}
	
	}
	
	if($(".boxchart")) {
		
		if (retina()) {
			
			$(".boxchart").sparkline('html', {
			    type: 'bar',
			    height: '120', // Double pixel number for retina display
				barWidth: '8', // Double pixel number for retina display
				barSpacing: '2', // Double pixel number for retina display
			    barColor: '#ffffff',
			    negBarColor: '#eeeeee'}
			);
			
			$(".boxchart").css('zoom',0.5);
			
		} else {
			
			$(".boxchart").sparkline('html', {
			    type: 'bar',
			    height: '60',
				barWidth: '4',
				barSpacing: '1',
			    barColor: '#ffffff',
			    negBarColor: '#eeeeee'}
			);
			
		}		
		
	}
		
}

/* ---------- Charts ---------- */

function charts() {
	
	function randNum(){
		return ((Math.floor( Math.random()* (1+40-20) ) ) + 20)* 1200;
	}
	
	function randNum2(){
		return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 500;
	}
	
	function randNum3(){
		return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 300;
	}
	
	function randNum4(){
		return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 100;
	}
	
	/* ---------- Chart with points ---------- */
	if($("#stats-chart2").length)
	{	
		var pageviews = [[1, 5+randNum()], [1.5, 10+randNum()], [2, 15+randNum()], [2.5, 20+randNum()],[3, 25+randNum()],[3.5, 30+randNum()],[4, 35+randNum()],[4.5, 40+randNum()],[5, 45+randNum()],[5.5, 50+randNum()],[6, 55+randNum()],[6.5, 60+randNum()],[7, 65+randNum()],[7.5, 70+randNum()],[8, 75+randNum()],[8.5, 80+randNum()],[9, 85+randNum()],[9.5, 90+randNum()],[10, 85+randNum()],[10.5, 80+randNum()],[11, 75+randNum()],[11.5, 80+randNum()],[12, 75+randNum()],[12.5, 70+randNum()],[13, 65+randNum()],[13.5, 75+randNum()],[14,80+randNum()],[14.5, 85+randNum()],[15, 90+randNum()], [15.5, 95+randNum()], [16, 5+randNum()], [16.5, 15+randNum()], [17, 15+randNum()], [17.5, 10+randNum()], [18, 15+randNum()], [18.5, 20+randNum()],[19, 25+randNum()],[19.5, 30+randNum()],[20, 35+randNum()],[20.5, 40+randNum()],[21, 45+randNum()],[21.5, 50+randNum()],[22, 55+randNum()],[22.5, 60+randNum()],[23, 65+randNum()],[23.5, 70+randNum()],[24, 75+randNum()],[24.5, 80+randNum()],[25, 85+randNum()],[25.5, 90+randNum()],[26, 85+randNum()],[26.5, 80+randNum()],[27, 75+randNum()],[27.5, 80+randNum()],[28, 75+randNum()],[28.5, 70+randNum()],[29, 65+randNum()],[29.5, 75+randNum()],[30,80+randNum()]];
		var visits = [[1, randNum2()-10], [2, randNum2()-10], [3, randNum2()-10], [4, randNum2()],[5, randNum2()],[6, 4+randNum2()],[7, 5+randNum2()],[8, 6+randNum2()],[9, 6+randNum2()],[10, 8+randNum2()],[11, 9+randNum2()],[12, 10+randNum2()],[13,11+randNum2()],[14, 12+randNum2()],[15, 13+randNum2()],[16, 14+randNum2()],[17, 15+randNum2()],[18, 15+randNum2()],[19, 16+randNum2()],[20, 17+randNum2()],[21, 18+randNum2()],[22, 19+randNum2()],[23, 20+randNum2()],[24, 21+randNum2()],[25, 14+randNum2()],[26, 24+randNum2()],[27,25+randNum2()],[28, 26+randNum2()],[29, 27+randNum2()], [30, 31+randNum2()]];
		var visitors = [[1, 5+randNum3()], [2, 10+randNum3()], [3, 15+randNum3()], [4, 20+randNum3()],[5, 25+randNum3()],[6, 30+randNum3()],[7, 35+randNum3()],[8, 40+randNum3()],[9, 45+randNum3()],[10, 50+randNum3()],[11, 55+randNum3()],[12, 60+randNum3()],[13, 65+randNum3()],[14, 70+randNum3()],[15, 75+randNum3()],[16, 80+randNum3()],[17, 85+randNum3()],[18, 90+randNum3()],[19, 85+randNum3()],[20, 80+randNum3()],[21, 75+randNum3()],[22, 80+randNum3()],[23, 75+randNum3()],[24, 70+randNum3()],[25, 65+randNum3()],[26, 75+randNum3()],[27,80+randNum3()],[28, 85+randNum3()],[29, 90+randNum3()], [30, 95+randNum3()]];
		var newVisitors = [[1, randNum4()-10], [2, randNum4()-10], [3, randNum4()-10], [4, randNum4()],[5, randNum4()],[6, 4+randNum4()],[7, 5+randNum4()],[8, 6+randNum4()],[9, 6+randNum4()],[10, 8+randNum4()],[11, 9+randNum4()],[12, 10+randNum4()],[13,11+randNum4()],[14, 12+randNum4()],[15, 13+randNum4()],[16, 14+randNum4()],[17, 15+randNum4()],[18, 15+randNum4()],[19, 16+randNum4()],[20, 17+randNum4()],[21, 18+randNum4()],[22, 19+randNum4()],[23, 20+randNum4()],[24, 21+randNum4()],[25, 14+randNum4()],[26, 24+randNum4()],[27,25+randNum4()],[28, 26+randNum4()],[29, 27+randNum4()], [30, 31+randNum4()]];

		var plot = $.plot($("#stats-chart2"),
			   [ { data: visitors, 
				   label: "Visits", 
				   lines: { show: true, 
							fill: false,
							lineWidth: 2 
						  },
				   shadowSize: 0	
				  }, {
					data: pageviews,
					bars: { show: true,
							fill: false, 
							barWidth: 0.1, 
							align: "center",
							lineWidth: 5,
					}
				  }
				], {
				   
				   grid: { hoverable: true, 
						   clickable: true, 
						   tickColor: "rgba(255,255,255,0.05)",
						   borderWidth: 0
						 },
				 legend: {
						    show: false
						},	
				   colors: ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)"],
				xaxis: {ticks:15, tickDecimals: 0, color: "rgba(255,255,255,0.8)" },
					yaxis: {ticks:5, tickDecimals: 0, color: "rgba(255,255,255,0.8)" },
				});
		
		/*
		   [ { data: visitors, label: "Visits"}], {
			   series: {
				   lines: { show: true,
							lineWidth: 2
						 },
				   points: { show: true, 
							 lineWidth: 2 
						 },
				   shadowSize: 0
			   },	
			   grid: { hoverable: true, 
					   clickable: true, 
					   tickColor: "rgba(255,255,255,0.025)",
					   borderWidth: 0
					 },
			 legend: {
					    show: false
					},	
			   colors: ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)"],
				xaxis: {ticks:15, tickDecimals: 0},
				yaxis: {ticks:5, tickDecimals: 0},
			 });
		*/		
		
				

		function showTooltip(x, y, contents) {
		
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}

		var previousPoint = null;
		$("#stats-chart2").bind("plothover", function (event, pos, item) {
			$("#x").text(pos.x.toFixed(2));
			$("#y").text(pos.y.toFixed(2));

				if (item) {
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;

						$("#tooltip").remove();
						var x = item.datapoint[0].toFixed(2),
							y = item.datapoint[1].toFixed(2);

						showTooltip(item.pageX, item.pageY,
									item.series.label + " of " + x + " = " + y);
					}
				}
				else {
					$("#tooltip").remove();
					previousPoint = null;
				}
		});
	
	}
	
	function randNumFB(){
		return ((Math.floor( Math.random()* (1+40-20) ) ) + 20);
	}
	
	
	
	function randNumTW(){
		return ((Math.floor( Math.random()* (1+40-20) ) ) + 20);
	}
	
	
	
	
	/* ---------- Chart with points ---------- */
	if($("#stats-chart").length)
	{
		var visitors = [[1, randNum()-10], [2, randNum()-10], [3, randNum()-10], [4, randNum()],[5, randNum()],[6, 4+randNum()],[7, 5+randNum()],[8, 6+randNum()],[9, 6+randNum()],[10, 8+randNum()],[11, 9+randNum()],[12, 10+randNum()],[13,11+randNum()],[14, 12+randNum()],[15, 13+randNum()],[16, 14+randNum()],[17, 15+randNum()],[18, 15+randNum()],[19, 16+randNum()],[20, 17+randNum()],[21, 18+randNum()],[22, 19+randNum()],[23, 20+randNum()],[24, 21+randNum()],[25, 14+randNum()],[26, 24+randNum()],[27,25+randNum()],[28, 26+randNum()],[29, 27+randNum()], [30, 31+randNum()]];

		var plot = $.plot($("#stats-chart"),
			   [ { data: visitors, label: "visitors" } ], {
				   series: {
					   lines: { show: true,
								lineWidth: 3,
								fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
							 },
					   points: { show: true },
					   shadowSize: 2
				   },
				   grid: { hoverable: true, 
						   clickable: true, 
						   tickColor: "#eee",
						   borderWidth: 0,
						 },
				   colors: ["#b1d3d4"],
					xaxis: {ticks:11, tickDecimals: 0},
					yaxis: {ticks:11, tickDecimals: 0},
				 });

		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}

		var previousPoint = null;
		$("#stats-chart").bind("plothover", function (event, pos, item) {
			$("#x").text(pos.x.toFixed(2));
			$("#y").text(pos.y.toFixed(2));

				if (item) {
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;

						$("#tooltip").remove();
						var x = item.datapoint[0].toFixed(2),
							y = item.datapoint[1].toFixed(2);

						showTooltip(item.pageX, item.pageY,
									item.series.label + " of " + x + " = " + y);
					}
				}
				else {
					$("#tooltip").remove();
					previousPoint = null;
				}
		});
		


		$("#sincos").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
				plot.highlight(item.series, item.datapoint);
			}
		});
	}
	
	var options = {
		series: {
			lines: { show: true,
				 lineWidth: 2,
				},
			points: { show: true },
			shadowSize: 2
		},
		grid: { hoverable: true, 
				clickable: true, 
				tickColor: "#dddddd",
				borderWidth: 0 
				},
		xaxes:[ 
			{
				mode: "time",                
				
				tickFormatter: function (val, axis) {            
						var now = new Date(val * 1000)
						return now.getMonth()+1 + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes();
				},
				color: "black",
				position: "bottom",
				axisLabel: "Day of week",
				axisLabelUseCanvas: true,
				axisLabelFontSizePixels: 12,
				axisLabelFontFamily: 'Verdana, Arial',
				axisLabelPadding: 5
		},
			{}],

		yaxis: { 
			min: 0,
			tickDecimals: 0,
			tickSize: 200	
		},
		zoom: {
			 interactive: true
		},
		pan: {
			interactive: true
		},
		colors: ["#FA5833", "#2FABE9"]
	} 

	 $("input.fetchSeries").click(function () {
		 
		var button = $(this);
                         
		var data = [];
		$.plot($("#sincos"), data, options);
		
		var dataurl = $(this).attr("durl");
		//var dataurl = button.siblings("a").attr("href");
		
		 
		/* ---------- Chart with points ---------- */
		if($("#sincos").length)
		{
			function showTooltip1(x, y, contents) {
				$('<div id="tooltip">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					'z-index': 9999,
					top: y + 5,
					left: x + 5,
					border: '1px solid #fdd',
					padding: '2px',
					'background-color': '#dfeffc',
					opacity: 0.80
				}).appendTo("body").fadeIn(200);
			}
	
			var previousPoint = null;
			$("#sincos").bind("plothover", function (event, pos, item) {
				if (item) {
					if (previousPoint != item.dataIndex) {
						previousPoint = item.dataIndex;

						$("#tooltip").remove();
						var x = item.datapoint[0];//.toFixed(0),
							y = item.datapoint[1];//.toFixed(0);

						var now = new Date(x * 1000)
						var t = now.getMonth()+1 + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes();	
						
						$("#x").text(t);
						$("#y").text(y);	
						
						showTooltip1(item.pageX, item.pageY,
									item.series.label + " of " + t + "&nbsp;&nbsp;" + y);
					}
				}
				else {
					$("#tooltip").remove();
					previousPoint = null;
				}
			});
			
	
			$("#sincos").bind("plotclick", function (event, pos, item) {
				if (item) {
					alert(pos);
					$("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
					
					//plot.highlight(item.series, item.datapoint);
				}
			});
			
			
			
			function onDataReceived(series) {
				var firstcoordinate = "(" + series.data[0][0] + ", " + series.data[0][1] + ")";
				//button.siblings("span").text("Fetched " + series.label + ", first point: " + firstcoordinate)    ;

				data.push(series);
				
				$.plot($("#sincos"), data, options);
			}
	
			$.ajax({
					url: dataurl,
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	
	$("input.fetchSeries:first").click();


	 $("#btn_flush").click(function () {
		var stack = 0, bars = true, lines = false, steps = false;

		var options = {
			colors: ["#FA5833", "#2FABE9", "#FABB3D"],
			grid: { 
				hoverable: true, 
				clickable: true, 
				tickColor: "#dddddd",
				borderWidth: 2 
			},
			bars: {
				align: "center",
			},
			series: {
				stack: stack,
				lines: { show: lines, fill: true, steps: steps },
				bars: { show: bars, barWidth: 0.6 },
			},
			xaxis: {
				tickSize: 1	
			},
		};

	function showTooltip1(x, y, contents) {
		$('<div id="tooltip">' + contents + '</div>').css( {
			position: 'absolute',
			display: 'none',
			'z-index': 9999,
			top: y + 5,
			left: x + 5,
			border: '1px solid #fdd',
			padding: '2px',
			'background-color': '#dfeffc',
			opacity: 0.80
		}).appendTo("body").fadeIn(200);
	}

	var previousPoint = null;
	$("#levelchart").bind("plothover", function (event, pos, item) {
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;

				$("#tooltip").remove();
				var x = item.datapoint[0];//.toFixed(0),
					y = item.datapoint[1];//.toFixed(0);

				$("#x").text(x);
				$("#y").text(y);	
				
				showTooltip1(item.pageX, item.pageY,
							item.series.label + " of " + x + "&nbsp;&nbsp;" + y);
			}
		}
		else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
		var button = $(this);
                         
		var data = [];
		$.plot($("#levelchart"), data, options);
		 
		/* ---------- Chart with points ---------- */
		if($("#levelchart").length)
		{
			function onDataReceived(series) {
				data.push(series);
				
				$.plot($("#levelchart"), data, options);
			}
	
			$.ajax({
					url: "http://192.168.1.222:8080/lua?req=2",
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	$("#btn_flush").click();



	
	var mm = {}; 

	/* consume */
	 $("#btn_flush_consume_diamond").click(function () {
		var stack = true, bars = true, lines = false, steps = true;

		var options = {
			colors: ["#FA5833", "#2FABE9", "#FABB3D"],
			grid: { 
				hoverable: true, 
				clickable: true, 
				tickColor: "#dddddd",
				borderWidth: 2 
			},
			bars: {
				align: "center",
			},
			series: {
				stack: stack,
				//lines: { show: lines, fill: true, steps: steps },
				bars: { show: bars, barWidth: 0.5 },
			},
			xaxis: {
				tickFormatter: function (val, axis) {            
						//var v = typeof(pmap[val]) == "undefined" ? "" : pmap[val];
						var v = typeof(mm[val]) == "undefined" ? "" : mm[val];
						return v;
				},
				//ticks: [[67, "zero"], [32, "one mark"], [55, "two marks"]],

				tickSize: 1	
			},
		};

	function showTooltip1(x, y, contents) {
		$('<div id="tooltip">' + contents + '</div>').css( {
			position: 'absolute',
			display: 'none',
			'z-index': 9999,
			top: y + 5,
			left: x + 5,
			border: '1px solid #fdd',
			padding: '2px',
			'background-color': '#dfeffc',
			opacity: 0.80
		}).appendTo("body").fadeIn(200);
	}

	var previousPoint = null;
	$("#consume-diamond").bind("plothover", function (event, pos, item) {
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;

				$("#tooltip").remove();
				var x = item.datapoint[0];//.toFixed(0),
					y = item.datapoint[1];//.toFixed(0);

				$("#x").text(x);
				$("#y").text(y);	
				
				showTooltip1(item.pageX, item.pageY,
							item.series.label + " of " + mm[x] + "&nbsp;&nbsp;" + y);
			}
		}
		else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
		var button = $(this);
                         
		var data = [];
		$.plot($("#consume-diamond"), data, options);
		 
		/* ---------- Chart with points ---------- */
		if($("#consume-diamond").length)
		{
			function onDataReceived(series) {
				var data = series.data;
				for(var k in data) {
					//mm[data[k][0]] = pmap[data[k][0]];	
					mm[k] = pmap[data[k][0]];	
					series.data[k][0] = k;
				};

				data.push(series);
				
				$.plot($("#consume-diamond"), data, options);
			}
	
			$.ajax({
					url: "http://192.168.1.222:8080/lua?req=3",
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	$("#btn_flush_consume_diamond").click();


	/* consume_gold */
	var mm_gold = {}; 

	 $("#btn_flush_consume_gold").click(function () {
		var stack = true, bars = true, lines = false, steps = true;

		var options = {
			colors: ["#FA5833", "#2FABE9", "#FABB3D"],
			grid: { 
				hoverable: true, 
				clickable: true, 
				tickColor: "#dddddd",
				borderWidth: 2 
			},
			bars: {
				align: "center",
			},
			series: {
				stack: stack,
				bars: { show: bars, barWidth: 0.5 },
			},
			xaxis: {
				tickFormatter: function (val, axis) {            
						var v = typeof(mm_gold[val]) == "undefined" ? "" : mm_gold[val];
						return v;
				},

				tickSize: 1	
			},
		};

	function showTooltip1(x, y, contents) {
		$('<div id="tooltip">' + contents + '</div>').css( {
			position: 'absolute',
			display: 'none',
			'z-index': 9999,
			top: y + 5,
			left: x + 5,
			border: '1px solid #fdd',
			padding: '2px',
			'background-color': '#dfeffc',
			opacity: 0.80
		}).appendTo("body").fadeIn(200);
	}

	var previousPoint = null;
	$("#consume-gold").bind("plothover", function (event, pos, item) {
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;

				$("#tooltip").remove();
				var x = item.datapoint[0];//.toFixed(0),
					y = item.datapoint[1];//.toFixed(0);

				$("#x").text(mm_gold[x]);
				$("#y").text(y);	
				
				showTooltip1(item.pageX, item.pageY,
							item.series.label + " of " + mm_gold[x] + "&nbsp;&nbsp;" + y);
			}
		}
		else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
		var button = $(this);
                         
		var data = [];
		$.plot($("#consume-gold"), data, options);
		 
		/* ---------- Chart with points ---------- */
		if($("#consume-gold").length)
		{
			function onDataReceived(series) {
				var data = series.data;
				for(var k in data) {
					mm_gold[k] = pmap[data[k][0]];	
					series.data[k][0] = k;
				};

				data.push(series);
				
				$.plot($("#consume-gold"), data, options);
			}
	
			$.ajax({
					url: "http://192.168.1.222:8080/lua?req=4",
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	$("#btn_flush_consume_gold").click();

	
	/* task-tutorial */
	var mm_tutorial = {}; 

	 $("#btn_flush_tutorial").click(function () {
		var stack = true, bars = true, lines = false, steps = true;

		var options = {
			colors: ["#FA5833", "#2FABE9", "#FABB3D"],
			grid: { 
				hoverable: true, 
				clickable: true, 
				tickColor: "#dddddd",
				borderWidth: 2 
			},
			bars: {
				align: "center",
			},
			series: {
				stack: stack,
				bars: { show: bars, barWidth: 0.5 },
			},
			xaxis: {
				tickFormatter: function (val, axis) {            
						var v = typeof(mm_tutorial[val]) == "undefined" ? "" : mm_tutorial[val];
						return v;
				},

				tickSize: 1	
			},
		};

	function showTooltip1(x, y, contents) {
		$('<div id="tooltip">' + contents + '</div>').css( {
			position: 'absolute',
			display: 'none',
			'z-index': 9999,
			top: y + 5,
			left: x + 5,
			border: '1px solid #fdd',
			padding: '2px',
			'background-color': '#dfeffc',
			opacity: 0.80
		}).appendTo("body").fadeIn(200);
	}

	var previousPoint = null;
	$("#chart-tutorial").bind("plothover", function (event, pos, item) {
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;

				$("#tooltip").remove();
				var x = item.datapoint[0];//.toFixed(0),
					y = item.datapoint[1];//.toFixed(0);

				$("#x").text(mm_tutorial[x]);
				$("#y").text(y);	
				
				showTooltip1(item.pageX, item.pageY,
							item.series.label + " of " + mm_tutorial[x] + "&nbsp;&nbsp;" + y);
			}
		}
		else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
		var button = $(this);
                         
		var data = [];
		$.plot($("#chart-tutorial"), data, options);
		 
		/* ---------- Chart with points ---------- */
		if($("#chart-tutorial").length)
		{
			function onDataReceived(series) {
				var _data = series.data;
				for(var k in _data) {
					mm_tutorial[k] = tutorial_map[_data[k][0]];	
					series.data[k][0] = k;
				};

				data.push(series);
				
				$.plot($("#chart-tutorial"), data, options);
			}
	
			$.ajax({
					url: "http://192.168.1.222:8080/lua?req=5",
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	$("#btn_flush_tutorial").click();



	/* main-task */
	var mm_maintask = {}; 

	 $("#btn_flush_maintask").click(function () {
		var stack = true, bars = true, lines = false, steps = true;

		var options = {
			//colors: ["#EA6833", "#DFBBE9", "#DBBB3D"],
			grid: { 
				hoverable: true, 
				clickable: true, 
				tickColor: "#dddddf",
				borderWidth: 2 
			},
			bars: {
				align: "center",
			},
			series: {
				stack: stack,
				bars: { show: bars, barWidth: 0.5 },
			},
			xaxis: {
				tickFormatter: function (val, axis) {            
						var v = typeof(mm_maintask[val]) == "undefined" ? "" : mm_maintask[val];
						return v;
				},

				tickSize: 1	
			},
		};

	function showTooltip1(x, y, contents) {
		$('<div id="tooltip">' + contents + '</div>').css( {
			position: 'absolute',
			display: 'none',
			'z-index': 9999,
			top: y + 5,
			left: x + 5,
			border: '1px solid #fdd',
			padding: '2px',
			'background-color': '#dfeffc',
			opacity: 0.80
		}).appendTo("body").fadeIn(200);
	}

	var previousPoint = null;
	$("#main-task").bind("plothover", function (event, pos, item) {
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;

				$("#tooltip").remove();
				var x = item.datapoint[0];//.toFixed(0),
					y = item.datapoint[1];//.toFixed(0);

				//$("#x").text(mm_maintask[x]);
				//$("#y").text(y);	
				
				showTooltip1(item.pageX, item.pageY,
							item.series.label + " of " + mm_maintask[x] + "&nbsp;&nbsp;" + y);
			}
		}
		else {
			$("#tooltip").remove();
			previousPoint = null;
		}
	});
		var button = $(this);
                         
		var data = [];
		$.plot($("#main-task"), data, options);
		 
		/* ---------- Chart with points ---------- */
		if($("#main-task").length)
		{
			function onDataReceived(series) {
				var _data = series.data;
				for(var k in _data) {
					mm_maintask[k] = task_map[_data[k][0]];	
					series.data[k][0] = k;
				};

				data.push(series);
				
				$.plot($("#main-task"), data, options);
			}
	
			$.ajax({
					url: "http://192.168.1.222:8080/lua?req=6",
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	$("#btn_flush_maintask").click();
	
	if($("#level-pie").length)
	{       var data = [];

				var options = {
					series: {
							pie: {
									tilt:0.5,
									show: true
							}
					},
					grid: {
							hoverable: true,
							clickable: true
					},
					legend: {
						show: false
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
				};

			function onDataReceived(series) {
				var _data = series.data;
				for(var k in _data) {
					var tmp = {};
					tmp['label'] = "Lv."+ _data[k][0];	
					tmp['data']  = parseInt(_data[k][1]);	

					data.push(tmp);
				};
				
				$.plot($("#level-pie"), data, options);
			}
	
			$.ajax({
					url: "http://192.168.1.222:8080/lua?req=2",
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		
		function pieHover(event, pos, obj)
		{
			if (!obj)
					return;

			percent = parseFloat(obj.series.percent).toFixed(2);
			$("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
		}
		$("#level-pie").bind("plothover", pieHover);
	}
	
	/* ---------- Donut chart ---------- */
	if($("#donutchart").length)
	{
		$.plot($("#donutchart"), data,
		{
				series: {
						pie: {
								innerRadius: 0.5,
								show: true
						}
				},
				legend: {
					show: false
				},
				colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
		});
	}




	 // we use an inline data source in the example, usually data would
	// be fetched from a server
	var data = [], totalPoints = 300;
	function getRandomData() {
		if (data.length > 0)
			data = data.slice(1);

		// do a random walk
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50;
			var y = prev + Math.random() * 10 - 5;
			if (y < 0)
				y = 0;
			if (y > 100)
				y = 100;
			data.push(y);
		}

		// zip the generated y values with the x values
		var res = [];
		for (var i = 0; i < data.length; ++i)
			res.push([i, data[i]])
		return res;
	}

	// setup control widget
	var updateInterval = 30;
	$("#updateInterval").val(updateInterval).change(function () {
		var v = $(this).val();
		if (v && !isNaN(+v)) {
			updateInterval = +v;
			if (updateInterval < 1)
				updateInterval = 1;
			if (updateInterval > 2000)
				updateInterval = 2000;
			$(this).val("" + updateInterval);
		}
	});

	/* ---------- Realtime chart ---------- */
	if($("#serverLoad").length)
	{	
		var options = {
			series: { shadowSize: 1 },
			lines: { show: true, lineWidth: 3, fill: true, fillColor: { colors: [ { opacity: 0.9 }, { opacity: 0.9 } ] }},
			yaxis: { min: 0, max: 100, tickFormatter: function (v) { return v + "%"; }},
			xaxis: { show: false },
			colors: ["#FA5833"],
			grid: {	tickColor: "#f9f9f9",
					borderWidth: 0, 
			},
		};
		var plot = $.plot($("#serverLoad"), [ getRandomData() ], options);
		function update() {
			plot.setData([ getRandomData() ]);
			// since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			
			setTimeout(update, updateInterval);
		}

		update();
	}
	
	if($("#serverLoad2").length)
	{	
		var options = {
			series: { shadowSize: 1 },
			lines: { show: true, lineWidth: 2, fill: true, fillColor: { colors: [ { opacity: 0.9 }, { opacity: 0.9 } ] }},
			yaxis: { min: 0, max: 100, tickFormatter: function (v) { return v + "%"; }, color: "rgba(255,255,255,0.8)"},
			xaxis: { show: false, color: "rgba(255,255,255,0.8)" },
			colors: ["rgba(255,255,255,0.95)"],
			grid: {	tickColor: "rgba(255,255,255,0.15)",
					borderWidth: 0, 
			},
		};
		var plot = $.plot($("#serverLoad2"), [ getRandomData() ], options);
		function update() {
			plot.setData([ getRandomData() ]);
			// since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			
			setTimeout(update, updateInterval);
		}

		update();
	}
	
	if($("#realtimechart").length)
	{
		var options = {
			series: { shadowSize: 1 },
			lines: { fill: true, fillColor: { colors: [ { opacity: 1 }, { opacity: 0.1 } ] }},
			yaxis: { min: 0, max: 100 },
			xaxis: { show: false },
			colors: ["#F4A506"],
			grid: {	tickColor: "#dddddd",
					borderWidth: 0 
			},
		};
		var plot = $.plot($("#realtimechart"), [ getRandomData() ], options);
		function update() {
			plot.setData([ getRandomData() ]);
			// since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			
			setTimeout(update, updateInterval);
		}

		update();
	}
}

function growlLikeNotifications() {
	
	$('#add-sticky').click(function(){

		var unique_id = $.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a sticky notice!',
			// (string | mandatory) the text inside the notification
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
			// (string | optional) the image to display on the left
			image: 'img/avatar.jpg',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: true,
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'my-sticky-class'
		});

		// You can have it return a unique id, this can be used to manually remove it later using
		/* ----------
		setTimeout(function(){

			$.gritter.remove(unique_id, {
				fade: true,
				speed: 'slow'
			});

		}, 6000)
		*/

		return false;

	});

	$('#add-regular').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a regular notice!',
			// (string | mandatory) the text inside the notification
			text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
			// (string | optional) the image to display on the left
			image: 'img/avatar.jpg',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: false,
			// (int | optional) the time you want it to be alive for before fading out
			time: ''
		});

		return false;

	});

    $('#add-max').click(function(){

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a notice with a max of 3 on screen at one time!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            image: 'img/avatar.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (function) before the gritter notice is opened
            before_open: function(){
                if($('.gritter-item-wrapper').length == 3)
                {
                    // Returning false prevents a new gritter from opening
                    return false;
                }
            }
        });

        return false;

    });

	$('#add-without-image').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a notice without an image!',
			// (string | mandatory) the text inside the notification
			text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
		});

		return false;
	});

    $('#add-gritter-light').click(function(){

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a light notification',
            // (string | mandatory) the text inside the notification
            text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
            class_name: 'gritter-light'
        });

        return false;
    });

	$('#add-with-callbacks').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a notice with callbacks!',
			// (string | mandatory) the text inside the notification
			text: 'The callback is...',
			// (function | optional) function called before it opens
			before_open: function(){
				alert('I am called before it opens');
			},
			// (function | optional) function called after it opens
			after_open: function(e){
				alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
			},
			// (function | optional) function called before it closes
			before_close: function(e, manual_close){
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
				alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
			},
			// (function | optional) function called after it closes
			after_close: function(e, manual_close){
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
				alert('I am called after it closes. ' + manually);
			}
		});

		return false;
	});

	$('#add-sticky-with-callbacks').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a sticky notice with callbacks!',
			// (string | mandatory) the text inside the notification
			text: 'Sticky sticky notice.. sticky sticky notice...',
			// Stickeh!
			sticky: true,
			// (function | optional) function called before it opens
			before_open: function(){
				alert('I am a sticky called before it opens');
			},
			// (function | optional) function called after it opens
			after_open: function(e){
				alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
			},
			// (function | optional) function called before it closes
			before_close: function(e){
				alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
			},
			// (function | optional) function called after it closes
			after_close: function(){
				alert('I am a sticky called after it closes');
			}
		});

		return false;

	});

	$("#remove-all").click(function(){

		$.gritter.removeAll();
		return false;

	});

	$("#remove-all-with-callbacks").click(function(){

		$.gritter.removeAll({
			before_close: function(e){
				alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
			},
			after_close: function(){
				alert('I am called after everything has been closed.');
			}
		});
		return false;

	});


}


/* ---------- Additional functions for data table ---------- */
$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
{
	return {
		"iStart":         oSettings._iDisplayStart,
		"iEnd":           oSettings.fnDisplayEnd(),
		"iLength":        oSettings._iDisplayLength,
		"iTotal":         oSettings.fnRecordsTotal(),
		"iFilteredTotal": oSettings.fnRecordsDisplay(),
		"iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
		"iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
	};
}
$.extend( $.fn.dataTableExt.oPagination, {
	"bootstrap": {
		"fnInit": function( oSettings, nPaging, fnDraw ) {
			var oLang = oSettings.oLanguage.oPaginate;
			var fnClickHandler = function ( e ) {
				e.preventDefault();
				if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
					fnDraw( oSettings );
				}
			};

			$(nPaging).addClass('pagination').append(
				'<ul>'+
					'<li class="prev disabled"><a href="#">&larr; '+oLang.sPrevious+'</a></li>'+
					'<li class="next disabled"><a href="#">'+oLang.sNext+' &rarr; </a></li>'+
				'</ul>'
			);
			var els = $('a', nPaging);
			$(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
			$(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
		},

		"fnUpdate": function ( oSettings, fnDraw ) {
			var iListLength = 5;
			var oPaging = oSettings.oInstance.fnPagingInfo();
			var an = oSettings.aanFeatures.p;
			var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

			if ( oPaging.iTotalPages < iListLength) {
				iStart = 1;
				iEnd = oPaging.iTotalPages;
			}
			else if ( oPaging.iPage <= iHalf ) {
				iStart = 1;
				iEnd = iListLength;
			} else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
				iStart = oPaging.iTotalPages - iListLength + 1;
				iEnd = oPaging.iTotalPages;
			} else {
				iStart = oPaging.iPage - iHalf + 1;
				iEnd = iStart + iListLength - 1;
			}

			for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
				// remove the middle elements
				$('li:gt(0)', an[i]).filter(':not(:last)').remove();

				// add the new list items and their event handlers
				for ( j=iStart ; j<=iEnd ; j++ ) {
					sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
					$('<li '+sClass+'><a href="#">'+j+'</a></li>')
						.insertBefore( $('li:last', an[i])[0] )
						.bind('click', function (e) {
							e.preventDefault();
							oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
							fnDraw( oSettings );
						} );
				}

				// add / remove disabled classes from the static elements
				if ( oPaging.iPage === 0 ) {
					$('li:first', an[i]).addClass('disabled');
				} else {
					$('li:first', an[i]).removeClass('disabled');
				}

				if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
					$('li:last', an[i]).addClass('disabled');
				} else {
					$('li:last', an[i]).removeClass('disabled');
				}
			}
		}
	}
});

/* ---------- Page width functions ---------- */

$(window).bind("resize", widthFunctions);

function widthFunctions(e) {
	
    var winHeight = $(window).height();
    var winWidth = $(window).width();

	var contentHeight = $("#content").height();

	if (winHeight) {
		
		$("#content").css("min-height",winHeight);
		
	}
	
	if (contentHeight) {
		
		$("#sidebar-left2").css("height",contentHeight);
		
	}
    
	if (winWidth < 980 && winWidth > 767) {
		
		if($("#sidebar-left").hasClass("span2")) {
			
			$("#sidebar-left").removeClass("span2");
			$("#sidebar-left").addClass("span1");
			
		}
		
		if($("#content").hasClass("span10")) {
			
			$("#content").removeClass("span10");
			$("#content").addClass("span11");
			
		}
		
		
		$("a").each(function(){
			
			if($(this).hasClass("quick-button-small span1")) {

				$(this).removeClass("quick-button-small span1");
				$(this).addClass("quick-button span2 changed");
			
			}
			
		});
		
		$(".circleStatsItem, .circleStatsItemBox").each(function() {
			
			var getOnTablet = $(this).parent().attr('onTablet');
			var getOnDesktop = $(this).parent().attr('onDesktop');
			
			if (getOnTablet) {
			
				$(this).parent().removeClass(getOnDesktop);
				$(this).parent().addClass(getOnTablet);
			
			}
			  			
		});
		
		$(".box").each(function(){
			
			var getOnTablet = $(this).attr('onTablet');
			var getOnDesktop = $(this).attr('onDesktop');
			
			if (getOnTablet) {
			
				$(this).removeClass(getOnDesktop);
				$(this).addClass(getOnTablet);
			
			}
			  			
		});
		
		$(".widget").each(function(){
			
			var getOnTablet = $(this).attr('onTablet');
			var getOnDesktop = $(this).attr('onDesktop');
			
			if (getOnTablet) {
			
				$(this).removeClass(getOnDesktop);
				$(this).addClass(getOnTablet);
			
			}
			  			
		});
		
		$(".statbox").each(function(){
			
			var getOnTablet = $(this).attr('onTablet');
			var getOnDesktop = $(this).attr('onDesktop');
			
			if (getOnTablet) {
			
				$(this).removeClass(getOnDesktop);
				$(this).addClass(getOnTablet);
			
			}
			  			
		});
							
	} else {
		
		if($("#sidebar-left").hasClass("span1")) {
			
			$("#sidebar-left").removeClass("span1");
			$("#sidebar-left").addClass("span2");
			
		}
		
		if($("#content").hasClass("span11")) {
			
			$("#content").removeClass("span11");
			$("#content").addClass("span11");
			
		}
		
		$("a").each(function(){
			
			if($(this).hasClass("quick-button span2 changed")) {

				$(this).removeClass("quick-button span2 changed");
				$(this).addClass("quick-button-small span1");
			
			}
			
		});
		
		$(".circleStatsItem, .circleStatsItemBox").each(function() {
			
			var getOnTablet = $(this).parent().attr('onTablet');
			var getOnDesktop = $(this).parent().attr('onDesktop');
			
			if (getOnTablet) {
			
				$(this).parent().removeClass(getOnTablet);
				$(this).parent().addClass(getOnDesktop);
			
			}
			  			
		});
		
		$(".box").each(function(){
			
			var getOnTablet = $(this).attr('onTablet');
			var getOnDesktop = $(this).attr('onDesktop');
			
			if (getOnTablet) {
			
				$(this).removeClass(getOnTablet);
				$(this).addClass(getOnDesktop);
			
			}
			  			
		});
		
		$(".widget").each(function(){
			
			var getOnTablet = $(this).attr('onTablet');
			var getOnDesktop = $(this).attr('onDesktop');
			
			if (getOnTablet) {
			
				$(this).removeClass(getOnTablet);
				$(this).addClass(getOnDesktop);
			
			}
			  			
		});
		
		$(".statbox").each(function(){
			
			var getOnTablet = $(this).attr('onTablet');
			var getOnDesktop = $(this).attr('onDesktop');
			
			if (getOnTablet) {
			
				$(this).removeClass(getOnTablet);
				$(this).addClass(getOnDesktop);
			
			}
			  			
		});
		
	}
	
	if($('.timeline')) {
		
		$('.timeslot').each(function(){
			
			var timeslotHeight = $(this).find('.task').outerHeight();
			
			$(this).css('height',timeslotHeight);
			
		});
		
	}

}
