import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hook/useAuth";
import useAxios from "../hook/useAxios";
import { sendOtp } from "../utils/apiService";
import LoadingBar from "./common/LoadingBar";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function submitForm(formData) {
    try {
      setIsLoading(true);
      const response = await useAxios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        formData
      );

      const { user, token } = response.data;

      if (response.status === 200 && response.data.user.is_verified === 1) {
        setAuth({ user, token });

        toast.success(response.data.message);
        navigate("/");
      } else {
        await sendOtp(
          formData.email,
          "Your email is not verified. OTP has been resent."
        );

        localStorage.setItem("email", formData.email);

        navigate("/otp", { state: { email: formData.email } });
      }
    } catch (error) {
      toast.error(
        "No account found with this email. Please sign up first.",
        error
      );
    } finally {
      setIsLoading(false);
      reset();
    }
  }

  return (
    <>
      <LoadingBar isLoading={isLoading} />
      <form className="mt-4" onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <input
            {...register("email", { required: "Email is Required" })}
            className={`form-control focus:border-blue-600 outline-none py-3 rounded-sm ${
              errors.email ? "border-red-600" : ""
            }`}
            type="email"
            id="email"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <input
            {...register("password", {
              required: "password is Required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            className={`form-control focus:border-blue-600 outline-none py-3 rounded-sm ${
              errors.password ? "border-red-600" : ""
            }`}
            type="password"
            id="password"
            placeholder="Enter Your password"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center mb-3">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ml-2">
              Remember me?
            </label>
          </div>

          <a href="#" className="text-blue-600 hover:opacity-70">
            Forget password
          </a>
        </div>

        <div className="mb-3">
          <button
            type="submit"
            className="font-semibold cursor-pointer flex justify-center my-2 mx-auto px-5 rounded-sm py-2 w-full bg-blue-500 text-white hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
