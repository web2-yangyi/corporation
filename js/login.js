

/*$("#password").blur(function(){
  $("p").show();
});*/

$(function(){
        $("#password").keyup(function(){
        	if($(this).val().length>=1){
        		console.log($(this).val());
        		$("#login_btn").css("background","#E97CA1");	
        	}else{
        		$("#login_btn").css("background","#D8D8D8");
        	}
            
        })
        
    })
