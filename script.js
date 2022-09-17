const openBtn=document.querySelector(".openbtn");
const modal=document.querySelector(".module");
const closeBtn=document.querySelector(".close");
const container=document.querySelector(".module-container")

openBtn.addEventListener("click",function(){
    modal.classList.add("show")
})
closeBtn.addEventListener("click",function(){
    modal.classList.remove("show")
})
openBtn.addEventListener("click",function(){
    container.classList.add("kimia")
})
closeBtn.addEventListener("click",function(){
    container.classList.remove("kimia")
})
