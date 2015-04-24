/**
 * Created by Nicolas on 24/04/2015.
 */




(    function($) {

            RemoveTableRow = function(handler) {
                var tr = $(handler).closest('tr');

                tr.fadeOut(400, function(){
                    tr.remove();
                });

                return false;
    };
})(jQuery);

function AdicionarAprender(){
    var nome = $("#nomeAssunto").val();

    $("#assuntos-aprender tbody").append(

        '<tr class="danger">'+
        "<td>"+nome+"</td>"+
        '<td><a class="btn btn-primary btn-sm" onclick="RemoveTableRow(this)">Remover</a>' + " "+
        '<a class="btn btn-success btn-sm aprendi" onclick="Aprendido()">Aprendi</a>'+
    "</tr>"
);

};

function Aprendido(){


    $(document).on("click","a.aprendi",function(){
        $(this).parent().parent().removeClass().addClass('info');
        $(this).remove();
        });


};

function AdicionarAprendido(){
    var nome = $("#nomeAprendido").val();

    $("#assuntos-aprender tbody").append(
        '<tr class="info">'+
        "<td>"+ nome +"</td>"+
        '<td><a class="btn btn-primary btn-sm" onclick="RemoveTableRow(this)">Remover</a>' + " " +
        "</tr>"
    );

};





