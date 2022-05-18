document.getElementById('registration').addEventListener('submit',function(event){
    event.preventDefault();
    let errors={};
    let form=event.target;

    let username=document.getElementById('username').Value;
    if (username.length<4 || username==" "){
        errors.username='username can not be empty and must be more then carachters';
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









});

let errors={
    username:'',
    password:'',
    password2:'',
}