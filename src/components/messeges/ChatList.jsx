import User from "../../assets/images/avatars/user.jpg";
function ChatList() {
  return (
    <>
      <div className="border-t-2 border-[#1f1f1f] md:h-[320px] xl:h-[350px] h-[450px] overflow-auto">
        <ul className="flex flex-col gap-4 scroll-smooth scrollbar-track-black my-2">
          <li className="w-full flex  items-start gap-2">
            <div className="  flex-shrink-0 overflow-hidden">
              <img src={User} className="size-8 rounded-full" alt="" />
            </div>
            <div className="bg-[#202227] px-2 py-4 rounded-md">
              <p className="text-sm font-medium text-gray-300">
                Traveling alteration impression 🤐 six all uncommonly Chamber
                hearing inhabit joy highest private .
              </p>
            </div>
          </li>
          <li className="flex items-center md:mr-4 md:ml-40 justify-end gap-2">
            <div className="bg-blue-600 px-2 py-4 rounded-md">
              <p className="text-sm text-right font-medium text-gray-100">
                Prototype হলো JavaScript-এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য, যা
                object-oriented programming (OOP) এর ভিত্তি তৈরি করে।
                JavaScript-এ প্রতিটি object-এর একটি prototype থাকে, যা অন্য একটি
                object-এর property এবং method শেয়ার করতে সাহায্য করে।
              </p>
            </div>
          </li>
          <li className="w-full flex  items-start gap-2">
            <div className="  flex-shrink-0 overflow-hidden">
              <img src={User} className="size-8 rounded-full" alt="" />
            </div>
            <div className="bg-[#202227] px-2 py-4 rounded-md">
              <p className="text-sm font-medium text-gray-300">
                Traveling alteration impression 🤐 six all uncommonly Chamber
                hearing inhabit joy highest private .
              </p>
            </div>
          </li>
          <li className="flex items-center md:mr-4 md:ml-40 justify-end gap-2">
            <div className="bg-blue-600 px-2 py-4 rounded-md">
              <p className="text-sm text-right font-medium text-gray-100">
                Prototype হলো JavaScript-এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য, যা
                object-oriented programming (OOP) এর ভিত্তি তৈরি করে।
                JavaScript-এ প্রতিটি object-এর একটি prototype থাকে, যা অন্য একটি
                object-এর property এবং method শেয়ার করতে সাহায্য করে।
              </p>
            </div>
          </li>
          <li className="flex items-center md:mr-4 md:ml-40 justify-end gap-2">
            <div className="bg-blue-600 px-2 py-4 rounded-md">
              <p className="text-sm text-right font-medium text-gray-100">
                Prototype হলো JavaScript-এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য, যা
                object-oriented programming (OOP) এর ভিত্তি তৈরি করে।
                JavaScript-এ প্রতিটি object-এর একটি prototype থাকে, যা অন্য একটি
                object-এর property এবং method শেয়ার করতে সাহায্য করে।
              </p>
            </div>
          </li>
          <li className="w-full flex  items-start gap-2">
            <div className="  flex-shrink-0 overflow-hidden">
              <img src={User} className="size-8 rounded-full" alt="" />
            </div>
            <div className="bg-[#202227] px-2 py-4 rounded-md">
              <p className="text-sm font-medium text-gray-300">
                Traveling alteration impression 🤐 six all uncommonly Chamber
                hearing inhabit joy highest private .
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ChatList;
