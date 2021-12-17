'use strict'

let allDataf = JSON.parse(localStorage.getItem('alldata2'));

let fArr = allDataf.filter(value =>{
    if(value.favorite !== false){
        return value;
    } 
});

for(let i=0;i<fArr.length;i++){
    let newD = document.createElement('div');
    newD.classList.add(`listcontents`);
    newD.innerHTML =`
    <img src="${fArr[i].image}" class="contentimg" alt="product">
    <div class="contenttext2">
    <p class="textdeco">category ${fArr[i].category}<br>${fArr[i].name}<br>¥${fArr[i].price}-</p>
    <button class="cancelbtn" id="cancelbtn">お気に入りから外す</button></div>`
    
    let cancelBtn = newD.querySelector('.cancelbtn');
    cancelBtn.addEventListener('click',()=>{
        newD.remove();
        let theData = allDataf.find(item => item.name === fArr[i].name)
        console.log(theData);
        theData.favorite = false;
        console.log(allDataf);
        localStorage.setItem('alldata2',JSON.stringify(allDataf));
    });

    document.body.appendChild(newD);
};