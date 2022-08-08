import $ from "jquery"
import Product  from "./product"


//definitely typed == used to declare tools
//or use @types/jquery 


// const form = document.getElementById("form")
// form?.addEventListener("submit", (e) => {
//     e.preventDefault()

//     //const test : HTMLElementTagNameMap // to see all availbale cmd + click
//     const name : string = (<HTMLInputElement>document.getElementById("name")).value
//     const price : number | string = (<HTMLInputElement>document.getElementById('price')).value

//    const product : Product = new Product(name, price)

//    const table = document.getElementById("table")

//    table?.insertAdjacentHTML('beforeend', `
//    <tr> 
//    <td> ${product.id}</td>
//    <td> ${product.name}</td>
//    <td> ${product.price}</td>
//    </td>`
//    )

// })

const form = $('form')
form.on("submit", (e) => {
    e.preventDefault()

    const name: string = <string>$("#name").val()
    const price: number = <number>$("#price").val()

    const product: Product = new Product(name, price)

    const table = $("#table")

    table.append(`
    <tr> 
   <td> ${product.id}</td>
   <td> ${product.name}</td>
   <td> ${product.price}</td>
   </td>`
)
})