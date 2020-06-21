// let arr1=['app','bal','car']
// console.log(arr.indexOf('bal'))

let arr=[
    {
        name:'nithin',
        age:22,
        gender:'male',
    },
    {
        name:'suresh',
        age:24,
        gender:'male',
    },
    {
        name:'sowmya',
        age:29,
        gender:'female',
    }
]

// console.log
// (arr.findIndex(function(a,ind){
//     return a.name === 'suresh'
// }))

// let find =function(obj,name){
//     console.log
//     (obj.findIndex(function(arr,index){
//         return arr.name === name
//     }))
// }
// find(arr,'suresh')

// let fin=function(arr,value){
//     let ind = arr.find(function(arr,index){
//         return arr.name.toLowerCase() === value.toLowerCase()
//     })
//     return ind
// }
// console.log(fin(arr,'SURESH').name);

// const app = function(name){
//     console.log(`hiii ${name}`)
// }
// app('nithin')

// const app = (name)=> `hii ${name}`
// console.log(app('nithin'))

// const maleGender=arr.filter((arr) => (arr.gender === 'male'))

// for (const obj of maleGender){
// console.log(obj.age);
// }

let nithin ={
    name:'this is nithin',
    age:22,
}
let suresh ={
    name:'this is suresh',
    age:24,
}
let sowmya ={
    name:'this is sowmya',
    age:29,
}


let users = new Map()
users.set('nithin', nithin)
users.set('suresh',suresh)
users.set('sowmya',sowmya)
// console.log(users.get('nithin').age)
// console.log(users.keys());
// console.log(users.values());
// console.log(users.size)
// for ( const val of users.values()){
//     console.log(val.name)
// }
// for (const [key, value] of users.entries()){
//     console.log(`hello ${key} your age is ${value.age}`);
    
// }
// const app= users.forEach(function(key,value){
//     console.log(key);
//     console.log(value)
    
// })



