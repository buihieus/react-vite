import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table} from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
   
  const UserTable = (props) => {
    const {dataUsers} = props;

    const[isModalUpdateOpen, SetIsModalUpdateOpen] = useState(false);
    const[dataUpdate, SetDataUpdate] = useState(null);

    const columns = [
      {
        title: 'Id',
        key: '_id',
        render: (_, record) => {
          return(
            <a href='#' > {record._id}</a>
          
        )},
      },
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
        //cai nay cho phep customize user
        {
          title: 'Id',
          key: '_id',
          render: (_, record) => (
            <div style ={{display: "flex", gap: "20px"}}>
              <EditOutlined 
                onClick={()=> {
                  // console.log(">> check record: ", record);
                  SetDataUpdate(record);
                  SetIsModalUpdateOpen(true);
                }}
                style={{cursor: "pointer", color: "orange"}} />
              <DeleteOutlined style={{cursor: "pointer", color: "red"}}/>
            </div>
          ),
        },
    ];
    
    return (
      <>
        <Table
        columns={columns} 
        dataSource={dataUsers} 
        rowKey ={"_id"}
        />
        <UpdateUserModal
          isModalUpdateOpen={isModalUpdateOpen}
          setIsModalUpdateOpen={SetIsModalUpdateOpen}
          dataUpdate={dataUpdate}
          setDataUpdate={SetDataUpdate}
        />
      </>
    )
}

export default UserTable;