function media() {
    alert ('Seja bem vindo ao jogo da média, digite três números e lhe apresentarei a média: ')
    let num1 = parseInt (prompt ('Me informe o número 1:'));
    let num2 = parseInt (prompt ('Me informe o número 2:'));
    let num3 = parseInt (prompt ('Me informe o número 3:'));

    let resultadosoma = num1 + num2 + num3;
    let media = resultadosoma / 3;

    console.log (' O resultado da soma é:' + media);
    alert ("A média dos números é: " + media);
}

function jogoformulario() {
    carregarCSS("styles.css");

    document.getElementById("conteudo").innerHTML = `
    <form id="formulario">
      <label>Valor 1: <input type="text" id="valor1" required></label>
      <label>Valor 2: <input type="text" id="valor2" required></label>
      <label>Valor 3: <input type="text" id="valor3" required></label>
      <label>Valor 4: <input type="text" id="valor4" required></label>
      <label>Valor 5: <input type="text" id="valor5" required></label>
      <button type="submit">Salvar em TXT</button>
    </form>
  `;

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  // Coletar valores
  const valores = [];
  for (let i = 1; i <= 5; i++) {
    const valor = document.getElementById(`valor${i}`).value.trim();
    if (valor === "") {
      alert(`O campo Valor ${i} está vazio.`);
      return;
    }
    valores.push(valor);
  }

  // Criar conteúdo do TXT
  const conteudo = valores.map((v, i) => `Valor ${i + 1}: ${v}`).join("\n");

  // Criar e baixar o arquivo TXT
  const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "valores.txt";
  link.click();
});

}

function listafrutas() {
    carregarCSS("style.css");
    document.getElementById('app').innerHTML = `
        <h1>Manipulando Frutas</h1>

        <input type="text" id="frutaInput" placeholder="Digite uma fruta" />
        <button onclick="adicionarFruta()">Adicionar</button>

        <div>
            <button onclick="metodo('push')">Adicionar no Final</button>
            <button onclick="metodo('pop')">Remover do Final</button>
            <button onclick="metodo('unshift')">Adicionar no Início</button>
            <button onclick="metodo('shift')">Remover do Início</button>
            <button onclick="metodo('unshift')">Unshift (Adicionar ao início)</button>
            <button onclick="verificarBanana()">Includes('banana')</button>
            <button onclick="mostrarIndex('uva')">IndexOf('uva')</button>
            <button onclick="mostrarJoin()">Join(', ')</button>
            <button onclick="mostrarSlice()">Slice(1, 3)</button>
            <button onclick="fazerSplice()">Splice(1, 1)</button>
            <button onclick="mapMaiusculas()">Map (MAIÚSCULAS)</button>
            <button onclick="filtrarGrandes()">Filter (nome > 4 letras)</button>
        </div>

        <button onclick="verificarBanana()">Verificar Banana</button>

        <h2>Frutas:</h2>
        <p id="listaFrutas">[ ]</p>
        <p id="saida"></p>
    `;
}

let frutas = [];

function atualizarLista() {
  document.getElementById('listaFrutas').textContent = JSON.stringify(frutas);
}

function adicionarFruta() {
  const input = document.getElementById('frutaInput');
  const valor = input.value.trim();

  if (valor) {
    frutas.push(valor);
    input.value = "";
    atualizarLista();
  }
}

function metodo(acao) {
  if (acao === 'push') {
    const fruta = prompt("Digite uma fruta para adicionar no final:");
    if (fruta) frutas.push(fruta);
  } else if (acao === 'pop') {
    frutas.pop();
  } else if (acao === 'shift') {
    frutas.shift();
  } else if (acao === 'unshift') {
    const fruta = prompt("Digite uma fruta para adicionar no início:");
    if (fruta) frutas.unshift(fruta);
  }
  atualizarLista();
}

function verificarBanana() {
  const resultado = frutas.includes('banana')
    ? "🍌 Banana está no array!"
    : "🚫 Banana NÃO está no array.";
  document.getElementById('saida').textContent = resultado;
}


function mostrarIndex(fruta) {
  const index = frutas.indexOf(fruta);
  const resultado = index !== -1
    ? `A fruta '${fruta}' está na posição ${index}.`
    : `'${fruta}' não foi encontrada.`;
  document.getElementById('saida').textContent = resultado;
}

function mostrarJoin() {
  const resultado = "join(', '): " + frutas.join(', ');
  document.getElementById('saida').textContent = resultado;
}

function mostrarSlice() {
  const fatiado = frutas.slice(1, 3);
  document.getElementById('saida').textContent = "slice(1, 3): " + JSON.stringify(fatiado);
}

function fazerSplice() {
  frutas.splice(1, 1);
  atualizarLista();
  document.getElementById('saida').textContent = "splice(1, 1) aplicado.";
}

function mapMaiusculas() {
  const maiusculas = frutas.map(f => f.toUpperCase());
  document.getElementById('saida').textContent = "map (toUpperCase): " + JSON.stringify(maiusculas);
}

function filtrarGrandes() {
  const grandes = frutas.filter(f => f.length > 4);
  document.getElementById('saida').textContent = "filter (length > 4): " + JSON.stringify(grandes);
}

function carregarCSS(nome) {
  document.getElementById("estilo").setAttribute("href", nome);
}

function limparCSS() {
  document.getElementById("estilo").setAttribute("href", "");
}