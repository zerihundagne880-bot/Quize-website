function login(){
const user=document.getElementById("username").value;
const pass=document.getElementById("password").value;
if(user==="admin" && pass==="1234"){
localStorage.setItem("admin","true");
window.location.href="admin.html";
}else{
alert("Wrong username or password");
}
}