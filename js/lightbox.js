			$(document).ready(function(){
                
                $('.lightbox').click(function(event){

					event.preventDefault();

                    
					var the_box_id = '#' + $(this).attr("href");

                    
				$('.backdrop' ).animate({'opacity':'.50'}, 300, 'linear');
					$(the_box_id).animate({'opacity':'1.00'}, 300, 'linear');
					
                 $('.backdrop,' + the_box_id).css('display', 'block');

					
				});



				$('.close').click(function(){
					close_box();
				});
 
				$('.backdrop').click(function(){
					close_box();
				});
 
			});
 
			function close_box()
			{
				$('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
					$('.backdrop, .box').css('display', 'none');
				});
			}
 