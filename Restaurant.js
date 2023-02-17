const  Shipper = require('./shipper')

Food = {
shaurma : "shaurma taq",
xorovac : "xorovac",
bulki : "bulki",
perashki : "perashki ",
kola : "kola",
jur : "jur"
}

class Restaurant {
    
    constructor(food) {
    this.food = food;
    }

    takeOrder(orderFood) {
        if(orderFood === this.food) {
        return this.food;
        } else {
            return 0;
        }    
    }

    giveFoodShipper(food) {
    const shipper = new Shipper()
    shipper.getFoodforDelivery(food);
    }
}

module.exports = Restaurant