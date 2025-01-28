import Header from "../components/common/Header";
import useAuth from "../hook/useAuth";

import { Navigate, Outlet } from "react-router";
function PrivateRoutes() {
  const { auth } = useAuth();
  return (
    <>
      {
        // Private routes go here
        auth.user ? (
          <>
            <Header />
            <div className="px-4 md:container">
              <div className="text-[#B9BBBE] py-5">
                <div className="md:flex sm:gap-4 md:justify-between md:items-start md:gap-5">
                  <Outlet />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Navigate to="/login" />
        )
      }
    </>
  );
}

export default PrivateRoutes;
