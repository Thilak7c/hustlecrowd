import CardDark3 from '../components/CardDark3';

const ToolsDark = ({ items }) => {
  return (
    <section id="team" className="w-full bg-dark md:pt-0 pt-16 md:px-0 px-4 pb-10">
      <div className="flex flex-col items-center justify-center">
        <div className='w-full pb-32 pt-16'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 text-black'>
                    {items.map((product, index)=> <CardDark3 key={index} product={product} /> )} 
                </div> 
            </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsDark;