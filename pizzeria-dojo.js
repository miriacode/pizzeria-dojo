function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas"]);
console.log(pizza2);
var pizza3 = pizzaOven("lanzada a mano", "tradicional", ["mozzarella"], ["pepperoni"]);
console.log(pizza3);
var pizza4 = pizzaOven("estilo Nueva York", "marinara", ["feta"], ["champiñones"]);
console.log(pizza4);

function randomPizza(){
    let tipoCorteza = ["estilo Chicago","lanzada a mano","estilo Nueva York"];
    let tipoSalsa = ["tradicional","marinara"];
    let quesos = [["feta"],["mozzarella"],["mozzarella", "feta"]];
    let salsas = [["pepperoni"],["champiñones"],["champiñones", "aceitunas"],["pepperoni", "salchicha"]];

    let randomTipoCorteza = tipoCorteza[Math.round(Math.random() * (tipoCorteza.length-1))]
    let randomTipoSalsa = tipoSalsa[Math.round(Math.random() * (tipoSalsa.length-1))]
    let randomQuesos = quesos[Math.round(Math.random() * (quesos.length-1))]
    let randomSalsas = salsas[Math.round(Math.random() * (salsas.length-1))]
    
    var randomPizza = pizzaOven(randomTipoCorteza,randomTipoSalsa,randomQuesos,randomSalsas);
    return randomPizza
}

var pizza5 = randomPizza();
console.log(pizza5);