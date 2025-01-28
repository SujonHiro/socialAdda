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
      <div className="text-white">NotFoundPage</div>
      <button
        onClick={handlBtnClick}
        className="bg-blue-600 px-4 py-2 rounded-md"
      >
        Back to Login
      </button>
    </>
  );
}

export default NotFoundPage;
