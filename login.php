<?php
header("content-type:text/html;charset=utf-8");
$conn = mysqli_connect("127.0.0.1","root","whrjan970110","users");
mysqli_query($conn,"set names utf8");
$username = $_POST['username'];
$password = $_POST['password'];
$sql = "select * from users where username = '$username' and password = '$password'";
$res = mysqli_query($conn,$sql);
if($res){
    echo "<script>alert('登录成功');location.href='dashboard-index.html'</script>";
}else{
	echo "<script>alert('用户名或密码错误');location.href='login.html'</script>";
}
?>
