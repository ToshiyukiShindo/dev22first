'use strict'
{
    const btn2 = document.getElementById('signbtn2');
    const btn3 = document.getElementById('signbtn3');
    const mask = document.getElementById('mask');
    const modal = document.getElementById('modal');
    const reset = document.getElementById('reset');

    reset.addEventListener('click',() => {
        mask.classList.remove('hidden');
        modal.classList.remove('hidden');
    });
    mask.addEventListener('click',() => {
        mask.classList.add('hidden');
        modal.classList.add('hidden');
    });
    btn3.addEventListener('click',() => {
        mask.classList.add('hidden');
        modal.classList.add('hidden');
    });
}