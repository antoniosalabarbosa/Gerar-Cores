const container = document.querySelector("div#container");
const btn_color = document.querySelector("button#btn_color");
const inp = document.querySelector("input#inp_cor");
const message = document.querySelector("span.copy");

function gerarCor() {
    const cor = (Math.random() * 0xFFFFFF << 0).toString(16);
    container.style.backgroundColor = `#${cor}`;
    inp.value = `#${cor}`;
    
    return inp.value;
}

inp.addEventListener("click", () => {
    navigator.clipboard.writeText(inp.value);

    message.classList.toggle("inativo");

    setTimeout(() => message.classList.toggle("inativo"), 3000);
});

btn_color.addEventListener("click", () => gerarCor());