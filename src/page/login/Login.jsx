import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const reponse = await axios.post("/api/login", e);
    console.log(e);

    if (reponse.data == "Logined") {
      // console.log(reponse.data == "Logined");
      navigate("/commodity");
    }
  };

  return (
    <>
      <div className="w-[75%] mx-auto">
        <div className="mx-auto mb-5">
          <nav className="flex pl-3 items-center justify-between bg-[#f8f8f8] border rounded-md border-[f8f8f8] mt-[-1px]">
            <img
              src="https://transport-old.techlead.vn/assets/images/logo.png"
              alt=""
              className="h-[20px]"
            />
            <p className="w-fit py-4 px-3 opacity-0">Login</p>
          </nav>
        </div>
        <div className="mx-auto p-6 rounded-lg bg-white max-w-lg">
          <h2 className="text-center text-[28px] text-[#333333] font-[500] leading-[1.1] mt-5 mb-[10px]">
            Đăng nhập
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="form-label inline-block mb-2 text-gray-700 font-bold">
                Tên đăng nhập
              </label>
              <input
                {...register("user", { required: true })}
                type="text"
                name="user"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
              {errors.user && (
                <span className="text-[#ec0404] mt-1">Không được để trống</span>
              )}
            </div>
            <div className="mb-6">
              <label className="form-label inline-block mb-2 text-gray-700 font-bold">
                Mật khẩu
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
              {errors.password && (
                <span className="text-[#ec0404] mt-1">Không được để trống</span>
              )}
            </div>
            <div className="mb-6 flex items-center justify-center">
              <button
                type="submit"
                className=" px-6 py-2.5 bg-[#337ab7] text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out "
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
