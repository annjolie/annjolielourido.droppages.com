$(document).ready(function () {
    $('.botonMenu').addClass('desmarcado')
    $("article[id^=actividad]").hide();
    $(document).on('click', '.botonMenu', function () {
        $('.botonMenu').removeClass('marcado').addClass('desmarcado');
        $(this).removeClass('desmarcado').addClass('marcado');
        $("article[id^=actividad]").hide();
        var articulo = "#" + $(this).text().toLowerCase().replace(/ /g, "");
        $(articulo).show();
    }
    );
});