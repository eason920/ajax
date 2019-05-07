$(document).ready(function () {

	// create
	// click @+button  
	// show prompt
	// get prompt result
	// clone li
	// replace clone content by new one
	// append to todo-list

	// create  
	$('#add-todo').click(function (e) {
		var todoVal = prompt('add new todo task', 'Eason');
		// console.log(todoVal);
		var todoItem = $('#todo-list li').first().clone();
		todoItem.find('.content').html(todoVal);
		todoItem.find('[type="text"]').val(todoVal);
		$('#todo-list').append(todoItem);
	});

	// update
	$('#todo-list li').on('dblclick', function(){
		$(this).addClass('editing');
		$(this).find('[type="text"]').focus();
	})
	
	$('#todo-list [type="text"]').on('keydown', function (e) {
		if (e.keyCode == 13) {
			$(this).parent().removeClass();
		}
	});
	
	$('#todo-list [type="text"]').on('blur', function(){
		var todoVal = $(this).val();
		$(this).siblings('.content').text(todoVal);
		$(this).parent().removeClass();
	});


	// delete
	$('#todo-list li').on('click', '[data-action="delete"]', function(){
		console.log('clicked');
		var checking = confirm('are you ture ?');
		if(checking){
			// $(this).parent().remove();
			$(this).closest('li').remove();
		}
		
	})
	
});