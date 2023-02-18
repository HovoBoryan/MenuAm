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

    getCoockingFood() {
        return this.#food;
    }
}

module.exports = Restaurant