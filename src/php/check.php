<?php 
	header("Access-Control-Allow-Origin:*");
	$phone=$_GET["phone"];
	mysql_connect("qdm114574480.my3w.com","qdm114574480","mygxdgqjx0473");
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	mysql_select_db("qdm114574480_db");
	$sql="SELECT COUNT (*) FROM cake_users WHERE phone='$phone'";
	$result=mysql_query($sql);
		
	if($row = mysql_fetch_array($result)){
		if($row[0]>=1){
			echo '{"res_code":0,"res_error":"","res_body":{
				"status":1,"message":"用户手机号已被注册"
			}}';
		}else{
			echo '{"res_code":0,"res_error":"","res_body":{
				"status":0,
				"message":"手机号可以注册"
			}}';
		}
	}else{
		echo '{"res_code":-1,"res_error":"服务器异常，用户检测出错","res_body":{}}';
	}
	mysql_close();
 ?>