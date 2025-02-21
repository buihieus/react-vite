import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(()=>{
      
      loadUsers();
    },[]);
    const loadUsers = async () => {
        // Fetch data from API here
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
      }
    return (
        <div style={{padding: "20px"}}>
            
                    <UserForm loadUsers={loadUsers}/>
                    <UserTable dataUsers={dataUsers}/>
            
        </div>
    )
}

export default UserPage;