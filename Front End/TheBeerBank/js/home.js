$(() => {

    function loadData() {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = JSON.parse(this.responseText);
            resposta.forEach((element, index) => {

                /*
                
                */
                let imagem = element.image_url;
                if (imagem == null) {
                    imagem = "../img/nulo.png"
                }

                /*
                Muda icone de favorito
                */
                let favoriteIcon = '../img/favorite_not.png';
                if (isFavorite(element.id)) {
                    favoriteIcon = '../img/favorite.png';
                }



                //Cria e adiciona o card
                var card =
                    "<div class='col-12 col-sm-6 col-md-4 mb-5'>" +
                    "<div class='card h-100' id='" + element.id + "'>" +
                    "<div class='card-header text-right'>" +
                    "<img class='img-fluid' src=" + favoriteIcon + ">" +
                    "</div>" +
                    `<a href='#' class='link-modal' data-toggle='modal' onclick="openModal('${encodeURI(JSON.stringify(element))}')" data-target='#product'>` +
                    //`<a href='#' class='link-modal' data-toggle='modal' onclick="openModal('${imagem}','${element.name}','${element.tagline}','${element.food_pairing}','${element.description}')" data-target='#product'>` + 
                    `<div class="container">
                        <img class='card-img-top' src='${imagem}' alt=''></a>
                    </div>` +
                    "<div class='card-body text-center'>" +
                    "<h3 class='card-title text-warning'>" + element.name + "</h5>" +
                    "<p class='card-text text-muted'>" + element.tagline + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $('#card').append(card).hide().fadeIn();
            });

            /*
            
            */
            $('.card-header img').click((event) => {
                let idCard = $(event.target).parent('.card-header').parent('.card').attr("id");
                if (isFavorite(idCard)) {
                    $(event.target).attr("src", "../img/favorite_not.png");
                    rmFavorite(idCard);
                }
                else {
                    $(event.target).attr("src", "../img/favorite.png");
                    addFavorite(idCard);
                }
            });
        }
    }

    //verifica se é favorito
    function isFavorite(id) {
        return favorite.id.find(
            (element) => id == element
        )
    }

    //adiciona item aos favoritos
    function addFavorite(id) {
        favorite.id.push(id);
        localStorage.setItem('favorite', JSON.stringify(favorite));
    }

    //Remove item dos favoritos
    function rmFavorite(id) {
        favorite.id.splice(favorite.id.indexOf(id), 1)
        localStorage.setItem('favorite', JSON.stringify(favorite));
    }

    /*
    Carrega objeto favorito com um array de ids no LocalStorage
    Caso não existe cria um objeto com array vazio
    */
    var favorite = localStorage.getItem("favorite");
    if (favorite == undefined) {
        favorite = {
            id: []
        }
    }
    else {
        favorite = JSON.parse(favorite);
    }

    /*
    Cria um requisição Assincrona
    loadData é a função que carrega todos os cards
    onreadystatechange verifica a mudança de estado da requesição 
    e chama a função loadData a cada mudança
    */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = loadData;
    xhttp.open("GET", "https://api.punkapi.com/v2/beers?page=1&per_page=78", true);
    xhttp.send();

    //Atualiza os cards pela pesquisa
    $("#find").keyup(() => {
        let link;
        if ($("#find").val() == "") {
            link = "https://api.punkapi.com/v2/beers?page=1&per_page=78";
        }
        else {
            link = "https://api.punkapi.com/v2/beers?per_page=80&beer_name=" + $("#find").val();
        }
        $('#card').empty();
        xhttp.open("GET", link, true);
        xhttp.send();
    })

    //Navegador de páginas
    $('.page-link').click((event) => {
        let page = $(event.target).text();
        $('#card').empty();
        xhttp.open("GET", "https://api.punkapi.com/v2/beers?page=" + page + "&per_page=78", true);
        xhttp.send();
    })

    //Recarrega Página
    $("#home").click(() => {
        document.location.reload(true);
    })
})

/*
Função para preencher o modal 
*/
function openModal(beer) {

    const PERCENT = 0.1;
    b = JSON.parse(decodeURI(beer));
    $("#modal-name").text(b.name);
    $("#modal-tagline").text(b.tagline);
    var label = `<strong>IBU: </strong> ${b.ibu}
                 <strong>ABV: </strong> ${b.abv}
                 <strong>EBC: </strong> ${b.ebc}`;
    $("#modal-label").html(label);
    $("#modal-features").text(b.description);
    $("#modal-img").attr("src", b.image_url);
    $("#modal-served").empty();
    b.food_pairing.forEach((element) => {
        $("#modal-served").append($("<li>").append(element));
    })

    var max_ibu = b.ibu * (1 + PERCENT);
    var min_ibu = b.ibu * (1 - PERCENT);

    var link = `https://api.punkapi.com/v2/beers?per_page=3&ibu_lt=${max_ibu}&ibu_gt=${min_ibu}`;
    console.log(link);
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", link, true);
    xhttp.send();

    xhttp.onreadystatechange = loadData;

    function loadData() {
        $('#modal-card').empty();
        if (this.readyState == 4 && this.status == 200) {
            var resposta = JSON.parse(this.responseText);
            resposta.forEach((element) => {
                var card =
                   `<div class='col-12 col-sm-6 col-md-4 mb-5'>
                        <div class='card h-100 text-center'>
                            <div class="container">
                                <img class='card-img-top p-3' src='${element.image_url}' alt=''></a>
                            </div>
                            <div class='card-body'>
                                <h class='card-title text-warning'>${element.name}</h5>
                            </div>
                        </div>
                    </div>`;
                $('#modal-card').append(card).hide().fadeIn();
            })
        }
    }
}
