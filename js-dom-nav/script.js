"use strict";
 console.log(document.head); // shows head
 console.log(document.documentElement); // shows HTML tag
 console.log(document.body.childNodes); // shows the child elements of the body tag


 console.log(document.body.firstChild); // getting the first node of the body tag
 console.log(document.body.firstElementChild); // getting the first element of the body tag

 console.log(document.body.lastChild); //getting the last node of the body tag
 console.log(document.body.lastElementChild);// getting the lastt element of the body tag


 //Команды для Получение родителя, соседя и детей

 console.log(document.querySelector("#current").parentNode.parentNode);
 console.log(document.querySelector("#current").parentElement);

console.log(document.querySelector('[data-current="3"]').nextSibling); // gets the next NODE 
console.log(document.querySelector('[data-current="3"]').nextElementSibling); // gets the next ELEMENT 
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // gets the previous ELEMENT 


// КАК ПЕРЕБРАТЬ И ФИЛЬТРОВАТЬ НОДЫ ОТ ЭЛЕМЕНТОВ ЕСЛИ НЕТ КОМАНДЫ "element" как на примере nextElementSibling
 for (let node of document.body.childNodes ){
     if (node.nodeName=='#text'){
         continue;
     }
     console.log(node);
 }



