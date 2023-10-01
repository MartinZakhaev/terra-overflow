import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: "1",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus sequi magnam. Maiores sit mollitia esse optio ut facilis sapiente a dolorem voluptates velit, quas eum fugiat eligendi fugit adipisci.",
  },
  {
    _id: "2",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus sequi magnam. Maiores sit mollitia esse optio ut facilis sapiente a dolorem voluptates velit, quas eum fugiat eligendi fugit adipisci.",
  },
  {
    _id: "3",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus sequi magnam. Maiores sit mollitia esse optio ut facilis sapiente a dolorem voluptates velit, quas eum fugiat eligendi fugit adipisci.",
  },
  {
    _id: "4",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus sequi magnam. Maiores sit mollitia esse optio ut facilis sapiente a dolorem voluptates velit, quas eum fugiat eligendi fugit adipisci.",
  },
  {
    _id: "5",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus sequi magnam. Maiores sit mollitia esse optio ut facilis sapiente a dolorem voluptates velit, quas eum fugiat eligendi fugit adipisci.",
  },
];

const popularTags = [
  { _id: "1", name: "javascript", totalQuestions: 5 },
  { _id: "2", name: "typescript", totalQuestions: 5 },
  { _id: "3", name: "react js", totalQuestions: 5 },
  { _id: "4", name: "flutter", totalQuestions: 5 },
  { _id: "5", name: "react js", totalQuestions: 5 },
];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[355px] flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
