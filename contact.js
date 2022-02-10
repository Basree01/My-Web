const form=document.getElementById('form');
const fullname=document.getElementById('fullname');
const email=document.getElementById('email');
const subject=document.getElementById('subject');
const message=document.getElementById('message');
const phonenumber=document.getElementById('phonenumber');


form.addEventListener('submit',function(e){
    e.preventDefault();
    if (fullname.value=== ''){
        showerror(fullname,'put your name');
    }else{
        showsuccess(fullname);
    }
    if (email.value=== ''){
        showerror(email,'put your email');
    }else{
        showsuccess(email);
    }
    if (subject.value=== ''){
        showerror(subject,'put your name');
    }else{
        showsuccess(subject);
    }
    if (message.value=== ''){
        showerror(message,'put your name');
    }else{
        showsuccess(message);
    }
    if (phonenumber.value=== ''){
        showerror(phonenumber,'put your name');
    }else{
        showsuccess(phonenumber);
    }
});
 
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



