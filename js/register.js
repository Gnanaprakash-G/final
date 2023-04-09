const Email=document.getElementById('input-email');
const Password=document.getElementById('input-password');
const Username=document.getElementById('input-username');
const btn1=document.querySelector(".btn1");
btn1.addEventListener('click',(e)=>
{
  e.preventDefault();
  let email=Email.value;
  let password=Password.value;
  let username=Username.value;
  $.ajax({
    url:'php/register.php',
    method:'post',
    data:{
      emailPHP:email,
      passwordPHP:password,
      usernamePHP:username,
      action:"register"
    },
    success:function(response)
    {
        const disp=document.querySelector('.display');
        disp.innerHTML=response;
        disp.style.color='red';
        localStorage.clear();
    }
  });
  return true;
});