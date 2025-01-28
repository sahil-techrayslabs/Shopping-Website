import React, { useState } from 'react';

const Products = () => {
  // Sample product data with two images each (normal and hover images)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'High-quality, efficient design solutions.',
      image: '/assets/product1-normal.jpeg',
      hoverImage: '/assets/product1-hover.jpeg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Optimized for creativity and productivity.',
      image: '/assets/product2-normal.jpeg',
      hoverImage: '/assets/product2-hover.jpeg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Tailored for your workflow needs.',
      image: '/assets/product3-normal.jpeg',
      hoverImage: '/assets/product3-hover.jpeg',
    },
  ];

  // State to track the currently hovered product
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section id="products" className="py-16 bg-#e6e6e6 text-#2b2b2b">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-#2b2b2b text-#e6e6e6 rounded shadow-md"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img
                src={
                  hoveredProduct === product.id
                    ? product.hoverImage
                    : product.image
                }
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
