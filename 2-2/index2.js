// function getContent(url) {
var getContent = function (url) {
	$.get(url, {}, function (data) {
		$('#content').html(data);
	}, 'html');
}

$(function () {
	// $.get(api, parameter, callbackFn, type);
	var url = $('#nav li a').first().attr('href');
	getContent(url);

	$('#nav li a').click(function (e) {
		e.preventDefault();
		var url = $(this).attr('href');
		getContent(url);
	});
})
