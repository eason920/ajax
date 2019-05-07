<?php
	/**
	 * 1.back-end 承接：
	 * @param string $todo 
	 */
	// 1.@param string $todo <= 確認要承接的資料
	// 2.store $todo into DB <= 後端要將資料寫入 db 的行為
	// 3.return result : status & data <= 要回傳的狀態資訊
	$result = [
		'status' => 'success',
		// 'data' => $todo
		'data' => $_POST['todo'],//php 中，要寫入DB的行為，要用 post
	];

	echo json_encode($result); // **php 手法，將值轉譯成前端看得懂的 json
?>