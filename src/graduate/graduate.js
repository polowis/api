const fetch = require('node-fetch')

class graduation{
    constructor(){

    }
    async getGradsTotal(){
        try{
        const total = await fetch(`https://api.datausa.io/api/?show=university&sumlevel=2&required=grads_total`)

        }catch(err){

        }
    }
    
}
