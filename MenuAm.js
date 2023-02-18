

class MenuAm {
#clients
#order_list
constructor(food) {
    this.food = food;
    this.#order_list = new Map();
}
    setOrder(food) {
        this.food = food;
    }

    getOrder() {
    return this.food;
    }

    giveOrder(clientname, food) {

   }

    setClient() {

    }

    getClient() {
    
    }

    startDelivery() {
    
    }


    endDelivery() {

    }

}



module.exports = MenuAm