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
		$.post('todo/create.php', {todo: todoItem}, function(data){
			if(data.status == 'success'){
				var cloneTodo = $('#todo-list li').first().clone();
				cloneTodo.find('.content').text(data.data);
				cloneTodo.find('[type="text"]').val(data.data);
				$('#todo-list').append(cloneTodo);	
			}
		}, 'json');
	});

	// update
	// $('#todo-list li').on('dblclick', function(){ // **此僅會綁定一開始就存在的 dom
	$('#todo-list').on('dblclick', 'li', function () {// **每次 dblclick 就重新找一次 li，故新的 li 仍可襄
		$(this).addClass('editing');
		$(this).find('[type="text"]').focus();
	})
	
	// $('#todo-list li').on('keydown', ' [type="text"]',function (e) { //**新增的範圍是 li 往內，這裡僅指到到 button，對新 DOM 的事件預綁範圍不足
	$('#todo-list').on('keydown', 'li [type="text"]', function (e) {
		if (e.keyCode == 13) {
			$(this).parent().removeClass();
		}
	});
	
	$('#todo-list').on('blur', 'li [type="text"]',function(e){
		// 1.POST：
		//   give value to back-end
		//   the key is todo
		// 2.SUCCESS FUNCTION：
		//   front-end receive status is success
		//   update html text from back-end
		//   $.post(api, parameter, callbackFn, type);
		var content = $(this).val();
		$.post('todo/update.php', {id: 123, todo: content}, function(res){
			if(res.status == 'success'){
				$(e.currentTarget).siblings('.content').text(res.data);
				$(e.currentTarget).parent().removeClass();					
			}
		}, 'json')
	});


	// delete
	$('#todo-list').on('click', 'li [data-action="delete"]', function(e){
		console.log('clicked');
		var checking = confirm('are you ture ?');
		if(checking){
			$.post('todo/delete.php', {id: 178}, function(res){
				if(res.status == 'success'){
					// $(e.currentTarget).parent().remove();
					$(e.currentTarget).closest('li').remove();
				}
			}, 'json');
			
			
		}
		
	})
	
});