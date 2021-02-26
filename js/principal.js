
/*Requisição da API*/
let identificador = '';
fetch('https://next.json-generator.com/api/json/get/EkyZfHLU_')
	.then(request => request.json())
	.then(API => {
		var lista = API;
		const postagem = document.querySelector(".postProfile");
		for (i = 0; i<lista.length; i ++){
            const caixa = document.createElement("div");
            if(lista[i].imagem == ''){
                var imagem = 'img/conta_maior.svg';
                var cls = '';
            }else{
                var imagem = lista[i].imagem;
                var cls = 'class="pictureProfile"';
            }
            caixa.innerHTML = `
                <div class="postagem" id="caixa${i}">
                    <div id="divNome" class="displayTitle">
                        <a href=""><img ${cls} src="${imagem}"/></a>
                        <div id="namePost">
                            <div class="justContent">
                                <div class="displayTitle">
                                    <h3>${lista[i].nome}</h3>
                                    <h6>${lista[i].username}</h6>
                                </div>
                                <div>
                                <button class="fixed" id="f${i}" onclick="fix(this.id)"><img src="img/fixed.svg"></button>
                                </div>
                            </div>
                            <h5 class="textPost">${lista[i].mensagem}</h5>
                        </div>
                    </div>
                    <div class="displayIcons">
                        <div class="displayActions">
                            <button class="buttonLike" id='b${i}' onclick="like(this.id)"><img class="coracao" id='imgcoracao${i}' src="img/heart.svg"></button>
                            <h4 id='coracaoId${i}'>0</h4>
                        </div>
                        <div>
                            <a href=""><img src="img/comment.svg"></a>
                        </div>
                        <div>
                            <a href=""><img src="img/repiuweet.svg"></a>
                        </div>
                        <div>
                            <a href=""><img src="img/share.svg"></a>
                        </div>
                    </div>
                </div>
            `
            
            
            firstChild = postagem.firstChild;
            postagem.insertBefore(caixa, firstChild);
		}
		identificador = i;
	})

/*Adição da div onde ficarão os pius fixados*/
const fixados = document.createElement("div");
const posts = document.querySelector(".postProfile");
fixados.classList.add("content");
fixados.classList.add("janela");
fixados.classList.add("fixos");
document.querySelector("main").insertBefore(fixados,posts);


/*Verificação de caracteres e contador*/

const textArea = document.querySelector(".textPost");
const contador = document.querySelector(".contador");
textArea.oninput = function(){
    const quantidade = textArea.value.length;
    contador.innerHTML = quantidade + "/140";
    if(quantidade>140){
        textArea.style.color = "red";
        contador.style.color = "red";
        
    }
    else{
        textArea.style.color = "#484848";
        contador.style.color = "#484848";
    }
}

/*Adição de piuweet*/

const botaoPiuweet = document.querySelector(".piuweet");
let reg = 0;
botaoPiuweet.addEventListener("click", function(event){
    event.preventDefault();
    const idb = identificador+reg;
    const postagem = document.querySelector(".postProfile");
    const caixa = document.createElement("div");
    const abaTexto = document.querySelector(".textPost");
    const texto = abaTexto.value
    if(texto!='' && texto.length <= 140){
        caixa.innerHTML = `
        <div class="postagem" id="caixa${idb}">
            <div id="divNome" class="displayTitle">
                <a href=""><img src="img/conta_maior.svg"/></a> 
                <div id="namePost">
                    <div class="justContent">
                        <div class="displayTitle">
                            <h3>juninho123</h3>
                            <h6>@juninho1234567890</h6>
                        </div>
                        <div>
                            <button class="fixed" id="f${idb}" onclick="fix(this.id)"><img src="img/fixed.svg"></button>
                            <button class="edit" id="e${idb}" onclick="edit(this.id)"><img src="img/edit.svg"></button>
                            <button class="delete" id="d${idb}" onclick="del(this.id)"><img src="img/delete.svg"></button> 
                        </div>
                    </div>
                    <h5 class="textPost" id='textPost${idb}'>${texto}</h5>
                </div>
            </div>
            <div class="displayIcons">
                <div class="displayActions">
                    <button class="buttonLike" id="b${idb}" onclick="like(this.id)"><img class="coracao" id='imgcoracao${idb}' src="img/heart.svg"></button>
                    <h4 id='coracaoId${idb}'>0</h4>
                </div>
                <div>
                    <a href=""><img src="img/comment.svg"></a>
                </div>
                <div>
                    <a href=""><img src="img/repiuweet.svg"></a>
                </div>
                <div>
                    <a href=""><img src="img/share.svg"></a>
                </div>
            </div>
        </div>
    `
    abaTexto.value = '';
    reg+=1
    const contador = document.querySelector(".contador")
    contador.textContent = "0/140";
    firstChild = postagem.firstChild;
    postagem.insertBefore(caixa, firstChild);
    }
});

