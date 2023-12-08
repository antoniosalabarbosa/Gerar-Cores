const container = document.querySelector("div#container");
const btn_color = container.querySelector("button#btn_color");
const inp = container.querySelector("#inp_cor");
const message = container.querySelector("span.copy");

function gerarCor() {
    const cor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16);

    container.style.backgroundColor = `#${cor}`;
    inp.value = `#${cor}`;
}

function copiarCor (){
    navigator.clipboard.writeText(inp.value)
    .then(()=>{
        message.classList.add("success")
        message.textContent = "Texto Copiado!";

        inp.removeEventListener("click", copiarCor );
        console.log("REMOVIDO")
    })
    .catch(()=>{
        message.classList.add("warning")
        message.textContent = "Erro, o texto não foi copiado!";
    });

    message.classList.remove(["success", "warning"]);
    message.classList.toggle("inativo");
    setTimeout(() => {
        message.classList.toggle("inativo");

        inp.addEventListener("click", copiarCor );
        console.log("ADICIONADO")
    }, 1500);
}

inp.addEventListener("click", copiarCor );

btn_color.addEventListener("click", gerarCor);