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

var dataurl = "http://192.168.1.222:8080/lua"
//var dataurl = "http://120.26.14.229:8080/lua"

$(document).ready(function(){
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
	charts();
	//calendars();
	//widthFunctions();
	
	//chart();
	
});

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


/* ---------- Numbers Sepparator ---------- */
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
}


/* ---------- Charts ---------- */

function charts() {
	var chart1_serverid = "0";
	var chart1_snid = "0";

	var chart2_serverid = "0";
	var chart2_snid = "0";

	var chart4_serverid = "0";
	var chart4_snid = "0";

	var chart5_serverid = "0";
	var chart5_snid = "0";

	var chart6_serverid = "0";
	var chart6_snid = "0";

	var chart7_serverid = "0";
	var chart7_snid = "0";

	var date_start_1 = "0";
	var date_end_1 = "0";

	var date_start_4 = "0";
	var date_end_4 = "0";

	var date_start_5 = "0";
	var date_end_5 = "0";

	var date_start_6 = "0";
	var date_end_6 = "0";

	var date_start_7 = "0";
	var date_end_7 = "0";

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

	 $("#btn_flush_online").click(function () {
		 
		var button = $(this);
                         
		var data = [];
		$.plot($("#sincos"), data, options);
		
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
					url: dataurl + "?req=1&serverid=" + chart1_serverid + "&snid=" + chart1_snid + "&start_time=" + date_start_1 + "&end_time=" + date_end_1,
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	
	$("#btn_flush_online").click();


	 $("#btn_flush_2").click(function () {
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
					url: dataurl + "?req=2&serverid=" + chart2_serverid + "&snid=" + chart2_snid,
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	$("#btn_flush_2").click();



	
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
				var _data = series.data;
				for(var k in _data) {
					//mm[data[k][0]] = pmap[data[k][0]];	
					mm[k] = pmap[_data[k][0]];	
					series.data[k][0] = k;
				};

				data.push(series);
				
				$.plot($("#consume-diamond"), data, options);
			}
	
			$.ajax({
					url: dataurl + "?req=3&serverid="+chart4_serverid+"&snid="+chart4_snid+"&start_time="+date_start_4+"&end_time="+date_end_4,
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
				var _data = series.data;
				for(var k in _data) {
					mm_gold[k] = pmap[_data[k][0]];	
					series.data[k][0] = k;
				};

				data.push(series);
				
				$.plot($("#consume-gold"), data, options);
			}
	
			$.ajax({
					//url: dataurl + "?req=4",
					url: dataurl + "?req=4&serverid="+chart5_serverid+"&snid="+chart5_snid+"&start_time="+date_start_5+"&end_time="+date_end_5,
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
					url: dataurl + "?req=5&serverid="+chart6_serverid+"&snid="+chart6_snid+"&start_time="+date_start_6+"&end_time="+date_end_6,
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
					//url: dataurl + "?req=6",
					url: dataurl + "?req=6&serverid="+chart7_serverid+"&snid="+chart7_snid+"&start_time="+date_start_7+"&end_time="+date_end_7,
					type: "GET",
					dataType: "json",
					success: onDataReceived
			});
		}
	
	});
	
	$("#btn_flush_maintask").click();
	
	function load_level_pie() {
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
							url: dataurl + "?req=2&serverid=" + chart2_serverid + "&snid=" + chart2_snid,
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

	}

	load_level_pie();

	//1 服务器选择
	$("#select-serverId-1").change(function() {
		var val = $("#select-serverId-1").val();	
		if(val == "all") val = "0";
		chart1_serverid = val;

		$("#btn_flush_online").click();
	});

	//1 平台选择
	$("#select-snid-1").change(function() {
		var val = $("#select-snid-1").val();	
		if(val == "all") val = "0";
		chart1_snid = val;

		$("#btn_flush_online").click();
	});

	//2 服务器选择
	$("#select-serverId").change(function() {
		var val = $("#select-serverId").val();	
		if(val == "all") val = "0";
		chart2_serverid = val;

		$("#btn_flush_2").click();
		load_level_pie();
	});

	//2 平台选择
	$("#select-snid").change(function() {
		var val = $("#select-snid").val();	
		if(val == "all") val = "0";
		chart2_snid = val;

		$("#btn_flush_2").click();
		load_level_pie();
	});

	//4 服务器选择
	$("#select-serverId-4").change(function() {
		var val = $("#select-serverId-4").val();	
		if(val == "all") val = "0";
		chart4_serverid = val;

		$("#btn_flush_consume_diamond").click();
	});

	//4 平台选择
	$("#select-snid-4").change(function() {
		var val = $("#select-snid-4").val();	
		if(val == "all") val = "0";
		chart4_snid = val;

		$("#btn_flush_consume_diamond").click();
	});

	//5 服务器选择
	$("#select-serverId-5").change(function() {
		var val = $("#select-serverId-5").val();	
		if(val == "all") val = "0";
		chart5_serverid = val;

		$("#btn_flush_consume_gold").click();
	});

	//5 平台选择
	$("#select-snid-5").change(function() {
		var val = $("#select-snid-5").val();	
		if(val == "all") val = "0";
		chart5_snid = val;

		$("#btn_flush_consume_gold").click();
	});

	//6 服务器选择
	$("#select-serverId-6").change(function() {
		var val = $("#select-serverId-6").val();	
		if(val == "all") val = "0";
		chart6_serverid = val;

		$("#btn_flush_tutorial").click();
	});

	//6 平台选择
	$("#select-snid-6").change(function() {
		var val = $("#select-snid-6").val();	
		if(val == "all") val = "0";
		chart6_snid = val;

		$("#btn_flush_tutorial").click();
	});

	//7 服务器选择
	$("#select-serverId-7").change(function() {
		var val = $("#select-serverId-7").val();	
		if(val == "all") val = "0";
		chart7_serverid = val;

		$("#btn_flush_maintask").click();
	});

	//7 平台选择
	$("#select-snid-7").change(function() {
		var val = $("#select-snid-7").val();	
		if(val == "all") val = "0";
		chart7_snid = val;

		$("#btn_flush_maintask").click();
	});


/* ---------- Datapicker ---------- */
	var now = new Date()
	var datestr = now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getDate();

	$("#datepicker-start-1").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_start_1 = dateText;
				$("#btn_flush_online").click();
			},

	});
	$("#datepicker-end-1").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_end_1 = dateText;
				$("#btn_flush_online").click();
			},

	});
	$("#datepicker-end-1").val(datestr);
	date_end_1 = datestr;

	$("#datepicker-start-4").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_start_4 = dateText;
				$("#btn_flush_consume_diamond").click();
			},
	});
	$("#datepicker-end-4").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_end_4 = dateText;
				$("#btn_flush_consume_diamond").click();
			},
	});
	$("#datepicker-end-4").val(datestr);
	date_end_4 = datestr;

	$("#datepicker-start-5").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_start_5 = dateText;
				$("#btn_flush_consume_gold").click();
			},

	});
	$("#datepicker-end-5").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_end_5 = dateText;
				$("#btn_flush_consume_gold").click();
			},
	});
	$("#datepicker-end-5").val(datestr);
	date_end_5 = datestr;

	$("#datepicker-start-6").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_start_6 = dateText;
				$("#btn_flush_tutorial").click();
			},

	});
	$("#datepicker-end-6").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_end_6 = dateText;
				$("#btn_flush_tutorial").click();
			},
	});
	$("#datepicker-end-6").val(datestr);
	date_end_6 = datestr;

	$("#datepicker-start-7").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_start_7 = dateText;
				$("#btn_flush_maintask").click();
			},

	});
	$("#datepicker-end-7").datepicker({  
			dateFormat: 'yy-mm-dd',
			onSelect: function(dateText, inst) {
				date_end_7 = dateText;
				$("#btn_flush_maintask").click();
			},
	});
	$("#datepicker-end-7").val(datestr);
	date_end_7 = datestr;
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
