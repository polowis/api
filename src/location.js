const fetch = require('node-fetch');

class location{
    constructor(id, name, population, year = 2017){
        this.id = id,
        this.name = name,
        this.population = population,
        this.year = year

    }
    
}
class state extends location{
    constructor(name, year = 2017){
        super(name, year)
        this.name = name;
        this.year = year;
    }
    async getAllPopulation(){
        const population = await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population`)
        .then(response => response.json())
        
        console.log(population)
    }
    getPopulation(){

    }
    
}
class msa extends location{
    constructor(){
        super()
    }
}
const result = new state()
result.getAllPopulation()