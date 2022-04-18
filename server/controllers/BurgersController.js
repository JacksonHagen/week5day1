import { send } from "express/lib/response";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController{
    constructor() {
        super('api/burgers')

        this.router
        .get('', this.getAllBurgers)
        .get('/:id', this.getBurgerById)
        .post('', this.createBurger)
        .delete('/:id', this.deleteBurger)
        .put('/:id', this.editBurger)
    }
    async getAllBurgers(req, res, next) {
        try {
            const burgers = await burgersService.getAllBurgers()
            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    async getBurgerById(req, res, next) {
        try {
            const burger = await burgersService.getBurgerById(req.params.id)
            res.send(burger)
        } catch(error) {
            next(error)
        }
    }
    async createBurger(req, res, next) {
        try {
            const updatedBurgers = await burgersService.createBurger(req.body)
            res.send(updatedBurgers)
        } catch (error) {
            next(error)
        }
    }
    async deleteBurger(req, res, next) {
        try {
            const updatedBurgers = await burgersService.deleteBurger(req.params.id)
            res.send(updatedBurgers)
        } catch (error) {
            next(error)
        }
    }
    async editBurger(req, res, next) {
        try {
            const burger = burgersService.editBurger(req)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }
}