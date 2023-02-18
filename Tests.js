const Restaurant = require('./Restaurant');
const Shipper = require('./shipper');
const User = require('./client.js');
const Bank = require('./Bank.js');
const MenuAm = require('./MenuAm.js')


function TestSetForCoocking() {
 const Parvana = new Restaurant(Food.xorovac);
 Parvana.setForCoocking(Food.xorovac);
    if(Parvana.getCoockingFood() !== Food.xorovac ) {
        console.log("Test takeorder() failed !!!..");
        } else {
        console.log("Test takeOrder() passed.");
    }   
}

function TestgiveFoodShipper() {
const Parvana = new Restaurant(Food.xorovac);
Parvana.takeOrder(Food.xorovac);
Parvana.giveFoodShipper(Food.xorovac);
}

function TestgetFoodforDelivery() {
   
    const shipper = new Shipper();
    shipper.setFoodforDelivery(Food.xorovac);
    if(shipper.getFoodforDelivery() !== Food.xorovac) {
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

    TestSetForCoocking()
    TestgetFoodforDelivery()
}



TestAlltests();


