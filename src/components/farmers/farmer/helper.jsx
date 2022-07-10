import { Tag, Space } from "antd"

export const columns = [
  {
    title: "Date",
    dataIndex: "name",
    key: "name",
    render: (text) => text,
  },
  {
    title: "Reference_code",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Patient_ID",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Patient_Name",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Patient_status",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length >= 10 ? "green" : "volcano"
          if (tag === "outpatient") {
            color = "green"
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: "Total Payment",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        edit
      </Space>
    ),
  },
]

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["inpatient"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["inpatient"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["outpatient"],
  },
]