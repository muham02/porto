let $register =document.querySelector('.register')
let $navigation = document.querySelector('.navigation')
let $navigationParent = document.querySelector('.register__naviagation')

function Users(name,email,password){
    this.name = name,
    this.email = email,
    this.password = password
}

function sendId(e){
let name = e.target.children[0]
let email = e.target.children[1]
let password = e.target.children[2]
console.log(email);
let newUser = new Users(name.value,email.value,password.value)
console.log(newUser);

fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register",{
    method:"POST",
    headers:{
"Content-type":"application/json"
    },
    body:JSON.stringify(newUser)
 })
  .then(res=>res.json())    
  .then(data=>{
if(data.status == "success"){
    //console.log('ok');
    location.replace(location.origin+"/login.html")
     console.log(data);
}
else if(data.status == 'error'){
    $navigation.innerHTML = "Sizning Ma'lumotlaringiz Xato beryapti"
    $navigationParent.classList.remove('none')
    $navigationParent.classList.add('block')
    $navigation.classList.remove('none')
    $navigation.classList.add('block')
  setTimeout(()=>{
    $navigationParent.classList.add('none')
    $navigationParent.classList.remove('block')
  },4000)
console.log(data);
}


  })
 
}


$register.addEventListener('submit',sendId)