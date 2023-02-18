const Restaurant = require('./Restaurant');
const Shipper = require('./shipper');
const User = require('./client.js');
const Bank = require('./Bank.js');
const MenuAm = require('./MenuAm.js')


function TesttakeOrder() {
 const Parvana = new Restaurant(Food.xorovac);
    if(Parvana.takeOrder(Food.xorovac) !== Food.xorovac) {
        console.log("Test takeorder() failed !!!..");
        } else {
        console.log("Test takeOrder() passed.");
    }   
}

//TestgiveFoodShipper(food) 

//TestgetFoodforDelivery(food) 

//TestendDelivery() 

//TestMenusetFood(food)

//TestMenugetFood()

//TestMenugiveOrder(clientname, food)

//TestMenuendDelivery()

function TestAlltests() {

    TesttakeOrder()
}



TestAlltests();

