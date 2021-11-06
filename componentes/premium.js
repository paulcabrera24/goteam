var ruta = "http://localhost/tablasgoteam/premium.php";
fetch(ruta)
.then(response => response.json())
.then(datos =>{
    console.log(datos);
    llenarTabla(datos);
})

// function llenarTabla(datos){
    
// }

llenarTabla = (datos) =>{
    $(datos).each((index,value) =>{

        var fila = "<tr>";
        fila += "<td>" + value.codigo + "</td>";
        fila += "<td>" + value.nombre + "</td>";
        fila += "<td>" + value.curso + "</td>";

        fila += "</tr>";
        $("#tbody-premium").append(fila);
    })
    
    $("#tbody-premium tr").click(function(){
        $("#tbody-premium tr").removeClass("table-info");
        $(this).addClass("table-info");
    })
}































// fetch("js/premium.json")
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
//     $("#tbody-premium tr").click(function(){
//         $("#tbody-premium tr").removeClass("table-info");
//         $(this).addClass("table-info");
//     })
//         var fila = "<tr>";
//         fila += "<td>" + value.nombre + "</td>";
//         fila += "<td>" + value.Apellido + "</td>";
//         fila += "<td>" + value.Nacionalidad + "</td>";
       
        
//         fila += "</tr>";
//         $("#tbody-premium").append(fila);
//     })
// }