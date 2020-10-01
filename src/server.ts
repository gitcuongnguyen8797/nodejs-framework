import "module-alias/register";
import App from "./app";
import * as bodyParser from "body-parser";

const app = new App({
  port: 5000,
  controllers: [
    // new ControllerName()
    // ...
  ],
  middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
});

app.listen();
