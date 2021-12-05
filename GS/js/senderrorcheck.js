'use strict'
{
    const sendEc = document.getElementById('sendec');
    const sendBtn = document.getElementById('sendbtn');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    
    sendBtn.addEventListener('click',()=>{
        if(name.value === "" || email.value === ""){
            sendEc.classList.toggle('active');
        }else{
            location.href = '../html/confirm.html#';
        }
    });    
}