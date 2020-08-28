$(document).ready(function() {

    // Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
    // Servendoci di handlebars stampiamo tutto a schermo.

    $.ajax(
        {
            url: 'https://flynn.boolean.careers/exercises/api/array/music',      // API per avere a disposizione il contenuto
            method: "GET",
            success: function (risposta) {
                for (var i = 0; i < risposta.response.length; i++){
                    var source = $("#entry-template").html();
                    var template = Handlebars.compile(source);

                    var context = risposta.response[i];
                    console.log(risposta.response[i]);
                    var html = template(context);

                    $('.cds-container').append(html);
                }
            },
            error: function(){
                alert:('Ci sono stati degli errori');
            }
        }
    );

    // Servendoci di handlebars stampiamo tutto a schermo.

});
