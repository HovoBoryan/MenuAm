const Restaurant = require('./Restaurant');
const Shipper = require('./shipper');
const User = require('./client.js');
const Bank = require('./Bank.js');
const MenuAm = require('./MenuAm.js')


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

function TestifClientTakeFoodOrder() {
    const client = new User("Valodik");
    const menu = new MenuAm();
    const restaurant = new Restaurant();
    const curier = new Shipper();

    client.foodOrder(menu, Food.xorovac);
    menu.startOrderRestaurant("Valodik", restaurant );
    restaurant.setFoodforDelivery(curier);
    client.takeFoodOrder(curier);
    if(client.getfoodfromFridge() !== "xorovac") {
        console.log("Test takeFoodOrder() failed !!!..");
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
    TestifClientTakeFoodOrder()
}



 //TestAllTests();
 