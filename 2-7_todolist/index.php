<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>2-7 Eason-todolist</title>
	<link rel="stylesheet" href="../css/bootstrap.3.0.1.min.css">
	<link rel="stylesheet" href="todo.css">
	<script src="../js/jquery.1.12.4.min.js"></script>
	<script src="../js/bootstrap.3.0.1.min.js"></script>
	<script src="todo.js"></script>
</head>
<body>
	
	<ul id="todo-list">
		<ul id="eason">
		<li>
			<input type="checkbox" />
			<span class="content">todo item</span>
			<input type="text" value="todo item" />
			<button class="btn" data-action="delete">x</button>
		</li>
		<li>
			<input type="checkbox" />
			<span class="content">todo item</span>
			<input type="text" value="todo item" />
			<button class="btn" data-action="delete">x</button>
		</li>
		<li>
			<input type="checkbox" />
			<span class="content">todo item</span>
			<input type="text" value="todo item" />
			<button class="btn" data-action="delete">x</button>
		</li>
	</ul>
	</ul>
	<button id="add-todo" class="btn btn-block">+</button>
</body>
</html>