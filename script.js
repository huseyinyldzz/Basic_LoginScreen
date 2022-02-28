
function Login(params) {
    const userName=document.getElementById('userName').value
    const passWord=document.getElementById('passWord').value
    if(userName=='admin' && passWord=='Admin') alert('Giriş Başarılı')
    else {
    alert('Kullanıcı Adı veya şifre yanlış')
    document.getElementById('userName').value =''
    }
}