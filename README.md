<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sos mulheres">
    <meta name="author" content="Guilherme">
    <title>SOS MULHERES</title>
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/06c06c3fc2.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">
    <script src="login.js"></script>
    <script>      
        if (!usuarioCorrente.login) {
            window.location.href = LOGIN_URL;
        }

        function initPage() {
            document.getElementById('btn_logout').addEventListener('click', logoutUser);

            document.getElementById('nomeUsuario').innerHTML = usuarioCorrente.nome;

            document.getElementById('enviarRelato').addEventListener('click', salvaRelato);
        }

        window.addEventListener('load', initPage);
    </script>
</head>

<body>

    <header>
        <div class="row">
            <nav style="background-color: #f7b1e6; align-items: flex-end;" class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container-fluid col-xl-12 mt-mb-auto form-inline">
                    <div class="col-2">
                        <a class="navbar-brand" href="#" style="color: black;"><i class="fas fa-hands-helping" style="color: black;"></i> SOS MULHERES</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="col-8">
                        <div class="collapse navbar-collapse" id="navbarResponsive" width="100%">
                            <ul class="navbar-nav ml-auto col-xl-8">
                                <li class="nav-item active">
                                    <a class="nav-link" style="color: black;" href="#inicio">Início</a>
                                </li>
                                <li class="nav-item seg">
                                    <a class="nav-link" style="color: black;" href="#testemunhos"> Testemunhos </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" style="color: black;" href="#compartilhe"> Compartilhe sua história </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" style="color: black;" href="#telefones"> Telefone de emergência </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" style="color: black;" href="#nos"> Quem somos</a>
                                </li>
                            </ul>
                            <form>
                                <input type="text" class="margin-left-0 form-control inp" placeholder="Pesquisar">
                            </form>
                        </div>
                    </div>
                    <div class="col-2">
                        <div id="div1">
                            <p><strong><span id="nomeUsuario"></span> </strong><button id="btn_logout" class="botao1">Logout</button></p>
                        </div>
                    </div>                    
                </div>
            </nav>
        </div>
    </header>

    <main class="container">
      <center>
            <section id="inicio">
                <div style="background-color:#fadff3;" class="container">
                    <h1 class="text-center pt-4 titulo-secao " style="color: black;"> Violência contra a mulher</h1>
                    <div class="row">
                        <div class="col-xl-12" id="lancamentos">
                            <div class="col-xl-6 mt-4">
                                <div class="card">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/SLfF9aAntQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div> 
                            <div class="col-xl-12 mt-4 mb-4">
                                 <div class="card">
                                     <div class="card-body">
                                        <div class="col-lg-12" style="margin-left: -15px;">
                                            <span style="font-weight: 300;">
                                                A violência contra a mulher ainda é um problema fortemente enraizado no mundo.
                                                Ela não é exclusividade de alguns países e de algumas culturas. Ela é resultado
                                                de uma cultura patriarcal que está vinculada aos fundamentos de nossa socieade.
                                                A violência contra a mulher expressa-se de várisa maneiras, desde o estupro até
                                                a violência psicológica, e precisa ser combatida com veemência e urgência. As
                                                consequências desse tipo de violência são terríveis para as vítimas, podendo
                                                levá-las à morte.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="testemunhos" class="container mt-2">
                <div class="row">
                    <div class="col-xl-12 mt-4">
                        <h1 style="color: black;" class="text-center titulo-secao pb-4">TESTEMUNHOS</h1>
                    </div>
                </div>

                
                <div class="row mt-2">

                    <div class="col-xl-3">
                        <br>
                        <span class="badge badge-dark icone"><i class="fas fa-user"></i></span>
                        <h5 style="color: black;" class="mt-4 tit-papa">Jade dos Santos</h5>
                        <p>Idade na época: 14</p>
                        <p>Data do ocorrido: 2014/05/12</p>
                    </div>
                    <div class="col-xl-9 mt-2 " style="text-align: left;">
                        <br>
                        <br>
                        <p>
                            Eu fui estuprada quando tinha 14 anos, depois do ataque, eu sofri com vários problemas psicológicos, tive que tomar antidepressivos, e só depois de 2 anos,  tive coragem de contar pra minha família. Eu me sentia suja e culpada pelo ocorrido e no dia após, meu corpo estava todo dolorido e  com muitas marcas físicas. 
                        </p>
                    </div>
                    <div class="col-xl-3">
                        <br>
                        <span class="badge badge-dark icone"><i class="fas fa-user"> </i></span>
                        <h5 style="color: black;" class="mt-4 tit-papa">Bruna Duarte</h5>
                        <p>Idade na época: 10</p>
                        <p>Data do ocorrido: 1999/11/07</p>
                    </div>
                    <div class="col-xl-9 mt-2 " style="text-align: left;">
                        <br>
                        <br>
                        <p>
                            Desde a infância à adolescência, eu sofria abusos sexuais do meu tio, por anos, sendo ameaçada para não contar para os meus pais. Quando fiquei maior de idade, tomei coragem e denunciei o abusador.
                        </p>
                    </div>
                    <div class="col-xl-3">
                        <br>
                        <span class="badge badge-dark icone"><i class="fas fa-user"></i></span>
                        <h5 style="color: black;" class="mt-4 tit-papa">Celeste Aparecida</h5>
                        <p>Idade na época: 35</p>
                        <p>Data do ocorrido: 2009/06/30</p>
                    </div>
                    <div class="col-xl-9 mt-2 " style="text-align: left;">
                        <br>
                        <br>
                        <p>
                            Quando me casei, eu não imaginava que viveria um pesadelo com meu falecido marido alcoólatra, ele me espancava e humilhava porém eu não o larguei. Aos 41 anos eu fiquei viúva.
                        </p>
                    </div>
                    <div class="col-xl-3">
                        <br>
                        <span class="badge badge-dark icone"><i class="fas fa-user"> </i></span>
                        <h5 style="color: black;" class="mt-4 tit-papa">Ana Vitoria</h5>
                        <p>Idade na época: 12</p>
                        <p>Data do ocorrido: 2014/01/22</p>
                    </div>
                    <div class="col-xl-9 mt-2 " style="text-align: left;">
                        <br>
                        <br>
                        <p>
                            Eu tive um relacionamento extremamente abusivo, onde sofri violência psicológica e física, e quando criança meu ex padrasto me violentava fisicamente.
                        </p>
                    </div>
                </div>
                <a href = "relatos.html"> <button type="button" class = "botao2">+ relatos</button></a>
                
            </section>


            <section id="compartilhe" style="background-color:#fadff3;" id="entrevistas" class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <h1 class="text-center titulo-secao mt-4">COMPARTILHE SUA HISTÓRIA</h1>
                        <p><br></p>
                
                        <form class="col-xl-8">
                            <div id="comp">
                                <div>
                                    <label for="nomeRel">Nome:</label>
                                    <input type="text" id="nomeRel" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
                                    <br>
                                </div>
                                <div>
                                    <label for="idadeRel">Idade na época: </label>
                                    <input type="text" id="idadeRel" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
                                    <br>
                                </div>
                                <div>
                                    <label for="dataRel">Data do ocorrido: </label>
                                    <input type="date" id="dataRel" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
                                    <br>
                                </div>
                                <div>
                                    <label for="testemunhoRel">Relato: </label>
                                    <textarea class="form-control" id ="testemunhoRel" id="exampleFormControlTextarea1" rows="3" required></textarea>
                                    <br>
                                </div>
                                <button type="submit" id="enviarRelato" class="btn btn-primary mb-4 botao2">Enviar</button>
                            </div>
                        </form>                    
                    </div>
                </div>
            </section>

            <section id="telefones" style="background-color: white; padding:30px;">
                <div>
                    <h1>TELEFONES DE EMERGÊNCIA</h1><br><br>
                    <p style="font-size: 25px; color:red;"><strong>Polícia:</strong> 190</p>
                    <p style="font-size: 25px; color:red;"><strong>Central de atendimento à mulher:</strong> 180</p>
                </div>
            </section>


            <section id="nos" style="background-color:#fadff3">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12" >
                            <h1 class="pt-4 titulo-secao">QUEM NÓS SOMOS</h1><br>
                        </div> 
                        <div id="quem">
                            <p><br>Somos alunos do curso de Ciência da Computação na Puc Minas. Fizemos este site atravás das aulas de Trabalho Interdisciplinar: Aplicações Web e Desenvolvimento e Interfaces Web. Escolhemos esse tema para o nosso projeto porque infelizmente, é um problema muito presente na nossa sociedade. E com isso, nosso objetivo é tentar ajudar o máximo de mulheres que sofrem ou já sofreram qualquer tipo de violência.</p>
                        </div>

                        <div class="col-xl-12" id="lancamentos">
                            <section id="destaques" class="mt-4 mb-4">
                                <div class="row">
                                    <div class="row col-lg-12">
                                        <a target="BLANK">
                                            <div class="col-lg-4 pt-4">
                                                <strong style="font-size:x-large;">ARTHUR DIAS</strong>
                                                <a style="font-size:x-large;" href="https://www.instagram.com/arthur.avista/" target="BLANK">
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                                <a style="font-size:x-large;" href="" target="BLANK">
                                                    <i class="fab fa-facebook"></i>
                                                </a>
                                            </div>
                                        </a>
                                        <a target="BLANK">
                                            <div class="col-lg-4 pt-4">
                                                <p class="mt-2">
                                                    <strong style="font-size:x-large;">GUILHERME FERRAZ</strong>
                                                    <a style="font-size:x-large;" href="https://www.instagram.com/guilhermefcarvalho_/" target="BLANK">
                                                        <i class="fab fa-instagram"></i>
                                                    </a>
                                                    <a style="font-size:x-large;" href="https://www.facebook.com/gui.ferraz.148/" target="BLANK">
                                                        <i class="fab fa-facebook"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </a>
                                        <a target="BLANK">
                                            <div class="col-lg-4 pt-4">
                                                <p class="mt-2">
                                                    <strong style="font-size:x-large;">MARIA SOUZA</strong>
                                                    <a style="font-size: x-large;" href="https://www.instagram.com/me_marisouza/" target="BLANK">
                                                        <i class="fab fa-instagram"></i>
                                                    </a>
                                                    <a style="font-size: x-large;" href="https://www.facebook.com/profile.php?id=100006484843997" target="BLANK">
                                                        <i class="fab fa-facebook"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="row col-lg-12">
                                        <a target="BLANK">
                                            <div class="col-lg-4 pt-4">
                                                <p class="mt-2">
                                                    <strong class="ml-3 mr-1" style="font-size:x-large;">TAINAN BUENO</strong>
                                                    <a style="font-size:x-large;" href="https://www.instagram.com/tainan_bueno/" target="BLANK">
                                                        <i class="fab fa-instagram"></i>
                                                    </a>
                                                    <a style="font-size:x-large;" href="https://www.facebook.com/tainanesb/" target="BLANK">
                                                        <i class="fab fa-facebook"></i>
                                                    </a>
                                                </p>
                                            </div>                                                                           
                                        </a>
                                        <a target="BLANK">
                                            <div class="col-lg-4 pt-4">
                                                <p class="mt-2">
                                                    <strong style="font-size:x-large;" class="ml-3 mr-1">WANISLEIA NORATO</strong>
                                                    <a style="font-size:x-large;" href="https://www.instagram.com/leianorato/" target="BLANK">
                                                        <i class="fab fa-instagram"></i>
                                                    </a>
                                                    <a style="font-size:x-large;" href="https://www.facebook.com/leia.norato/" target="BLANK">
                                                        <i class="fab fa-facebook"></i>
                                                    </a>
                                                </p>
                                            </div>
                                        </a>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
           </section>

           <section>
                <div>
                    <img src="im0.jpeg" alt="im1" width="100%;">
                </div>
           </section>
        </center>
    </main>


    <footer class="py-5 bg-dark">
        <center>
            <section>
                <div class="container">
                    <p class="m-0 text-center text-white ">Copyright 2021 &copy; Trabalho Interdisciplinar: Aplicações Web - <strong>ICEI PUC MINAS </strong></p>
                    <p class="logo-rodape"><i class="fas fa-hands-helping" style="color:#f7b1e6;"></i> SOS MULHERES</p>
                </div>
            </section>
        </center>
    </footer>
    

    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="relatos.js"></script>

</body>

</html>
