<?php
/**
 * 1.back-end 承接：
 * @param integer $id // 每一 li 的獨立 id (常數)
 * @param string $todo // 改完後的新值
*/
// 2.find todo from DB, by $id  <= 用 $id 變數於 DB 中找到原 todo 值
// 3.update todo content by $todo <= 更新這個 todo 
// 4.store todo into DB <= 後端要將資料寫入 db 的行為
// 5.return result: status & data
	$result = [
		'status' => 'success',
		'data' => $_POST['todo'],
	];

	echo json_encode($result);
?>