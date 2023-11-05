import React from "react";
import Image from "next/image";

const ModernizeSec = () => {
  return (
    <>
      <div className="bg-blue-700 self-center flex w-full max-w-[1398px] flex-col px-5 py-28 rounded-[35px] max-md:max-w-full">
        <div className="justify-center text-white text-center text-5xl font-semibold leading-[61.6px] capitalize self-center max-w-[1113px] max-md:max-w-full ">
          Modernize apps, infrastructure with cloud native tech for resilience,
          scalability.
        </div>
        <div className="items-start self-center flex w-full max-w-[1108px] justify-between gap-5 mt-44 py-px max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="mt-[-20rem]  flex flex-col  self-end max-md:max-w-full">
            <Image
              loading="lazy"
              src="/assets/cards-screen.png"
              alt="Hero Image"
              width={200}
              height={200}
              unoptimized={true}
              className="aspect-[1.66] object-cover object-center w-[2000px]  stroke-[3px] stroke-white stroke-opacity-10 overflow-hidden max-w-full self-end "
            />
          </div>
          <div className="justify-end items-start flex flex-col self-end">
            <div className="text-white text-5xl font-semibold leading-[61.6px] capitalize self-stretch max-w-[375px]">
              Real-time risk monitoring
            </div>
            <div className="text-white text-xl leading-9 self-stretch mt-16 max-md:mt-10">
              Real-time risk monitoring across your infrastructure and
              application ecosystem will help you maintain ongoing compliance
              with more than 05+ different regulatory standards.
            </div>
          </div>
        </div>
        <div className="self-center mb-0 w-full max-w-[1113px] mt-28 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-white text-5xl font-semibold leading-[61.6px] capitalize max-w-[437px] self-start max-md:max-w-full">
                  Collaborative workflows
                </div>
                <div className="text-white text-xl leading-9 self-start max-md:max-w-full">
                  Share artefacts easily and collaborate with team members,
                  auditors, and pen testers via automated procedures. To manage
                  daily compliance with automatic notifications and reminders,
                  create, assign, and track tasks.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                src="/assets/cards-screen1.png"
                alt="Hero Image"
                width={200}
                height={200}
                unoptimized={true}
                className="aspect-[1.09] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernizeSec;
