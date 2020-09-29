import * as express from 'express'
import { Request, Response } from 'express'

class BaseController {
    protected path: string
    protected router = express.Router()

}
export default BaseController