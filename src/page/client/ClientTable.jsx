import { Table } from "antd";
import { useCallback, useEffect, useState } from "react";
import { getAllClient } from "../../services/clients/services";

const ClientTable = () => {
  const [client, setClient] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: client?.count || 0,
    showSizeChanger: true,
  });

  const getClient = useCallback(async () => {
    try {
      const response = await getAllClient({ pagination });
      setClient(response.data.data);
      setPagination({
        total: client?.count,
      });
    } catch (error) {
      console.log(error);
    }
  }, [client?.count, pagination]);
  const handlePaginationChange = (pagination) => {
    setPagination(pagination);
    console.log(pagination);
  };

  useEffect(() => {
    (async () => {
      await getClient();
    })();
  }, [getClient]);

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (_, { name }) => (
        <>
          <a className="text-[#337ab7]">{name}</a>
        </>
      ),
    },
    {
      title: "Số điện thoại",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Dư nợ(VNĐ)",
      dataIndex: "debt",
      key: "debt",
      render: (_, { debt }) => {
        // console.log(debt);
        return (
          <>
            <span
              className={`${
                debt == 0
                  ? "text-black"
                  : debt > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {Number(debt) < 0 ? debt.slice(1) : debt}
            </span>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        dataSource={client}
        columns={columns}
        pagination={pagination}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default ClientTable;
