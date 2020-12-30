"use strict";

const btn=document.querySelectorAll("button");

// btn.addEventListener('click', () => {
//     alert("click");
// });


// btn.addEventListener('click', (event)=>{
//     console.log(event.target);
//     event.target.remove();
// });

// btn.addEventListener('click', (e) => {
//     e.target.remove();
//    });
// btn.removeEventListener('click', (e) => {
//     e.target.remove();
//    });

// const deleteElement = (e) => {
//     e.target.remove();
//    };
// btn.addEventListener('click', deleteElement);

// btn.removeEventListener('click', deleteElement);

const greeting=function () {
    console.log("hello");
};

// btn.addEventListener('click', greeting);

btn.forEach(btns =>{
    btns.addEventListener('click', greeting);
});



// const greeting2=(event) =>{
//     console.log("Hello again");
// };

// btn.addEventListener('click', greeting2);
// btn.removeEventListener('click', greeting);












let firstDiv = document.querySelector('div');
firstDiv.style.color = 'red';

let paragraphs = document.querySelectorAll('p');
for(let p of paragraphs)
p.style.color = 'blue';
// btn.addEventListener('mouseenter', () =>{
//     console.log("hover");
// });
