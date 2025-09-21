import React from 'react';

// import config from '../config/index.json';

const Pricing = () => {
  // const { pricing } = config;
  //  const { items, /*title*/ } = pricing;
  // const [/*firstPlan, secondPlan, thirdPlan*/] = items;

  return (
    <section
      className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
      id="team"
    >
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Join Us
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            We welcome all students interested in biomedical engineering,
            regardless of their background or experience level. Join us for
            regular meetings, workshops, and project collaborations. Together,
            we can make a meaningful impact in the field of biomedical
            engineering!
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform"
              className="inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Join Us Today
            </a>
          </div>
        </div>
      </div>

      <img
        alt=""
        src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default Pricing;
