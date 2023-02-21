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

    getOrder() {
        return this.#food;
    }

    setOrder(food) {
        this.#food = food;
    }

   setFoodforDelivery(shipper) {
        shipper.setFoodforDelivery(this.getOrder());
    }
}

module.exports = Restaurant