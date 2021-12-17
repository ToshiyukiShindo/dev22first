'use strict'

const name = document.getElementById('name');
const kana = document.getElementById('kana');
const eMail = document.getElementById('email');
const postal = document.getElementById('postal');
const address = document.getElementById('address');

const conBtn = document.getElementById('confirm');
const rstBtn = document.getElementById('reset');

if(JSON.parse(localStorage.getItem('account'))){
    let acData = JSON.parse(localStorage.getItem('account'));
    name.value = acData.name;
    kana.value = acData.kana;
    eMail.value = acData.email;
    tel.value = acData.tel;
    postal.value = acData.postal;
    address.value = acData.address;
}

conBtn.addEventListener('click',()=>{
    let arr = {
        name: name.value,
        kana: kana.value,
        email: eMail.value,
        tel: tel.value,
        postal: postal.value,
        address: address.value
    };
    let length = arr.length;
    localStorage.setItem('account',JSON.stringify(arr))
});

rstBtn.addEventListener('click',()=>{
    name.value = "";
    kana.value = "";
    eMail.value = "";
    tel.value = "";
    postal.value = "";
    address.value = "";
});