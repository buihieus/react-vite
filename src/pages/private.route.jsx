import { useContext } from "react"
import { AuthContext } from "../components/context/auth.contex"
import { Link, Navigate } from "react-router-dom"
import { Button, Result } from "antd"

const PrivateRoute = ( props) => {
    const {user} = useContext(AuthContext)
    if(user&&user.id){
        return(
            <>
            {props.children}
            </>
        )
    }
    // return (<Navigate to = "/login" replace/>)
    return (
        <Result
                status="403"
                title="Unauthorize!"
                subTitle={"ban can dang nhap de truy cap tai nguyen "}
                extra={
                    <Button type="primary">
                        <Link to="/login">
                            <span>Back to homepage </span>
                        </Link>
                    </Button>}
            />
    )
}
 export default PrivateRoute