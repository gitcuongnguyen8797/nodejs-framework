const args = process.argv
const fs = require('fs')
const makeControler = (folder = null, path, name) => {
    if (!!folder) {
        if (!fs.existsSync(`src/controllers/${folder}`)) {
            fs.mkdirSync(`src/controllers/${folder}`)
        } else {
            if(fs.existsSync(`src/controllers/${path}.ts`) ) {
                console.log('Controller đã tồn tại')
                return;
            }
        }
    }
    if(fs.existsSync(`src/controllers/${path}.ts`) ) {
        console.log('Controller đã tồn tại')
        return
    }
    fs.writeFile(`src/controllers/${path}.ts`,
        `import BaseController from "@dist/controllers/BaseController/BaseController";
import IController from "@dist/controllers/BaseController/Controller.interface";
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
        console.log('Controller được khởi tạo!');
    });
}

const makeModel = (folder = null, path, name) => {
    if (!!folder) {
        if (!fs.existsSync(`src/models/${folder}`)) {
            fs.mkdirSync(`src/models/${folder}`)
        } else {
            if(fs.existsSync(`src/models/${path}.ts`) ) {
                console.log('Model đã tồn tại')
                return;
            }
        }
    }
    if(fs.existsSync(`src/models/${path}.ts`) ) {
        console.log('Model đã tồn tại')
        return
    }
    fs.writeFile(`src/models/${path}.ts`,
        `import BaseModel from "@dist/models/BaseModel/BaseModel";
        class ${name} extends BaseModel {
            constructor(props?: any) {
                super()
            }
        }
        
export default ${name}
    `, function (err) {
        if (err) throw err;
        console.log('Model được khởi tạo!');
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
                    makeControler(path[0], path.join('/'), path.pop())
                else
                    makeControler(null, path.join('/'), path.pop())
                return;
            case 'model':
                if (path.length > 1)
                    makeModel(path[0], path.join('/'), path.pop())
                else
                    makeModel(null, path.join('/'), path.pop())
                return
            default:
                console.log('Không tìm thấy chức năng bạn muốn')
                return
        }
    }
}

