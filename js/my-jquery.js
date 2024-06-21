// JavaScript source code

/*画像サムネイルクリック時にビューワー表示*/
//$(function () {
//   /* $(".gallery_block div").css("background", "#cccccc");*/
//    $(".gallery_block div").click(function () {
//        $('.optionBox').css("display", "block");
//    }); 

//});

/*ビューワークリック時にビューワー非表示*/
//$(function () {
//    $('.optionBox').click(function () {
//        $('.optionBox').css("display", "none");
//    }); 
//});


/*$(document).click(function(event) {*/
  // event.targetをjQueryオブジェクトに変換する
  // closest()を使って自分から先祖要素までinnerクラスがある要素を選択する
//    if (!$(event.target).closest('.optionBox').length) {
//    console.log('外側がクリックされました。');
//  }
//});

// 要素が画面内に入ったらclass付与
$(window).scroll(function () {
    $('.about').each(function () {
        var hit = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();
        var customTop = 10;
        if (typeof $(this).data('about') !== 'undefined') {
            // data-effect="任意の値" が設定されている場合
            customTop = $(this).data('about');
        }
        if (hit + customTop < wHeight + scroll) {
            $(this).addClass("catch_copy");
        }
    });
});

/*ページTOPに戻るボタン*/
$(function () {
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});





/*ページTOPに戻るボタン*/
$(function () {
    var pagetop = $('#menubar');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    //pagetop.click(function () {
    //    $('body, html').animate({ scrollTop: 0 }, 500);
    //    return false;
    //});
});

/*メール暗号化*/
$(document).ready(function () {
    var mailadd = "tvovkavnvo.avivriv@vgmvavivlvv.cvovmvv";
    var mailadd_2 = mailadd.replace(/v/g, "");
  /*  $(".mail-contact").text(mailadd_2);*/
    $(".mail-contact").append('<div class="aa"></div>');
    $(".mail-contact").attr("href", "mailto:" + mailadd_2);
});



/*メニューボタンクリック時、メニュー非表示*/
$(function () {
   /* $(".gallery_block div").css("background", "#cccccc");*/
    $(".menu-content ").click(function () {
        $('#menu-btn-check').removeAttr("checked").prop("checked", false).change();
        
    });

});

/*スムーススクロール*/
$(function () {
    $('a[href^=#]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});