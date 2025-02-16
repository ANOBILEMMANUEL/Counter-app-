const incre=document.querySelector(".increase");
const decre=document.querySelector(".decrease");
const reset=document.querySelector(".reset");
const dis =document.getElementById("display");
const color =document.getElementById("color");
const container =document.getElementsByClassName("container")[0];
container.style.backgroundColor = "#0c3030"; 


var count=0;
incre.addEventListener("click",function(){
    count++;
    dis.innerHTML=count 
});
decre.addEventListener("click",()=>{
    count--;
    dis.innerHTML=count
});
reset.addEventListener("click",()=>{
    count=0
    dis.innerHTML=count;
});
color.addEventListener("input",()=>{
    const picked =color.value;
    container.style.backgroundColor = picked;   
    if (picked.toLowerCase() === "#ffffff") {
        alert("White color is not allowed. Please choose a different color.");
       const cdefault=color.value = "#0c3030"; 
        container.style.backgroundColor = cdefault; 
    } else {
        container.style.backgroundColor = picked; 
    }
});