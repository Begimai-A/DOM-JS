"use strict";

const box=document.getElementById("box");
console.log(box);

const buttons=document.getElementsByTagName("button") //[1]); // сразу  в переменной указываем нужный элемент псевдомассива
console.log(buttons[1]);  // второй способ вывести нужный элемент из псевдо массива
                        // даже если в псевдомассиве только 1 элемент нужно все равно прописвать его индекс при его 
                        // вызове

                     

const circles=document.getElementsByClassName("circle");
console.log(circles);

const hearts=document.querySelectorAll(".heart");
console.log(hearts); // 

hearts.forEach( item=> {
console.log(item);
});

const oneHeart=document.querySelector(".heart"); // позволяет получить ьолько один элемент со страницы. 
                                                  //ВОЗВРАЩАЕТ самый ПЕРВЫЙ ЭЛЕМЕНТ!!!
console.log(oneHeart);


