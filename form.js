
function signup() {
    // document.getElementById("loginform").classList.add('hidden');
    // document.getElementById("register").classList.remove('hidden');
    document.getElementById('register').style.display = 'block';
    document.getElementById("loginform").style.display = 'none'

}

function signin() {
    // document.getElementById("loginform").classList.remove('hidden');
    // document.getElementById("register").classList.add('hidden');
    document.getElementById('loginform').style.display = 'block';
    document.getElementById('register').style.display = 'none';

}


function register(){
    

    document.getElementById("register").addEventListener('submit',function(e){
        e.preventDefault();
        const username=document.getElementById("regemail").value
        const password=document.getElementById("regpassword").value
        const users=JSON.parse(localStorage.getItem('users')) || []
          if(username&&password){
       const  user={
            name: username,
            password: password,
        };
        const matcheduser=users.find(user=>user.name==username)
        if(matcheduser){
        var toast1=document.getElementById('livetoast1')
        document.getElementById('toast-body1').innerHTML="Email already exists. Please login."
            var toast= new bootstrap.Toast(toast1)
            toast.show();
            document.getElementById('register').reset()
            signin()
        }else{
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        document.getElementById('register').reset()
        var toast1=document.getElementById('livetoast1')
        document.getElementById('toast-body1').innerHTML="Registration Successfull."
            var toast= new bootstrap.Toast(toast1)
            toast.show();
        }
    }
    })
}

function login(){
    document.getElementById("loginform").addEventListener('submit',function(e){
        e.preventDefault();

        const storeduser= JSON.parse(localStorage.getItem('users'))||[];

        const inputusername=document.getElementById("loginusername").value
        const inputpassword=document.getElementById("loginpassword").value

        
        const matcheduser=storeduser.find(user=>user.name==inputusername&&user.password==inputpassword)
        if(matcheduser)
        {
            var toast2=document.getElementById('livetoast1')
            document.getElementById('toast-body1').innerHTML="Login Successfull."
            var toast= new bootstrap.Toast(toast2)
            toast.show();
        }
        else{
            var toast3=document.getElementById('livetoast1')
            document.getElementById('toast-body1').innerHTML="User not found. Please Register."
            var toast= new bootstrap.Toast(toast3)
            toast.show();
            signup()
        }
    document.getElementById('loginform').reset();

    })
}

const passwordInputl=document.getElementById("loginpassword");
const togglePassword=document.getElementById("togglePassword");

togglePassword.addEventListener('click',function(){
    const type=passwordInputl.getAttribute('type')==='password'?'text':'password';

    passwordInputl.setAttribute('type',type);

    this.classList.toggle("fa-eye")
    this.classList.toggle("fa-eye-slash");


})
const passwordInputr=document.getElementById("regpassword");
const togglePassword2=document.getElementById("togglepassword");

togglePassword2.addEventListener('click',function(){
    const type=passwordInputr.getAttribute('type')==='password'?'text':'password';

    passwordInputr.setAttribute('type',type);

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
})

