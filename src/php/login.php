<?php 
	header("Access-Control-Allow-Origin:*");
	$phone=$_POST["phone"];
	$password=$_POST["password"];

	
	$conn=mysql_connect("localhost","root","");
	mysql_select_db("h51710",$conn);
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	$sql="SELECT id, phone, password, score, createtime FROM cake_users WHERE phone='$phone' and password='$password'";
	$result=mysql_query($sql);

	if ($row = mysql_fetch_array($result,MYSQL_ASSOC)){
		echo '{"res_code":0, "res_error":"", "res_body":'. json_encode($row) .'}';
	} else {
		echo '{"res_code":-1, "res_error":"用户名或密码错误", "res_body":{}}';
	}
	mysql_close();
 ?>