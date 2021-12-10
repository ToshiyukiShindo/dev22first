'use strict'
function getRandumNum(){
        let num = Math.floor(Math.random()*10+48);
        let lenNum =12
        let resultNum = "";
        for(let i=0;i<lenNum;i++){
            resultNum += Math.floor(Math.random()*10);
        }
        return resultNum;
    }

    function getRandumalpha(){
        let alpha ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let len = 8;
        let result = "";
        for(let a=0;a<len;a++){
            result += alpha.charAt(Math.floor(Math.random()*alpha.length));
        }
        return result;
    }

    const inputId = document.getElementById('idinput');
    const pass = document.getElementById('passout');
    const issueBtn = document.getElementById('idissue');
    let rundumAlpha = getRandumalpha();
    
    issueBtn.addEventListener('click',()=>{
        inputId.value = getRandumNum();
        pass.value = getRandumalpha();
    });
