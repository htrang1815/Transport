import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="mx-auto mb-5 ">
      <nav className="flex pl-3 items-center justify-between bg-[#f8f8f8] border rounded-md border-[f8f8f8] mt-[-1px] ">
        <img
          src="https://transport-old.techlead.vn/assets/images/logo.png"
          alt=""
          className="h-[20px]"
        />
        <div className="flex items-center">
          <NavLink
            to="/commodity"
            className={({ isActive }) => {
              return `${isActive ? " bg-[#e7e7e7] " : ""} px-4 py-3`;
            }}
          >
            Hàng hóa
          </NavLink>
          <NavLink
            to="/transport"
            className={({ isActive }) => {
              return `${isActive ? " bg-[#e7e7e7] " : ""} px-4 py-3`;
            }}
          >
            Tiến trình vận chuyển
          </NavLink>
          <NavLink
            to="/partner"
            className={({ isActive }) => {
              return `${isActive ? " bg-[#e7e7e7] " : ""} px-4 py-3`;
            }}
          >
            Đối tác
          </NavLink>
          <NavLink
            to="/client"
            className={({ isActive }) => {
              return `${isActive ? " bg-[#e7e7e7] " : ""} px-4 py-3`;
            }}
          >
            Khách hàng
          </NavLink>
          <NavLink
            to="/warehouse"
            className={({ isActive }) => {
              return `${isActive ? " bg-[#e7e7e7] " : ""} px-4 py-3`;
            }}
          >
            Kho
          </NavLink>
          <NavLink
            to="/setting"
            className={({ isActive }) => {
              return `${isActive ? " bg-[#e7e7e7] " : ""} px-4 py-3`;
            }}
          >
            Setting
          </NavLink>
          <NavLink
            to="/report"
            className={({ isActive }) => {
              return `${isActive ? " bg-[#e7e7e7] " : ""} px-4 py-3`;
            }}
          >
            Báo cáo
          </NavLink>
          <span className="flex px-4 py-3 text-[#555555] text-[14px] cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
