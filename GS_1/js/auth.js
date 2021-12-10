'use strict'

const checkBox = document.getElementById('authcheck');

function getRandumNum2(){
    let num = Math.floor(Math.random()*10+48);
    let lenNum =6
    let resultNum = "";
    for(let i=0;i<lenNum;i++){
        resultNum += Math.floor(Math.random()*10);
    }
    return resultNum;
}
const Auth = document.getElementById('authoutput')

checkBox.addEventListener('change',()=>{
    if(checkBox.checked){
        Auth.value = getRandumNum2();
    }else{
        Auth.value = "";
    }
});

const code1 = document.getElementById('code1');
const code2 = document.getElementById('code2');
const code3 = document.getElementById('code3');
const code4 = document.getElementById('code4');
const code5 = document.getElementById('code5');
const code6 = document.getElementById('code6');

const submitBtn = document.getElementById('send');
const resetBtn = document.getElementById('reset');

submitBtn.addEventListener('click',()=>{
    if(Auth.value === ''+code1.value+code2.value+code3.value+code4.value+code5.value+code6.value && Auth.value !== ""){
        window.alert('入力された内容を登録します！');
    }else{
        window.alert('認証番号を登録し直してください');
    }
});

resetBtn.addEventListener('click',()=>{
    location.reload();    
});


