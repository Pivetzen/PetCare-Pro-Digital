const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyaOyd-1YkAbmh5CBHddbeVB0Zde2evnQSLqONNfWG-7WgeKlqn-pF4rE4CbyH3-BLlbA/exec";

// Função para enviar dados para o Google Sheets
function enviarDados() {
    const btn = document.getElementById('btnSalvar');
    const payload = {
        pet: document.getElementById('nomePet').value,
        vacina: document.getElementById('vacinaNome').value,
        data: document.getElementById('vacinaData').value,
        obs: document.getElementById('racao').value
    };

    if(!payload.vacina || !payload.data) return alert("Preencha a vacina e a data!");

    btn.innerText = "Enviando...";
    btn.disabled = true;

    fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
    })
    .then(() => {
        alert("Salvo com sucesso!");
        btn.innerText = "Salvar na Planilha";
        btn.disabled = false;
        carregarVacinas(); // Atualiza a lista
    })
    .catch(error => {
        console.error("Erro:", error);
        btn.disabled = false;
    });
}

// Função para buscar dados da Planilha e exibir no site
function carregarVacinas() {
    const lista = document.getElementById('listaVacinas');
    const status = document.getElementById('status');

    fetch(SCRIPT_URL)
    .then(res => res.json())
    .then(data => {
        status.style.display = 'none';
        lista.innerHTML = "";
        // Pula a primeira linha (cabeçalho) e mostra as vacinas
        data.slice(1).reverse().forEach(row => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${row[1]}</strong> - ${row[2]} <br> <small>Pet: ${row[0]}</small>`;
            lista.appendChild(li);
        });
    });
}

// Carrega ao abrir a página
window.onload = carregarVacinas;
