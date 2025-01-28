// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="text-center py-20 bg-#e6e6e6 text-#2b2b2b">
//       <h1 className="text-5xl font-extrabold mb-4">Design Your Workflow</h1>
//       <p className="text-lg mb-8 max-w-xl mx-auto">
//         Unlock creativity with tools tailored to your needs.
//       </p>
//       <button className="px-6 py-2 bg-#ffae00 text-#2b2b2b rounded-full font-medium hover:bg-yellow-400">
//         Get Started
//       </button>
//       <img src='./assets/gs.webp' className='w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-lg shadow-lg justify-items-center'></img>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-200 text-gray-900 px-6">
      <h1 className="text-5xl font-extrabold mb-4">Design Your Workflow</h1>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Unlock creativity with tools tailored to your needs.
      </p>
      <button className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-full font-medium hover:bg-yellow-400">
        Get Started
      </button>

      {/* Centered Image with Padding and Responsiveness */}
      <div className="flex justify-center mt-10">
        <img
          src="./assets/gs.webp"
          alt="Hero Section"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
