

class MenuAm {
#clients
#Food_order_list
constructor() {
    this.#Food_order_list = new Map();
}
    setOrderfromUser(name, food) {
        this.#Food_order_list.set(name, food);
    }

    getOrderedFoodbyname(name) {
        return this.#Food_order_list.get(name);
    }


    startOrderRestaurant(name,restaurant ) {
        restaurant.setOrder(this.getOrderedFoodbyname(name));
    }

   
}



module.exports = MenuAm