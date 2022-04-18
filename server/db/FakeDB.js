import { generateId } from "../../client/app/Utils/generateId.js";


export const FakeDB = {
    coffees: [
        {
            origin: 'Ethiopia',
            process: 'Washed',
            roaster: 'Happy Mug Coffee',
            id: generateId()
        },
        {
            origin: 'Columbia',
            process: 'Natural',
            roaster: 'Methodical Coffee Roasters',
            id: generateId()
        },
        {
            origin: 'Kenya',
            process: 'White Honey',
            roaster: 'Brandywine Coffee Roasters',
            id: generateId()
        }
    ],
    burgers: [
        {
            title: 'Baby Borg',
            weight: '1/4lb',
            toppings: 3,
            id: generateId()
        },
        {
            title: 'Reasonable Sum of Borg',
            weight: '1/2lb',
            toppings: 5,
            id: generateId()
        },
        {
            title: 'Crazy Lorge Borg',
            weight: '3lb',
            toppings: 11,
            id: generateId()
        }
    ]
}