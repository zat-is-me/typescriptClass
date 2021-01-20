class Customer{

    private firstName: string;
    private lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    public getFirstName():string{
        return this.firstName;
    }
    public setFirstName(theFirst: string): void{
        this.firstName = theFirst;
    }
    
    /*
    private x: string;
    
    get myX():string{
        return this.x;
    }
    set myX(theX: string){
        this.x = theX;
    }
    */
}

//using the class
let myCustomer = new Customer("Tatek","Ahmed");    
console.log(myCustomer.setFirstName("Sofia"));
console.log(myCustomer.getFirstName());

/*myCustomer.myX = "Jabeer";
console.log("\n"+myCustomer.myX);*/
































