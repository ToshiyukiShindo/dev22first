'use strict'
{
    let Text = document.querySelectorAll('.servicetext1');
    let i=0;
    function scrollFunc{
    Text.forEach(i<Text.length,i++)
    if (window.innerHeight > scrollText[i].getBoundingClientRect().top + triggerMargin) {
      scrollText[i].classList.add('display');
    }

window.addEventListener('load', scrollFunc);
window.addEventListener('scroll', scrollFunc);    
}