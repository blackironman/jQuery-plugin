$.extend({
	scroll:function()
	{
			$link = $("<link>");
			$link.attr({
				rel:"stylesheet",
				href:"./css/scroll.css"
			});
			$("title").after($link);
			$wrapWidth=$(".scroll").eq(0).width();
			$wrapHeight = $(".scroll").eq(0).height();
			$innerLength = $(".scroll").size();
			$picSrc=$(".scroll").attr("src");
			$createInner = $('<div id="inner"></div>');
			$createClass = $("<div></div>");
			$theWrap = ($(".scroll").parent())
			$(".scroll").each(function(index,val)
			{
				$(val).removeClass();
				$createInner.append(val);
				if(index==0)
				{
					$createRound=$('<div class="round active"></div>');
				}else{
					$createRound=$('<div class="round"></div>');
				}
				
				$createClass.append($createRound);
			})
			// $(".round").eq(0).addClass("active");
			// alert($createClass.html())
			$createStyle = $('<div id="lxf-scroll-wrap"><div id="lxf-scroll-inner">'+$createInner.html()+
			'</div><div id="a-button">'+$createClass.html()	+	
			'</div>'+
			'<div id="left">'+
				'&lt'+
			'</div>'+
			'<div id="right">'+
				'&gt'+
			'</div>'+
		'</div>');
			// $(".scroll").eq($(".scroll").size()-1).after($createStyle);
			// $(".round").eq(0).addClass("active");
			// $("body").append($createStyle);
			// alert($(".scroll").parent().attr("id"))
			$createStyle.appendTo($theWrap);
			// console.log($createStyle.html())
			// console.log($(".scroll").parent())
			$("#lxf-scroll-wrap").css({
				width:$wrapWidth,
				height:$wrapHeight
			});
			$link.load(function (){
				//CSS加载完毕后，执行左右以及下面圆点居中
				$("#lxf-scroll-wrap #right").css({
					"margin-top":-$("#lxf-scroll-wrap #right").height()/2
				})
				$("#lxf-scroll-wrap #left").css({
					"margin-top":-$("#lxf-scroll-wrap #left").height()/2
				})
				$marleft=$("#a-button").width()/2;
				// alert($("#a-button").width());
				$("#lxf-scroll-wrap #a-button").css("margin-left",-$marleft);
			});
			
			// console.log($("#lxf-scroll-wrap").html())
			$("#lxf-scroll-inner").css("width",$innerLength*$wrapWidth)
			$("#lxf-scroll-inner img").each(function(index,val){
				$(val).attr("height",$wrapHeight);
				$(val).attr("width",$wrapWidth);
				// alert(index);
			})
			
			$index = 0;
			$("#lxf-scroll-wrap .round").click(function(e)
			{
				$index = $(this).index();
				run();
				e.preventDefault();
			})
			$("#lxf-scroll-wrap #left").click(function(e)
			{
				$index --;
				if($index<0)
				{
					$index=$("#lxf-scroll-inner img").length-1;
				}
				run();
				e.preventDefault();
			})

			$("#lxf-scroll-wrap #right").click(function(e)
			{
				next();
				e.preventDefault();
			})

			function next()
			{
				$index++;
				if($index>$("#lxf-scroll-inner img").length-1)
				{
					$index=0;
				}
				run();
				
			}
			function run()
			{
				clearInterval(autoTimer);
				autoTimer = setInterval(next,3000);			
				$("#lxf-scroll-inner").stop().animate({
					left:-$index*$("#lxf-scroll-inner img").width()
				},500)
				$("#lxf-scroll-wrap .round").removeClass("#lxf-scroll-wrap active");
				$("#lxf-scroll-wrap .round").eq($index).addClass("#lxf-scroll-wrap active");
			}
			var autoTimer = setInterval(next,3000);


			$(".scroll").remove("img");
	}
})