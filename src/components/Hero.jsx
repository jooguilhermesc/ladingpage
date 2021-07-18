import React from "react";
import banner from "../images/banner.png";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col w-2/3 px-6 py-4 mx-auto items-center md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="w-full md:mx-12 md:order-2">
          <img
            src={banner}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <h1 className="text-2xl font-medium tracking-wide text-blue-600 dark:text-white md:text-4xl">
            As melhores ofertas estão aqui!
          </h1>
          <p className="mt-4 text-blue-400 dark:text-gray-300">
            Inscreva-se em nossa newsletter e receba as ofertas exclusivas para
            assinantes de nossa newsletter em seu e-mail!
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
