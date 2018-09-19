

$(function(){
$('.coin_tabs_top li').click(function(){
	$i = $(this).index();
	$('.coin_tabs_top li a').removeClass('active');
	$('.coin_tabs_top li:eq('+$i+') a').addClass('active');
	
	$('.coin_details').removeClass('active');
$(this).parent().parent().parent().find('.coin_details:eq(' +$i+ ')').addClass('active')
					
})

});	

$(document).ready(function() {
				var owl = $("#tabs");
					owl.owlCarousel({
					itemsCustom : [
          [0, 1]
    
        ],
        navigation : true,
		autoplay : false
      });

 });
			
		