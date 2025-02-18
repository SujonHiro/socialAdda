import { useEffect } from "react";
import { actions } from "../action";
import Cover from "../assets/images/cover.jpg";
import FullScreeenLoading from "../components/common/FullScreeenLoading";
import CreatePost from "../components/newsfeed/post/CreatePost";
import ProfileBio from "../components/profile/ProfileBio";
import ProfileCover from "../components/profile/ProfileCover";
import ProfilePicture from "../components/profile/ProfilePicture";
import useAxios from "../hook/useAxios";
import useProfile from "../hook/useProfile";
function ProfilePage() {
  const { state, dispatch } = useProfile();

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch({ type: actions.profile.USER_PROFILE_FETCHING });
      try {
        const response = await useAxios.get("/profile");

        if (response.status === 200) {
          dispatch({
            type: actions.profile.USER_PROFILE_FETCHED,
            payload: response.data.user,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.USER_PROFILE_FETCHED_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, [dispatch]);

  if (state?.loading) return <FullScreeenLoading />;
  return (
    <>
      <div className="md:w-2/3 mx-auto mb-3">
        <div className="bg-[#141519]">
          <ProfileCover profileCover={state.user?.cover_picture_url} />
          <div className="p-4 md:mt-[-5rem] mt-[-3rem]">
            <ProfilePicture profilePicture={state.user?.profile_picture_url} />
          </div>
          <div className="mt-3 text-center">
            <h2>{state.user?.name}</h2>
            <p>{state.user?.email}</p>
          </div>

          <div className="flex gap-2 justify-between md:items-center py-4 px-4">
            <ProfileBio />
          </div>
        </div>
        <CreatePost />

        <div className="bg-[#141519] my-4">
          <div className="mb-3 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 mb-3 p-4">
                <a
                  href="#"
                  className="text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <img
                    src="../assets/images/avatars/user.jpg"
                    className="rounded-full size-10"
                    alt="postImage"
                  />
                </a>
                <div>
                  <a href="#" className="text-sm">
                    Sam Lanson
                  </a>
                  <p className="text-xs">2 Days ago</p>
                </div>
              </div>
              <div className="p-4">
                <a href="#" className="relative">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
                  </svg>
                </a>
                <div className="absolute z-20 inset-auto translate-x-[-100px] w-32 bg-[#141519] border border-gray-800 rounded-md p-4">
                  <ul className="w-full flex flex-col items-start justify-start">
                    <li>
                      <a
                        href="#"
                        className="flex justify-center items-center hover:text-blue-600 mb-3"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          className="fa-fw pe-2"
                          height="22"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"></path>
                        </svg>
                        Save Post
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex justify-center items-center mb-3 hover:text-blue-600"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          className="fa-fw pe-2"
                          height="22"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                        </svg>
                        Hide Post
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center hover:text-blue-600"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          className="fa-fw pe-2"
                          height="22"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                          <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708"></path>
                        </svg>
                        Block
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full">
              {/* Post Data */}
              <div className="px-4">
                <p className="mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores eveniet fuga, blanditiis sint ducimus nisi illo,
                  facilis non ab esse qui, neque rerum. Odio expedita iure autem
                  modi fuga fugit...
                </p>
                <img src={Cover} className="rounded-md" alt="" />
              </div>

              <div className="my-3">
                <div className="border border-gray-800"></div>

                <div className="px-4 py-1 flex justify-between items-center">
                  <a
                    href="#"
                    className="flex items-center text-white font-semibold text-md hover:text-blue-600 px-4 rounded-md py-1"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="pe-1"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path>
                    </svg>
                    Like
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-white font-semibold text-md hover:text-blue-600"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="pe-1"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"></path>
                    </svg>
                    Comments
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-white font-semibold text-md hover:text-blue-600"
                  >
                    <svg
                      className="scale-x-[-1] inline-block ps-1"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></path>
                    </svg>
                    Share
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 items-center">
                <a href="#">
                  <img
                    src="../assets/images/avatars/user.jpg"
                    className="size-8 rounded-full"
                    alt=""
                  />
                </a>
                {/* <!--comment Post started--> */}
                <form action="" className="w-full relative">
                  <input
                    type="text"
                    className="border border-[#202227] form-control focus:outline-none focus:border-blue-600"
                    placeholder="Add a comment..."
                  />
                  <button className="absolute right-0 top-[50%] hover:text-blue-600 block p-[1rem] transform translate-y-[-50%]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            {/* <!--posted Comment started here--> */}
            <div className="p-4">
              <div className="flex items-start justify-start">
                <div className="shrink-0 self-start">
                  <a href="#">
                    <img
                      src="../assets/images/avatars/user.jpg"
                      className="size-8 rounded-full"
                      alt="profile"
                    />
                  </a>
                </div>
                <div className="px-4">
                  <div>
                    <div className="bg-[#202227] p-4">
                      <div className="flex justify-between items-center">
                        <a
                          href="#"
                          className="font-bold text-white text-lg hover:text-blue-600"
                        >
                          Sam Lanson
                        </a>
                        <span className="text-normal text-sm">6 hour ago</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A nulla perspiciatis repellat esse accusantium eos,
                        accusamus quas, voluptatibus magni porro...
                      </p>
                    </div>
                    <ul className="pt-2 flex justify-start gap-4">
                      <li>
                        <a
                          href=""
                          className="text-sm font-normal hover:text-blue-600"
                        >
                          Like (5)
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-sm font-normal hover:text-blue-600"
                        >
                          Replay
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex py-4">
                    <div className="shrink-0 self-start">
                      <a href="#">
                        <img
                          src="../assets/images/avatars/user.jpg"
                          className="size-8 rounded-full"
                          alt="profile"
                        />
                      </a>
                    </div>
                    <div className="ml-2">
                      <div>
                        <div className="bg-[#202227] p-4">
                          <div className="flex justify-between items-center">
                            <a
                              href="#"
                              className="font-bold text-white text-lg hover:text-blue-600"
                            >
                              Sam Lanson
                            </a>
                            <span className="text-normal text-sm">
                              6 hour ago
                            </span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A nulla perspiciatis repellat esse...
                          </p>
                        </div>
                        <ul className="pt-2 flex justify-start gap-4">
                          <li>
                            <a
                              href=""
                              className="text-sm font-normal hover:text-blue-600"
                            >
                              Like (5)
                            </a>
                          </li>
                          <li>
                            <a
                              href=""
                              className="text-sm font-normal hover:text-blue-600"
                            >
                              Replay
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start">
                <div className="shrink-0 self-start">
                  <a href="#">
                    <img
                      src="../assets/images/avatars/user.jpg"
                      className="size-8 rounded-full"
                      alt="profile"
                    />
                  </a>
                </div>
                <div className="px-4">
                  <div className="bg-[#202227] p-4">
                    <div className="flex justify-between items-center">
                      <a
                        href="#"
                        className="font-bold text-white text-lg hover:text-blue-600"
                      >
                        Sam Lanson
                      </a>
                      <span className="text-normal text-sm">6 hour ago</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      nulla perspiciatis repellat esse accusantium eos,
                      accusamus quas, voluptatibus magni porro...
                    </p>
                  </div>
                  <ul className="pt-2 flex justify-start gap-4">
                    <li>
                      <a
                        href=""
                        className="text-sm font-normal hover:text-blue-600"
                      >
                        Like (5)
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="text-sm font-normal hover:text-blue-600"
                      >
                        Replay
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
