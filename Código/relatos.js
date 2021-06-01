var db_relatos = {
    "relatos": [
        {
            "Nome": "",
            "Idade": "",
            "Data": "",
            "Testemunho": ""
        }
    ]
}; 

function salvaRelato(event) {
    event.preventDefault();
    let nome = document.getElementById('nomeRel').value;
    let idade = document.getElementById('idadeRel').value;
    let data = document.getElementById('dataRel').value;
    let testemunho = document.getElementById('testemunhoRel').value;
    addReport(nome, idade, data, testemunho);

    alert('Relato salvo com sucesso. Clique no botão "mais relatos" para acessar o conteúdo');
}

document.getElementById('enviarRelato').addEventListener('enviarRelato', salvaRelato);


function addReport(nameRel, ageRel, dateRel, reportRel) {
    let relato = { "Nome": nameRel, "Idade": ageRel, "Data": dateRel, "Testemunho": reportRel };
    let obj = localStorage.getItem('db_relatos');
    if(obj == null)
        db_relatos.relatos.push(relato);
    else{
        db_relatos = JSON.parse(obj);
        db_relatos.relatos.push(relato);
    }    
    localStorage.setItem('db_relatos', JSON.stringify(db_relatos));
}
