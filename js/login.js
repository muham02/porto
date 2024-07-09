let $loginForm = document.querySelector(".login")
let $navigation = document.querySelector('.navigation')
let $navigationParent = document.querySelector('.register__naviagation')
function User (email,password){
   
    this.email = email,
    this.password = password
    }
const login = (event)=>{
    event.preventDefault()
    let email = event.target.children[0]
    let password = event.target.children[1]
    const newUser = new User(email.value,password.value)
    console.log(newUser);

    fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/user/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.status == 'success'){
            console.log('bravo');
            localStorage.setItem('data',JSON.stringify(newUser))
            location.replace(location.origin+"/body.html")
            console.log('data');
        }else if(data.status == 'error'){
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
$loginForm.addEventListener('submit',login)
