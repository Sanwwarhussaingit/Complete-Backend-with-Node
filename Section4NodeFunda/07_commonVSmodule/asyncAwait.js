
///1 common js
// async function test(){
//     const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response.status);
// }
// test()


//2 moduel js
// function test(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response.status);
// }
// test()

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(response.status);
//we can execute without async function
    


   


