import { useState } from "react";
import {Input,notification,Modal} from "antd" 
import { useEffect } from "react";
const UpdateUserModal = (props) => { 
        const [id,setId] = useState("");
        const [fullName,setFullName] = useState("");
        const [phone,setPhone] = useState("");
       
        
        const{isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate} = props;

        // next dataUpdate != prev dataUpdate
        useEffect(()=>{
            console.log(">> check data update: ",dataUpdate);
            if(dataUpdate){
                setId(dataUpdate._id);
                setFullName(dataUpdate.fullName);
                setPhone(dataUpdate.phone);
            }
        },[dataUpdate])
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
            setIsModalUpdateOpen(false);
            setId("");
            
            setFullName("");
          
            setPhone("");
            // cái này để khi tắt đi bật lại update nó sẽ ko bị kiểu như là ko hiện dưu liệu
            setDataUpdate(null);
        }    
    return (
        <Modal 
        title="Update a User" 
        open={isModalUpdateOpen} 
        onOk={()=>handleSubmitBtn()} 
        onCancel={()=>resetAndCloseModal()}
        maskClosable={false}
        okText={"Save"}
        >
        <div>
            <span>Id</span>
            <Input
                value={id}
                disabled
            />
        </div>
         <div>
            <span>Full Name</span>
            <Input
                value={fullName}
                onChange={(event)=>{setFullName(event.target.value)}}
            />
        </div>
        
        {/* <div>
            <span>Password</span>
            <Input.Password
                value={password}
                onChange={(event)=>{setPassword(event.target.value)}}
            />
        </div> */}
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