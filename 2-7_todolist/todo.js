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
		// back-end : give me todo , for you status & data
		// apiJson = {"status": "success", "data": ""}
		////
		// 1.POST :
		//   front-end post todoItem to API (back-end)
		//   and front-end receive callback json from API (back-end)
		// 2.SUCCESS FUNCTION :
		//   check json key status value (success or error)
		//   and echo json key "data" into html
		var todoItem = prompt('add new todo task', 'Eason');
		console.log( todoItem );
		$.post('todo/create.php', {todo: todoItem}, function(data){
			console.log(data);
			if(data.status == 'success'){
				var cloneTodo = $('#todo-list li').first().clone();
				cloneTodo.find('.content').text(data.data);
				cloneTodo.find('[type="text"]').val(data.data);
				$('#todo-list').append(cloneTodo);	
			}
		}, 'json');
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
		var todoItem = $(this).val();
		$(this).siblings('.content').text(todoItem);
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