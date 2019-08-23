function checkLogin(){
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(name==""||pass==""){
        alert("用户名或密码不能为空！");
    }
    else{
        if(name=='Tom' && pass == 'abcd') {
            window.location.href='dashboard-index.html';
            return false;       /*解决了之前无法跳转的问题*/
        }
        else if(name=='Bob' && pass == '1234'){
            window.location.href='dashboard-index.html';
            return false;       /*解决了之前无法跳转的问题*/
        }
        else{
            alert("用户名或密码错误！");
        }
    }
}