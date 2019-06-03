import fetch from 'node-fetch';

class university{
    public name: String;
    constructor(name){
        this.name = name
    }
    async getUniversityList(){
        const university = await fetch('https://api.datausa.io/', function(){
            
        });
    }
}