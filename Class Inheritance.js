class person {
    constructor(){
        this.fName = 'suraj'
        this.lName = 'kale'

    }
    fullname(){
        console.log(this.fName+' '+this.lName)
    }

}

class allDetails extends person{
    constructor(){
        super();
        this.height = 5.8
        this.class = 12
        this.age = 18

    }
}
let updatedData = new allDetails()
console.log(updatedData)