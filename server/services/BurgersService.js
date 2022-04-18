import { generateId } from "../../client/app/Utils/generateId.js"
import { FakeDB } from "../db/FakeDB.js"
import { NotFound } from "../utils/Errors.js"

class BurgersService {
    editBurger(req) {
        let burg = FakeDB.burgers.find(b => b.id === req.params.id)
        if(!burg) {
            throw new NotFound('Burger not found !!')
        } else {
            burg.id === burg.id
            burg.title === req.body.title || burg.title
            burg.toppings === req.body.toppings || burg.toppings
            burg.weight === req.body.weight || burg.weight

            return burg
        }
    }
    deleteBurger(id) {
        FakeDB.burgers = FakeDB.burgers.filter(b => b.id !== id)
        return FakeDB.burgers
    }
    async createBurger(body) {
        body.id = generateId()
        FakeDB.burgers = [body, ...FakeDB.burgers]
        return FakeDB.burgers
    }  
    async getBurgerById(id) {
        const burger = FakeDB.burgers.find(b => b.id === id)
        if(!burger) {
            throw new NotFound('Burger not found !!')
        } else {
            return burger
        }
    }
    async getAllBurgers() {
        return await FakeDB.burgers
    }

}

export const burgersService = new BurgersService