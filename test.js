const fs = require('fs')
fs.readFile(`src/controllers/User/UserController.ts`, { encoding: 'utf-8' }, function (err, data) {
    try {
        const filterd = data.match(/this\.router\..*/g)
        const routes = filterd.map(i => {
            const method = String(i).toUpperCase().match(/GET|POST|PUT|DELETE/g)[0]
            const fillRound1 = String(i).match(/\(.*.\)/g)
            const functionName = String(fillRound1[0]).split('.')[1].replace(/\).*/g, '')
            return {
                method:method,functioName:functionName
            }
        })
        routes.map(i => {
            
            const reg = new RegExp(`=?${i.functioName}=?\(.*\)`,'g')
            const propFunction = data.match(reg)
            // console.log(propFunction)
            console.log(data)

        })
    } catch (error) {
        console.log(error)
        console.log(Error('không tìm thấy khai báo route trong'))
    }
})