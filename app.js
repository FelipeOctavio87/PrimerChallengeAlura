// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();  

    if (!nombreAmigo) {
        alert("Ingresa el nombre de un amigo(a)");
        return;
    }

    if (amigo.includes(nombreAmigo)) {
        alert("Los nombres no pueden repetirse, diferencialos con 2do nombre o apellido.");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigo.forEach(nombre => {
        let item = document.createElement("li");
        item.textContent = nombre;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("Debes ingresar al menos un amigo");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;

    document.getElementById("listaAmigos").innerHTML = "";
    amigo = []; // Reiniciar la lista después del sorteo
}
