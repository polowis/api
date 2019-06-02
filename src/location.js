const fetch = require('node-fetch');

class location{
    constructor(id, name, population, year = 2017){
        this.id = id,
        this.name = name,
        this.population = population,
        this.year = year

    }
    
}
class location extends state{
    constructor(name, year){
        super(name, year)
        this.name = name;
        this.year = year;
    }
    async getAllPopulation(){
        const population = await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population&year=${this.year}`)
        .then(response => response.json())
        console.log(population.data[0].population)
    }
    getPopulation(){

    }
    
}
class location extends msa{
    constructor(){
        super()
    }
}