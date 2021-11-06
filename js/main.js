$(function(){
    $("#especialidades").click(function(){
    
        fetch("componentes/especialidades.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(data);
            $("#main-content").html(data);
        })
    });



    $("#nosotros").click(function(){
    
        fetch("componentes/nosotros.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(data);
            $("#main-content").html(data);
        })
    });

    $("#cursos").click(function(){
    
        fetch("componentes/cursos.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(data);
            $("#main-content").html(data);
        })
    });

    $("#premium").click(function(){
    
        fetch("componentes/premium.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(data);
            $("#main-content").html(data);
        })
    });
    $("#docentes").click(function(){
    
        fetch("componentes/docentes.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(data);
            $("#main-content").html(data);
        })
    });

})