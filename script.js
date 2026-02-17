const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyaOyd-1YkAbmh5CBHddbeVB0Zde2evnQSLqONNfWG-7WgeKlqn-pF4rE4CbyH3-BLlbA/exec";
let DADOS_GLOBAIS = {};
let PET_ATUAL = "";

async function carregarDados() {
    const res = await fetch(SCRIPT_URL);
    DADOS_GLOBAIS = await res.json();
    renderizarBotoesPets();
}

function renderizarBotoesPets() {
    const div = document.getElementById('lista-pets-botoes');
    div.innerHTML = "";
    // Pula cabeçalho
    DADOS_GLOBAIS.pets.slice(1).forEach(pet => {
        const btn = document.createElement('button');
        btn.className = "btn-pet";
        btn.innerText = `🐾 Ver Carteira: ${pet[0]}`;
        btn.onclick = () => abrirCarteira(pet[0]);
        div.appendChild(btn);
    });
}

function cadastrarPet() {
    const payload = {
        tipoPost: "CADASTRO_PET",
        nome: document.getElementById('nomePet').value,
        especie: document.getElementById('especie').value,
        raca: document.getElementById('raca').value,
        idade: document.getElementById('idade').value,
        peso: document.getElementById('peso').value,
        sexo: document.getElementById('sexo').value,
        r_marca: document.getElementById('r_marca').value,
        r_tipo: document.getElementById('r_tipo').value,
        r_qtd: document.getElementById('r_qtd').value,
        r_freq: document.getElementById('r_freq').value,
        p_marca: document.getElementById('p_marca').value,
        p_tipo: document.getElementById('p_tipo').value,
        p_qtd: document.getElementById('p_qtd').value,
        p_freq: document.getElementById('p_freq').value
    };

    fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(payload) })
    .then(() => { alert("Pet Cadastrado!"); location.reload(); });
}

function abrirCarteira(nomePet) {
    PET_ATUAL = nomePet;
    document.getElementById('tela-home').style.display = 'none';
    document.getElementById('tela-carteira').style.display = 'block';
    document.getElementById('nome-pet-selecionado').innerText = nomePet;

    const dadosPet = DADOS_GLOBAIS.pets.find(p => p[0] === nomePet);
    const detalhe = document.getElementById('detalhe-pet');
    detalhe.innerHTML = `
        <div class="info-box">
            <h3>📋 Dados: ${dadosPet[0]} (${dadosPet[5]})</h3>
            <p>${dadosPet[1]} | ${dadosPet[2]} | ${dadosPet[3]} anos | ${dadosPet[4]}kg</p>
            <hr>
            <h3>🥣 Alimentação Principal</h3>
            <p>${dadosPet[6]} (${dadosPet[7]}) - ${dadosPet[8]}g, ${dadosPet[9]}x ao dia</p>
            <h3>🦴 Petiscos</h3>
            <p>${dadosPet[10]} (${dadosPet[11]}) - ${dadosPet[12]}g, ${dadosPet[13]}x ao dia</p>
        </div>
    `;

    const listaV = document.getElementById('historico-vacinas');
    listaV.innerHTML = "";
    DADOS_GLOBAIS.vacinas.filter(v => v[0] === nomePet).forEach(v => {
        const li = document.createElement('li');
        li.innerHTML = `💉 <b>${v[1]}</b> - Data: ${v[2]}`;
        listaV.appendChild(li);
    });
}

function salvarVacina() {
    const payload = {
        tipoPost: "NOVA_VACINA",
        nomePet: PET_ATUAL,
        vacina: document.getElementById('v_nome').value,
        data: document.getElementById('v_data').value
    };
    fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(payload) })
    .then(() => { alert("Vacina salva!"); location.reload(); });
}

function voltarHome() {
    document.getElementById('tela-home').style.display = 'block';
    document.getElementById('tela-carteira').style.display = 'none';
}

window.onload = carregarDados;
