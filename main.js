$(document).ready(function() {

    // Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
    // Servendoci di handlebars stampiamo tutto a schermo.

    $.ajax(
        {
            url: 'https://flynn.boolean.careers/exercises/api/array/music',     // API per avere a disposizione il contenuto
            method: "GET",
            success: function (risposta) {
                for (var i = 0; i < risposta.response.length; i++){             // ciclo tutto l'array response
                    var source = $("#entry-template").html();                   // collego handlebars
                    var template = Handlebars.compile(source);

                    var context = risposta.response[i];
                    console.log(risposta.response[i]);
                    var html = template(context);

                    $('.cds-container').append(html);                           // append il template completato nel DOM
                }
            },
            error: function(){
                alert:('Ci sono stati degli errori');
            }
        }
    );

    // BONUS: tramite un filtro select permetto all'utente di filtrare i cd

    $('#generi .genere').click(function(){
        alert('selezionato option');

        var valore = $(this).val();                             // memorizzo il valore dell'option cliccato
        console.log(valore);

        for (var i = 0; i < risposta.response.length; i++){     // ciclo tutto l'array di oggetti
            if (risposta.response[i].genre == valore){          // SE l'oggetto ha genere == a valore
                risposta.response[i].show();                    // lo mostro
            } else {                                            // ALTRIMENTI
                risposta.response[i].hide();                    // lo nascondo
            }

        }

    });

});
