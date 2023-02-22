const  Shipper = require('./shipper')

Food = {
shaurma : "shaurma",
xorovac : "xorovac",
perashki : "perashki ",
kola : "kola"
}

class Restaurant {
    #food;
    #restaurantCashBox;
    #deliveryCash
    constructor() {
    this.#food = null;
    this.#restaurantCashBox = 0;
    this.#deliveryCash = 0;
    }

    setmoneyInCashBox(money) {
        this.#restaurantCashBox = this.RestaurantincomeCalculator(money);
        this.#deliveryCash = (money - this.RestaurantincomeCalculator(money));
    }

    getBalanceofCashBox() {
        return this.#restaurantCashBox;
    }

    getMoneyForShipper() {
        let money = this.#deliveryCash;
        this.#deliveryCash = 0;
        return money;
    }

    getOrder() {
        return this.#food;
    }

    setOrder(food) {
        this.#food = food;
    }

   setFoodforDelivery(shipper) {
        shipper.setFoodforDelivery(this.getOrder());
        shipper.setcashPocket(this.getMoneyForShipper());
    }

    RestaurantincomeCalculator(money) {
        return money * 0.9;
    }
}

module.exports = Restaurant