<?php 
	header("Access-Control-Allow-Origin:*");
	// echo "php resource......";
	$phone=$_GET["phone"];
	$password=$_GET["password"];
	mysql_connect("qdm114574480.my3w.com","qdm114574480","mygxdgqjx0473");
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	mysql_select_db("qdm114574480_db");

	$sql="INSERT INTO cake_users (phone,password) VALUES ('$phone','$password')";
	$result=mysql_query($sql);

	if($result){
		$sql="SELECT id,phone,password,score,createtime FROM cake_users WHERE phone='$phone'";
		$result=mysql_query($sql);
		if($row=mysql_fetch_array($result,MYSQL_ASSOC)){
			echo '{"res_code":0,"res_error":"","res_body":'. json_encode($row) .'}';
		}else{
			echo '{"res_code":-1,"res_error":"注册用户信息查询失败","res_body":{}}';
		}
	}else{
		echo '{"res_code":-2,"res_error":"用户注册失败，请重新注册","res_body":{}}';
	}

	mysql_close();
 ?>