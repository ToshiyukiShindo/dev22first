'use strict'
{
    const sendEc = document.getElementById('sendec');
    const sendBtn = document.getElementById('signbtn2');
    const email = document.getElementById('email');
    const pw1 = document.getElementById('newpw1');
    const pw2 = document.getElementById('newpw2');
    
    sendBtn.addEventListener('click',()=>{
        if(pw1.value === "" || email.value === "" ||pw2.value === ""){
            sendEc.classList.toggle('active');
        }else{
            location.href = '../html/confirm.html#';
        }
    });    
}