

class MenuAm {
#clients = []
constructor(food) {
    this.food = food;
}
    setOrder(food) {
        this.food = food;
    }

    getOrder() {
    return this.food;
    }

    giveOrder(clientname, food) {

    this.#clients.push(new User(clientname));
    const restaurant = new Restaurant(this.getFood());

    if(restaurant.takeOrder(food) !== 0) { 
        restaurant.giveFoodShipper(food);

        } else {
        console.log("Sorry we can't delivery that food right now !!!...");
        }
}

endDelivery() {

}

}



module.exports = MenuAm