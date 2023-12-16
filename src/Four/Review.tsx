import { useState } from "react";

export const Review = () => {
  const [reviewScore, setReviewScore] = useState(1);
  return (
    <div className=" mb-1 space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`inline-flex h-12 w-12 cursor-pointer items-center justify-center border-2 ${
            star <= reviewScore ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => setReviewScore(star)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`h-10 w-10 ${
              star <= reviewScore ? "fill-yellow-400" : "fill-gray-400"
            }`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};
