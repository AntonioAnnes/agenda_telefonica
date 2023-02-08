const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato')
    const inputTelefoneContato = document.getElementById('telefone-contato')

    let = linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += '</tr>';

    linhas +=linha;

    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;

    inputNomeContato.value ='';
    inputTelefoneContato.value ='';
})