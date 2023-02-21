

class MenuAm {
#Cashbox
#Food_order_list
constructor() {
    this.#Cashbox = 0;
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

    setMoneyToCashbox(amount) {
        this.#Cashbox += amount;
    }

    getMoneyoutCashbox(amouth) {
        this.#Cashbox -= amouth;
        return amouth;
    }
   
}



module.exports = MenuAm