//Given a product object, log all its keys and values. Bonus: Format them as "key: value" pairs in an array or print them line by line.


let product ={
    cars: "BMW",
    fruits:"mangoes",
    house : "hut"
} 
let keys = Object.keys(product)
let values = Object.values(product)
console.log("keys;", keys)
console.log("keys;", values)
 keys.forEach((keys, i) => {
    console.log(`${keys}: ${values[i]}`)
 })

