import { generateId } from "../../client/app/Utils/generateId.js"
import { FakeDB } from "../db/FakeDB.js"
import { NotFound } from "../utils/Errors.js"

class CoffeesService {
    editCoffee(body) {
        let targetCoffee = FakeDB.coffees.find(c => c.id === body.id)
        if(!targetCoffee) {
            throw new NotFound('Coffee not found!')
        } else {
            targetCoffee.origin = body.origin || targetCoffee.origin
            targetCoffee.process = body.process || targetCoffee.process
            targetCoffee.roaster = body.roaster || targetCoffee.roaster
            return targetCoffee
        }
    }
    deleteCoffee(params) {
        FakeDB.coffees = FakeDB.coffees.filter(c => c.id !== params.id)
        return FakeDB.coffees
    }
    createCoffee(newCoffeeBody) {
        newCoffeeBody.id = generateId()
        FakeDB.coffees.push(newCoffeeBody)
        return FakeDB.coffees
    }
    getCoffeeById(coffeeId) {
        const foundCoffee = FakeDB.coffees.find(c => c.id == coffeeId)
        if(!foundCoffee) {
            throw new NotFound('No coffee found with that ID!')
        } else {
            return foundCoffee
        }
    }
    getAllCoffees() {
        return FakeDB.coffees
    }

}

export const coffeesService = new CoffeesService()