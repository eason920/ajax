$(function(){
	// create
	// click @+button
	// show prompt
	// clone li
	// replace clone content by new one
	// append to todo-list

	// creat
	$('#add-todo').click(function(e){
		var todoItem = prompt('add todo item');
		var cloneTodo = $('#todo-list li').eq(0).clone();
		cloneTodo.find('.content').html(todoItem);
		cloneTodo.find('[type="text"]').val(todoItem);
		$('#todo-list').append(cloneTodo);
	});

	// update
	$('#todo-list').on('dblclick', 'li', function(e){
		$(this).addClass('editing');
		$(this).find('[type="text"]').focus();
	})

	$('#todo-list').on('blur', '[type="text"]', function(e){
		var content = $(this).val();
		$(this).siblings('.content').html(content);
		$(this).closest('li').removeClass('editing');
	});

	// delete
	$('#todo-list').on('click', '[data-action="delete"]',function(e){
		var result = confirm('delete?');
		if(result){
			$(this).closest('li').remove();
		}
	})
});