import { useState } from "react";
import NavBar from "../../components/NavBar";
import ClientTable from "./ClientTable";
import {
  setClientData,
  setPagination,
} from "../../features/clients/clientSlice";
import { getAllClient } from "../../services/clients/services";
import { useDispatch, useSelector } from "react-redux";

const ClientPage = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const client = useSelector((state) => state.client.clientData);
  const pagination = useSelector((state) => state.client.pagination);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(setPagination({ current: 1 }));
  //   const response = await getAllClient({ pagination, search });
  //   dispatch(setClientData(response.data.data));
  // };

  return (
    <div className="w-[75%] mx-auto">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="relative overflow-x-auto mt-16 container mx-auto px-[16px] ">
        <div className="grid grid-cols-[300px_1fr] mx-auto container mb-5 mt-6 px-[16px]">
          <div className="flex items-center">
            <h1 className="font-[500] text-2xl">Danh sách khách hàng</h1>
            <span className="mt-2 ml-2.5 cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                color="#337ab7"
                className="text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                // style="color: rgb(51, 122, 183);"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
              </svg>
            </span>
          </div>
          <div>
            <form>
              <input
                type="text"
                id="name "
                placeholder="Tìm kiếm khách hàng"
                onChange={handleSearchChange}
                className="w-[450px] float-right border border-gray-300 text-gray-900 text-sm outline-blue-400 rounded-sm block h-9 px-2 "
              />
            </form>
          </div>
        </div>
        <ClientTable></ClientTable>
      </div>
    </div>
  );
};

export default ClientPage;
