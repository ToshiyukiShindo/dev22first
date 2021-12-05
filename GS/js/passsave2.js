'use strict'
{
    const email = document.getElementById('email2');
    const pass = document.getElementById('pass2');
    const cb = document.getElementById('checkbox');
    const ddata = JSON.parse(localStorage.getItem('data1'));
    const cb2 = JSON.parse(localStorage.getItem('datacb'));

    if(ddata){
        email.value = ddata[0];
        pass.value = ddata[1];
        cb.checked = cb2; 
    }

    cb.addEventListener('change',()=>{
        const data1 = [email.value,pass.value];
        if(cb.checked){
            localStorage.setItem('data1',JSON.stringify(data1));
            localStorage.setItem('datacb',cb.checked);
        }else{
            localStorage.clear();
        }
    });
}