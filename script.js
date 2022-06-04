'use strict';
let btnSubmit = document.getElementById('btn-submit');
let selectListItem = document.querySelectorAll('.button');
let amountSelected = 0;

let userSubmit = function(){
    userSelectAmount();
    document.querySelector(".selected span").textContent = amountSelected;
}

for(let i = 0;i<selectListItem.length;i++){
    selectListItem[i].addEventListener('click',function(){
        selectListItem[i].classList.toggle("select")
    })
}

let userSelectAmount = function(){
    for(let i = 0; i<selectListItem.length;i++){
        if(selectListItem[i].classList.contains("select")){
            amountSelected++;
        }

    }String(amountSelected);
}







btnSubmit.addEventListener('click',function(){
document.querySelector(".big-box").classList.add("hidden");
document.querySelector(".big-box1").classList.remove("hidden");
userSubmit();



})



        
    














