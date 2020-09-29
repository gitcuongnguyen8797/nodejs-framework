import BaseModel from "../BaseModel/BaseModel";
import { UserProps } from "./User.interface";

class User extends BaseModel implements UserProps {
    name: string;
    constructor(props?: any) {
        super()
        this.name = props.name

    }
    test() {
        return this.sqlsrv.connect().then(request => {
            return request.request().query('select * FROM MasterData_Customer_Request')
        }).then(data => {
            return data.recordset
        })
    }
}

export default User