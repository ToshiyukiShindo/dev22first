'use strict'

const sortAll = document.getElementById(`sortall`);
const sortC1 = document.getElementById(`sortc1`);
const sortC2 = document.getElementById(`sortc2`);
const sortC3 = document.getElementById(`sortc3`);
const sortFav = document.getElementById(`sortfav`);
const sortBtn = document.getElementById('sortbtn');

sortC1.disabled = true;
sortC2.disabled = true;
sortC3.disabled = true;
sortFav.disabled = true;

sortAll.addEventListener('change',()=>{
    if(sortAll.checked){
        sortC1.disabled = true;
        sortC2.disabled = true;
        sortC3.disabled = true;
        sortFav.disabled = true;
        sortC1.checked = false;
        sortC2.checked = false;
        sortC3.checked = false;
        sortFav.checked = false;
    } else {
        sortC1.disabled = false;
        sortC2.disabled = false;
        sortC3.disabled = false;
        sortFav.disabled = false;
    }
});

let contents = document.querySelectorAll('contents');

