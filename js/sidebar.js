$(document).ready(function () {

	if($(window).width() >= 768){

 	if($('#bootstrap-sidebar').hasClass('icon-menu')) {
		localStorage.setItem("default-padding", "60px");
      $('#wrapper').css('padding-left','60px');
      console.log('icon');
    }

   	else if($('#bootstrap-sidebar').hasClass('text-menu')) {
   		localStorage.setItem("default-padding", "150px");
      $('#wrapper').css('padding-left','150px');
      console.log('text');
    }
    else if($('#bootstrap-sidebar').hasClass('big-icon-menu')) {
    	localStorage.setItem("default-padding", "100px");
      $('#wrapper').css('padding-left','100px');
      console.log('big');
    }
    else{
    	$('#wrapper').css('padding-left','80px');	
    	localStorage.setItem("default-padding", "80px");
    	console.log('ntg');
    }

	}

});

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        let default_padding=localStorage.getItem('default-padding'); 
        var origin_padding = $("#wrapper").css("padding-left");
        if(origin_padding=='0px'){      
        $('#wrapper').css('padding-left', default_padding);		
    	}
    	else{
    	$('#wrapper').css('padding-left','0px');
    	}
        $("#wrapper").toggleClass("toggled");
});

