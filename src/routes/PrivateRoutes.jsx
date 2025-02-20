import { Navigate, Outlet } from "react-router";
import Header from "../components/common/Header";
import useAuth from "../hook/useAuth";
import CommentProvider from "../provider/CommentProvider";
import PostProvider from "../provider/PostProvider";
import ProfileProvider from "../provider/ProfileProvider";
import StoryProvider from "../provider/StoryProvider";
function PrivateRoutes() {
  const { auth } = useAuth();
  return (
    <>
      {auth.token ? (
        <>
          <ProfileProvider>
            <PostProvider>
              <CommentProvider>
                <Header />
                <StoryProvider>
                  <div className="@container mx-auto">
                    <div className="text-[#B9BBBE] py-5 @md:px-4">
                      <div className="@md:flex @sm:gap-4 @md:justify-between @md:items-start @md:gap-5">
                        <Outlet />
                      </div>
                    </div>
                  </div>
                </StoryProvider>
              </CommentProvider>
            </PostProvider>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default PrivateRoutes;
