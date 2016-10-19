(function ($, window) {
 
    var App = App || {
        init: function () {
            $('.js-toggle-search').on('click', function () {
                $('.js-search').toggleClass('is-visible');
            });
 
            $('.js-next a').on('click', function (e) {
                $(infinite_scroll.contentSelector).infinitescroll(infinite_scroll);
 
                var $body = $('body');
 
                $body.scrollTop($body.scrollTop() - 1);
 
                e.preventDefault();
            })
 
            $(window).keydown(function (event) {
                if (event.keyCode == 27) {
                    if ($('.js-search').attr('class').indexOf('is-visible') > 0) {
                        $('.js-search').removeClass('is-visible');
                    }
                }
            });
 
            $('.js-search .text-input').keydown(function (event) {
                if (event.keyCode == 13) {
                    location.href = 'https://www.google.com/search?q=site:yumemor.com ' + $(this).val();
                    return false;
                }
            })
        }
    };
 

    $(App.init);

    $(function(){
 
        var navToggle = $('#nav-toggle'),
            nav = $('nav'),
            navLinks = nav.find('a');
 
        navToggle.on('click', function () {
            navToggle.toggleClass('active');
            nav.toggleClass('open');
            return false;
        });
        navLinks.on('click', function () {
            navToggle.toggleClass('active');
            nav.toggleClass('open');
        });
 
        $(document).on('click', function () {
            if (nav.hasClass('open')) {
                navToggle.toggleClass('active');
                nav.toggleClass('open');
            }
        });
 
        $('.btn-slide').click(function () {
            $('#panel').slideToggle("slow");
            $(this).toggleClass("active");
            return false;
        });
 
        $(window).scroll(function () {
            var header = $('header');
 
            if ($(this).scrollTop() > 1) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
 
        $("#social-share").click(function () {
            $("#social").toggleClass("visible").slideToggle(200);
        });
 
        if ($('.welcome')[0]) {
            $('.author-info').hide();
            $('span.info-edit').click(function () {
                $('.author-info').toggle();
            });
        }

        var bannerNode = $('.top-image');
        if(bannerNode.data('enable')){
            var index = parseInt((Math.random() * 4) + 1);
            bannerNode.attr('style','background-image:url(/banner/'+index+'.jpg)');
        }
    })

}(jQuery, window));