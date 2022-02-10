 const form=document.getElementById('form');
 const username=document.getElementById('username');
 const email=document.getElementById('email');
 const password1=document.getElementById('password1');
 const password2=document.getElementById('password2');

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkInput();

    if (username.value=== ''){
        showerror(username,'กรุณาป้อนชื่อผู้ใช้');
    }else{
        showsuccess(username);
    }
    if (email.value=== ''){
        showerror(email,'กรุณาป้อนอีเมล');
    }else{
        showsuccess(email);
    }
    if (password1.value=== ''){
        showerror(password1,'กรุณาป้อนรหัสผ่าน');
    }else{
        showsuccess(password1);
    }
    if (password2.value=== ''){
        showerror(password2,'กรุณายืนยันรหัสผ่าน');
    }else{
        showsuccess(password2);
    }
});
 
function checkInput () {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
}

function showerror(input,message){
    const formcontrol=input.perentElement;
    formcontrol.className='form-control error';
    const small=formcontrol.querySelector('small');
    small.innerText=message;
}

function showsuccess(input){
    const formcontrol=input.perentElement;
    formcontrol.className='form-control success';
}

