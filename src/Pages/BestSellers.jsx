// Import React and any required modules
import React from 'react';

// Create an array of product objects
const products = Array(4).fill({
  imageUrl:
    'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/India%20LOB/Calendars/Desk%20Calendars/IN_Desk-calendars_Hero-image_01',
  title: 'Desk Calendars',
  price: 'Starting at ₹280.00',
});

// BestSellers component to render products
const BestSellers = () => {
  return (
    <div className="mt-8 px-4 lg:px-12">
      {/* Best Sellers Heading */}
      <h1 className="text-2xl font-bold text-left mb-6">Best Sellers</h1>
      
      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            {/* Product Image */}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="rounded-3xl w-60 h-60 object-cover mb-4" // Increased border-radius
            />
            {/* Product Title */}
            <h2 className="text-xl font-bold">{product.title}</h2>
            {/* Product Price */}
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
