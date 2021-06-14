var db_relatos = {
    "relatos": [
        {
            "Id":"",
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
    let id = JSON.parse(sessionStorage.getItem('usuarioCorrente')).id;
    addReport(id,nome, idade, data, testemunho);

    alert('Relato salvo com sucesso. Clique no botão "mais relatos" para acessar o conteúdo');
} 

document.getElementById('enviarRelato').addEventListener('enviarRelato', salvaRelato);



function addReport(id,nameRel, ageRel, dateRel, reportRel) {
    let relato = { "Id": id, "Nome": nameRel, "Idade": ageRel, "Data": dateRel, "Testemunho": reportRel };
    let obj = localStorage.getItem('db_relatos');
    if(obj == null || obj == "undefined")
        db_relatos.relatos.push(relato);
    else{
        db_relatos = JSON.parse(obj);
        db_relatos.relatos.push(relato);
    }    
    localStorage.setItem('db_relatos', JSON.stringify(db_relatos));
}

var idBotaoEditar = 0;

function getId(e){
    idBotaoEditar = e;
}

function edicaoRelato(event) {
    event.preventDefault();
    let nome = document.getElementById('nomeEdit').value;
    let idade = document.getElementById('idadeEdit').value;
    let data = document.getElementById('dataEdit').value;
    let testemunho = document.getElementById('testemunhoEdit').value;
    let id = JSON.parse(sessionStorage.getItem('usuarioCorrente')).id;
    alterarDados(id, nome, idade, data, testemunho, idBotaoEditar);

    alert('Relato alterado com sucesso!');
}

function alterarDados(id, nome, idade, data, testemunho, idBotaoEditar){
    let relato = { "Id": id, "Nome": nome, "Idade": idade, "Data": data, "Testemunho": testemunho };
    let obj = localStorage.getItem('db_relatos');
    if(obj == null)
        db_relatos.relatos.push(relato);
    else{
        db_relatos = JSON.parse(obj);
        let relatos = db_relatos.relatos[idBotaoEditar];
        relatos.Nome = nome;
        relatos.Idade = idade;
        relatos.Data = data;
        relatos.Testemunho = testemunho;
    }    
    localStorage.setItem('db_relatos', JSON.stringify(db_relatos));   
    document.location.reload(true);

}


function apagarRelato(id){
    let obj = JSON.parse(localStorage.getItem('db_relatos'));
    delete obj.relatos[id];
    localStorage.setItem('db_relatos', JSON.stringify(obj));
    document.location.reload(true);
}


function anonimato(){

    let select=document.getElementById("anonimo");
    let nome=document.getElementById("nomeEdit");
    
    if (select.checked){
        nome.disabled=true;
        nome.value="Anonimo"
    } else {
        nome.disabled=false;
        nome.value=""
    }
}