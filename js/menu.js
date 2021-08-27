document.querySelector(".menu-abrir").onclick=fucntion(){
    document.documentElement.classList.add("menu=ativo");
}
document.querySelector(".menu-fechar").onclick=fucntio(){
    document.documentElement.classList.remove("menu-ativo");
}
document.documentElement.onclick=function(event){
    if(event.target === document.documentElement){
        document.documentElement.classList.remove("menu-ativo");
    }
};