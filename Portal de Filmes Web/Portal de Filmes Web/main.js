function carregarMaisFilmes(){
    let request = new XMLHttpRequest()
    
     request.onload = function(){
        //alert('retorno da requisição: \n' + this.responseText)
        let data = JSON.parse(this.responseText)
        let filmStr = `<div class="col-12 botao-carregar">
    <button type="button" class="btn btn-secondary">Carregar mais filmes</button>
     </div>`
         document.getElementById('tela').innerHTML = filmStr
     }

      request.onerror = function(){
    alert(`Erro na requisição \nCódigo: ${this.status} - ${this.statusText}`)
    
    }
    request.open('Get', 'https://api.themoviedb.org/3/movie/550?api_key=ba120aff6e05fcf2ea0a12443b8e678d')
    request.send()

    return request.responseText
    }

    function criaLinha(usuario){

    }

    function main(){
        let data = fazGet()
        let usuarios = JSON.parse(data);
        
        usiarios.forEach(element => {
            let linha = criaLinha(element);
        });

    }
    main()
    let k = 4;
// estrutura estatica
const dadosFilmes = {
    "results": [
        {
            "adult":false,
            "backdrop_path":"/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
            "genre_ids":[14,12,28],
            "id":338953,
            "original_language":
            "en",
            "original_title":
            "Fantastic Beasts: The Secrets of Dumbledore",
            "overview":"O professor Alvo Dumbledore sabe que o poderoso mago das trevas Gellert Grindelwald está se movimentando para assumir o controle do mundo mágico. Incapaz de detê-lo sozinho, ele pede ao magizoologista Newt Scamander para liderar uma intrépida equipe de bruxos, bruxas e um corajoso padeiro trouxa em uma missão perigosa, em que eles encontram velhos e novos animais fantásticos e entram em conflito com a crescente legião de seguidores de Grindelwald. Mas com tantas ameaças, quanto tempo poderá Dumbledore permanecer à margem do embate?",
            "popularity":4223.547,
            "poster_path":"/gopGghuMtmdMviBcl9G0JfVB2RZ.jpg",
            "release_date":"2022-04-06",
            "title":"Animais Fantásticos: Os Segredos de Dumbledore",
            "video":false,
            "vote_average":6.8,
            "vote_count":1893
        },
        {
            "adult":false,
            "backdrop_path":"/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
            "genre_ids":[28,12,10751,35],
            "id":675353,
            "original_language":"en",
            "original_title":"Sonic the Hedgehog 2",
            "overview":"Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. Mas, assim que eles se foram, Dr. Robotnik volta, desta vez com um novo parceiro, Knuckles, em busca de uma esmeralda que tem o poder de construir e destruir civilizações. Sonic se une a um novo companheiro, Tails, e juntos eles embarcam em uma jornada para encontrar a esmeralda antes que ela caia nas mãos erradas.",
            "popularity":3534.768,
            "poster_path":"/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg",
            "release_date":"2022-03-30",
            "title":"Sonic 2: O Filme",
            "video":false,
            "vote_average":7.8,
            "vote_count":2114
        },
        {
            "adult":false,
            "backdrop_path":"/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
            "genre_ids":[28,12,35],
            "id":752623,
            "original_language":"en",
            "original_title":"The Lost City",
            "overview":"Uma romancista reclusa acredita que nada seria pior que fazer a turnê do seu livro mais recente com o modelo que ilustra a capa. Tudo muda quando a autora e o modelo sofrem uma tentativa de sequestro, e, com isso, são levados para uma surpreendente aventura na selva.",
            "popularity":3360.038,
            "poster_path":"/vsX9gj7t56ZlMYKNYccskeW5adT.jpg",
            "release_date":"2022-03-24",
            "title":"Cidade Perdida",
            "video":false,
            "vote_average":6.8,
            "vote_count":1235
        },
        {
            "adult":false,
            "backdrop_path":"/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
            "genre_ids":[28,53,80],
            "id":818397,
            "original_language":"en",
            "original_title":"Memory",
            "overview":"Em Assassino Sem Rastro, Alex Lewis é um assassino experiente com reputação de precisão discreta. Preso em um dilema moral, Alex se recusa a concluir um trabalho que viola seu código de ética e deve rapidamente caçar e matar as pessoas que o contrataram antes que eles e o agente do FBI Vincent Serra o encontrem primeiro. Alex tinha o objetivo de se vingar, mas, com uma memória que começa a vacilar, ele é forçado a questionar todas as suas ações, se perdendo na linha entre o certo e o errado.",
            "popularity":3028.594,
            "poster_path":"/uEPJQY1kEEz9XoZZ8rP6p9JUrmv.jpg",
            "release_date":"2022-04-28",
            "title":"Assassino Sem Rastro",
            "video":false,
            "vote_average":7.3,
            "vote_count":325
        }
    ]
}

