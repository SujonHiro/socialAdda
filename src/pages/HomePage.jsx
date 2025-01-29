import LeftSideComponents from "../components/LeftSideComponents";
import MiddleSideBar from "../components/MiddleSideBar";
import OffCanvasProfile from "../components/OffcanvasProfile";

export default function HomePage() {
  return (
    <>
      <OffCanvasProfile />

      <div className="md:w-1/4 bg-[#141519] hidden md:block rounded-md">
        <LeftSideComponents />
      </div>

      <div className="md:w-2/4 w-full">
        <MiddleSideBar />
      </div>
      <div className="md:w-1/4 bg-[#141519] rounded-md md:my-0 mt-4">
        <div className="px-[1.25rem] py-[1.25rem]">
          <div className="my-4">
            <h5 className="text-xl font-bold">Who to Follow</h5>
          </div>
          <div className="mb-3">
            <div className="flex justify-between items-center gap-2 py-2">
              <div className="flex justify-center gap-2">
                <img
                  src="../assets/images/avatars/1.jpg"
                  width="54"
                  height="54"
                  className="rounded-full"
                  alt=""
                />
                <div>
                  <a className="text-[.9375rem] font-medium" href="">
                    Lori Ferguson
                  </a>
                  <p className="text-sm font-semibold">News anchor</p>
                </div>
              </div>
              <button className="px-2 py-2 rounded-full text-sm flex justify-center items-center text-white bg-blue-600">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                    ></path>
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex justify-between items-center gap-2 py-2">
              <img
                src="../assets/images/avatars/2.jpg"
                width="54"
                height="54"
                className="rounded-full"
                alt=""
              />
              <div>
                <a className="text-[.9375rem] font-medium" href="">
                  Frances Guerrero
                </a>
                <p className="text-sm font-semibold">UI UX Designer</p>
              </div>
              <button className="px-2 py-2 rounded-full text-sm ml-auto flex justify-center items-center text-blue-600 bg-[#0f6fec1a] hover:bg-blue-600 hover:text-white">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex justify-between items-center gap-2 py-2">
              <img
                src="../assets/images/avatars/3.jpg"
                width="54"
                height="54"
                className="rounded-full"
                alt=""
              />
              <div>
                <a className="text-[.9375rem] font-medium" href="">
                  Samuel Bishop
                </a>
                <p className="text-sm font-semibold">ML Engineer</p>
              </div>
              <button className="px-2 py-2 rounded-full ml-auto text-sm flex justify-center items-center text-blue-600 bg-[#0f6fec1a] hover:bg-blue-600 hover:text-white">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </span>
              </button>
            </div>

            <button className="flex justify-center my-2 mx-auto px-5 rounded-sm py-2 w-full bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white">
              View more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
