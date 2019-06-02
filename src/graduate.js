const fecth = require('node-fetch');
const university = {
    year : 2017,
    id : Number,
    cip: Number,
    degree: Number,
    geo_id: Number,
    grads_total: Number,
    grads_men: Number,
    grads_women: Number,
    grads_black_men: Number


}
class graduation{
    constructor(id, cip, degree, geo, year=2017){
    this.id = id,
    this.cip = cip,
    this.degree = degree,
    this.geo = geo
    this.year = year
}
    async getGradTotal() {
        const gradTotal = await fetch(`https://api.datausa.io/api/?show=university&sumlevel=2&required=${university.grads_total}`)
        .then(response => response.json())
        .catch(err => console.log(err))
        console.log(gradTotal)
    }
    async getGradMen(){
        const gradMen = await fetch(`https://api.datausa.io/api/?show=university&sumlevel=2&required=${university.grads_men}`)
        .then(response => response.json())
        .catch(err => console.log(err))
    }
    async getGradWomen(){
        const gradWomen = await fetch(`https://api.datausa.io/api/?show=${university.id}&sumlevel=2&required=${university.grads_women}`)
    }
}
