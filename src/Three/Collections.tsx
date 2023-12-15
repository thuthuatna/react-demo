export const Collections = () => {
  const TAGS = ["Profile", "New York", "Relaxing", "Person", "Fashion"];
  return (
    <div className=" w-full rounded-lg bg-[#EFF0F1] p-16 font-[#0E0E38] shadow-lg">
      <h1 className=" font-meri text-3xl font-bold">Popular collections</h1>
      <div className="mt-6 space-x-2">
        {TAGS.map((tag) => (
          <a
            id={tag}
            className=" mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-2 hover:text-blue-300"
          >
            {tag}
          </a>
        ))}
      </div>

      <div className=" mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className=" rounded-3xl rounded-lg bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className=" aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/101"
              alt=""
              className=" aspect-square aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/102"
              alt=""
              className=" aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/103"
              alt=""
              className=" aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="font-popi grow font-medium">People</p>
            <p className="font-popi flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 inline h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className=" rounded-3xl rounded-lg bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className=" aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/101"
              alt=""
              className=" aspect-square aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/102"
              alt=""
              className=" aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/103"
              alt=""
              className=" aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="font-popi grow font-medium">People</p>
            <p className="font-popi flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 inline h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className=" rounded-3xl rounded-lg bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className=" aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/101"
              alt=""
              className=" aspect-square aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/102"
              alt=""
              className=" aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/103"
              alt=""
              className=" aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="font-popi grow font-medium">People</p>
            <p className="font-popi flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 inline h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
