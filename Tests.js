const Restaurant = require('./Restaurant');
const Shipper = require('./shipper');
const User = require('./client.js');
const Bank = require('./Bank.js');
const MenuAm = require('./MenuAm.js')




function TestbankDeposite() {
    const bank = new Bank();
    const client = new User("Valod");
    client.setbank_id(bank.create_id());
    client.add_money(10000);
    bank.deposite(client, 10000);
    bank.withdraw(client, 5000);
    if(client.getbalance() !== 5000) {
        console.log("Test deposite(), withdrow() failed !...");
    } else {
        console.log("Test deposite(), withdrow() passed .");
    }
}

function TestShipper_get_set_foodforDelivery() {
    const shipper = new Shipper();
    shipper.setFoodforDelivery(Food.xorovac);
    if(shipper.getFoodforDelivery() !== "xorovac") {
        console.log("Test set_getfoodForDelivery failed !..");
    } else {
        console.log("Test set_getfoodForDelivery passed.");
    }
}

function TestendDelivery() {
    const shipper = new Shipper();
    shipper.setFoodforDelivery(Food.xorovac);
    if(shipper.endDelivery() !== "xorovac" && shipper.getFoodforDelivery() !== null) {
        console.log("Test endDelivery() failed !..");
    } else {
        console.log("Test endDelivery() passed");
    }
}

function TestgetsetOrderRestaurant() {
    const restaurant = new Restaurant();
    restaurant.setOrder(Food.xorovac);
    if(restaurant.getOrder() !== "xorovac") {
        console.log("Test getsetOrder() failed !...");
    } else {
        console.log("Test getsetOrder() passed .");
    }
}

function TestsetFoodforDelivery() {
    const restaurant = new Restaurant();
    const shipper = new Shipper();
    restaurant.setOrder(Food.xorovac);
    restaurant.setFoodforDelivery(shipper);
    if(shipper.getFoodforDelivery() !== "xorovac") {
        console.log("Test  setFoodforDelivery() failed !...");
    } else {
        console.log("Test  setFoodforDelivery() passed .");
    }
} 

function Testset_get_Order_MenuAm() {
    const client = new User("Valodik");
    const Menuam = new MenuAm();
    Menuam.setOrderfromUser("Valodik",Food.kola);
    if(Menuam.getOrderedFoodbyname("Valodik") !== "kola") {
        console.log("Test set or get OrderMenuAm() failed !!!... ");
    } else {
        console.log("Test set or get OrderMenuAm() passed . ");
    }
}

function TestClientfoodOrder() {
    const client = new User("Valodik");
    const menu = new MenuAm();
    const restaurant = new Restaurant();
    const curier = new Shipper();

    client.foodOrder(menu, Food.xorovac);
    menu.startOrderRestaurant("Valodik", restaurant );
    restaurant.setFoodforDelivery(curier);

    if(curier.getFoodforDelivery() !== "xorovac") {
        console.log("Test foodOrder() failed !!!...");
    } else {
        console.log("Test foodOrder() passed .");
    }

}

function TestUserfunctions() {
    const user = new User("Valodik");
    user.add_money(10000);
    if (user.getbalance() !== 10000 || user.getname() !== "Valodik") {
        console.log("Test add_money(), getbalance(), getname() failed !...");
    } else {
        console.log("Test add_money(), getbalance(), getname() passed .");
    }

}

function TestifClientTakeFoodOrder() {
    const client = new User("Valodik");
    const menu = new MenuAm();
    const restaurant = new Restaurant();
    const curier = new Shipper();

    client.add_money(5000);
    client.foodOrder(menu, Food.xorovac);
    menu.startOrderRestaurant("Valodik", restaurant );
    restaurant.setFoodforDelivery(curier);
    client.takeFoodOrder(curier);
    if(client.getfoodfromFridge() !== "xorovac" || menu.menuamCashBoxcontent() !== 400 || client.getbalance() !== 3000 
       || restaurant.getBalanceofCashBox() !== 1440 || curier.getBalanceCashPoket() !== 160) {

        console.log(curier.getBalanceCashPoket() + "Test takeFoodOrder() failed !!!..");
    } else {
        console.log("Test takeFoodOrder() passed .");
    }
}

function TestAllTests() {

    TestShipper_get_set_foodforDelivery();
    TestendDelivery()
    TestgetsetOrderRestaurant()
    TestsetFoodforDelivery();
    Testset_get_Order_MenuAm();
    TestClientfoodOrder();
    TestifClientTakeFoodOrder();
    TestUserfunctions();
    TestbankDeposite()
}



 //TestAllTests();
 