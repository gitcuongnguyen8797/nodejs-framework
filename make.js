const args = process.argv
const fs = require('fs')
const makeControler = (folder = null, path,name) => {
    if (!!folder) {
        if (!fs.existsSync(`src/controllers/${folder}`)) {
            fs.mkdirSync(`src/controllers/${folder}`)
        }
    }
    fs.writeFile(`src/controllers/${path}.ts`, 
    `import BaseController from "../BaseController/BaseController";
import IController from "../BaseController/Controller.interface";
import { Request, Response } from 'express'
class ${name} extends BaseController implements IController {
        constructor(){
            super()
            this.initRoutes()
        }
        initRoutes() {
            
        }
}
export default ${name}
    `, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
if (!!args[2]) {
    const make = args[2].split(':')

    if (!!make[0]) {

        if (!make[1]) {
            console.log(`Thiếu tên ${make[0]}`)
            return
        }
        const path = make[1].split('.')
        switch (make[0]) {
            case 'controller':
                if (path.length > 1)
                    makeControler(path[0], path.join('/'),path.pop())
                else
                    makeControler(null, path.join('/'),path.pop())
                return;
            case 'model':
                console.log('Tạo Models')
                return
            default:
                console.log('Không tìm thấy chức năng bạn muốn')
                return
        }
    }
}

