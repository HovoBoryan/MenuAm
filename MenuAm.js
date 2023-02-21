

class MenuAm {
#clients
#order_list
constructor() {
    this.food = null;
    this.#order_list = new Map();
}
    setOrderfromUser(user,food) {
        this.food = food;
        this.#order_list.set(user.getname(), food);
    }

    getOrderUsername(user) {
    return this.#order_list.get(user.getname());
    }


    startOrder(restaurant, food) {
        restaurant.setOrder(food);
    }


    endDelivery() {

    }

}



module.exports = MenuAm