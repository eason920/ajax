$(function(){
	// 傳統格式，用 ajax 方法
	$.ajax({
		url: '',
		type: 'post',
		dataType: 'json',// **定義接收資料的型別，可為 json、xml、jsonp、html，方向為 api 端向 client 端
		data: {user_id: 12345, content: 'hellow words'}, // **寫入API的篩選參數(可選)，以物件型式多重組合 (x方向為 client 端準備要給出到 server 端的參數x)
		// v callback function 三個
		complete: function(xhr, textStatus){ // 當完成 ajax 動作 / 當按下 send 鈕，就執行此 , 如 loading.gif 圖示改成 done.gif 圖示
			// called when complete
		},
		success: function(data, textStatus, xhr){
			// called when successful
		},
		error: function(xhr, textStatus, errorThrown){
			// called when where is an error
		}
	});

	// RESTful API 格式
	//type/API url/data     / callback function ( def SUCCESS ) < 對照上方 $.ajax 方法的簡化寫法
	$.post('url', {key_val}, function(data, textStatus, xhr){
		// optional stuff to do after success
	}, 'type')
	$.get( url, parameter, callbackFn, type );
	parameters = { user_id: 12345, content: 'hellow words' }
	type = 'json / jsonp / xml'

	// RESTfull API 範例 1
	var content = $('form textarea').text();
	var category_id = $('#category').find('.selected').data('id');
	$.post('http://facebook.me/post/',
		{
			user_id: user_id,
			category_id: category_id,
			content: content
		},
		function(data, textStatus, xhr){
			// optional stuff to do after success
	}, 'json');

	// RESTfull API 範例 2 : 只可用在 bon 上 (bon?)
	$.post('http://facebook.me/post/',
		$('form').serialize(), // 註一 // 等同 parameter
		function(data, textStatus, xhr){
			// callback function success
	}, 'json');
	// 註一：
		// .serialize() 為 jq 將 form ele 中全部 input、select 等 val 抓山成一字串，形同 get 方法中的 url 尾端的變數組合
		// 如 single=Single&multiple=Multiple&check=check2&radio=radio1
	
	
	// 1-6 jsonp 
	// jsonp 的長相
	jsonFlickrApi(
		{
			'key_aa': 'aa',
			'key_bb': 'bb',
			'key_cc': 'cc',
			'...': '...'
		}
	);

	// **jsonp 由於需要許多設定，僅可用傳統的 $.ajax 方法引用
	$.ajax({
		url: 'https://www.flicker.com/services/rest/',
		type: 'GET', // jsonp 僅有此，沒其它方法
		dataType: 'jsonp', // 來源的格式
		jsonpCallback: 'jsonFlickrApi', // **此項設定為 jsonp 為何要用 $.ajax 的原因，此值要參照 filckr 來填寫
		data: {
			method: 'flicker.test.echo',
			api_key: 'b432e17dc7272abd365a5fbb8bb37',
			format: 'json'
		},
		success: function(data, textStatus, xhr){
			console.log(data);
			$('#target').html(data.api_keyy._content);
		}
	});
})