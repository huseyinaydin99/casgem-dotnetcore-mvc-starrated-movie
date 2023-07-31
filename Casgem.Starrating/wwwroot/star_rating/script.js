// Select all elements with the "i" tag and store them in a NodeList called "stars"
function load() {
    let count = 0;
    let id = $("#txtGetId").val();
    $.ajax({
        url: "/Default/MovieList/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            let results = jQuery.parseJSON(response);
            console.log(results);
            let tableHtml =
                `<table class='table table-bordered'>
                            <tr>
                                <th>Film ID</th>
                                <th>Film Adı</th>
                                <th>IMDB Puanı</th>
                                <th>Yayınlanma Tarihi</th>
                                <th>İzleyici Puanı</th>
                                <th>Film Resmi</th>
                                <th>Puan Verin</th>
                            </tr>`
            $.each(results, (index, value) => {
                count++;
                tableHtml +=
                    `
                            <tr>
                                <td>${value.MovieId}</td>
                                <td>${value.Title}</td>
                                <td>${value.IMDB}</td>
                                <td>${value.ReleaseDate}</td>
                                <td>${value.Rating}</td>
                                <td>${value.ImageUrl}</td>
                                <td>
                                <div id='test_${value.MovieId}'><div class='stars'><i onclick='one(${value.MovieId}, event)' class='fa-solid fa-star active'></i><i onclick='two(${value.MovieId}, event)' class='fa-solid fa-star active'></i><i onclick='tree(${value.MovieId}, event)' class='fa-solid fa-star active'></i><i onclick='four(${value.MovieId}, event)' class='fa-solid fa-star active'></i><i onclick='five(${value.MovieId}, event)' class='fa-solid fa-star'></i></div></div>
                                </td>
                            </tr>
                    `
            });
            tableHtml += "</table>";
            $("#movieWithIdList").html(tableHtml);
            /*swal({
                title: "Müşteri silindi!",
                text: "Veritabanında artık böyle bir müşteri yok.",
                icon: "success",
                button: "Tamamdır!"
            });*/
        }
    });
}
load();
let one = function (MovieId, event) {
    apply(MovieId);
    console.log("Birinci yıldıza tıkladın.");
    let values = {
        id: MovieId,
        rating: 1
    };
    $.ajax({
        type: "POST",
        url: "/Default/UpdateMovie/" + MovieId,
        data: values,
        success: function (response) {
            //let result = jQuery.parseJSON(response);
            //apply();
            swal({
                title: "Oylama başarılı.",
                text: "Filme puan verdiniz. Verdiğiniz puan: " + values.rating,
                icon: "success",
                button: "Tamamdır!"
            });
        }
    });
    
};

let two = function (MovieId, event) {
    apply(MovieId);
    console.log("İkinci yıldıza tıkladın.");
    let values = {
        id: MovieId,
        rating: 2
    };
    $.ajax({
        type: "POST",
        url: "/Default/UpdateMovie/" + MovieId,
        data: values,
        success: function (response) {
            //const stars = document.getElementById(".stars i");
            event.target.classList.add("active");
            //let result = jQuery.parseJSON(response);
            //apply();
            swal({
                title: "Oylama başarılı.",
                text: "Filme puan verdiniz. Verdiğiniz puan: " + values.rating,
                icon: "success",
                button: "Tamamdır!"
            });
        }
    });
    
};
let tree = function (MovieId, event) {
    apply(MovieId);
    console.log("Üçüncü yıldıza tıkladın.");
    let values = {
        id: MovieId,
        rating: 3
    };
    $.ajax({
        type: "POST",
        url: "/Default/UpdateMovie/" + MovieId,
        data: values,
        success: function (response) {
            event.target.classList.add("active");
            //let result = jQuery.parseJSON(response);
            //apply();
            swal({
                title: "Oylama başarılı.",
                text: "Filme puan verdiniz. Verdiğiniz puan: " + values.rating,
                icon: "success",
                button: "Tamamdır!"
            });
        }
    });
    
};
let four = function (MovieId, event) {
    apply(MovieId);
    console.log("Dördüncü yıldıza tıkladın.");
    let values = {
        id: MovieId,
        rating: 4
    };
    $.ajax({
        type: "POST",
        url: "/Default/UpdateMovie/" + MovieId,
        data: values,
        success: function (response) {
            event.target.classList.add("active");
            //let result = jQuery.parseJSON(response);
            //apply();
            swal({
                title: "Oylama başarılı.",
                text: "Filme puan verdiniz. Verdiğiniz puan: " + values.rating,
                icon: "success",
                button: "Tamamdır!"
            });
        }
    });
    
};
let five = function (MovieId, event) {
    apply(MovieId);
    console.log("Beşinci yıldıza tıkladın.");
    let values = {
        id: MovieId,
        rating: 5
    };
    $.ajax({
        type: "POST",
        url: "/Default/UpdateMovie/" + MovieId,
        data: values,
        success: function (response) {
            
            swal({
                title: "Oylama başarılı.",
                text: "Filme puan verdiniz. Verdiğiniz puan: " + values.rating,
                icon: "success",
                button: "Tamamdır!"
            });
        }
    });
    
};

function apply(MovieId) {
    console.log(MovieId);
    //const stars = document.querySelectorAll(".stars i");
    const stars = document.getElementById("test_" + MovieId).querySelectorAll(".stars i");
    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });
    
}