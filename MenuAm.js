

class MenuAm {

#Cashbox
#Food_order_list
#priceList

constructor() {
    this.foodPricelist = [ 
    ["shaurma", 1000],
    ["xorovac", 2000],
    ["perashki", 200],
    ["kola", 350] ];
    this.#priceList = new Map(this.foodPricelist);
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
        restaurant.setmoneyInCashBox(this.getMoneyoutCashbox(this.food_Prices(this.getOrderedFoodbyname(name) )))
    }

    food_Prices(foodname) {
        return this.#priceList.get(foodname);
    }

    setMoneyToCashbox(money) {
        this.#Cashbox += money;
    }

    getMoneyoutCashbox(amouth) {
        this.#Cashbox -= (amouth - this.incomeCalculator(amouth)) ;
       return amouth - this.incomeCalculator(amouth);
    }

    menuamCashBoxcontent() {
        return this.#Cashbox;
    }

    incomeCalculator(money) {
        return money / 5;
    }
   
}



module.exports = MenuAm