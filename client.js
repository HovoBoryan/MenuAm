
class User {
  #name;
  #bank_id;
  #money;
  #MyFridge;
  constructor(name){ 
    this.#name = name;
    this.#money = 0;
    this.#bank_id = null;
    this.#MyFridge = null;
  }
  
  setMyfridge(food) {
    this.#MyFridge = food;
  }//

  getfoodfromFridge() {
    return this.#MyFridge;
  }//

  getname() {
    return this.#name;
  }//

  setbank_id(bank_id) {
    this.#bank_id = bank_id;
  }

  getbank_id() {
    return this.#bank_id;
  }

  add_money(count) {
    this.#money += count;
  }//

  remove_money(count) {
    this.#money -= count;
    return count;
  }//

  getbalance() {
    return this.#money; 
  }//

  foodOrder(Menuam, food) { 
    Menuam.setOrderfromUser(this.getname(),food)
    Menuam.setMoneyToCashbox(this.remove_money(Menuam.food_Prices(food)));
  }//

  takeFoodOrder(shipper) {
    this.setMyfridge(shipper.endDelivery());
  }//

};

module.exports = User