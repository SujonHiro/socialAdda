import OtpForm from "../components/OtpForm";

export default function OtpPage() {
  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen py-5">
        <div className="w-full md:w-2.5 text-center lg:w-1/2">
          <div className="p-[40px] bg-[#1E1F24] text-white rounded-lg">
            <p className="mb-2 text-3xl font-semibold">Verify Your OTP</p>
            <OtpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
