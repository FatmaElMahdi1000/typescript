// //arrray
// const Pizzas: any[] =
//
//     [{name: "Margerita", price: 15},
//     {name: "Veggie", price: 20},
//     {name: "Hawaiian", price: 10}]
//
// const cashInRegister = 100;
//
// //Queue
// const orderQueue: any[] = [];
//
// interface newPizza {
//     name: string,
//     price: number
// }
// //variable of the interface:
//
// const piz: newPizza =
// {
//     name: "xyz",
//     price: 23.5
// };
//
//
// //Utility/helper function  takes new Pizza and adds it to the menue
//  function addingNewPizza(piz: newPizza)
//  {
//
//      for(const p of Pizzas)
//      {
//          orderQueue.push(p);
//      }
//      orderQueue.push(piz)
//  }
//
//  console.log(Pizzas);
//
// for(const p of Pizzas)
// {
//     console.log(p.name);
// }
//
// //Getting the number of characters
// interface nums
//     {
//         charNum: number,
//         PizzaName: string
//     }
//
// let Max: number = 0;
// let pName: string;
// type CharNum = 3; //for difference
//
// for(const p of Pizzas)
// {
//     let nameLength: number;
//     nameLength = p.name.length;
//     if(nameLength > Max)
//     {
//         Max  = nameLength;
//         pName = p.name;
//     }
// }
//
//
// const info: nums
// {
//     charNum: Max,
//         PizzaName: pName
// }
//
// console.log( );
//
// )
//
//
//
//
//
//
//
//
//

let pizzas: any[]=
    [{Name: "Sausage", price: 25}, {Name: "Veggie", price: 20},
    {Name: "Hawaiian", price: 10}]


//let must have a value // get reassigned fine later to another one we want:
let max: number = 0;
//  knowing the max num of characters:
for (let p of pizzas)
{
    const pLength: number = p.Name.length;
    if((pLength) > max)
    {
        max = pLength;
    }
}
console.log(max)



//interface:deal with defining the structure of data, the way we'd like it to do :

interface newPizzaStructure
{
    Name: string,
    price:number,
    Branch?: string //  Branch?:  means Optional to get it inserted or not for the object
}


//its type is the interface previously defined:
const pizza1: newPizzaStructure =
    {
        Name: "CrazyPizza1",
        price: 30
        //Notice optional to omit: Branch? : optional
    }

const pizza2: newPizzaStructure =
    {
        Name: "CrazyPizza2",
        price: 45,
        Branch: "los Angeles" //works: optional to put it here:
    }
//so interface used for Data Transfer objects>


console.log(pizza2)

