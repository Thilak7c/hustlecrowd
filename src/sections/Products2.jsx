// Products2.jsx
import { Card3 } from '../components';

const Products2 = ({ products }) => {
  return (
    <div className='w-full md:pt-0 pt-16 md:px-0 px-4 pb-10 bg-[#f9f9f9]'>
      <div className='max-w-5xl mx-auto px-4'>
        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No prompts found matching your search.</p>
          </div>
        ) : (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8'>
            {products.map((product) => (
              <Card3 key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products2