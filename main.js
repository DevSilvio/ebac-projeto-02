const form = document.getElementById('form-formulario');
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji festejando">`
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji festejando">`
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota minima'));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionarLinha(){
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');
    
    if (atividades.includes(nomeAtividade.value)) {
        alert (`A atividade: ${nomeAtividade.value} já existe`);
    }else {
        atividades.push (nomeAtividade.value);
        notas.push (parseFloat(notaAtividade.value));

        let linha = '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
        linha += '</td>'
    
        linhas += linha;
    }


    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}