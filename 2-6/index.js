$(function(){
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		data: { results: 50, gender: 'female'},
		success: function (data) {
			console.log(data);
			// data = data.results[0];
			var html = '';
			$.each(data.results, function(index, ele){
				html += '<li>';
				html += '<h6>' + index + '</h6>';
				html += '<img src=\'' + ele.picture.large + '\'>';
				html += '<h1>' + ele.name.title + ' ' + ele.name.first + ' ' + ele.name.last + '</h1>';
				html += '<a href=\'mailto:' + ele.email + '\'>' + ele.email + '</a>';
				html += '</li>';
			});
			// var img = $('<img>').attr('src', data.picture.large);
			// var name = $('<h1>').text(data.name.title + ' ' + data.name.first + ' ' + data.name.last);
			// var mail = $('<a>').attr('href', 'mailto:' + data.email).text(data.email);
			$('#content').html(html);
		}
	});
});