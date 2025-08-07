import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total,setTotal] = useState(0);
  useEffect(() => {

    loadUsers();
  }, [current,pageSize]); // [] + condition (no se render ra phan tu rong + dieu kien)
  const loadUsers = async () => {
    // Fetch data from API here
    const res = await fetchAllUserAPI(current,pageSize);
    if(res.data){
    // setDataUsers(res.data);
    setDataUsers(res.data.result);    // sao lai .result thi no het loi rawData.some is not function nhi
    setCurrent(res.data.meta.current);
    setPageSize(res.data.meta.pageSize);
    setTotal(res.data.meta.total);

  }

  }
  // console.log("check current",current);
  console.log("check pageSize",pageSize);

  return (
    <div style={{ padding: "20px" }}>

      <UserForm loadUsers={loadUsers} />
      <UserTable
        dataUsers={dataUsers}
        loadUsers={loadUsers}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
        
      />

    </div>
  )
}

export default UserPage;