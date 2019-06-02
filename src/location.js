const fetch = require('node-fetch');

class location{
    constructor(id, name, population, year = 2017){
        this.id = id,
        this.name = name,
        this.population = population,
        this.year = year

    }
    
}
class nation extends location{
    constructor(name, year = 2017){
        super(name, year)
        this.name = name;
        this.year = year;
    }
    async getAllPopulation(){
        const population = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))

        console.log(population.data[0].Population)
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
    async getPopulation(location){
        const population = await this.getAllPopulation();

    }
    
}
class msa extends location{
    constructor(name, year = 2017){
        super(name, year)
        this.name = name;
        this.year = year
    }
    async getAllPopulation() {
        const population = await fetch(`https://datausa.io/api/data?drilldown=Msa&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        console.log(population)
    }

    async getPopulation(location){
        const population = await this.getAllPopulation()
        
        
        
    }
}
class place extends location{
    constructor(name, year = 2017){
        super(name, year)
        this.name = name;
        this.year = year
    }
    async getAllPopulation() {
        const population = await fetch(`https://datausa.io/api/data?drilldown=Place&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        console.log(population)
    }
    async getPopulation(location){
        const population = await this.getAllPopulation()

        
        
    }
}
class puma extends location{
    constructor(name, year = 2017){
        super(name, year)
        this.name = name;
        this.year = year
    }
    async getAllPopulation() {
        const population = await fetch(`https://datausa.io/api/data?drilldown=Puma&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        console.log(population)
    }
}
class county extends location{
    constructor(name, year = 2017){
        super(name, year)
        this.name = name;
        this.year = year
    }
    async getAllPopulation() {
        const population = await fetch(`https://datausa.io/api/data?drilldown=County&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        console.log(population)
    }
}
