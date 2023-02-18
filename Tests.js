const Restaurant = require('./Restaurant');
const Shipper = require('./shipper');
const User = require('./client.js');
const Bank = require('./Bank.js');
const MenuAm = require('./MenuAm.js')


function TestMenusetOrder() {
    const NewOrder = new MenuAm();
    NewOrder.setOrder(Food.xorovac);
    if(NewOrder.getOrder() !== "xorovac") {
        console.log("Test setFood() failed !!!..");
    } else {
        console.log("Test setFood() passed .");
    }
}

function TestSetForCoocking() {
 const Parvana = new Restaurant(Food.xorovac);
 Parvana.setForCoocking(Food.xorovac);
    if(Parvana.getCoockingFood() !== "xorovac" ) {
        console.log("Test takeorder() failed !!!..");
        } else {
        console.log("Test takeOrder() passed.");
    }   
}
function Test_set_get_foodfordelivery() {
    const shipper = new Shipper();
    shipper.setFoodforDelivery(Food.xorovac);
    if(shipper.getFoodforDelivery() !== "xorovac") {
        console.log('Test set or get FoodforDelivery() failed !!!...');
    } else {
        console.log("Test set or get FoodforDelivery() passed .");
    }
}

function  TestendDelivery() {
    const shipper = new Shipper();
    shipper.setFoodforDelivery(Food.qabab);
    shipper.endDelivery();
    if(shipper.getFoodforDelivery() !== null) {
        console.log("Test endDelivery() failed !!!...");
    } else {
        console.log("Test endDelivery() passed .");
    }
}



/* function TestgiveFoodShipper() {
const Parvana = new Restaurant(Food.xorovac);
Parvana.takeOrder(Food.xorovac);
Parvana.giveFoodShipper(Food.xorovac);
}*/

function TestgetFoodforDelivery() {
   
    const shipper = new Shipper();
    shipper.setFoodforDelivery(Food.xorovac);
    if(shipper.getFoodforDelivery() !== "xorovac") {
        console.log("Test getFoodforDelivery() failed !!!..");
    } else {
        console.log("Test getFoodforDelivery() passed .");
    }   
}

//TestendDelivery() 

//TestMenusetFood(food)

//TestMenugetFood()

//TestMenugiveOrder(clientname, food)

//TestMenuendDelivery()

function TestAlltests() {

    TestMenusetOrder()
    TestSetForCoocking()
    TestgetFoodforDelivery()
    Test_set_get_foodfordelivery()
    TestendDelivery()
}



//TestAlltests();

