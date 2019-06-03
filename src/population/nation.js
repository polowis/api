const fetch = require('node-fetch');
const Population = require('./population')

class nation extends Population{
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