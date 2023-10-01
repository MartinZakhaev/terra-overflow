import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "react js" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john-doe-picture.jpg",
    },
    upvotes: 100000,
    views: 1000000,
    answers: [],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Async/Await Function Not Handling Errors Properly",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "react js" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "jane-smith-picture.jpg",
    },
    upvotes: 15,
    views: 120,
    answers: [],
    createdAt: new Date("2023-09-02T12:00:00.000Z"),
  },
  {
    _id: "3",
    title: "How to Perfectly Center a Div with Tailwind CSS?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "3", name: "tailwind css" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      picture: "alice-johnson-picture.jpg",
    },
    upvotes: 8,
    views: 90,
    answers: [],
    createdAt: new Date("2023-09-03T12:00:00.000Z"),
  },
  {
    _id: "4",
    title: "How do I use express as a custom server in NextJS?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "4", name: "express" },
      { _id: "5", name: "nextjs" },
    ],
    author: {
      _id: "4",
      name: "Bob Wilson",
      picture: "bob-wilson-picture.jpg",
    },
    upvotes: 12,
    views: 110,
    answers: [],
    createdAt: new Date("2023-09-04T12:00:00.000Z"),
  },
  {
    _id: "5",
    title: "Next.js Redirect from / to another page",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "react js" },
      { _id: "5", name: "nextjs" },
    ],
    author: {
      _id: "5",
      name: "Eva Lee",
      picture: "eva-lee-picture.jpg",
    },
    upvotes: 7,
    views: 95,
    answers: [],
    createdAt: new Date("2023-09-05T12:00:00.000Z"),
  },
];


export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
