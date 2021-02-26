/*Função de adição de like e coração*/
function like(clickedId){ 
    const idButton = clickedId;
    const botao = document.querySelector(`#${idButton}`);
    if(botao.classList.contains('marcado')){
        botao.classList.remove('marcado');
        const num = idButton.replace('b','');
        const idLike = `#coracao${num}`;
        const numReal = document.querySelector(`#coracaoId${num}`);
        const coracao = document.querySelector(`#imgcoracao${num}`);

        const number = parseInt(numReal.textContent)-1;
        document.querySelector(`#coracaoId${num}`).innerHTML = number;
        coracao.src = "img/heart.svg"
    }
    else{
        botao.classList.add('marcado');
        const num = idButton.replace('b','');
        const idLike = `#coracao${num}`;
        const numReal = document.querySelector(`#coracaoId${num}`);
        const coracao = document.querySelector(`#imgcoracao${num}`);

        const number = parseInt(numReal.textContent)+1;
        document.querySelector(`#coracaoId${num}`).innerHTML = number;
        coracao.src = "img/heart_red.svg"
    }
    
}

/*Função para fixar o elemento*/
function fix(clickedId){
    const num = clickedId.replace('f','');
    const destaque = document.querySelector(".fixos");
    const postagem = document.querySelector(".postProfile")
    const caixa = document.querySelector(`#caixa${num}`).parentNode;
    const imagem = document.querySelector(`#f${num} img`);
    if(caixa.classList.contains("fixado")){
        if(num==0){
            postagem.appendChild(caixa);
            caixa.classList.remove("fixado");
            imagem.src = 'img/fixed.svg';
        }else{
            const abaixo = parseInt(num)-1;
            
            let regulador = 1
            while(document.querySelector(`#caixa${abaixo-regulador}`) == null){
                regulador++
            }
            firstChild = document.querySelector(`#caixa${abaixo-regulador}`).parentNode;
            postagem.insertBefore(caixa, firstChild);
            caixa.classList.remove("fixado");
            imagem.src = 'img/fixed.svg';
        }
        
    }
    else{
        imagem.src = 'img/fixed_click.svg';
        firstChild = destaque.firstChild;
        destaque.insertBefore(caixa, firstChild);
        caixa.classList.add("fixado");
    }
    
}

/*Função para deletar elemento*/
function del(clickedId){
    const num = clickedId.replace('d','');
    document.querySelector(`#caixa${num}`).classList.add("fadeOut");
    setTimeout(function(){
        document.querySelector(`#caixa${num}`).remove();
    },500)
    
}

/*Funções para editar elemento*/
function edit(clickedId){
    const num = clickedId.replace('e','');
    const text = document.querySelector(`#textPost${num}`);
    const value = text.textContent.trim()
    text.innerHTML = `
        <div class="displayTitle">
            <textarea placeholder="" class="textPost textEdit textEdit${num}">${value}</textarea>
            <button class="buttonEdit" id="buttonEdit${num}"onclick="editConfirm(this.id)"><img src="img/edit_okay.svg"/></button>
        </div>
    `
    
}
function editConfirm(clickedId){
    const num = clickedId.replace('buttonEdit','')
    const text = document.querySelector(`#textPost${num}`);
    const value = document.querySelector(`.textEdit${num}`).value;
    if(value.length>140 || value.length==0){
        document.querySelector(`.textEdit${num}`).style.color = "red";
    }else{
        document.querySelector(`.textEdit${num}`).style.color = "red"
        text.innerHTML = `
        <h5 class="textPost" id='textPost${num}'>${value}</h5>
    `
    } 
}