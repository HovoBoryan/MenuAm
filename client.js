
class User {
  #name;
  #bank_id;
  #money;

  constructor(name){ 
    this.#name = name;
    this.#money = 0;
    this.#bank_id = null;
  }
  getname() {
    return this.#name;
  }
  setbank_id(bank_id) {
    this.#bank_id = bank_id;
  }
  getbank_id() {
    return this.#bank_id;
  }
  add_money(count) {
    this.#money += count;
  }
  remove_money(count) {
    this.#money -= count;
  }
  show_balance() {
    console.log(`Your balance: ${this.#money}`);
  }

  foodOrder(Menuam, food, restaurant) { 
    Menuam.startOrder(this.getname(), restaurant, food);
  }

/*takeFoodOrder(Menuam) {
    Menuam.give_getOrderToUser(this)
  }
*/
};



/*    const Ameria = new Bank();

const Hovo = new User('Hovo');

Hovo.add_money(90000);

Hovo.bank_id = Ameria.create_id();

Ameria.deposite(Hovo, 5000);
Ameria.withdraw(Hovo, 8000);

Hovo.show_balance();   */

module.exports = User