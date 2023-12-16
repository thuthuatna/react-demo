import { useState } from "react";

interface Users {
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}

const users: Users[] = [
  {
    name: "John Doe",
    job: "Software Engineer",
    avatar: "https://placewaifu.com/image/200",
    tags: ["JavaScript", "React", "Node.js"],
  },
  {
    name: "Jane Smith",
    job: "UX Designer",
    avatar: "https://placewaifu.com/image/201",
    tags: ["UI/UX", "Sketch", "Prototyping"],
  },
  {
    name: "Bob Johnson",
    job: "Data Scientist",
    avatar: "https://placewaifu.com/image/202",
    tags: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    name: "Alice Brown",
    job: "Marketing Specialist",
    avatar: "https://placewaifu.com/image/203",
    tags: ["Digital Marketing", "SEO", "Social Media"],
  },
  {
    name: "Charlie Wilson",
    job: "Graphic Designer",
    avatar: "https://placewaifu.com/image/204",
    tags: ["Adobe Creative Suite", "Illustration", "Typography"],
  },
  {
    name: "Eva Garcia",
    job: "Product Manager",
    avatar: "https://placewaifu.com/image/205",
    tags: ["Product Development", "Agile", "Market Research"],
  },
];

export const Userslist = () => {
  const [query, setQuery] = useState("");
  const FILTERS = [
    "Reputation",
    "New Users",
    "Voters",
    "Editors",
    "Moderations",
  ];
  const filterUsers =
    query.length > 0
      ? users.filter((user) =>
          user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
        )
      : users;

  return (
    <div className=" min-w-[40rem] rounded-lg bg-white p-11 shadow">
      <h1 className=" font-meri text-3xl font-black">Users</h1>

      <div className=" md: mt-6 flex flex-col gap-4 md:flex-row">
        <div>
          <div
            className=" relative grow rounded-md border-2 border-gray-300"
            style={{ fontSize: "initial" }}
          >
            <input
              type="text"
              className=" mr-2 w-full px-4 py-3 pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className=" space-x-2">
          {FILTERS.map((filter) => (
            <a
              id={filter}
              className=" mb-2 inline-block cursor-pointer rounded-lg px-4 py-3 hover:bg-[#849FFF] hover:text-white"
            >
              {filter}
            </a>
          ))}
        </div>
      </div>

      <div className=" mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filterUsers.map((user) => (
          <div
            key={user.name}
            className="flex cursor-pointer gap-x-4 rounded-xl bg-[#FBFCFF] p-6 hover:border-[1px] hover:border-[#BFC8E5] hover:shadow-lg"
          >
            <img src={user.avatar} className=" h-24 w-24 rounded-full" alt="" />
            <div>
              <h3 className=" font-meri font-black">{user.name}</h3>
              <p className=" font-popi text-sm">{user.job}</p>
              <div className=" mt-4 space-x-2 space-y-1">
                {user.tags.map((tag) => (
                  <span className=" inline-block rounded-full border-2 border-slate-500 px-1 text-xs text-[#516FD4]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* <div className=" flex rounded-md bg-[#f1f5f9] p-5">
          <div>
            <img
              src="https://placewaifu.com/image/200"
              alt="waibu"
              className=" w-32 self-start rounded-full border-[11px] border-[#E6EFFA]"
            />
          </div>
          <div>
            <div>
              <h1>Name</h1>
              <p>Job</p>
            </div>
            <div>
              <span>tag1</span>
              <span>tag2</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
