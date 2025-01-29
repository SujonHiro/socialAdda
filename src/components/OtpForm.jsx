import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { formatTime } from "../utils/formatime";
import LoadingBar from "./common/LoadingBar";

function OtpForm() {
  const [timer, setTimer] = useState(120);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendEnabled(true);
    }
  }, [timer]);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const email = location.state?.email || localStorage.getItem("email");

  if (!email) {
    return <Navigate to="/" replace />;
  }

  function onResendOtp() {
    setIsLoading(true);
    setIsResendEnabled(false);
    setTimer(120);
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/generate-otp`, { email })
      .then(() => {
        setIsResendEnabled(true);
        setIsLoading(false);
      });
  }

  async function onSubmitOtp(formData) {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/verify-email`,
        {
          email,
          otp: formData.otp,
        }
      );
      console.log("API Response:", response.status);
      if (response.status === 200) {
        console.log("OTP Verified Successfully");
        localStorage.removeItem("email");
        navigate("/login");
      } else {
        console.error("OTP Verification Failed");
      }
    } catch (error) {
      console.log(
        "Error during OTP verification:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <LoadingBar isLoading={isLoading} />
      <form className="mt-4" onSubmit={handleSubmit(onSubmitOtp)}>
        <div className="mb-3">
          <input
            {...register("otp", { required: "OTP is Required" })}
            type="text"
            className={`form-control focus:border-blue-600 outline-none py-3 rounded-sm ${
              errors.otp ? "border-red-600" : ""
            }`}
            placeholder="Enter Your OTP"
          />
        </div>

        <div className="mb-3">
          <button
            type="submit"
            className="flex font-medium  cursor-pointer justify-center my-2 mx-auto px-5 rounded-sm py-2 w-full bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white"
          >
            Verify
          </button>
        </div>
        <div className="mt-4 flex justify-between items-center">
          {timer > 0 ? (
            <p className="text-gray-600">
              Resend OTP in {formatTime(timer)} seconds
            </p>
          ) : (
            <button
              onClick={onResendOtp}
              disabled={!isResendEnabled}
              className="flex cursor-pointer justify-center my-2 mx-auto px-5 rounded-sm py-2 w-full bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white"
            >
              Resend OTP
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default OtpForm;
