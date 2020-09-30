import 'module-alias/register';
import App from './app'
import * as bodyParser from 'body-parser'

import UserController from '@dist/controllers/User/UserController'

const app = new App({
    port: 5000,
    controllers: [
        new UserController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
})

app.listen()