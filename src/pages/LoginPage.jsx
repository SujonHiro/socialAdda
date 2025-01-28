import { Link } from "react-router";
import LoginForm from "../components/LoginFrom";

export default function LoginPage() {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center h-screen py-5">
          <div className="w-full md:w-2.5 text-center lg:w-1/2">
            <div className="p-[40px] bg-[#1E1F24] text-white rounded-lg">
              <p className="mb-2 text-3xl font-semibold">Sign in</p>
              <p className="flex gap-3 justify-center items-center">
                Dont have an account?
                <Link to="/register" className="text-blue-600 hover:opacity-70">
                  Click here to sign up
                </Link>
              </p>

              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
