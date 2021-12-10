'use strict'

const tcheck1 = document.getElementById('tcheck1');
const tcheck2 = document.getElementById('tcheck2');
const tcheck3 = document.getElementById('tcheck3');
const tInput1 = document.getElementById('tninput1');
const tInput2 = document.getElementById('tninput2');
const tInput3 = document.getElementById('tninput3');
const tSite1 = document.getElementById('tsoutput1');
const tSite2 = document.getElementById('tsoutput2');
const tSite3 = document.getElementById('tsoutput3');



const rigthBtn = document.getElementById('rsend');

function getRandumNum3(){
    let lenNum =4
    let resultNum = "";
    for(let i=0;i<lenNum;i++){
        resultNum += Math.floor(Math.random()*10);
    }
    return resultNum;
}

rigthBtn.addEventListener('click',()=>{
    if(tcheck1.checked){
        tInput1.value = getRandumNum3();
        if(tInput1.value < 3000){
            tSite1.value = "G'sアカデミー東京";
        } else if (tInput1.value >= 3000 && tInput1.value < 6500){
            tSite1.value = "G'sアカデミー福岡";
        } else {
            tSite1.value = "大手町特別会場";
        }
    } 

    if(tcheck2.checked){
        tInput2.value = getRandumNum3();
        if(tInput2.value < 3000){
            tSite2.value = "G'sアカデミー東京";
        } else if (tInput2.value >= 3000 && tInput2.value < 6500){
            tSite2.value = "G'sアカデミー福岡";
        } else {
            tSite2.value = "大手町特別会場";
        };
    } 

    if(tcheck3.checked){
        tInput3.value = getRandumNum3();
        if(tInput3.value < 3000){
            tSite3.value = "G'sアカデミー東京";
        } else if (tInput3.value >= 3000 && tInput3.value < 6500){
            tSite3.value = "G'sアカデミー福岡";
        } else {
            tSite3.value = "大手町特別会場";
        };
    } 
});

tcheck1.addEventListener('change',()=>{
    if(tcheck1.checked === false){
        tInput1.value = "";
        tSite1.value = "";
    };
});
tcheck2.addEventListener('change',()=>{
    if(tcheck2.checked === false){
        tInput2.value = "";
        tSite2.value = "";
    };
});
tcheck3.addEventListener('change',()=>{
    if(tcheck3.checked === false){
        tInput3.value = "";
        tSite3.value = "";
    };
});

const appliBtn = document.getElementById('rappli');

function getRandumCan(){
    let lencan =4
    let resultcan = "";
    for(let c=0;c<lencan;c++){
        resultcan += Math.floor(Math.random()*10);
    }
    return resultcan;
}

let appNum = getRandumCan();
let can = document.getElementById('carea');

appliBtn.addEventListener('click',()=>{
    if(tInput1.value > appNum && tInput2.value > appNum){
        can.value = "授業料３ヶ月間30％割引！";
    } else if(tInput1.value > appNum && tInput2.value <= appNum){
        can.value = "授業料初月30％割引！";
    } else if(tInput1.value <= appNum && tInput2.value > appNum){
        can.value = "授業料初月30％割引！";
    } else {
        can.value = "入会料30％割引！";
    }
    console.log(appNum);
});
