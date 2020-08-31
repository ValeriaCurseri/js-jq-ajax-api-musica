$(document).ready(function() {

    // Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
    // Servendoci di handlebars stampiamo tutto a schermo.

    $.ajax(
        {
            url: 'https://flynn.boolean.careers/exercises/api/array/music',     // API per avere a disposizione il contenuto
            method: "GET",
            success: function (risposta) {
                // OPZIONE 1
                // for (var i = 0; i < risposta.response.length; i++){             // ciclo tutto l'array response
                //     var source = $("#entry-template").html();                   // collego handlebars
                //     var template = Handlebars.compile(source);
                //
                //     var context = risposta.response[i];
                //     var html = template(context);
                //
                //     $('.cds-container').append(html);                           // append il template completato nel DOM
                // }

                // OPZIONE 2 CON FZ
                insertCd(risposta);
            },
            error: function(){
                alert:('Ci sono stati degli errori');
            }
        }
    );

    // BONUS: tramite un filtro select permetto all'utente di filtrare i cd

    $("select#generi").change(function(){                       // al cambiare del valore di select - FUNZIONA SU CHROME
    // $('#generi option').click(function(){                    // al cambiare del valore di select - NON FUNZIONA SU CHROME

        var valore = $(this).val();                             // 1. memorizzo il valore dell'option cliccato
        console.log(valore);

        $('.cd').hide();                                        // 2. nascondo tutti i cd

        // OPZIONE 1
        // if (valore == tutti){                                // 3.1 SE il valore della scelta è 'tutti'
        //     $('.cd').show();                                 // 3.2 mostro tutti i cd
        // } else {                                             // 3.3 ALTRIMENTI
        //     $('.cd.' + valore).show();                       // 3.4 mostro solo quelli con la classe uguale al valore
        // }

        // OPZIONE 2
        $('.cd').each(function(){                               // 3.1 ciclo tutti i cd
            if ($(this).hasClass(valore)){                      // 3.2 SE il cd ciclato ha class = valore
                $(this).show();                                 // 3.3 lo mostro
            } else if (valore == 'tutti') {                     // 3.4 SE INVECE il valore della scelta è uguale a tutti
                $(this).show();                                 // 3.5 non lo mostro
            }
        })


        // VECCHIO

        // $('#generi .genere:selected').each(function(){
        //
        //     valore = $(this).val();
        //     // var valore = $(this).val();                             // memorizzo il valore dell'option cliccato
        //     console.log(valore);
        //
        //     $.ajax(
        //         {
        //             url: 'https://flynn.boolean.careers/exercises/api/array/music',     // API per avere a disposizione il contenuto
        //             method: "GET",
        //             success: function (risposta) {
        //                 for (var i = 0; i < risposta.response.length; i++){     // ciclo tutto l'array di oggetti
        //                     console.log(risposta.response[i].genre);
        //                     if (risposta.response[i].genre == valore || valore == 'tutti'){          // SE l'oggetto ha genere == a valore
        //                         // risposta.response[i].show();                    // lo mostro
        //                         console.log('mostra');
        //                     } else {                                            // ALTRIMENTI
        //                         // risposta.response[i].hide();                    // lo nascondo
        //                         console.log('nascondi');
        //                     }
        //
        //                 }
        //             },
        //             error: function(){
        //                 alert:('Ci sono stati degli errori');
        //             }
        //         }
        //     );
        //
        // });
    })

    // $('#generi .genere:selected').each(function(){
    //     // alert('selezionato option');
    //
    //     var valore = $(this).val();                             // memorizzo il valore dell'option cliccato
    //     console.log(valore);
    //
    //     for (var i = 0; i < risposta.response.length; i++){     // ciclo tutto l'array di oggetti
    //         if (risposta.response[i].genre == valore){          // SE l'oggetto ha genere == a valore
    //             risposta.response[i].show();                    // lo mostro
    //         } else {                                            // ALTRIMENTI
    //             risposta.response[i].hide();                    // lo nascondo
    //         }
    //
    //     }
    //
    // });

});


// ---- funzioni ---- //

function insertCd(data){
    for (var i = 0; i < data.response.length; i++){             // ciclo tutto l'array response
        var source = $("#entry-template").html();                   // collego handlebars
        var template = Handlebars.compile(source);

        var context = data.response[i];
        var html = template(context);

        $('.cds-container').append(html);                           // append il template completato nel DOM
    }
}
