const span = document.getElementById("span");
const times = document.getElementById("times");
function closed(){
    times.style.display = "none";
    span.style.display = "none";
}
let Fname = localStorage.getItem("name");
if(!Fname){
    let a = prompt("Enter your name");
    localStorage.setItem("name",a);
}
document.getElementById("vijay").innerHTML = Fname;
function show(){
    times.style.display = "block";
    span.style.display = "block";
}
const nav = document.getElementById("header");
const d = document.getElementById("d");
window.addEventListener("scroll",()=>{
    let y = scrollY;
    if(y > 30){
        nav.classList.add("stick");
        d.style.paddingTop = "0"
    }else{
        nav.classList.remove("stick");
        d.style.paddingTop = "2%"
    }
})

const slider = document.getElementById("product-slider");

function left(){
    slider.scrollLeft -= 360;
}
function right(){
    slider.scrollLeft += 360;
}

const sider = document.getElementById("book-slider");

function slideleft(){
    sider.scrollLeft -= 360;
    console.log("Hi")
}

function notify(){
    alert("You will get Notify if games conducted");
}

function slideright(){
    sider.scrollLeft += 360;
}