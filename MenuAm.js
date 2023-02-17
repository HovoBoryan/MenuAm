const Restaurant = require('./Restaurant');
//const Shipper = require('./shipper');
const User = require('./client.js');

class MenuAm {
#clients = []
constructor() {

}
giveOrder(clientname, food) {

    this.#clients.push(new User(clientname));
    const restaurant = new Restaurant(food);

    if(restaurant.takeOrder(food) !== 0) { 
        restaurant.giveFoodShipper(food);

        } else {
        console.log("Sorry we can't delivery that food right now !!!...");
        }
}

endDelivery() {

}

}

const Hovo = new User("Hovo");
Hovo.foodOrder("qabab");


module.exports = MenuAm