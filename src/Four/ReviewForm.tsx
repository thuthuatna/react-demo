import { Input } from "./Input";
import { Review } from "./Review";
export const ReviewForm = () => {
  return (
    <div className=" w-full space-y-8 rounded-3xl bg-white p-16">
      <h1 className=" font-meri text-2xl font-black">Orverall rating</h1>

      <div>
        <Review />
        <p className=" text-sm font-normal">Click to rate</p>
      </div>

      <Input
        title="Review title"
        placeholder="Example: Easy to use"
        type="text"
      ></Input>

      <p>Would you recommend this product to a friend</p>

      <div className=" flex gap-8 ">
        <div>
          <input
            className=" mr-2 scale-150 accent-black"
            type="radio"
            id="yes"
            name="product"
            value="yes"
          />
          <label className=" cursor-pointer" htmlFor="yes">
            YES
          </label>
        </div>
        <div>
          <input
            className=" mr-2 scale-150 accent-black"
            type="radio"
            id="no"
            name="product"
            value="no"
          />
          <label className=" cursor-pointer" htmlFor="no">
            NO
          </label>
        </div>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since I bought this a month ago, it has been used a lot. What i like best/what is worst about this product is ..."
        type="textarea"
      ></Input>

      <div className="flex gap-x-2 ">
        <div className=" grow">
          <Input
            title="Nickname"
            placeholder="Example: bob27"
            type="text"
          ></Input>
        </div>
        <div className=" grow">
          <Input
            title="Email address (will not be public)"
            placeholder="Example: ngocanh@gmai.com"
            type="text"
          ></Input>
        </div>
      </div>
      <div>
        <input
          className=" mr-2 scale-150 accent-black"
          type="radio"
          id="accept"
          name="product"
          value="accept"
        />
        <label className=" cursor-pointer" htmlFor="no">
          I accept the terms and conditions
        </label>
      </div>
      <p className=" text-sm font-medium">
        My mother is a person I admire most. She devoted a lot of time and
        energy to the upbringing of my two brothers and 1. Despite working hard,
        she always made time to teach us many useful things which are necessary
        and important in our later lives. Moreover, she is a good role model for
        me to follow. She always tries to get on well with people who live next
        door and help everyone when they are in difficulties, so most of them
        respect and love her. I admire and look up to my mother because she not
        only brings me up well but also stands by me and gives some help if
        necessary. For example, when I encounter some difficulties, she will
        give me some precious advice to help me solve those problems. She has a
        major influence on me and 1 hope that I will inherit some of her traits.
      </p>

      <div className=" flex justify-center">
        <button className=" rounded-md bg-[#121633] p-2 text-white hover:bg-[#2f3b93]">
          Submit product review
        </button>
      </div>
    </div>
  );
};
