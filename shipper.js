class Shipper {
    #food;
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
    let food = this.#food;
    this.#food = null;
    return food;
    }

}
module.exports = Shipper