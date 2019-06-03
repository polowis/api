const fetch = require('node-fetch');
const Population = require('./population');

class State extends Population{
    constructor(name, year = 2017){
        super(name, year)
        this.name = name;
        this.year = year;
    }
    async getAllPopulation(){
        const population = await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population` )
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