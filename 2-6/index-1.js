$(function(){
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		data: { results: 50, gender: 'female'},
		success: function (data) {
			console.log(data);
			// data = data.results[0];
			var img = $('<img>'),
				name = $('<h1>'),
				mail = $('<a>');
			$.each(data.results, function(index, ele){
				$('#content').append($('<li>').append(
					// img.attr('src', ele.picture.large),
					// name.text(ele.name.title + ' ' + ele.name.first + ' ' + ele.name.last),
					// mail.attr('href', 'mailto:' + ele.email).text(ele.email)
					$('<img>').attr('src', ele.picture.large),
					$('<h1>').text(ele.name.title + ' ' + ele.name.first + ' ' + ele.name.last),
					$('<a>').attr('href', 'mailto:' + ele.email).text(ele.email)
				))
			});
		}
	});
});