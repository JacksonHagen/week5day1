import { coffeesService } from "../services/CoffeesService.js";
import BaseController from "../utils/BaseController.js";

export class CoffeesController extends BaseController{
    constructor() {
        super('api/coffees')
        this.router

        .get('', this.getAllCoffees)
        .get('/:id', this.getCoffeeById)
        .post('', this.createCoffee)
        .delete('/:id', this.deleteCoffee)
        .put('/:id', this.editCoffee)
    }
    async editCoffee(req, res, next) {
        try {
            req.body.id = req.params.id
            const editedCoffee = await coffeesService.editCoffee(req.body)
            res.send(editedCoffee)
        } catch (error) {
            next(error)
        }
    }
    deleteCoffee(req, res, next) {
        try {
            const updatedCoffees = coffeesService.deleteCoffee(req.params)
            res.send(updatedCoffees)
        } catch (error) {
            next(error)
        }
    }
    async createCoffee(req, res, next) {
        try {
            const newCoffeeBody = req.body
            const updatedCoffees = coffeesService.createCoffee(newCoffeeBody)
            res.send(updatedCoffees)
        } catch (error) {
            next(error)
        }
    }
    async getAllCoffees(req, res, next) {
        try {
            const coffees = await coffeesService.getAllCoffees()
            res.send(coffees)
        } catch (error) {
            next(error)
        }
    }
    async getCoffeeById(req, res, next) {
        try {
            const coffeeId = req.params.id
            const foundCoffee = await coffeesService.getCoffeeById(coffeeId)
            res.send(foundCoffee)
        } catch (error) {
            next(error)
        }
    }
}