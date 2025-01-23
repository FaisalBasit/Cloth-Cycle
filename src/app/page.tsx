import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Join Us in Creating a{" "}
            <span className="font-semibold underline decoration-blue-600 text-blue-600">
              Sustainable Future
            </span>
            {/* <br className="hidden lg:block" /> */} through Clothes Donation
            and Eco-friendly Disposal!
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Collaborate with local NGOs, earn rewards, and contribute to a
            cleaner planet. Your actions today can make a big difference
            tomorrow!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="/search"
              method="get"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search NGOs"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-700 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 bg-blue-600 hover:bg-black text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 focus:outline-none focus:bg-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="/224.png"
            alt="Clothes donation illustration"
            className="w-10 h-10 max-w-md mx-auto"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 py-12 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-600 ">
              Our Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Explore the tools we offer to make a sustainable impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Clothes Donation
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Connect with local NGOs to donate usable clothes and support
                those in need.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Eco-Friendly Disposal
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Schedule pickups for non-donatable clothes and ensure they are
                recycled responsibly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Incentives
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Earn coupons and vouchers for every contribution, encouraging
                sustainable habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-600">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Empower your sustainable journey with our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Social Impact
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Make a difference by ensuring clothes reach those who need them
                most.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Environmental Responsibility
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Reduce textile waste and its harmful impact on the environment.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Rewarding Experience
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Enjoy incentives while contributing to sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
