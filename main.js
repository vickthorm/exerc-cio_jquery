$(document).ready(function(){
    $('#formTarefa').submit(function(e){
        e.preventDefault();

        var novaTarefa = $('#nomeTarefa').val().trim();

        if (novaTarefa !== '') {
            var novaTarefaItem = $('<li>').text(novaTarefa);

            novaTarefaItem.click(function(){
                $(this).toggleClass('completo');
            });

            $('#listaTarefas').append(novaTarefaItem);

            $('#nomeTarefa').val('');
        }
    });
});
