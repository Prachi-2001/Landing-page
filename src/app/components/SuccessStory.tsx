"use client";
import React, { useState } from "react";
import Image from "next/image";
import { successStories } from "../data";

const SuccessStoryCarousel: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);

  const changeStory = (increment: number) => {
    setActiveStory(
      (prevStory) => (prevStory + increment) % successStories.length
    );
  };

  const story = successStories[activeStory];

  return (
    <>
      <div className="backdrop-blur-[20px] self-stretch flex w-full flex-col pt-32 pb-12 px-5 max-md:max-w-full">
        <div className="text-slate-700 text-center text-5xl font-semibold leading-[61.6px] capitalize self-center max-md:max-w-full">
          See our success stories
        </div>
        <div className="self-center w-full max-w-[1320px] mt-24 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[4%] max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                src="/assets/LeftArrow.svg"
                alt="Hero Image"
                width={200}
                height={200}
                className="aspect-square object-cover cursor-pointer object-center w-[46px] overflow-hidden max-w-full my-auto max-md:mt-10"
                onClick={() => changeStory(1)}
              />
            </div>
            <div className="flex flex-col items-stretch w-[92%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-row max-md:max-w-full max-md:mt-10">
                <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
                  <Image
                    loading="lazy"
                    src="/assets/Quote.png"
                    alt="Hero Image"
                    width={200}
                    height={200}
                    className="aspect-[0.67] object-cover object-center w-full rounded-l-2xl fill-blue-700 overflow-hidden grow"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[80%] rounded-r-[15px] shadow-xl   max-md:w-full max-md:ml-0">
                  <div className="bg-white bg-opacity-10 flex-grow flex-col w-full mx-auto pb-5 px-5 rounded-none max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex items-stretch justify-between w-full max-md:w-full max-md:ml-0">
                        <div className="flex-grow flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                          <div className="text-zinc-800 pt-10 text-lg leading-7 max-md:max-w-full">
                            {story.quote}
                          </div>
                          <div className="text-zinc-800 text-right text-xl font-semibold pt-5 leading-8 mt-2 max-md:max-w-full">
                            <span className="">-</span>
                            <span className="font-semibold">
                              {story.author}
                              <br />
                            </span>
                            <span className="">{story.position}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[80%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex items-center justify-center">
                            <Image
                              loading="lazy"
                              src="/assets/Circle.png"
                              alt="Hero Image"
                              width={200}
                              height={200}
                              // unoptimized={true}
                              className="aspect-[0.77] object-cover object-center w-[140px] overflow-hidden max-w-full max-md:mt-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[4%] ml-5 max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                src="/assets/LeftArrow.svg"
                alt="Hero Image"
                width={200}
                height={200}
                className="aspect-square object-cover cursor-pointer object-center w-[46px] rotate-180 overflow-hidden max-w-full my-auto max-md:mt-10"
                onClick={() => changeStory(1)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoryCarousel;
