const auto = {
    color: "rojo",
    marca: "renault",
    modelo: 2021,
    encender : function() {
        document.write("<p>encender auto </p>") 
        
    },
    apagar : function() {
        document.write("<p>apagar auto</p>") 
    },

}


console.log(auto)
document.write("<h1>auto:${auto.color}</h1>) 