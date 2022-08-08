import { ID } from "./utils"

export default class Product {
    readonly id: number
    readonly name: string
    readonly price: number | string

    constructor(name: string, price: number | string) {
        this.id = ID.getnewId()  
        this.name =  name 
        this.price = price
    }
}
