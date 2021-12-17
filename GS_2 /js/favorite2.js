'use strict'

const cB1 = document.getElementById('check1');
const cB2 = document.getElementById('check2');
const cB3 = document.getElementById('check3');
const cB4 = document.getElementById('check4');
const cB5 = document.getElementById('check5');
const cB6 = document.getElementById('check6');
const cB7 = document.getElementById('check7');
const cB8 = document.getElementById('check8');
const cB9 = document.getElementById('check9');
const cB10 = document.getElementById('check10');
const cB11 = document.getElementById('check11');

const cTs1 = document.getElementById('contents1');
const cTs2 = document.getElementById('contents2');
const cTs3 = document.getElementById('contents3');
const cTs4 = document.getElementById('contents4');
const cTs5 = document.getElementById('contents5');
const cTs6 = document.getElementById('contents6');
const cTs7 = document.getElementById('contents7');
const cTs8 = document.getElementById('contents8');
const cTs9 = document.getElementById('contents9');
const cTs10 = document.getElementById('contents10');
const cTs11 = document.getElementById('contents11');


if(JSON.parse(localStorage.getItem('alldata2'))){
    let bkdata = JSON.parse(localStorage.getItem('alldata2'));
    cB1.checked = bkdata[0].favorite;
    cB2.checked = bkdata[1].favorite;
    cB3.checked = bkdata[2].favorite;
    cB4.checked = bkdata[3].favorite;
    cB5.checked = bkdata[4].favorite;
    cB6.checked = bkdata[5].favorite;
    cB7.checked = bkdata[6].favorite;
    cB8.checked = bkdata[7].favorite;
    cB9.checked = bkdata[8].favorite;
    cB10.checked = bkdata[9].favorite;
    cB11.checked = bkdata[10].favorite;
};

let alldata2 = [
{
    category: 1,
    id:"contents1",
    name: "pot",
    price: 10000,
    favorite: cB1.checked,
    image: "../product_img/pot.png"
},
{
    category: 2,
    id:"contents2",
    name: "brash-toy",
    price: 10000,
    favorite: cB2.checked,
    image: "../product_img/brashtoy.png"
},
{
    category: 3,
    id: "contents3",
    name: "Fashon-desk",
    price: 10000,
    favorite: cB3.checked,
    image: "../product_img/desk.png"
},
{
    category: 1,
    id: "contents4",
    name: "gohan",
    price: 10000,
    favorite: cB4.checked,
    image: "../product_img/gohan.png"
},
{
    category: 3,
    id: "contents5",
    name: "stool",
    price: 10000,
    favorite: cB5.checked,
    image: "../product_img/stool.png"
},
{
    category: 3,
    id: "contents6",
    name: "fashon-tansu",
    price: 10000,
    favorite: cB6.checked,
    image: "../product_img/tansu.png"
},
{
    category: 2,
    id: "contents7",
    name: "クッション",
    price: 10000,
    favorite: cB7.checked,
    image: "../product_img/クッション.png"
},
{
    category: 1,
    id: "contents8",
    name: "tea-spoon",
    price: 10000,
    favorite: cB8.checked,
    image: "../product_img/ティースプーン.png"
},
{
    category: 2,
    id: "contents9",
    name: "ブランケット",
    price: 10000,
    favorite: cB9.checked,
    image: "../product_img/ブランケット.png"
},
{
    category: 1,
    id: "contents10",
    name: "bowl",
    price: 10000,
    favorite: cB10.checked,
    image: "../product_img/ポーセリンボウル.png"
},
{
    category: 2,
    id: "contents11",
    name: "towel",
    price: 10000,
    favorite: cB11.checked,
    image: "../product_img/タオル.png"
}]
localStorage.setItem('alldata2',JSON.stringify(alldata2));

cB1.addEventListener('change',()=>{
    if(cB1.checked){
        alldata2[0].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB1.checked === false){
        alldata2[0].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB2.addEventListener('change',()=>{
    if(cB2.checked){
        alldata2[1].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB2.checked === false){
        alldata2[1].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB3.addEventListener('change',()=>{
    if(cB3.checked){
        alldata2[2].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB3.checked === false){
        alldata2[2].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB4.addEventListener('change',()=>{
    if(cB4.checked){
        alldata2[3].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB4.checked === false){
        alldata2[3].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB5.addEventListener('change',()=>{
    if(cB5.checked){
        alldata2[4].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB5.checked === false){
        alldata2[4].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB6.addEventListener('change',()=>{
    if(cB6.checked){
        alldata2[5].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB6.checked === false){
        alldata2[5].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB7.addEventListener('change',()=>{
    if(cB7.checked){
        alldata2[6].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB7.checked === false){
        alldata2[6].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB8.addEventListener('change',()=>{
    if(cB8.checked){
        alldata2[7].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB8.checked === false){
        alldata2[7].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB9.addEventListener('change',()=>{
    if(cB9.checked){
        alldata2[8].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB9.checked === false){
        alldata2[8].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB10.addEventListener('change',()=>{
    if(cB10.checked){
        alldata2[9].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB10.checked === false){
        alldata2[9].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});
cB11.addEventListener('change',()=>{
    if(cB11.checked){
        alldata2[10].favorite = true;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    } else if (cB11.checked === false){
        alldata2[10].favorite = false;
        localStorage.setItem('alldata2',JSON.stringify(alldata2));
    }
});