import { Table } from "antd";
import { useCallback, useEffect } from "react";
import { getAllClient } from "../../services/clients/services";
import { useDispatch, useSelector } from "react-redux";
import {
  setClientData,
  setPagination,
} from "../../features/clients/clientSlice";

const ClientTable = () => {
  const client = useSelector((state) => state.client.clientData);
  const pagination = useSelector((state) => state.client.pagination);
  console.log(pagination);

  const dispatch = useDispatch();
  const getClient = useCallback(async () => {
    try {
      // console.log(pagination);
      const response = await getAllClient({ pagination });
      dispatch(setClientData(response.data.data));
      dispatch(
        setPagination({
          ...pagination,
          total: client?.count,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [client?.count, dispatch, pagination]);
  const handlePaginationChange = (pagination) => {
    dispatch(setPagination(pagination));
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
