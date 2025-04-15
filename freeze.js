let settings ={
    theme: "dark",
    notification:"true",
} 
settings.theme ="white"
Object.freeze(product)
settings.theme = "dark"
console.log(settings)

Object.isFrozen(settings)

console.log(Object.isFrozen(settings))
