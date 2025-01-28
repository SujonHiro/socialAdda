import { Link } from "react-router";
import RegistrationForm from "../components/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen py-5">
        <div className="w-full md:w-2.5 text-center lg:w-1/2">
          <div className="p-[40px] bg-[#1E1F24] text-white rounded-lg">
            <p className="mb-2 text-3xl font-semibold">Sign Up</p>
            <p>
              Already have an account?
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-600 hover:underline ml-1"
              >
                click to sign in
              </Link>
            </p>

            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
