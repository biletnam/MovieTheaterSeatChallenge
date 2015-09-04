

//button drop down functionality - linked to jquery. Don't touch the jquery file.
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

// innerHTML to put button HTML onto page
// ************* original button probably needs to go away 

// <div class="dropdown">
// 	<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
// 		<span> Click to Reserve </span>
// 	</button>

//  *********** The drop down portion of the menu. Includes Name and Email fields.


// 	<form class="dropdown-menu">
// 		<div class="input-group">
// 		<label for="exampleInputText">Name</label>
// 		<input type="text" class="form-control" placeholder="Name" aria-describedby="basic-addon1">
// 		</div>
// 		<div class="form-group">
// 			<label for="exampleInputEmail1">Email address</label>
// 			<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
// 		</div>
// 			<button type="submit" class="btn btn-default">Submit</button>
// 		</div>
// 	</form>
// </div>