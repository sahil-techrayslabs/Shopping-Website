import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-#2b2b2b text-#e6e6e6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Customizable Tools', 'Streamlined Design', 'Efficient Workflow'].map((feature, index) => (
            <div key={index} className="p-4 bg-#e6e6e6 text-#2b2b2b rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p>Explore how we simplify your creative process.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
