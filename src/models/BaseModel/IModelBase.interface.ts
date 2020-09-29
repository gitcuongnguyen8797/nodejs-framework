import * as mssql from 'mssql'
import * as mysql from 'mysql'
interface IModelBase {
    sqlsrv?: mssql.ConnectionPool
    mysqld?: mysql.Connection
}
export default IModelBase