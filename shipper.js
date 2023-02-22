class Shipper {
    #food;
    #cashPocket = 0;
    constructer() {
        this.#food = null;
    }
    
    setFoodforDelivery(food) {
    this.#food = food;
    }

    getFoodforDelivery() {
        return this.#food;
    }

    endDelivery() {
    let food = this.getFoodforDelivery();    
    this.#food = null;
    return food;
    }

    setcashPocket(money) {
        this.#cashPocket += money;
    }

    getBalanceCashPoket() {
        return this.#cashPocket;
    }

}
module.exports = Shipper