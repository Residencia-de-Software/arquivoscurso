$(() => {
    
    function loadData() {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = JSON.parse(this.responseText);
            resposta.forEach((element, index) => {
                let imagem = element.image_url;
                if(imagem==null){
                  imagem = "../img/nulo.png"
                }
                var child =
                    "<div class='col-12 col-sm-6 col-md-4 mb-5'>" +
                    "<div class='card h-100'>" +
                    "<div class='card-header text-right'>" +
                    "<img class='img-fluid' src='' alt=''>" +
                    "</div>" +
                    "<img class='card-img-top' src='" + imagem + "' alt=''>" +
                    "<div class='card-body text-center'>" +
                    "<h3 class='card-title text-warning'>" + element.name + "</h5>" +
                    "<p class='card-text text-muted'>" + element.tagline + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $('#card').append(child);
            });
        }
    }

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = loadData;

    xhttp.open("GET", "https://api.punkapi.com/v2/beers?page=1&per_page=78", true);
    xhttp.send();

    $("#find").keyup(()=>{
        let link;
        if($("#find").val()==""){
            link="https://api.punkapi.com/v2/beers?page=1&per_page=78";
        }
        else{
            link="https://api.punkapi.com/v2/beers?per_page=80&beer_name=" + $("#find").val();
        }
        $('#card').empty();
        xhttp.open("GET", link, true);
        xhttp.send();
    })

    $('.page-link').click((event) => {
        let page = event.target.id;
        $('#card').empty();        
        xhttp.open("GET", "https://api.punkapi.com/v2/beers?page=" + page + "&per_page=78", true);
        xhttp.send();
    })

    $("#home").click(() => {
        document.location.reload(true);
    })
})