const mostraFilmes = (data) => {

    // let dadosFilmes = data.target.response
    // response é string, deve ser transformado em objeto
    let dadosFilmes = JSON.parse(data.target.response)

    localStorage.setItem('db_filmes', data.target.response)

    let dadosHTML = '';
    for (let i = 0; i < dadosFilmes.results.length; i++)
    {
        let filme = dadosFilmes.results[i];
        dadosHTML += `
            <div class="card col-md-4" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" class="card-img-top" alt="Filme xpto" width="200px">
                <div class="card-body">
                  <h5 class="card-title">${filme.title}</h5>
                  <p class="card-text">${filme.overview}</p>
                  <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    }
    document.getElementById('divListaFilmes').innerHTML = dadosHTML
}

const mostraDestaques = (data) => {

    let j = k;
    // let dadosFilmes = data.target.response
    // response é string, deve ser transformado em objeto
    let dadosFilmes = JSON.parse(data.target.response)

    localStorage.setItem('db_filmes', data.target.response)

    let dadosHTML = '';
    for (let i = 0; i < j; i++)
    {
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        
        <div id="cardFilme" class = "card col-6 col-sm-6 col-md-6 col-lg-3" >
            <img src = "https://image.tmdb.org/t/p/w500/${filme.poster_path}" 
            href="detalhes_filme.html?id=${filme.id}">
            <div class="card-body" style="position: relative;">
              <h5 class="card-title">${filme.title}</h5>
              <p class="card-text">${filme.overview}</p>
              <p class="card-text-2">   -</p>
              <p>
              <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary"
              style="position: absolute;
              bottom: 0;">+ Informações</a>
              </p>
              
            </div>
            <p class="card-text-2">   -</p>
        </div>
    `
    /*
        <div class="card col-md-4" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" class="card-img-top" alt="Filme xpto" width="200px">
            <div class="card-body">
              <h5 class="card-title">${filme.title}</h5>
              <p class="card-text">${filme.overview}</p>
              <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        */
        
    }
    document.getElementById('divPosterPopulares').innerHTML = dadosHTML
}

const mostraResultados = (data) => {

    // let dadosFilmes = data.target.response
    // response é string, deve ser transformado em objeto
    let dadosFilmes = JSON.parse(data.target.response)

    localStorage.setItem('db_filmes', data.target.response)

    let dadosHTML = '';
    for (let i = 0; i < dadosFilmes.results.length; i++)
    {
        let filme = dadosFilmes.results[i];
        dadosHTML += /*`
        
        <div id="cardFilme" class = "card col-6 col-sm-6 col-md-6 col-lg-3" >
            <img src = "https://image.tmdb.org/t/p/w500/${filme.poster_path}" 
            href="detalhes_filme.html?id=${filme.id}">
            <div class="card-body" style="position: relative;">
              <h5 class="card-title">${filme.title}</h5>
              <p class="card-text">${filme.overview}</p>
              <p class="card-text-2">   -</p>
              <p>
              <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary"
              style="position: absolute;
              bottom: 0;">+ Informações</a>
              </p>
              
            </div>
            <p class="card-text-2">   -</p>
        </div>
    `*/
        
        `
        <li><a href="detalhes_filme.html?id=${filme.id}">${filme.title}</a></li>
    `
    /*
        <div class="card col-md-4" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" class="card-img-top" alt="Filme xpto" width="200px">
            <div class="card-body">
              <h5 class="card-title">${filme.title}</h5>
              <p class="card-text">${filme.overview}</p>
              <a href="detalhes_filme.html?id=${filme.id}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        */
        
    }
    document.getElementById('myUL').innerHTML = dadosHTML
}


const mostraErro = (data) => {
    alert('Erro na requisição.');
}



const init1 = () => {

    // requisicão ajax
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/550?api_key=ba120aff6e05fcf2ea0a12443b8e678d"
    //let url = "https://api.themoviedb.org/3/movie/550?api_key=ba120aff6e05fcf2ea0a12443b8e678d"
    //let url = "https://api.themoviedb.org/3/movie/550?api_key=ba120aff6e05fcf2ea0a12443b8e678d"
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send ();
    
    document.getElementById("btnVerMaisFilmes").onclick = maisFilmes;
    
    //xhr.onload = mostraResultados;
    
}

const init2 = () => {

    // requisicão ajax
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/550?api_key=ba120aff6e05fcf2ea0a12443b8e678d"
    
    xhr.onload = mostraResultados;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send ();
    
    //xhr.onload = mostraResultados;
    
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue, entrada;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  if(filter == ''){

  }
  else{
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  } 
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function limparPesquisa() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue, entrada;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();

    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
     
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "none";
      } else {
        li[i].style.display = "none";
      }
    }
    
  }

  function maisFilmes() {
    console.log("ok");
    k = k + 4;
    init1();
  }

  document.getElementById("btnVerMaisFilmes").onclick = maisFilmes;