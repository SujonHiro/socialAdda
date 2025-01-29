import User from "../../assets/images/avatars/user.jpg";

function Comment() {
  return (
    <>
      <div className="flex items-start justify-start">
        <div className="shrink-0 self-start">
          <a href="#">
            <img src={User} className="size-8 rounded-full" alt="profile" />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla
                perspiciatis repellat esse accusantium eos, accusamus quas,
                voluptatibus magni porro...
              </p>
            </div>
            <ul className="pt-2 flex justify-start gap-4">
              <li>
                <a href="" className="text-sm font-normal hover:text-blue-600">
                  Like (5)
                </a>
              </li>
              <li>
                <a href="" className="text-sm font-normal hover:text-blue-600">
                  Replay
                </a>
              </li>
            </ul>
          </div>
          <div className="flex py-4">
            <div className="shrink-0 self-start">
              <a href="#">
                <img src={User} className="size-8 rounded-full" alt="profile" />
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
                    <span className="text-normal text-sm">6 hour ago</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nulla perspiciatis repellat esse...
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
    </>
  );
}

export default Comment;
