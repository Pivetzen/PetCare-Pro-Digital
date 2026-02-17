// Função para adicionar vacina na lista e salvar
function adicionarVacina() {
    const nome = document.getElementById('nomeVacina').value;
    const data = document.getElementById('dataVacina').value;

    if (nome === '' || data === '') return alert("Preencha todos os campos!");

    const lista = document.getElementById('listaVacinas');
    const item = document.createElement('li');
    item.innerHTML = `<strong>${nome}</strong> - Data: ${data}`;
    lista.appendChild(item);

    // Lógica para salvar no LocalStorage (opcional)
    salvarNoBanco('vacinas', {nome, data});
}

function salvarPerfil() {
    const perfil = {
        nome: document.getElementById('nomePet').value,
        especie: document.getElementById('especie').value
    };
    localStorage.setItem('perfilPet', JSON.stringify(perfil));
    alert("Perfil Atualizado!");
}

function salvarNoBanco(chave, objeto) {
    let dados = JSON.parse(localStorage.getItem(chave)) || [];
    dados.push(objeto);
    localStorage.setItem(chave, JSON.stringify(dados));
}
