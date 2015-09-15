
$('.radioblock').find('.radio-btn').each(function(){
	$(this).click(function(){
		var valueRadio = $(this).find('.radio-text').html();
		$(this).parent().find('.radio-btn').removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input.main-val').val(valueRadio);
	});
});

$('.second-radioblock').find('.second-radio-btn').each(function(){
	$(this).click(function(){
		var valueRadio = $(this).find('a').html();
		$(this).parent().find('.second-radio-btn').removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input').val(valueRadio);
	});
});

$('.pay-desc-radio').find('.pay-card-radio').each(function(){
	
	$(this).click(function(){
		var valueRadio = $(this).find('p').html();
		$(this).parent().find('.pay-card-radio').removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input').val(valueRadio);
	});
});

