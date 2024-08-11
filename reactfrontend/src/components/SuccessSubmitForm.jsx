import React from "react";
import Layout from "../layout/Layout";
const SuccessSubmitForm = () => {
  return (
    <Layout>
      <div>
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold pt-20  mb-10
       px-5 lg:px-40 text-center "
        >
          {/* You have been successfully submitted the form, 
      <br className='hidden md:flex '/>
      our team will reachout shortly. */}
          Thank you! <br />
          <h2 className="mt-2">We've successfully received your form.</h2>
          <h2 className="mt-2">You can expect a follow-up from us soon.</h2>
        </h1>
        <div className="flex justify-center  mb-20">
         <a href="https://bisjhintus.com/"> <button
            className="bg-[#009bb5] px-14 py-3 text-2xl
      rounded font-bold text-white"
          >
            Visit
          </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessSubmitForm;
