import fetch from 'node-fetch';

class university{
    public name: string;
    constructor(name: string){
        this.name = name
    }
    async getUniversityList(){
    const university = await fetch(`https://api.datausa.io/attr/university/`, {
        method: 'GET'
    })
    return university
    }
}
class Name extends university{
    constructor(name: string){
        super(name);
    }
    async getUniversityList(){
        super.getUniversityList()
    }
}