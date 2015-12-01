$(document).ready(function () {
	$.fn.equivalent = function (){
        var $blocks = $(this),
            maxH    = $blocks.eq(0).height(); 
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });

        $blocks.height(maxH); 
    }
    $('.height-side').equivalent();

    function modalOpen(){
    	$('.more-link').click(function(event) {
	    	$('.form-mask').fadeIn(100);
	    	$('.more-info-modal').addClass('active');
	    });

	    $('.close-modal, .form-mask').click(function(event) {
	    	$('.form-mask').fadeOut(100);
	    	$('.more-info-modal').removeClass('active');
	    });
	    $(document).keyup(function(d) {
		    if (d.keyCode == 27 && $('.more-info-modal').hasClass('active')) {
		        $('.form-mask').fadeOut(100);
		        $('.more-info-modal').removeClass('active');
		    }
			});
    }
    modalOpen();
    
});