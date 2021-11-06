fetch("http://localhost/tablasgoteam/especialidades.php")

//ruta del servicio web de la tabla especialidades

        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            llenarCard(data);
        })
function llenarCard(data){
    $(data).each(function(index,value){        
        console.log(value);
        
        
        var fila = `<div class="col-4">
        <div class="card mb-4">

        <a href="#">
        <img src="http://localhost/tablasgoteam/imagenes-comp/${value.imagen}"class="card-img-top" alt="...">
        </a> 
            <div class="card-body">

            <a href="#">
              <h5 class="card-title">${value.especialidad}</h5>
            </a> 

              <p class="card-text">${value.acerca}</p>
      
              <div class="info1">
              <span class="duracion"><a <i class="far fa-clock"></i></a> ${value.duracion}</span>
         
    
              <span class="cant_cursos"><a <i class="fas fa-cube"></i></a> ${value.cant_cursos}</span>
              <br>
              </div> 
             <div class="info2">

             <a href="#">
              <span class="docentes">${value.docente}</span>
              </a>

              <a href="#" class="pagar">
              <i class="fas fa-shopping-cart"></i>
              ${value.pagar}
              </a>
             </div> 
            
        </div>
    </div>`;

        $("#tarjetas_cursos").append(fila);
    })
}