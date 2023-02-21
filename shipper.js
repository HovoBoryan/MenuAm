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
    this.getFoodforDelivery();    
    this.#food = null;
    }

}
module.exports = Shipper