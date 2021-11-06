fetch("http://localhost/tablasgoteam/docentes.php")
    .then(function(response){
        return response.json();                    
    })
    .then(function(data){
        console.log(data);  
        llenarLista(data);

    });
    function llenarLista(data){
        $(data).each(function(index,value){
             
        var item = `<div class="card sombra-card  mb-3" style="max-width:540px;">   
        <div class="row g-0">
        <div class="col-md-4">
          <img src="http://localhost/tablasgoteam/Fotos-Profesores/${value.foto}" class="img-fluid radius-docente" alt="...">
        </div>
         <div class="col-md-8">
            <div class="card-body estilo-card">
            <h5 class="card-title">${value.docente}</h5>
            <p class="card-text">${value.biografia}</p>
            <p class="card-text"><small class="text-muted">${value.contacto}</small></p>
        </div>
      </div>
     </div>
 </div>`;


         $("#lista-docentes").append(item);
    })

    $("#lista-docentes div").click(function(){
        var posicion = $(this).index();
        console.log(posicion);
        $("#nombre-docente").text(data[posicion].docente);
        $("#descripcion-docente").text(data[posicion].biografia);
        var codspecial = data[posicion].codspecial;
        leerProductosPorCategoria(codspecial);
    });
}

function leerProductosPorCategoria(codespecial){

    var ruta ="http://localhost/tablasgoteam/datos-docentes.php";
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




















































// fetch("https://api.opendota.com/api/heroStats")
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//             llenarTabla(data);
//         })
// function llenarTabla(data){
//     $(data).each(function(index,value){        
//         console.log(value);
//         console.log(value.localized_name);
//         var fila = "<tr>";
//         fila += "<td>" + value.id + "</td>";
//         fila += "<td>" + value.localized_name + "</td>";
//         fila += "<td>" + value.primary_attr + "</td>";
      
//         fila += "<td>" + value.attack_type + "</td>";
//         fila += "<td>" + value.roles + "</td>";
//         fila += "<td>" + value.attack_range + "</td>";
//         fila += "<td>" + value.move_speed + "</td>";
//         fila += "</tr>";
//         $("#tbody-heroes").append(fila);
//     });
//     $("#tbody-heroes tr").click(function(){
//         $("#tbody-heroes tr").removeClass("table-info");
//         $(this).addClass("table-info");

//        var posicion = $(this).index();
//        console.log(posicion);
//        console.log(data[posicion].localized_name);
//        console.log(data[posicion].id);
//        var codigo = data[posicion].id;

//        fetch("https://raw.githubusercontent.com/joshuaduffy/dota2api/master/dota2api/ref/heroes.json" + codigo)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(dataheroe){
//             console.log(dataheroe);
//             mostrarDatosHeroes(dataheroe);
//         })
//     })
//     function mostrarDatosHeroes(dataheroe){
//         var heroe = dataheroe.localized_name;
//         var atributo = dataheroe.primary_attr;
//         var retrato = dataheroe.url_full_portrait;
        
//         $("#heroe").text(heroe);
//         $("#atributo").text(atributo);
//         $("#retrato").attr("src",retrato);
//     }
// }