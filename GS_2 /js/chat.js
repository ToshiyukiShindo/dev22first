'use strict'

const cBtn = document.getElementById('submit');
const input = document.getElementById('input');
let comments = [];
let scomments = [];
const person = document.getElementById('person');

if(JSON.parse(localStorage.getItem('comments'))){
    for(let i = 0;i<JSON.parse(localStorage.getItem('comments')).length;i++){
        let data = JSON.parse(localStorage.getItem('comments'));
        let ppost = document.createElement('div');
        ppost.classList.add('ppost');
        ppost.innerHTML = `
        <p class="usercm" id="usercm">${data[i]}<button class="trash" id="trash">dlt</button></p>`;

        const dlBtn = ppost.querySelector('.trash')
        dlBtn.addEventListener('click',()=>{
            ppost.remove();
            let filteredData = data.filter(item => item !== data[i]);
            console.log(filteredData);
            localStorage.setItem('comments',JSON.stringify(filteredData));
        });

        document.getElementById('usercomment').appendChild(ppost);
    };
};

if(JSON.parse(localStorage.getItem('scomments'))){
    let data2 = JSON.parse(localStorage.getItem('scomments'));
    for(let i = 0;i<data2.length;i++){
        let ppost2 = document.createElement('div');
        ppost2.classList.add('ppost');
        ppost2.innerHTML = `
        <p class="servicecm" id="servicecm">${data2[i]}<a class="trash2" id="trash2">✖️</a></p>`;
        document.getElementById('usercomment').appendChild(ppost2);
    };
}; 

    cBtn.addEventListener('click',() =>{
        if(input.value !== ""){
            const post = document.createElement('div');
            post.classList.add('post');
            post.innerHTML = `
            <p class="usercm" id="usercm">${input.value}<button class="trash" id="trash">✖️</button></p>    `;
            
            if(JSON.parse(localStorage.getItem('comments'))){
                comments = JSON.parse(localStorage.getItem('comments'))};
                comments.push(input.value);
                localStorage.setItem('comments', JSON.stringify(comments));
                input.value='';                
                
                };
                document.body.appendChild(post);
            });  
    // } else {
        
    //     cBtn.addEventListener('click',() =>{
    //         if(input.value !== ""){
    //             const post2 = document.createElement('div');
    //             post2.classList.add('post2');
    //             post2.innerHTML = `
    //             <p class="servicecm" id="servicecm">${input.value}<a class="trash2" id="trash2">✖️</a></p>`;
    //             document.body.appendChild(post2);
    //             if(JSON.parse(localStorage.getItem('scomments'))){
    //                 scomments = JSON.parse(localStorage.getItem('scomments'))};
    //                 scomments.push(input.value);
    //                 localStorage.setItem('scomments', JSON.stringify(scomments));
    //                 input.value='';
                
    //                 let dBtn2 = post2.innerHTML.querySelector('#trash2')
    //                 dBtn2.addEventListener('click',()=>{
    //                     this.removeItem();
    //                 });
    //         }});
    // }        

