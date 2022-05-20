document.getElementById('registration').addEventListener('submit',function(event){
    event.preventDefault();
    let errors={};
    let form=event.target;

    let username=document.getElementById('username').value;
    if (username.length<4 || username==" "){
        errors.username='username can not be empty and must be more then 4 carachters';
    }

    let password=document.getElementById('passw').value;
    let password2=document.getElementById('passw2').value;

    if (password==" " || password!=password2){
        errors.password='password can not be empty';
        errors.password2='password do not match';
    }

    let agree=document.getElementById('checkagree').checked;
    if (!agree){
        errors.agree='you must agree our terms and conditions';
    }

    // radio დროს
    let age=false;
    form.querySelectorAll('[name="age"]').forEach(element => {
        if (element.checked){
            age=true;
        }
    });

    if (age==false){
        errors.age='please select your age';
    }

    console.log(errors);

    form.querySelectorAll('.error-text').forEach(item=>{
        item.textContent='';
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

let passwordShow=document.getElementById('passw2');
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


function validation(){
    let emailField=document.getElementById('myemail').value;
    let ptext=document.getElementById('email');
    let emailStructure=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailField.match(emailStructure)){
        ptext.innerHTML='your email is valid';
        ptext.style.color='green';
    }else{
        ptext.innerHTML='your email is invalid';
        ptext.style.color='red';
    }
}















// let errors={
//     username:'',
//     password:'',
//     password2:'',
// }