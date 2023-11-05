import React from "react";
import Image from "next/image";
import { navItems } from "../data";

const FeatureSection: React.FC = () => {
  return (
    <div className="self-center flex w-full max-w-[1288px] flex-col mt-36 px-5 max-md:max-w-full max-md:mt-10">
      <div className="justify-center items-center bg-blue-00 bg-opacity-30 self-center flex w-[165px] max-w-full flex-col px-5 py-6 rounded-[39px]">
        <section className="w-40  justify-center items-center bg-blue-500 bg-opacity-30 flex flex-col px-5 rounded-[39px]">
          <h2 className="text-blue-700 text-lg font-bold self-center my-6 whitespace-nowrap">
            Features
          </h2>
        </section>
      </div>
      <div className="justify-center text-zinc-800 text-5xl font-semibold leading-[55px] self-center max-w-[892px] mt-16 max-md:max-w-full max-md:mt-10">
        <span className="text-blue-700">Save 1000s</span>
        <span className="text-zinc-800"> of expensive coder hours</span>
      </div>
      <div className="text-slate-600 text-center text-xl leading-9 self-center ml-0 w-[1114px] max-w-[1041px] mt-2.5 max-md:max-w-full">
        With cloud native technologies, we assist in modernising infrastructure
        and applications for resilience and scalability.
      </div>
      <div className="items-start self-center flex w-full max-w-[1114px] justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 ">
        {navItems &&
          navItems.map((item, ind) => (
            <div
              key={ind}
              className={`justify-center text-slate-600 text-center text-xs font-bold leading-5 capitalize items-center self-stretch py-0.5 cursor-pointer ${
                ind === 0
                  ? "underline underline-offset-1 decoration-blue-700 decoration-4 border-solid"
                  : "text-center text-xs font-bold leading-5 capitalize border bg-white flex-1 p-3 rounded border-solid border-gray-200 border-opacity-50 hover:underline decoration-blue-700 decoration-4 cursor-pointer"
              }`}
            >
              {item.title}
            </div>
          ))}
      </div>
      <Image
        loading="lazy"
        src="/assets/FeaturePage.png"
        alt="Feature Image"
        width={200}
        height={200}
        unoptimized={true}
        className="aspect-[1.93] object-cover object-center w-full overflow-hidden self-stretch grow mt-14 max-md:max-w-full max-md:mt-10"
      />
    </div>
  );
};

export default FeatureSection;
