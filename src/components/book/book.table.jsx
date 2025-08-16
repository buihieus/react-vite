import React, { useState, useEffect } from "react";
import { Table, Button, Space, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// Hàm format giá tiền
const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const BookTable = (props) => {
  const { dataBooks, loadBooks,
    current, pageSize, total,setCurrent, setPageSize } = props
  const [isModalUpdateOpen, SetIsModalUpdateOpen] = useState(true);

  // 🟢 Khai báo columns
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
            // onClick={() => {
            //   setDataDetail(record);
            //   setIsDetailOpen(true);
            // }}
          > {record._id}</a>

        )
      },
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
      key: "mainText",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      render: (price) => formatPrice(price),
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            style={{ cursor: "pointer", color: "orange" }} />
          <Popconfirm
            title="Are you sure delete this user?"
            description="Are you sure"

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
    <Table
      dataSource={dataBooks}
      columns={columns}
      rowKey="_id"
      pagination={
          {
            current: current,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total,
            showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) },
          }}
        onChange={onChange}
    />
  );
};

export default BookTable;
