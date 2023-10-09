import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt?.getTime();

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (timeDifference < minute) {
    const seconds = Math.round(timeDifference / 1000);
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < hour) {
    const minutes = Math.round(timeDifference / minute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < day) {
    const hours = Math.round(timeDifference / hour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < week) {
    const days = Math.round(timeDifference / day);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < month) {
    const weeks = Math.round(timeDifference / week);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < year) {
    const months = Math.round(timeDifference / month);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.round(timeDifference / year);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
};

export const formatAndDivideNumber = (number: number): string => {
  if (number >= 1000000) {
    const formattedNumber = (number / 1000000).toFixed(2);
    return `${formattedNumber}M`;
  } else if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(2);
    return `${formattedNumber}K`;
  } else {
    return `${number}`;
  }
};
