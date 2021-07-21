$(document).ready(function () {
	
    $('.faq-text .faq-title').click(function () {
        const parent = $(this).closest('.faq-text');
        const content = parent.find('.faq-content');
        if (parent.hasClass('faq-active')) {
            parent.removeClass('faq-active');
            content.slideUp();
        } else {
            $('.faq-text').removeClass('faq-active');
            $('.faq-text .faq-content').slideUp();
            $(parent).addClass('faq-active');
            content.slideDown();
        }
    });
	
	$('.steps-items .steps-item').click(function(){
		const index = $(this).index();
		$('.steps-items .steps-item').removeClass('active');
		$(this).addClass('active');
		$('.steps-texts .steps-text').removeClass('active');
		$('.steps-texts .steps-text').eq(index).addClass('active');
	})
	
    $(".banner-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
    });
	
    $(".team-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
    });
	  
	$(".services-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 565,
			  settings: {
				slidesToShow: 1
			  }
			}
		]
    });

});