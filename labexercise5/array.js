const fruit = ["apple"," mango","orange","strawberry","banana"]
console.log(fruit)

const temp = fruit[1];
fruit[1] = fruit[4];
fruit[4] = temp ;
console.log(fruit)

fruit.unshift("lime")
console.log(fruit)

fruit.pop()
console.log(fruit)