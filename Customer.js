var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    return Customer;
}());
//using the class
var myCustomer = new Customer("Tatek", "Ahmed");
console.log(myCustomer.setFirstName("Sofia"));
console.log(myCustomer.getFirstName());
/*myCustomer.myX = "Jabeer";
console.log("\n"+myCustomer.myX);*/
