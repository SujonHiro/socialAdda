import axios from "axios";
import { toast } from "react-toastify";

export async function sendOtp(email, message = "OTP Sent Successfully") {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/generate-otp`,
      { email }
    );
    toast.info(message);
    return response.data;
  } catch (error) {
    console.error(
      "OTP API Error:",
      error.response ? error.response.data : error
    );
    throw new Error("Failed to send OTP. Please try again.");
  }
}
