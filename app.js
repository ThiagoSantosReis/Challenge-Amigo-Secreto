let amigos = [];

const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim();

    // Verificação se o input não está vazio
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido!");
        return; 
    }

    amigos.push(nomeAmigo);


    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Limpar a lista existente no HTML
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}





