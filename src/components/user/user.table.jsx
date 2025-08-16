// đây là nơi có data của ng dùng
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, Table, notification } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
  const { dataUsers, loadUsers,
    current, pageSize, total,
    setCurrent, setPageSize
  } = props;

  const [isModalUpdateOpen, SetIsModalUpdateOpen] = useState(false);
  const [dataUpdate, SetDataUpdate] = useState(null);

  const [dataDetail, setDataDetail] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const columns = [
    {
      title: 'STT',
      render: (_, record, index) => {
        // console.log("check index", index)
        return (
          <>
            {(index + 1)+(current-1)*pageSize}
          </>
        )
      },
    },
    {
      title: 'Id',
      key: '_id',
      render: (_, record) => {

        return (
          <a href='#'
            onClick={() => {
              setDataDetail(record);
              setIsDetailOpen(true);
            }}
          > {record._id}</a>

        )
      },
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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              // console.log(">> check record: ", record);
              SetDataUpdate(record);
              SetIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }} />
          <Popconfirm
            title="Are you sure delete this user?"
            description="Are you sure"

            onConfirm={() => handleDeleteUser(record._id)}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "delete user",
        description: "xoá người dùng thành công"
      })
      await loadUsers();
    } else {
      notification.error({
        message: "delete user",
        description: JSON.stringify(res.message)
      })
    }

  }
  const onChange = (pagination, filters, sorter, extra) => {
    //setCurrent,setPageSize
    //neu thay doi trang : current
    if (pagination && pagination.current) {
      if (pagination.current !== current) {
        setCurrent(+pagination.current)  // "5" => 5 tu string sang number
      }
    }

    //neu thay doi tong so phan tu : pageSize
    if (pagination && pagination.pageSize) {
      if (pagination.pageSize !== pageSize) {
        setPageSize(+pagination.pageSize)  // "5" => 5 tu string sang number
      }
    }
    // console.log("check", pagination, filters, sorter, extra)
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        pagination={
          {
            current: current,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total,
            showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
          }}
        onChange={onChange}
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
        loadUsers={loadUsers}
      />
    </>
  )
}

export default UserTable;