import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
export const ChangePassword = () => {
  return (
    <div className="h-screen ml:w-full al:w-screen bg-slate-100 ">
      <Link to="/settings">
        <div className="flex items-center  p-4">
          <ArrowBack /> back
        </div>
      </Link>
      <div className="flex h-screen flex-col items-center  justify-center">
        <p className={"font-bold text-3xl mb-3"}>Change Password</p>
        <div className="bg-slate-300 al:p-2 sx:p-8 rounded-xl ">
          <div className="flex flex-col w-64">
            <label htmlFor="oldPassword" className="font-bold">
              {" "}
              Old Password
            </label>
            <input
              type="password"
              name="oldPassword"
              placeholder="Old password"
              id="oldPassword"
              className="border-2 border-slate-900 rounded-xl p-2"
            />
          </div>
          <div className="flex flex-col w-64 mt-3">
            <label htmlFor="newPassword" className="font-bold">
              {" "}
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              id="newPassword"
              className="border-2  border-slate-900 rounded-xl p-2"
            />
          </div>
          <div className="flex flex-col w-64 mt-3">
            <label htmlFor="ConfirmNewPassword" className="font-bold">
              {" "}
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmNewPassword"
              placeholder="Confirm New password"
              id="ConfirmNewPassword"
              className="border-2  border-slate-900 rounded-xl p-2"
            />
          </div>
          <div className=" flex justify-end w-full">
            <button className="text-xl font-bold rounded-xl border-2 p-2 mt-4  bg-slate-500 cursor-pointer justify-end ">
              Change
            </button>
          </div>
          <p className={"text-xl text-center mt-4 text-blue-600 underline"}>
            forgot password?
          </p>
        </div>
      </div>
    </div>
  );
};
