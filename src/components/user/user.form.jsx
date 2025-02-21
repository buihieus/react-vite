import {Button, Input,notification,Modal} from "antd"
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");

    const[isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        // console.log(">> check res: ", res);
        if (res.data){
        // antd nó có hỗ trợ notification
        notification.success({
            message: "create user",
            description:"tạo mới thành công"  
        });
        //dong modal 
        setIsModalOpen(false);
        } else {
            notification.error({
                message: "Create User",
                description: JSON.stringify(res.message)
            });
        }
    }


    return (
        <div className="user-form" style={{margin: "10px 0"}}>
            <div style={{display: "flex",gap: "15px ", flexDirection: "column"}}>
               
                {/* css ở trong chỉ áp dụng vs 2 phàn tử mới 1 trái 1 pahir đc */}
                <div style = {{display: "flex",justifyContent: "space-between"}}>
                    <h3>Table User</h3>
                    <Button
                    // conClick={handleClickBtn}
                    // sau nay muon truyen tham so thi dung arrow funtion
                    onClick={()=>setIsModalOpen(true)}
                    type="primary"> Create User </Button>
                </div>
            </div>
            <Modal 
                title="Create User" 
                open={isModalOpen} 
                onOk={()=>handleSubmitBtn()} 
                onCancel={()=>setIsModalOpen(false)}
                maskClosable={false}
                okText="Create"
            >
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
            </Modal>
        </div>
        
    )
}

export default UserForm;