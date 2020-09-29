import IModelBase from "./IModelBase.interface";
import * as mssql  from 'mssql'
import * as mysql from 'mysql'
class BaseModel implements IModelBase{
    private driver: string;
    private username: string;
    private password: string;
    private port: number;
    private host: string;
    private db:string;
    sqlsrv?: mssql.ConnectionPool
    mysqld?: mysql.Connection
    constructor(){
        this.driver = process.env.SQL_DRIVER
        this.port = parseInt(process.env.SQL_PORT,10)
        this.host = process.env.SQL_HOST
        this.username = process.env.SQL_USER
        this.password = process.env.SQL_PASS
        this.db = process.env.SQL_DB
        // validate
        if(!this.driver) throw Error('Không tìm thấy loại kết nối SQL')
        if(!this.port) throw Error('Không tìm thấy port SQL')
        if(!this.host) throw Error('Không tìm thấy host kết nối SQL')
        if(!this.db) throw Error('Không tìm thấy database kết nối SQL')
        this.connection()
    }
    connection() {
        if(this.driver === 'SQLSERVER')
        {
            this.sqlsrv =  new mssql.ConnectionPool({
                user: this.username,
                password: this.password,
                server: this.host,
                database: this.db,
                options: {
                    "encrypt": false,
                    "enableArithAbort": false,
                    useUTC: true
                }
            })
        }
        if(this.driver === 'MYSQL') {
            this.mysqld = mysql.createConnection({
                host     : process.env.SQL_HOST,
                user     : process.env.SQL_USER,
                password : process.env.SQL_PASS,
                database : process.env.SQL_DB
            })
        }

    }
}

export default BaseModel