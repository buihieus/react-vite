// đây là nơi có data của ng dùng
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {Popconfirm, Table,notification} from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';
   
  const UserTable = (props) => {
    const {dataUsers,loadUsers} = props;

    const[isModalUpdateOpen, SetIsModalUpdateOpen] = useState(false);
    const[dataUpdate, SetDataUpdate] = useState(null);

    const [dataDetail,setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const columns = [
      {
        title: 'Id',
        key: '_id',
        render: (_, record) => {

          return(
            <a href='#' 
              onClick={() => {
                setDataDetail(record);
                setIsDetailOpen(true);
              }}
            > {record._id}</a>
          
        )},
      },
        // {
        //   title: 'Id',
        //   dataIndex: '_id',
        // },
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
              <Popconfirm
                title="Are you sure delete this user?"
                description="Are you sure"

                onConfirm={() => handleDeleteUser(record._id)}
                okText="Yes"
                cancelText="No"
                placement="left"
              >
                <DeleteOutlined style={{cursor: "pointer", color: "red"}}/>
              </Popconfirm>
            </div>
          ),
        },
    ];
    
    const handleDeleteUser = async (id) => {
      const res = await deleteUserAPI(id);
      if(res.data){
        notification.success({
          message: "delete user",
          description:"xoá người dùng thành công"  
        })
        await loadUsers();
      }else{
        notification.error({
          message: "delete user",
          description:  JSON.stringify(res.message) 
        })
      }

    }
    
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
          loadUsers={loadUsers}
        />

        <ViewUserDetail
          dataDetail={dataDetail}
          isDetailOpen={isDetailOpen}
          setIsDetailOpen={setIsDetailOpen}
          setDataDetail={setDataDetail}
 
        />
      </>
    )
}

export default UserTable;