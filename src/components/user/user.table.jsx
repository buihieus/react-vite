import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useState } from 'react';
const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
      {_id: "hieu",fullName:21, email: 'New York No. 1 Lake Park'},
      {_id: "hieubui",fullName:20, email: 'ha noi'},
      {_id: "hieutran",fullName:29, email: 'nhat ban'}
    ]);

    const columns = [
        {
          title: 'Id',
          dataIndex: '_id',
        },
        {
          title: 'full Name',
          dataIndex: 'fullName',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
    ];
    //     {
    //       key: '1',
    //       name: 'John Brown',
    //       age: 32,
    //       address: 'New York No. 1 Lake Park',
    //       tags: ['nice', 'developer'],
    //     },
    //     {
    //       key: '2',
    //       name: 'Jim Green',
    //       age: 42,
    //       address: 'London No. 1 Lake Park',
    //       tags: ['loser'],
    //     },
    //     {
    //       key: '3',
    //       name: 'Joe Black',
    //       age: 32,
    //       address: 'Sydney No. 1 Lake Park',
    //       tags: ['cool', 'teacher'],
    //     },
    // ];

    const loadUsers = async () => {
      // Fetch data from API here
      const res = await fetchAllUserAPI();
      // setDataUsers(res.data);
    }

    loadUsers()

    console.log("run render");

    return (
        <Table columns={columns} dataSource={dataUsers} />
    )
}

export default UserTable;