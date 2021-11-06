console.log("Mostrando nosotros");
console.log("Mostrando nosotros");
const NOSOTROS = [

    {id: 1,nombres: "Freddie Mercury",cargo:"Gerente General",ciudad:"Lima",foto:"imagenes/nosotros/freddie_mercury.jpg" },
    {id: 2,nombres: "Stan Lee",cargo:"Gerente de producción",ciudad:"Puno",foto:"imagenes/nosotros/stan-lee.jpg" },
    {id: 3,nombres: "Christopher Nolan",cargo:"Administrador de plataforma",ciudad:"Ica",foto:"imagenes/nosotros/nolan.jpg" },
    {id: 4,nombres: "Frédéric Chopin",cargo:"Programador",ciudad:"Tacna",foto:"imagenes/nosotros/Chopin.jpg" },
    {id: 5,nombres: "Akira Toriyama",cargo:"Diseñador gráfico",ciudad:"Iquitos",foto:"imagenes/nosotros/akira.jpg" },
    {id: 6,nombres: "Cory Barlog",cargo:"Responsable de calidad/Tester",ciudad:"Huancayo",foto:"imagenes/nosotros/cory-barlog.png" },
    {id: 7,nombres: "Gabe Newell",cargo:"Expero en contenidos",ciudad:"Huaraz",foto:"imagenes/nosotros/gabe-newells.jpg" },
    {id: 8,nombres: "Stephen Hawking",cargo:"Administrador financiero",ciudad:"Huaraz",foto:"imagenes/nosotros/hawking.jpg" },
    
    

];

$(NOSOTROS).each(function(index,value){        
    console.log(value);
    console.log(value.nombres);
    var fila = "<tr>";
    fila += "<td>" + value.id + "</td>";
    fila += "<td>" + value.nombres + "</td>";
    fila += "<td>" + value.cargo + "</td>";
    fila += "<td>" + value.ciudad + "</td>";
    fila += "</tr>";
    $("#tbody-nosotros").append(fila);
})
$("#tbody-nosotros tr").click(function(){
    $("#tbody-nosotros tr").removeClass("table-info");
    $(this).addClass("table-info");
    
    var posicion = $(this).index();
    // index() indica la posicion del obejeto con respecto a su padre contenedor(tbody-colaboradres)
    console.log(posicion);
    var nombres = NOSOTROS[posicion].nombres;
    console.log(nombres);
    var cargo = NOSOTROS[posicion].cargo;
    $("#nosotros-nombres").text(nombres);
    $("#nosotros-cargo").text(cargo);

    var foto = NOSOTROS[posicion].foto;
    $("#nosotros-foto").attr("src",foto);
})