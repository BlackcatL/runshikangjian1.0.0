<?php
//1.连接数据库
	$mysqli = new mysqli("localhost","root","root","runshikangjian");
	//2.判断数据库是否连接成功
	if($mysqli->connect_errno){
		die($mysqli->connect_errno);
	}
	//3.设置编码格式
	$mysqli->query("set names utf8");
	//4.编写sql语句
	$sql = "SELECT * FROM service";
	//5.执行sql语句,并用变量接收返回值
	$result = $mysqli->query($sql);
	//6.判断查询结果
	if($result->num_rows){
		$data = $result->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data);
	}
	//7.关闭数据库
	$mysqli->close();
	//echo 'runshikangjian';
?>