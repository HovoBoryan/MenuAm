const  Shipper = require('./shipper')

Food = {
shaurma : "shaurma",
xorovac : "xorovac",
perashki : "perashki ",
kola : "kola",
}

class Restaurant {
    #food;
    #restaurantCashBox
    constructor() {
    this.#food = null;
    this.#restaurantCashBox = 0;
    }

    setmoneyInCashBox(money) {
        this.#restaurantCashBox += money;
    }

    getBalanceofCashBox() {
        return this.#restaurantCashBox;
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