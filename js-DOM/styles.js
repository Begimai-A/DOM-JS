"use strict";


const box=document.getElementById("box"),
     buttons=document.getElementsByTagName("button"),
     circles=document.getElementsByClassName("circle"),
     hearts=document.querySelectorAll(".heart"),
     wrapper=document.querySelector(".wrapper");


box.style.backgroundColor="gray"; // ИНЛАЙН СТИЛИ= всегда приоритетнее обычных стилей
box.style.width="150px";

buttons[0].style.borderRadius="100%";  
circles[1].style.backgroundColor="green";

box.style.cssText="background-color: pink; width: 180px"; // inline-style пишутся также как и в сss.

hearts.forEach (item => {
    item.style.backgroundColor="beige"; // Добавление стиля ко всем элементам псевдомассива.
});


// СОЗДАНИЕ ЭЛЕМЕНТОВ НА JS

const div=document.createElement("div"); // нОВЫЙ ЭЛЕМЕНТ СОЗДАН И ОН СУЩЕСТ-ЕТ ТОЛЬКО ВНУТРИ ЖС 

div.classList.add("black"); // создание/ подключение css класса в созданный элемент

document.body.append(div); // добавление элемента в DOМ/ в НТML документ. Автоматически добавляется в конц бади


wrapper.append(div); // Также можно расположить после любого класса HTML  документа
wrapper.prepend(div); // Также можно расположить перед любым классом HTML  документа
hearts[0].before(div); // Можно поставить перед/после любого элемента
hearts[1].after(div);

circles[1].remove(); // Delete the first element of circles
circles[0].replaceWith(hearts[1]); // replace the elements

div.innerHTML = "<h1>Hello</h1>"; //может включать себя HTML структуры
div.textContent="hello";// работает только с текстом. Непринимает HTML структуры в целях безопасности









