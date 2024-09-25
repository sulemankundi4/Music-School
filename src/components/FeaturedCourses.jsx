"use client";
import React from "react";
import CoursesData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const FeaturedCourses = () => {
  const featuredCourses = CoursesData.courses.filter((course) => course.isFeatured);
  const words = [
    {
      text: "Learn ",
    },
    {
      text: "With",
    },
    {
      text: "The",
    },
    {
      text: "Best",
    },
    {
      text: "Music",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h3 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h3>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <div className="flex flex-col h-full">
                <BackgroundGradient className="flex-grow rounded-[22px] max-w-sm max-h-[400px] sm:p-4 bg-white dark:bg-zinc-900">
                  <Image src={`${course.image}`} alt="jordans" height="400" width="400" className="bg-cover h-[210px] rounded-md" />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{course.description}</p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>{course.slug}</span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">${course.price}</span>
                  </button>
                </BackgroundGradient>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
