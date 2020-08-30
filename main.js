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

    $("select#generi").change(function(){                       // al cambiare del valore di select

        $('.cd').hide();                                        // 1. nascondo tutti i cd

        var valore = $(this).val();                             // 2. memorizzo il valore dell'option cliccato
        console.log(valore);

        $('.cd').each(function(){                               // 3. ciclo tutti i cd
            console.log('parte each');
            if ($(this).hasClass(valore)){                      // SE il cd ciclato ha class = valore
                $(this).show();                                 // lo mostro
            } else {                                            // ALTRIMENTI
                console.log('else');                            // non lo mostro
            }
        })

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
