import CardItem from "@/components/CardItem";
import Header from "@/components/Header";
import { portfolios } from "@/lib/portfolio";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 lg:max-w-7xl lg:grid-cols-1 py-10 sm:py-10">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pb-6">
            Portfolio
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {portfolios.map((portfolio, index) => (
              <CardItem listitem={portfolio} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
