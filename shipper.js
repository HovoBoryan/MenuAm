class Shipper {
    #food;
    constructer()
    {
        this.#food = null;
    }
    getFoodforDelivery(food) {
    this.#food = food;
    console.log(food + "  <<<< motsa shut tanem tex hascnem >>>>");
    }

    endDelivery() {
    let food = this.#food;
    this.#food = null;
    return food;
    }

}
module.exports = Shipper