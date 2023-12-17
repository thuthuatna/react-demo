import { useState } from "react";

export const Notification = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" w-[44rem]">
      <div className=" text-right">
        <button
          className=" rounded-full border-2 bg-[#0C0E41] p-4 text-white"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
      </div>

      <div
        className={`mt-4 w-full rounded-2xl bg-white p-10 shadow-sm transition-all duration-500 ${
          show ? `opacity-100` : `opacity-0`
        }`}
      >
        <h2 className=" font-popi text-xl font-semibold">
          You have a new message
        </h2>
        <div className=" mt-6 flex gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#FFE9F2] text-[#C83974]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className=" font-popi font-semibold">Feb 22</h3>
            <p>If you like what we do, mua sach tai</p>
          </div>
        </div>
      </div>
    </div>
  );
};
