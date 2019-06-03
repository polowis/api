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
        .catch(err => console.log(err))
        console.log(population)
        //console.log(population.data[0])
        

        
        
        
    }
    async getPopulationByName(location){
        const population =  await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        const info = population.data.find(pop => pop.State === location)
        
        if(!info){
            console.log('No result found')
        }
     
    }
    async getPopulationById(id){
        const population =  await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population`)
       // const population = await fetch(`https://datausa.io/api/data?drilldowns=State$measures=Population`)
        .then(response => response.json())
        .cacth(err => console.log(err))
        const info = population.data.find(pop => pop.IDState === id)
        console.log(info);
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
        const population =  await fetch(`https://datausa.io/api/data?drilldowns=Msa&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        const info = population.data.find(pop => pop.Msa === location)
        console.log(info)
        
        
        
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
    async getPopulationByName(location){
        const population = await fetch(`https://datausa.io/pi/data?drilldown=Place&measures=Population`)
        .then(response => response.json())
        .catch(err => console.log(err))
        const info = population.data.find(pop => pop.Place === location)

        
        
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
//var result = new state().getAllPopulation()
var result2 = new state().getPopulationById('04000US42')