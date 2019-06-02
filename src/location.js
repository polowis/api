const fetch = require('node-fetch');
const user = {
    choice = document.getElementById()
}
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
        const population = await fetch(`https://datausa.io/api/data?drilldowns=${user.choice}&measures=Population`)
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
        const population = await fetch(`https://datausa.io/api/data?drilldowns=${user.choice}&measures=Population`)
        .then(response => response.json())
        
        console.log(population)
    }
    getPopulation(){

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
}
class place extends location{
    constructor(name, year = 2017){
        super(name, year)
        this.name = name;
        this.year = year
    }
    async getAllPopulation() {
        const population = await fetch(`https://datausa.io/api/data?drilldown=${user.choice}&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        console.log(population)
    }
    async getPopulation(location){
        const population = await this.getAllPopulation()
        
        
    }
}
