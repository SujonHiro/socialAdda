import Photo from "../../assets/icons/photo.svg";
import User from "../../assets/images/avatars/user.jpg";
function CreatePost() {
  return (
    <>
      <div className="bg-[#141519] p-4 rounded-md my-3">
        <div className="flex gap-4">
          <div className="relative inline-block shrink-0">
            <img src={User} alt="" className="size-8 rounded-full" />
          </div>
          <form action="" className="w-full">
            <textarea
              className="form-control focus:outline-none border-0"
              placeholder="Share your thoughts..."
            ></textarea>
          </form>
        </div>
        <ul className="flex justify-between items-center mt-2">
          <li>
            <a
              href="/"
              className="flex gap-2 items-center my-2 bg-[#202227] px-3 py-2 rounded-md"
            >
              <img
                src={Photo}
                width="15"
                height="15"
                alt=""
                className="self-center"
              />
              <span className="text-sm hover:text-blue-600">Photo</span>
            </a>
          </li>

          <li>
            <button className="flex justify-center my-2 mx-auto px-5 rounded-sm py-2 bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white">
              Submit
            </button>
          </li>
          {/* <!-- <li>
                <a
                  href="/"
                  class="flex gap-1 items-center my-2 bg-gray-700"
                >
                  <img
                    src="../assets/icons/photo.svg"
                    width="15"
                    height="15"
                    alt=""
                  />
                  Photo
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex gap-1 items-center my-2 bg-gray-700"
                >
                  <img
                    src="../assets/icons/photo.svg"
                    width="15"
                    height="15"
                    alt=""
                  />
                  Photo
                </a>
              </li> --> */}
        </ul>
      </div>
    </>
  );
}

export default CreatePost;
