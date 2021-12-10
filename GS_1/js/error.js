'use strict'

const sname = document.getElementById('nameinput');
const add = document.getElementById('adinput');
const eMail = document.getElementById('emailinput');
const checkBtn = document.getElementById('infocheck');
const nameError = document.getElementById('nameerror');
const emailError = document.getElementById('emailerror');

checkBtn.addEventListener('click',()=>{
    if(sname.value === ''){
        nameError.classList.toggle('display');
        sname.classList.toggle('fault');
    } else {
        sname.classList.toggle('success');
    };
    if(eMail.value === ''){
        emailError.classList.toggle('display');
        eMail.classList.toggle('fault');
    } else {
        eMail.classList.toggle('success');
    };

});