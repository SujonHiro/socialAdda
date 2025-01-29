import { useState } from "react";
import { useNavigate } from "react-router";
import LoadingBar from "../components/common/LoadingBar";

function NotFoundPage() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handlBtnClick() {
    setIsLoading(true);
    navigate("/login");
    setIsLoading(false);
  }
  return (
    <>
      <LoadingBar isLoading={isLoading} />
      <div className="absolute top-[50%] left-[50%]  transform translate-x-[-50%]">
        <div className="text-white text-3xl mb-3 text-center">NotFoundPage</div>
        <button
          onClick={handlBtnClick}
          className="bg-blue-600 px-4 py-2 rounded-md  text-white cursor-pointer"
        >
          Back to Login
        </button>
      </div>
    </>
  );
}

export default NotFoundPage;
