function quantidade(){
    const qtd = prompt('Qual a quantidade de Alunos?');
    for(let i = 0; i < qtd; i++){ 
        mediaAluno()
         }  
}
document.getElementById('add').addEventListener('click',quantidade);
function mediaAluno(){

    const nome = prompt("Nome do Aluno")
    const matematica = prompt("Nota de Matematica")
    const portugues = prompt("Nota de Portugues")
    const ciencia = prompt("Nota de Ciencia")

    const media = (parseFloat(matematica)+parseFloat(portugues)+parseFloat(ciencia))/3;
    console.log(media);

    const alunos = document.getElementById('alunos');

    const tr = document.createElement('tr');

    const tdNome = document.createElement('td');
    tdNome.innerText = nome;

    const tdMatematica = document.createElement('td');
    tdMatematica.innerText = matematica;

    const tdPortugues = document.createElement('td');
    tdPortugues.innerText = portugues;

    const tdCiencia = document.createElement('td');
    tdCiencia.innerText = ciencia;

    const tdMedia = document.createElement('td');
    tdMedia.innerText = media;

    tr.appendChild(tdNome);
    tr.appendChild(tdMatematica);
    tr.appendChild(tdPortugues);
    tr.appendChild(tdCiencia);
    tr.appendChild(tdMedia);
    console.log(tr)
    alunos.appendChild(tr);
}