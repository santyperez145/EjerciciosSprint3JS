
//Ejercicio 1
const nivelEtilico = 5; // Nivel de alcohol especificado
function filterBeersByAlcohol(beers, nivelEtilico) {
    const filteredBeers = beers.filter((beer) => beer.abv <= nivelEtilico);
  
    const result = filteredBeers.map((beer) => {
      return {
        nombre: beer.name,
        alcohol: beer.abv,
        amargor: beer.ibu,
      };
    });
  
    console.log(result);
  }
 

filterBeersByAlcohol(beers, nivelEtilico);



// Ejercicio 2
let maxAlcoholLevel = 7.4;

function beers1(beers){
    let beersWithMax = beers.filter(beer => beer.abv >=  maxAlcoholLevel);
    
    let newArray = beersWithMax.map(object => {
        return {
            nombre: object.name,
            alcohol: object.abv
        }
    })
    console.log(newArray)
}
beers1(beers)

// Ejercicio 3
let nivelDeAmargura= 41.5;
function cervezasAmargas(beers){
let CervezasMenosAmargas= beers.filter((cerveza)=> cerveza.ibu<= nivelDeAmargura);
let nuevoArray=CervezasMenosAmargas.map((objeto)=>{
return{
name:objeto.name,
Amargura:objeto.ibu,
}
})
console.log(nuevoArray);
}
cervezasAmargas(beers)

//Ejercicio 4

function ordenarCervezasPorPropiedad(beers, propiedad, ascendente) {
    const orderedBeers = beers.sort((a, b) => {
      if (ascendente) {
        return a[propiedad] - b[propiedad];
      } else {
        return b[propiedad] - a[propiedad];
      }
    });
  
    const beersTop10 = orderedBeers.slice(0, 10);
  
    console.log(beersTop10);
  
    return beersTop10;
  }
  const propiedad = 'abv';
  const ascendente = true;
  ordenarCervezasPorPropiedad(beers, propiedad, ascendente)

//Ejercicio 5
  
  
