

class MenuAm {
#clients
#Food_order_list
constructor() {
    this.#Food_order_list = new Map();
}
    setOrderfromUser(user,food) {
        this.#Food_order_list.set(user.getname(), food);
    }

    getOrderedFoodbyname(user) {
        return this.#Food_order_list.get(user.getname());
    }


    startOrder(user, food, restaurant) {
        this.setOrderfromUser(user,food);
        restaurant.setOrder(getOrderedFoodbyname(user.getname()));
    }

   
}



module.exports = MenuAm