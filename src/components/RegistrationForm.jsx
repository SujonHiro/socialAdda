import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import LoadingBar from "./common/LoadingBar";
function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submitRegistraionForm(formData) {
    if (formData.password !== formData.password_confirmation) {
      console.error("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(`${import.meta.env.VITE_BASE_URL}/register`, formData);

      await axios.post(`${import.meta.env.VITE_BASE_URL}/generate-otp`, {
        email: formData.email,
      });
      localStorage.setItem("email", formData.email);

      navigate("/otp", { state: { email: formData.email } });
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.formData || error.message
      );
    } finally {
      setIsLoading(false);
    }

    /*  navigate("/otp"); */
  }

  return (
    <>
      <LoadingBar isLoading={isLoading} />
      <form className="mt-4" onSubmit={handleSubmit(submitRegistraionForm)}>
        <div className="mb-3">
          <input
            {...register("name", { required: "Name is Required" })}
            className={`form-control focus:border-blue-600 outline-none py-3 rounded-sm ${
              errors.name ? "border-red-600" : ""
            }`}
            type="text"
            id="name"
            placeholder="Enter Your full Name"
          />
        </div>
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
            type="password"
            className={`form-control focus:border-blue-600 outline-none py-3 rounded-sm ${
              errors.password ? "border-red-600" : ""
            }`}
            placeholder="password"
          />
        </div>
        <div className="mb-3">
          <input
            {...register("password_confirmation", {
              required: "password is Required",
            })}
            type="password"
            id="password_confirmation"
            className="form-control focus:border-blue-600 outline-none py-3 rounded-sm"
            placeholder="Confirm password"
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="flex cursor-pointer justify-center my-2 mx-auto px-5 rounded-sm py-2 w-full bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
