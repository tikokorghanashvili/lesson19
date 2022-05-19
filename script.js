document.getElementById('registration').addEventListener('submit',function(event){
    event.preventDefault();
    let errors={};
    let form=event.target;

    let Username=document.getElementById('username').value;
    if (Username.length<4 || Username==" "){
        errors.Username='username can not be empty and must be more then carachters';
    }

    let password=document.getElementById('passw').value;
    let password2=document.getElementById('passw2').value;

    if (password.length<8 || password==" " || password!=password2){
        errors.password='password can not be empty and must be more then carachters';
        errors.password2='password do not match';
    }

    let agree=document.getElementById('checkagree').Checked;
    if (agree==false){
        errors.agree='you must agree our terms and conditions';
    }

    // radio დროს
    let age=false;
    form.querySelectorAll('[name="age"]').forEach(element => {
        if (element.Checked){
            age=true;
        }
    });

    if (age==false){
        errors.age='please select your age';
    }

    console.log(errors);

    form.querySelectorAll('.error-text').forEach(item=>{
        item.innerHTML=' ';
    });

    for (let item in errors){
        let errorp=document.getElementById('error_' + item);
        if (errorp){
            errorp.textContent=errors[item];
        }
    }

    if(Object.keys(errors).length==0){
        form.submit();
    }

});


let passwordShow=document.getElementById('showpassword');
let toggleIconEye=document.getElementById('toggleicon');

showHidePassword=()=>{
    if (passwordShow.type=="password"){
        passwordShow.setAttribute('type','text');
        toggleIconEye.classList.add('fa-eye-slash');
    }else{
        toggleIconEye.classList.remove('fa-eye-slash');
        passwordShow.setAttribute('type','password');
    }
}

toggleIconEye.addEventListener('click',showHidePassword);















// let errors={
//     username:'',
//     password:'',
//     password2:'',
// }