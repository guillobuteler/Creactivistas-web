jQuery(document).ready(function(){

	/*		LOGO		*/
	
	$('#logo').animate({ top: "-1px" }, 1000, 'easeOutBack');
	$('.img p').delay(300).animate({ opacity: "1", right: "33px" }, 1000, 'easeOutBack');
			
	/*		NAV BAR POSITION		*/
			
	$('#nav ul li:nth-child(1) a').click(function(){
		$('#line').stop().animate({ left: "360px" , width: "140px" }, 500, 'easeOutBack');	
	});
	$('#nav ul li:nth-child(2) a').click(function(){
		$('#line').stop().animate({ left: "504px" , width: "135px"}, 500, 'easeOutBack');
	});
	$('#nav ul li:nth-child(3) a').click(function(){
		$('#line').stop().animate({ left: "641px" , width: "105px" }, 500, 'easeOutBack');
	});
	$('#nav ul li:nth-child(4) a').click(function(){
		$('#line').stop().animate({ left: "748px" , width: "122px" }, 500, 'easeOutBack');
	});
			
	/*		LOADER		*/

	$('#nav ul li a').click(function(){
		$('#loader').css({'display':'block'});
	});
	
	/*		PREVENT FROM OPENNING NEW WINDOWS	*/	
			
	$('#nav a').click(function(event){
		event.preventDefault();
		window.location = $(this).attr('href');
	});
			
});