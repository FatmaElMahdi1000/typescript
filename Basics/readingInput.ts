import * as readline from 'readline/promises';
import {stdin as input ,stdout as output } from 'process'

let pizzas: any[] = [] ;

interface PizzaInfo
{
    Name: string,
    price: number
}
//object of the interface:


//functions that takes pizzas info and push to the array:
async function addNewPizza(pi: any[]): Promise<void>
{

    let numberOfPizzas = 1;
    const rl = readline.createInterface({input, output});

    //1
    while(numberOfPizzas < 4)
    {
        //creating a fresh new object for every iteration: / for new pizza this is an object from the interface :
        const newPizza: PizzaInfo =
            {
                Name: "",
                price: 0
            }

        const answer1 = await rl.question("Enter the name of the new pizza: ");
        newPizza.Name = answer1;
        const answer2 = await rl.question("Enter the price: ");
        newPizza.price = Number(answer2);

        pi.push(newPizza)
        numberOfPizzas++;
    }
    rl.close();
    for(const p of pi)
    {
        console.log(p);
    }

}
addNewPizza(pizzas);


//Adding a Discount & Updating Prices
