class Bank {
    id;
    id_list;
    
    constructor() {
      this.id = 0;
      this.id_list = new Map();
    }
    create_id() {
      return this.id++;
    }
  
    deposite(user, amount) { // NERDNUM
      let id = user.bank_id;
      let balance = this.id_list.get(id) ?? 0;
      user.remove_money(amount);
      this.id_list.set(id, balance + amount);
    }
  
  
    withdraw(user, amount) { // HANUMA
      let id = user.bank_id;
      
      let balance = this.id_list.get(id);
      if (this.id_list.get(id) >= amount) {
        this.id_list.set(id, balance - amount);
        user.add_money(amount);
      } else {
        console.log('el pox chka, chunes vopshm');
      }
    }
  };

  module.exports = Bank