$(function(){
	// $.get(api, parameter, callbackFn, type);
	// $.post('https://randomuser.me/api/', {}, function(data){ // post 失敗，不可用
	$.get('https://randomuser.me/api/', {}, function(data){
		data = data.results[0];
		var img = $('<img id="img">').attr('src', data.picture.large);
		var name = $('<h1 id="name">').text(data.name.title + ' ' + data.name.first + ' ' + data.name.last);
		var mail = $('<a id="mail">').attr('href', 'mailto:' + data.email).text(data.email);
		$('body').append(img, name, mail);
	}, 'json');
});