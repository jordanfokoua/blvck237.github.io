$(document).ready( function() {
    'use strict';
    
    /*======================================
    Top Selector
    ======================================*/
    $('.top-selector').on('click', function (tsr) {
        tsr.stopPropagation();
        $('.top-select').not($(this).children('.top-select')).slideUp();
        $(this).children('.top-select').slideToggle();
    });
    
    function mobileSelect(){
        if($(window).width() < 768){
            $('.mobile-selector').on('click', function () {
                $(this).children('.mobile-select').slideToggle();
            });
        }
    }
    
    mobileSelect();
    
    /*======================================
    Search Toggle on Nav
    ======================================*/
    $('#search-toggle a').on('click', function () {
        $('#navSearchForm').slideToggle(); 
    });
    
    /*======================================
    Menu Toggle for Mobile
    ======================================*/
    function mMenuToggle(){
        if($(window).width() < 768){
            $('.m-sub-toggle, .sm-sub-toggle').unbind('click');
            $('.m-sub-toggle, .sm-sub-toggle').css('display', 'inline-block');
            $('.m-sub-toggle, .sm-sub-toggle').on('click', function(mm) {
                mm.stopPropagation();
                $(this).siblings('ul').slideToggle();
                $(this).closest('li').toggleClass('m-active');
            });
        } else {
            $('.m-sub-toggle').css('display', 'none');
            $('.navbar-default .navbar-nav li ul').removeAttr('style');
        }
    }
    
    mMenuToggle();
    
    
    /*======================================
    Top Slider
    ======================================*/
    $('#top-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
    });
    
    /*======================================
    Product Default Carousel
    ======================================*/
    $('.default-product-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        lazyLoad: true,
    });
    
    // For 4 column
    $('.default-product-carousel-4').owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        },
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        lazyLoad: true,
    });
    
     /*======================================
    Tab Default Carousel
    ======================================*/
    function initCarousel4(tpc){
        tpc.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            },
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            lazyLoad: true,
        });
    }
    
    function initCarousel3(tpc){
        tpc.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            lazyLoad: true,
        });
    }
    
    initCarousel4($('.tab-product-module-2 .tab-pane.active .tab-product-carousel'));
    initCarousel3($('.tab-pane.active .tab-product-carousel'));
    
    $('.tab-product-module a[data-toggle="tab"]').one('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") + ' .tab-product-carousel';
        initCarousel3($(target));
    });
    
    $('.tab-product-module-2 a[data-toggle="tab"]').one('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") + ' .tab-product-carousel';
        initCarousel4($(target));
    });
    
    /*======================================
    Blog Carousel
    ======================================*/
    $('.blog-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        lazyLoad: true,
    });
    
    /*======================================
    Blog Carousel 2
    ======================================*/
    $('.blog-carousel-2').owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
        },
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        lazyLoad: true,
    });
    
    
    /*======================================
    Brand Carousel
    ======================================*/
    $('.brand-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 2000,
        navSpeed: 2000,
    });
    
    /*======================================
    Sidebar Product Carousel
    ======================================*/
    $('.sidebar-product-carousel').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        lazyLoad: true,
    });
    
    /*======================================
    Sidebar Testimonial Carousel
    ======================================*/
    $('.sidebar-testimonial-carousel').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 2000,
        navSpeed: 2000,
    });
    
    /*======================================
    Sidebar Slider
    ======================================*/
    $('.sidebar-banner-carousel').owlCarousel({
        items: 1,
        dots: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 2000,
        navSpeed: 2000,
    });
    
    /*======================================
    Product thumb switcher
    ======================================*/
    $('.thumb-switcher').on('mouseenter', function (){
        $(this).closest('.thumb-switchers').siblings('.product-thumb').attr('src', $(this).data('thumb'));
    });
    
    /*======================================
    Countdown
    ======================================*/
    $('.countdown-time').each(function () {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function (tm) {
            $(this).html(tm.strftime('<span class="section_count"><span class="tcount days">%D </span><span class="text">Days</span></span><span class="section_count"><span class="tcount hours">%H</span><span class="text">Hours</span></span><span class="section_count"><span class="tcount minutes">%M</span><span class="text">Mins</span></span><span class="section_count"><span class="tcount seconds">%S</span><span class="text">Secs</span></span>'));
        });
    });
    
    /*---------------------------------------------------------
    Ecommerce filter
    ---------------------------------------------------------*/
    $('.filter-categories li i').on('click', function() {
        $(this).siblings('.sub-category').slideToggle();
        $(this).toggleClass('fa-plus fa-minus');
    });
    $('.view-mode').on('click', function (e) {
        e.preventDefault();
        $('.view-mode').removeClass('active');
        var cls = $(this).attr('class').split(' ')[0];
        $(this).addClass('active');
        $('.' + cls).addClass('active');
        $('#products-listing').removeClass();
        $('#products-listing').addClass($(this).data('mode'));
    });
    
    $('.input-rule select').on('change', function () {
        $(this).siblings('.input-style').text($(this).children('option:selected').text());
    });
    
    $('.input-rule input[type=checkbox]').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('selected');
        } else {
            $(this).parent().removeClass('selected');
        }
    });
    
    $('.input-rule input[type=radio]').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).parent().siblings().removeClass('selected');
            $(this).parent().addClass('selected');
        }
    });
    
    $('input[name=color]').on('click', function () {
        $(this).toggleClass('on');
    });
    
    $('input[name=color_order]').on('click', function () {
        $('input[name=color_order]').removeClass('on');
        $(this).addClass('on');
        $('#color_order_input').val($(this).val());
    });
    
    $('.ui-ranger').each(function () {
        var slideDiv = $(this);
        $(this).slider({
            range: true,
            min: slideDiv.data('min'),
            max: slideDiv.data('max'),
            step: 0.01,
            values: [slideDiv.data('min'), slideDiv.data('max')],
            slide: function (event, ui) {
                $(this).siblings('input').val('$' + ui.values[0] + ' - $' + ui.values[1]);
            }
        });
        $(this).siblings('input').val("$" + $(this).slider("values", 0) + ".00 - $" + $(this).slider("values", 1) + ".00");
    });
    
    $('#thumb-switchers').owlCarousel({
        items: 3,
        margin: 15,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        dots: false
    });
    
    $(window).on('resize orientationchange', function() {
        mMenuToggle();
    });
});