$(function () {
	// $.get(api, parameter, callbackFn, type);
	var url = $('#nav li a').first().attr('href');
	$.get(url, {}, function(data){
		$('#content').html(data);
	}, 'html');

	$('#nav li a').click(function (e) {
		e.preventDefault();
		var url = $(this).attr('href');
		console.log(url);
		$.get(url, {}, function(data){
			$('#content').html(data);
		}, 'html');
	});
})
