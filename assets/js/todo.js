// check off particular items
$('ul').on('click', 'li', function(){
	$(this).toggleClass("completed");
})


$('ul').on('click', 'span', function(){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});	//the first 'this' refers to the li.  the second refers to the parent ul.
	event.stopPropagation(); /** this technically doesn't have to be here because 
	the element is removed entirely**/
})


$('input[type="text"]').keypress(function(event){
	if(event.which == 13){
		var todoText = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}

})


$('.fas').on('click', function(){
	$('input[type="text"]').fadeToggle();
})
