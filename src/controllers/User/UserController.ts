
import BaseController from "controllers/BaseController/BaseController";
import IController from "controllers/BaseController/Controller.interface";
import { Request, Response } from 'express'
class UserController extends BaseController implements IController {
    constructor(){
        super()
        this.initRoutes()
    }
    initRoutes() {
        this.router.get('/',this.test)
    }
    test(req: Request, res: Response) {
        res.send("ok")
    }
}

export default UserController