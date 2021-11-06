fetch("http://localhost/tablasgoteam/cursos.php")
    .then(function(response){
        return response.json();                    
    })
    .then(function(data){
        console.log(data);  
        llenarLista(data);

    });
    function llenarLista(data){
        $(data).each(function(index,value){
            var card = '<div class="col-md-8">';
            card += '<div class="card sombra-card" style="max-width:240px;">';
            card += '<img src="http://localhost/tablasgoteam/Fotos-Profesores/' + value.foto + '" class="card-img-top" alt="...">'   
            card += '<div class="card-body">'    
            card += '<h5 class="card-title">' + value.docente + '</h5>'
            card += '<p class="card-text">' + value.biografia + '</p>'
            card += '<p class="card-text"><small class="text-muted">'+ value.contacto +'</small></p>'
            card += '</div>'      
            card += '</div>'       
            card += '</div>';   
             
       
            var fotocurso= '<img src="http://localhost/tablasgoteam/foto-curso/' + value.fotocurso + '" class="w-100" alt="...">'
            $("#fotocurso").append(fotocurso);

         $("#lista-docentes").append(card);
    })

    $("#lista-docentes div").click(function(){
        
        var posicion = $(this).index();
        
        console.log(posicion);
        $("#nombre-docente").text(data[posicion].docente);
        $("#descripcion-docente").text(data[posicion].curso);
       
       
        var codspecial = data[posicion].codspecial;
        leerProductosPorCategoria(codspecial);
    });


}

function leerProductosPorCategoria(codspecial){

    var ruta ="http://localhost/tablasgoteam/cursos.php";
    var formData = new FormData();

    formData.append("paul", codspecial)

    fetch(ruta,

        {
            method: "POST",
            body: formData

        })

    .then(function(response){

        return response.json();                    
    })

    .then(function(data){
        console.log(data);  
    });

}
function llenarTablaCursos(data){
    $("#tbody-cursos").html("");
    $(data).each(function(index,value){        
        var fila = "<tr>";
        fila += "<td>" + value.cod + "</td>";
        fila += "<td>" + value.curso + "</td>";
        fila += "<td>" + value.docente + "</td>";
        fila += "</tr>";

        $("#tbody-cursos").append(fila);
    });
}