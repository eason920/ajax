<?php
	/**
	* @param string $todo 
	*/
	// @param string $todo <= 確認要承接的資料
	// store $todo into DB <= 後端要將資料寫入 db 的行為
	// return result : success & data <= 要回傳的狀態資訊
	$result = [
		'status' => 'success',
		// 'data' => $todo
		'data' => $_POST['todo'],//php 中，要寫入DB的行為，要用 post
	];

	echo json_encode($result); // **php 手法，將值轉譯成前端看得懂的 json
?>