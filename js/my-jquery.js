// JavaScript source code

/*�摜�T���l�C���N���b�N���Ƀr���[���[�\��*/
//$(function () {
//   /* $(".gallery_block div").css("background", "#cccccc");*/
//    $(".gallery_block div").click(function () {
//        $('.optionBox').css("display", "block");
//    }); 

//});

/*�r���[���[�N���b�N���Ƀr���[���[��\��*/
//$(function () {
//    $('.optionBox').click(function () {
//        $('.optionBox').css("display", "none");
//    }); 
//});


/*$(document).click(function(event) {*/
  // event.target��jQuery�I�u�W�F�N�g�ɕϊ�����
  // closest()���g���Ď��������c�v�f�܂�inner�N���X������v�f��I������
//    if (!$(event.target).closest('.optionBox').length) {
//    console.log('�O�����N���b�N����܂����B');
//  }
//});

// �v�f����ʓ��ɓ�������class�t�^
$(window).scroll(function () {
    $('.about').each(function () {
        var hit = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();
        var customTop = 10;
        if (typeof $(this).data('about') !== 'undefined') {
            // data-effect="�C�ӂ̒l" ���ݒ肳��Ă���ꍇ
            customTop = $(this).data('about');
        }
        if (hit + customTop < wHeight + scroll) {
            $(this).addClass("catch_copy");
        }
    });
});

/*�y�[�WTOP�ɖ߂�{�^��*/
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

/*���[���Í���*/
$(document).ready(function () {
    var mailadd = "akkikkakaakkaak.kaaaakakaakkkaamkkakaaakaakak";
    var mailadd_2 = mailadd.replace(/k/g, "");
  /*  $(".mail-contact").text(mailadd_2);*/
    $(".mail-contact").append('<div class="aa"></div>');
    $(".mail-contact").attr("href", "mailto:" + mailadd_2);
});




$(function () {
   /* $(".gallery_block div").css("background", "#cccccc");*/
    $(".menu-content ").click(function () {
        $('#menu-btn-check').removeAttr("checked").prop("checked", false).change();
        
    });

});