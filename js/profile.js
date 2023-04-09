let id=JSON.parse(localStorage.getItem('obj'))||"";
if(id!='')
{
    const pname=document.querySelector('.p-name');
    const pdate=document.querySelector('.p-date');
    const page=document.querySelector('.p-age');
    const paddress=document.querySelector('.p-address');
    const pemail=document.querySelector('.p-email');
    const pcontact=document.querySelector('.p-contact');
    pname.innerHTML=id.name;
    pdate.innerHTML=id.date;
    page.innerHTML=id.age;
    paddress.innerHTML=id.address;
    pemail.innerHTML=id.mail.replaceAll("\"","");
    pcontact.innerHTML=id.contact;
}
document.querySelector('.logoutbtn').addEventListener('click',()=>
{
  localStorage.clear();
  window.location.replace("index.html");
})
document.querySelector('.updatebtn').addEventListener('click',()=>
{
  const cont1=document.querySelector('.container1');
  cont1.classList.remove("hide");
  const cont2=document.querySelector('.container2');
  cont2.classList.add('hide');

})
document.querySelector('.savebtn').addEventListener('click',(e)=>
{
  if(update(e))
  {
    const cont2=document.querySelector('.container2');
    cont2.classList.remove("hide");
    const cont1=document.querySelector('.container1');
    cont1.classList.add('hide');
  }
})
function update(e)
{
  let firstname=document.getElementById('input-firstname').value;
  const lastname=document.getElementById('input-lastname').value;
  const date=document.getElementById('input-date').value;
  const contact=document.getElementById('input-contact').value;
  const address=document.getElementById('input-address').value;
  if(firstname==''||lastname==''||date==''||contact==""||address=="")
  {
    const display=document.querySelector('.display');
    display.innerHTML="Please Enter Everything";
    return false;
  }
  else{
    firstname=firstname[0].toUpperCase() + firstname.slice(1);
    const name=firstname+" "+lastname;
    const age=getAge(date);
    const mail=localStorage.getItem('id')||"";
    edit(mail,name,date,age,address,contact);
    store(e,mail,name,date,age,address,contact);
    return true;
  }
}
function edit(mail,name,date,age,address,contact)
{
    const pname=document.querySelector('.p-name');
    const pdate=document.querySelector('.p-date');
    const page=document.querySelector('.p-age');
    const paddress=document.querySelector('.p-address');
    const pemail=document.querySelector('.p-email');
    const pcontact=document.querySelector('.p-contact');
    pname.innerHTML=name;
    pdate.innerHTML=date;
    page.innerHTML=age;
    paddress.innerHTML=address;
    pemail.innerHTML=mail;
    pcontact.innerHTML=contact;
    const obj={mail,name,date,age,address,contact};
    localStorage.setItem('obj',JSON.stringify(obj));
    // console.log(JSON.parse(localStorage.getItem('obj')));
}
function getAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

function store(e,Email,Name,date,age,address,contact)
{
  e.preventDefault();
  $.ajax({
    url:'php/profile.php',
    method:'post',
    data:{
      emailPHP:Email,
      namePHP:Name,
      datePHP:date,
      agePHP:age,
      addressPHP:address,
      contactPHP:contact,
      action:"store"
    },
    success:function(response)
    {
        console.log(response);
    }
  });
}