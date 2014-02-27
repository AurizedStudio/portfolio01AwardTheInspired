// スライダー
$(function(){
	$("#entry-main-pic").owlCarousel({
		navigation: true,
		slideSpeed: 300,
		pagination: false,
		autoPlay: 7000,
		singleItem: true
	});
});

// グロナビ
$(function(){
	$gnav = $(".gnav");
	$gnav.find("li:last-child").css({"margin-right":"0"});
});

// 検索ボタン
$(function(){
	$search = $(".search");
	$search.find(".search-btn").on({
		'mouseenter':function(){
			$(this).attr({"src":"img/btn-search-ov.png"});
		},
		'mouseleave':function(){
			$(this).attr({"src":"img/btn-search.png"});
		}
	});
});

// LOVEボタン
$(function(){
	$loveBtn = $(".entry-main-love-btn");
	$loveBtn.find(".entry-main-love").on({
		'mouseenter':function(){
			$(this).attr({"src":"img/btn-love-ov.png"});
		},
		'click':function(){
			$(this).attr({"src":"img/btn-love-ov.png"});
		},
		'mouseleave':function(){
			$(this).attr({"src":"img/btn-love.png"});
		}
	});
	$loveBtn.find(".entry-main-dontlove").on({
		'mouseenter':function(){
			$(this).attr({"src":"img/btn-dontlove-ov.png"});
		},
		'click':function(){
			$(this).attr({"src":"img/btn-dontlove-ov.png"});
		},
		'mouseleave':function(){
			$(this).attr({"src":"img/btn-dontlove.png"});
		}
	});
});

// ギャラリー
$(function(){
	$gellery = $(".l-gellery");
	$gellery.find(".gallery-item:nth-child(odd)").addClass("gallery-item-pr");
});

// シェアボタン
$(function(){
	$shareBtn = $(".share-btn");
	$shareBtn.find(".share-btn-navi").on('click', function(){
		$shareBtn.find(".share-btn-choose").toggle();
		$shareBtn.find(".share-btn-navi").toggleClass("is-share-btn-navi-down");
		return false;
	});
});

// 招待フォーム
$(function(){
	$inviteForm = $(".inviteform");
	$inviteForm.find(".inviteform-submit").on({
		'mouseenter':function(){
			$(this).addClass("is-inviteform-submit");
		},
		'mouseleave':function(){
			$(this).removeClass("is-inviteform-submit");
		}
	});
});

// フッター
$(function(){
	$footer = $(".l-footer");
	$footer.find(".l-3divide:nth-child(3n)").css({"margin-right":"0"});
});

// retina画像対応
$(function () {
	if (window.devicePixelRatio > 1) {
		$('h1 img').each(function() {
			$(this).attr('src', $(this).attr('src').replace(/(\.)(png|jpg|gif)/gi,'@2x$1$2'));
		});
	}
});
