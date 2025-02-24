import { useState } from "react";
import {Input,notification,Modal} from "antd" 
const UpdateUserModal = () => { 
        const [fullName,setFullName] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const [phone,setPhone] = useState("");
       
        const[isModalOpen, setIsModalOpen] = useState(true);

        const handleSubmitBtn = async () => {
            const res = await createUserAPI(fullName, email, password, phone);
            // console.log(">> check res: ", res);
            if (res.data){
            // antd nó có hỗ trợ notification
            notification.success({
                message: "create user",
                description:"tạo mới thành công"  
            });
            // đóng modal 
            resetAndCloseModal();
            // await loadUsers();
            } else {
                notification.error({
                    message: "Create User",
                    description: JSON.stringify(res.message)
                });
            }
        }
        const resetAndCloseModal = () => {
            setIsModalOpen(false);
            setFullName("");
            setEmail("");
            setPassword("");
            setPhone("");
        }
    return (
        <Modal 
        title="Update a User" 
        open={isModalOpen} 
        onOk={()=>handleSubmitBtn()} 
        onCancel={()=>resetAndCloseModal()}
        maskClosable={false}
        okText={"Save"}
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
       
    )
}

export default UpdateUserModal;
// tự sửa cái update này đi