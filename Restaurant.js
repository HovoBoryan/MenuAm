const  Shipper = require('./shipper')

Food = {
shaurma : "shaurma",
xorovac : "xorovac",
bulki : "bulki",
perashki : "perashki ",
kola : "kola",
jur : "jur"
}

class Restaurant {
    #food;
    constructor() {
    this.#food = null;
    }

    getFood() {
        return this.#food;
    }

    setForCoocking(food) {
        this.#food = food;
    }

    getCoockingFood(food) {

        if(this.getFood() === food) {
            return this.#food;
        } else {
            return 0;    
        }
    }
}

module.exports = Restaurant