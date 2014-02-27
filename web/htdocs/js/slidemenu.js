// スライダートグルボタン

(function($){

$(document).ready(function() {

	var webkit = navigator.userAgent.indexOf("WebKit") != -1;
	var open = 0;
	var $gnav = $(".gnav");
	var $slide = $(".gnav-btn, h1, .l-search-tablet, .l-main, .l-footer");

	$(window).on("resize", function() {
		if($(window).width() >= 421) { // slidePoint
			$gnav.removeAttr("style");
			$slide.removeAttr("style");
			open = 0;
		}
	});

	$(".gnav-btn button").click(function() {
		$(this).blur();
		if(!open) {
			open = 1;
			$(this).addClass("is-gnav-btn");
			if(!webkit) {
				$gnav.animate({left:"0"}, 300, "swing");
				$slide.animate({left:"180px"}, 300, "swing"); // slideMove
			} else {
				$gnav.css({
					webkitTransitionDuration:"300ms",
					webkitTransitionTimingFunction:"ease-in-out",
					webkitTransform:"translate3d(180px,0px,0px)" // slideMove
				});
				$slide.css({
					webkitTransitionDuration:"300ms",
					webkitTransitionTimingFunction:"ease-in-out",
					webkitTransform:"translate3d(180px,0px,0px)" // slideMove
				});
			}
		} else {
			open = 0;
			$(this).removeClass("is-gnav-btn");
			if(!webkit) {
				$gnav.animate({left:"-180px"}, 300, "swing"); // slideMove
				$slide.animate({left:"0"}, 300, "swing");
			} else {
				$gnav.css({
					webkitTransform:"translate3d(0px,0px,0px)"
				});
				$slide.css({
					webkitTransform:"translate3d(0px,0px,0px)"
				});
			}
		}
		return false;
	});

});

})(jQuery);
