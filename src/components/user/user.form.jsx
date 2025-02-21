import {Button, Input,notification} from "antd"
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");

    // console.log(">> check form: ", fullName, email, password, phone);

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        // console.log(">> check res: ", res);
        if (res.data){
        // antd nó có hỗ trợ notification
        notification.success({
            message: "create user",
            description:"tạo mới thành công"  
        });
        } else {
            notification.error({
                message: "Create User",
                description: JSON.stringify(res.message)
            });
        }
    }
    // const handleClickBtn = async () => {
    //     try {
    //         const res = await createUserAPI(fullName, email, password, phone);
    //         console.log(">> check res: ", res);
    
    //         if (res && res.data) {
    //             notification.success({
    //                 message: "Create User",
    //                 description: "Tạo mới thành công"
    //             });
    //         } else {
    //             notification.error({
    //                 message: "Create User",
    //                 description: "Có lỗi xảy ra, vui lòng thử lại!"
    //             });
    //         }
    //     } catch (error) {
    //         console.error(">> Error: ", error);
    //         notification.error({
    //             message: "Lỗi",
    //             description: "Không thể tạo người dùng. Vui lòng kiểm tra lại."
    //         });
    //     }
    // };
    
    return (
        <div className="user-form" style={{margin: "20px 0"}}>
            <div style={{display: "flex",gap: "15px ", flexDirection: "column"}}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event)=>{setFullName(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event)=>{setPassword(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event)=>{setPhone(event.target.value)}}
                    />
                </div>
                <div>
                    <Button
                    // conClick={handleClickBtn}
                    // sau nay muon truyen tham so thi dung arrow funtion
                    onClick={()=>handleClickBtn()}
                    type="primary"> Create User </Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;