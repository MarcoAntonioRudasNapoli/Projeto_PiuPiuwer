let textFiltro = document.querySelector(".search");
textFiltro.addEventListener("input", function(){
    const postagens = document.querySelectorAll(".postagem");
    if(this.value.length > 0){
        for(let i = 0; i < postagens.length; i++){
            const post = postagens[i];
            const nome = document.querySelectorAll(".displayTitle h3");
            const textnome = nome[i].textContent;
            const pesquisa = new RegExp(this.value, "i");

            if(!pesquisa.test(textnome)){
                post.classList.add("invisible");
            }else{
                post.classList.remove("invisible");
            }
        }
    }
    else{
        for(let i = 0; i < postagens.length; i++){
            const post = postagens[i];
            post.classList.remove("invisible");
        }
    }
})