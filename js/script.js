// create some buttons that open forms


jQuery(document).ready(function(){

var $ = jQuery;

$('.dropdown-toggle').click(function() {

	if($('.dropdown-menu').css('display') == 'none'){
	$('.dropdown-menu').slideDown(250);
}
else {
	$('.dropdown-menu').slideUp(250);
}
})
})
document.getElementsByClassName("row")[0].addEventListener("click", function(){
	console.log("success");
});
