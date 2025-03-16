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

    // Limpa o campo de input após adicionar
    limparInput()

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Limpa a lista existente no HTML
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Por favor, adicione amigos antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Imprime o amigo sorteado na 'tela'
    resultado.innerHTML = `<p>O amigo sorteado é: <strong>${amigoSorteado}</strong></p>`;
}


function limparInput(){
    inputAmigo.value = "";
}
